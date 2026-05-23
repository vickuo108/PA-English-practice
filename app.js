const state = {
  englishView: "today",
  englishOffset: Number(localStorage.getItem("pa-english-offset") || "0"),
};

const els = {
  todayEnglishButton: document.querySelector("#todayEnglishButton"),
  reviewEnglishButton: document.querySelector("#reviewEnglishButton"),
  shuffleEnglishButton: document.querySelector("#shuffleEnglishButton"),
  englishCards: document.querySelector("#englishCards"),
};

const englishLessons = window.englishLessons || [];

function dateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dailyStartIndex() {
  const seed = dateKey()
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return (seed + state.englishOffset * 2) % englishLessons.length;
}

function dailyLessons() {
  const start = dailyStartIndex();
  return [0, 1].map((offset) => englishLessons[(start + offset) % englishLessons.length]);
}

function getFavoriteEnglishIds() {
  return new Set(JSON.parse(localStorage.getItem("pa-english-favorites") || "[]"));
}

function saveFavoriteEnglishIds(ids) {
  localStorage.setItem("pa-english-favorites", JSON.stringify([...ids]));
}

function englishAnswerKey(id) {
  return `pa-english-answer-${dateKey()}-${id}`;
}

function activeEnglishLessons() {
  if (state.englishView !== "review") return dailyLessons();
  const favoriteIds = getFavoriteEnglishIds();
  const favorites = englishLessons.filter((lesson) => favoriteIds.has(lesson.id));
  return favorites.length ? favorites : dailyLessons();
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;");
}

function mainClause(sentence) {
  return sentence
    .replace(/^Although\s+/i, "")
    .replace(/^Before\s+[^,]+,\s+/i, "")
    .replace(/^From\s+[^,]+,\s+/i, "")
    .replace(/^In summary,\s+/i, "")
    .replace(/^However,\s+/i, "")
    .split(/\bbecause\b|\bas\b|\bso\b|\bbut\b|,\s*which\b/i)[0]
    .trim();
}

function grammarRole(lesson) {
  const sentence = lesson.sentence;
  if (/^Although\b/.test(sentence)) {
    return "附屬連接詞 Although 放前面，只是背景讓步；真正要拿分的判斷放在主句。";
  }
  if (/^Before\b/.test(sentence)) {
    return "Before + Ving 是時間背景，主句才放建議；先交代決策時點，再交代要做什麼。";
  }
  if (/^Removing|^Adding|^Lowering|^Holding|^Creating|^Treating|^missing/i.test(sentence)) {
    return "動詞放到主詞或句首時，要先變成 Ving 片語；整個動作被當成一件事來看。";
  }
  if (/which means/.test(sentence)) {
    return "which means 把前面的技術結果轉成後面的商業意思，適合把指標翻成人話。";
  }
  if (/that/.test(sentence)) {
    return "that 後面接一個完整句，讓「一件事」變成可被說明、判斷或解釋的內容。";
  }
  return "先找主詞與真正動詞，再把理由、比較、限制放到後面補充。";
}

function englishTrap(lesson) {
  const sentence = lesson.sentence;
  if (/because/.test(sentence)) {
    return "不要把中文「因為...所以...」硬翻成 because...so...。英文通常保留 because 或 so 其中一個就好。";
  }
  if (/is associated with|association/.test(sentence)) {
    return "不要直接寫 X causes Y，除非題目真的支持因果；模型解讀常用 is associated with 比較安全。";
  }
  if (/the data|data/.test(sentence)) {
    return "data 在考試寫作中多當複數概念處理，避免寫 datas，也避免 data is/are 前後混用。";
  }
  if (/may|appears|unlikely|subject to/.test(sentence)) {
    return "不要把推論寫得太絕對；may、appears、is unlikely to 能保留專業判斷的空間。";
  }
  if (/which|that/.test(sentence)) {
    return "關係子句是拿來補充前面的名詞或整件事，不要讓 which/that 後面缺主詞或缺動詞。";
  }
  return "先用英文句型想，不要照中文詞序直翻；每句保留一個清楚主幹，再加補充資訊。";
}

