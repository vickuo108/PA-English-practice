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
const DAILY_LESSON_COUNT = 3;


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
  return (seed + state.englishOffset * DAILY_LESSON_COUNT) % englishLessons.length;
}

function dailyLessons() {
  const start = dailyStartIndex();
  return Array.from({ length: DAILY_LESSON_COUNT }, (_, offset) => englishLessons[(start + offset) % englishLessons.length]);
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

function renderSenseBody(body) {
  const lines = Array.isArray(body) ? body : [body];
  return lines.map((line) => `<p>${escapeHtml(line)}</p>`).join("");
}

function patternAnalysis(lesson) {
  const main = mainClause(lesson.sentence);
  const lower = main.toLowerCase();

  if (/\bshould be\b|\bmust be\b|\bcan be\b|\bmay be\b|\bis modeled\b|\bis affected\b|\bis preferred\b|\bis used\b|\bbe handled\b|\bbe monitored\b|\bbe retrained\b/.test(lower)) {
    return [
      `本句主幹：${main}`,
      "五大句型關係：這是被動語態。主動還原後通常是 S + Vt + O，例如 someone should use the test data；被動後把原本的 O 放到主詞位置。",
      "判斷重點：真正有時態的動詞片語是 should be / is / can be + Vp.p.，後面的 to V 或介系詞片語只是補充目的或條件。"
    ];
  }

  if (/\ballows?\b.*\bto\b|\bmake[s]?\b.*\b(unstable|difficult|easier|sensitive|reproducible)\b|\bhelp[s]?\b.*\b(to|make)\b/.test(lower)) {
    return [
      `本句主幹：${main}`,
      "五大句型關係：主要接近 S + Vt + O + OC。主詞先做動作，後面受詞再接補語或 to V，補充受詞產生什麼狀態或能力。",
      "判斷重點：不要把後面的 to V 當成第二個主要動詞；它是在補充受詞，不是另開一個完整句子。"
    ];
  }

  if (/\b(is|are|am|was|were|become|became|appears? to be|seems? to be|is subject to)\b/.test(lower)) {
    return [
      `本句主幹：${main}`,
      "五大句型關係：主要接近 S + Vi + SC。be / become / appear 這類動詞不是把動作丟給受詞，而是連接主詞和主詞補語。",
      "判斷重點：後面的形容詞、名詞片語或介系詞片語是在補充主詞狀態，不是一般受詞。"
    ];
  }

  if (/\b(differs?|increases?|decreases?|occurs?|changes?|generalize[s]?)\b/.test(lower) && !/\b(that|how|whether)\b/.test(lower)) {
    return [
      `本句主幹：${main}`,
      "五大句型關係：主要接近 S + Vi。動詞本身已經完整，後面的介系詞片語或副詞是在補充範圍、方向或條件。",
      "判斷重點：時間、地點、範圍常常是副詞功能，不要誤認成受詞。"
    ];
  }

  return [
    `本句主幹：${main}`,
    "五大句型關係：主要接近 S + Vt + O。主詞做出動作，後面接一個受詞；受詞可能是一個名詞片語，也可能是 that / how / whether 帶出的名詞子句。",
    "判斷重點：先抓真正有時態的動詞，再看它後面接的是受詞、補語，還是介系詞片語。"
  ];
}

function relatedGrammarNotes(lesson) {
  const sentence = lesson.sentence;
  const notes = [
    "Ch2 五大句型：先判斷本句主要動詞是及物還是不及物，再決定後面是受詞、補語，還是副詞性補充。"
  ];

  if (/^(Removing|Adding|Lowering|Holding|Creating|Treating|Setting|Limiting|Increasing)\b/i.test(sentence)) {
    notes.push("Ch4 to V 與 Ving：本句用 Ving 片語當主詞，整個動作被包成一顆名詞來使用。");
  }

  if (/\b(to|for|by|before|after|without|with)\s+\w+ing\b/i.test(sentence)) {
    notes.push("Ch4 to V 與 Ving：介係詞後面要接名詞或 Ving，所以 by / before / after 後面的 Ving 不是主要動詞。");
  }

  if (/\bto\s+[a-z]+\b/i.test(sentence)) {
    notes.push("Ch4 to V 與 Ving：to V 通常表示目的、未來方向或抽象動作，不是句子的主要有時態動詞。");
  }

  if (/\b(that|whether|how|what|where)\b/i.test(sentence)) {
    notes.push("Ch6 名詞子句：that / whether / how / what 可以把一整句話包成名詞，放在動詞後面當受詞或補語。");
  }

  if (/\b(which|who|whose|whom)\b/i.test(sentence) || /\bthat\s+(do|does|is|are|would|the model|earlier models)\b/i.test(sentence)) {
    notes.push("Ch5 形容詞子句：which / that / who 這類結構常用來修飾前面的名詞或整件事，要看子句裡缺的是主格、受格還是所有格。");
  }

  if (/\b(because|although|if|when|while|so that|so|but|rather than)\b/i.test(sentence)) {
    notes.push("Ch7 連接詞與轉折語：because / although / if / while 會把一部分降級成背景；but / so 連接平行或因果關係。");
  }

  if (/\b\w+ed\b|\bknown\b|\bused\b|\bselected\b|\bhandled\b|\bmonitored\b|\bretrained\b|\bcreated\b|\bpredicted\b|\bobserved\b/i.test(sentence)) {
    notes.push("Ch8 分詞構句：Vp.p. 常帶有被動或完成感；判斷時要從被修飾名詞的角度看它是主動還是被動。");
  }

  return notes.slice(0, 4);
}

async function copyUserAnswer(text) {
  if (!navigator.clipboard) return false;
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

function renderCopyStatus(message) {
  return `
    <section class="copy-status" data-role="copy-status">
      <p>${escapeHtml(message)}</p>
    </section>
  `;
}

function localAiAnswer(lesson, userAnswer, question) {
  const analysis = patternAnalysis(lesson);
  const notes = relatedGrammarNotes(lesson);

  if (/句型|主詞|動詞|五大|pattern|structure/i.test(question)) {
    return [
      analysis.join("\n"),
      `你的英文：${userAnswer}`,
      "先確認只有一個真正有時態的主要動詞，再看後面接的是受詞、補語，還是副詞性補充。"
    ].join("\n\n");
  }

  if (/改|修|自然|rewrite|better|怎麼寫|答案/i.test(question)) {
    return [
      `較穩的寫法：${lesson.sentence}`,
      "修改方向：先保留清楚主幹，再補上 PA 題目要看的理由、限制或商業意義。"
    ].join("\n\n");
  }

  if (/文法|錯|對|grammar|check/i.test(question)) {
    return [
      `我會先用這個骨架看：${analysis[1].replace("五大句型關係：", "")}`,
      notes.join("\n")
    ].join("\n\n");
  }

  return [
    `針對你寫的英文：${userAnswer}`,
    `這題比較穩的方向是：${lesson.sentence}`,
    analysis[1].replace("五大句型關係：", "")
  ].join("\n\n");
}

async function askInPageAi(lesson, userAnswer, question) {
  try {
    const response = await fetch("/api/ask-ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lesson: {
          id: lesson.id,
          chinese: lesson.chinese,
          sentence: lesson.sentence,
          template: lesson.template,
          analysis: lesson.analysis
        },
        userAnswer,
        question
      })
    });
    if (!response.ok) throw new Error("AI endpoint unavailable");
    const data = await response.json();
    if (data && data.answer) return data.answer;
    throw new Error("AI response missing answer");
  } catch {
    return localAiAnswer(lesson, userAnswer, question);
  }
}