function renderSenseAnalysis(lesson) {
  const sections = [
    {
      title: "句子骨架",
      body: `先抓主幹：${mainClause(lesson.sentence)}。這句的模板是：${lesson.template}`
    },
    {
      title: "語序",
      body: grammarRole(lesson)
    },
    {
      title: "語境",
      body: lesson.analysis.join(" ")
    },
    {
      title: "中式英文地雷",
      body: englishTrap(lesson)
    },
    {
      title: "PA 套用",
      body: "照「結論 → 理由/證據 → 限制或商業意義」輸出。先讓評分者看到你的判斷，再用數據或模型語言支撐。"
    }
  ];

  return `
    <div class="sense-grid">
      ${sections.map((section) => `
        <div class="sense-item">
          <strong>${escapeHtml(section.title)}</strong>
          <p>${escapeHtml(section.body)}</p>
        </div>
      `).join("")}
    </div>
  `;
}

function renderEnglishCards() {
  if (!englishLessons.length) {
    els.englishCards.innerHTML = `<p class="empty-note">題庫尚未載入，請重新整理頁面。</p>`;
    return;
  }

  const favoriteIds = getFavoriteEnglishIds();
  const lessons = activeEnglishLessons();
  const isReviewEmpty = state.englishView === "review" && !englishLessons.some((lesson) => favoriteIds.has(lesson.id));

  els.englishCards.innerHTML = `
    ${isReviewEmpty ? `<p class="empty-note">目前還沒有收藏句子，先顯示今日 2 句。按收藏就能加入複習。</p>` : ""}
    ${lessons.map((lesson, index) => {
      const savedAnswer = localStorage.getItem(englishAnswerKey(lesson.id)) || "";
      const isFavorite = favoriteIds.has(lesson.id);
      return `
        <article class="english-card" data-id="${escapeHtml(lesson.id)}">
          <div class="english-card-top">
            <div>
              <p class="eyebrow">Day ${dateKey()} · ${escapeHtml(lesson.theme)}</p>
              <h3>第 ${index + 1} 句</h3>
            </div>
            <button class="favorite-button ${isFavorite ? "active" : ""}" data-action="favorite" type="button" aria-label="收藏句子">${isFavorite ? "已收藏" : "收藏"}</button>
          </div>
          <div class="chinese-prompt">${escapeHtml(lesson.chinese)}</div>
          <label class="practice-label" for="english-${escapeHtml(lesson.id)}">你的英文</label>
          <textarea id="english-${escapeHtml(lesson.id)}" data-role="english-answer" spellcheck="true" placeholder="先自己寫一次，不用完美。">${escapeHtml(savedAnswer)}</textarea>
          <div class="button-row">
            <button data-action="show-answer" type="button">顯示參考答案與句型解析</button>
          </div>
          <section class="answer-reveal hidden" data-role="answer-reveal">
            <h3>參考答案</h3>
            <p class="model-sentence">${escapeHtml(lesson.sentence)}</p>
            <h3>句型模板</h3>
            <p class="sentence-template">${escapeHtml(lesson.template)}</p>
            <h3>句型解析</h3>
            ${renderSenseAnalysis(lesson)}
            <h3>換你練</h3>
            <p>${escapeHtml(lesson.prompt)}</p>
          </section>
        </article>
      `;
    }).join("")}
  `;
}

els.todayEnglishButton.addEventListener("click", () => {
  state.englishView = "today";
  renderEnglishCards();
});

els.reviewEnglishButton.addEventListener("click", () => {
  state.englishView = "review";
  renderEnglishCards();
});

els.shuffleEnglishButton.addEventListener("click", () => {
  state.englishView = "today";
  state.englishOffset += 1;
  localStorage.setItem("pa-english-offset", String(state.englishOffset));
  renderEnglishCards();
});

els.englishCards.addEventListener("input", (event) => {
  if (!event.target.matches("[data-role='english-answer']")) return;
  const card = event.target.closest(".english-card");
  localStorage.setItem(englishAnswerKey(card.dataset.id), event.target.value);
});

els.englishCards.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const card = button.closest(".english-card");

  if (button.dataset.action === "show-answer") {
    card.querySelector("[data-role='answer-reveal']").classList.remove("hidden");
    return;
  }

  if (button.dataset.action === "favorite") {
    const favoriteIds = getFavoriteEnglishIds();
    if (favoriteIds.has(card.dataset.id)) {
      favoriteIds.delete(card.dataset.id);
    } else {
      favoriteIds.add(card.dataset.id);
    }
    saveFavoriteEnglishIds(favoriteIds);
    renderEnglishCards();
  }
});

renderEnglishCards();