function renderAskPanel(copyMessage, answer = "") {
  return `
    <section class="copy-status ask-panel" data-role="copy-status">
      <p>${escapeHtml(copyMessage)}</p>
      <form class="ai-question-form" data-role="ai-question-form">
        <textarea data-role="ai-question" rows="2" placeholder="直接輸入你想問的問題"></textarea>
        <button type="submit">送出問題</button>
      </form>
      ${answer ? `
        <div class="ai-answer" data-role="ai-answer">
          <strong>AI 回答</strong>
          <p>${escapeHtml(answer).replaceAll("\n", "<br>")}</p>
        </div>
      ` : ""}
    </section>
  `;
}

function renderSenseAnalysis(lesson) {
  const sections = [
    {
      title: "五大句型判斷",
      body: patternAnalysis(lesson)
    },
    {
      title: "相關重點",
      body: relatedGrammarNotes(lesson)
    },
    {
      title: "本句解析",
      body: [
        `句型模板：${lesson.template}`,
        grammarRole(lesson),
        lesson.analysis.join(" ")
      ]
    }
  ];

  return `
    <div class="sense-grid">
      ${sections.map((section) => `
        <div class="sense-item">
          <strong>${escapeHtml(section.title)}</strong>
          ${renderSenseBody(section.body)}
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
    ${isReviewEmpty ? `<p class="empty-note">目前還沒有收藏句子，先顯示今日 ${DAILY_LESSON_COUNT} 句。按收藏就能加入複習。</p>` : ""}
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
            <button class="secondary" data-action="ask-ai" type="button">問 AI</button>
          </div>
          <div class="ai-panel hidden" data-role="ai-panel"></div>
          <section class="answer-reveal hidden" data-role="answer-reveal">
            <h3>參考答案</h3>
            <p class="model-sentence">${escapeHtml(lesson.sentence)}</p>
            <h3>句型模板</h3>
            <p class="sentence-template">${escapeHtml(lesson.template)}</p>
            <h3>句型解析</h3>
            ${renderSenseAnalysis(lesson)}
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

els.englishCards.addEventListener("click", async (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const card = button.closest(".english-card");

  if (button.dataset.action === "show-answer") {
    card.querySelector("[data-role='answer-reveal']").classList.remove("hidden");
    return;
  }

  if (button.dataset.action === "ask-ai") {
    const answerInput = card.querySelector("[data-role='english-answer']");
    const userAnswer = answerInput.value.trim();
    const panel = card.querySelector("[data-role='ai-panel']");
    panel.classList.remove("hidden");
    if (!userAnswer) {
      panel.innerHTML = renderCopyStatus("先寫一版英文，再按「問 AI」複製。");
      return;
    }
    const copied = await copyUserAnswer(userAnswer);
    if (copied) {
      panel.innerHTML = renderAskPanel("已複製你寫的英文，可以直接在下面問問題。");
      return;
    }
    answerInput.focus();
    answerInput.select();
    panel.innerHTML = renderAskPanel("瀏覽器沒有開放自動複製。我已幫你選取英文，也可以直接在下面問問題。");
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

els.englishCards.addEventListener("submit", async (event) => {
  if (!event.target.matches("[data-role='ai-question-form']")) return;
  event.preventDefault();

  const form = event.target;
  const card = form.closest(".english-card");
  const lesson = englishLessons.find((item) => item.id === card.dataset.id);
  const userAnswer = card.querySelector("[data-role='english-answer']").value.trim();
  const questionInput = form.querySelector("[data-role='ai-question']");
  const question = questionInput.value.trim();
  if (!question) return;

  const panel = card.querySelector("[data-role='ai-panel']");
  panel.innerHTML = renderAskPanel("已收到問題，AI 正在回覆...");
  const answer = await askInPageAi(lesson, userAnswer, question);
  panel.innerHTML = renderAskPanel("已複製你寫的英文，可以繼續在下面問問題。", answer);
});

renderEnglishCards();
