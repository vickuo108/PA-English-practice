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

const englishLessons = [
  {
    id: "recommend-model-2",
    theme: "Model Recommendation",
    chinese: "我建議使用模型 2，因為它在測試資料上表現最好，而且比完整模型更容易解釋。",
    sentence: "I recommend using Model 2 because it performs best on the test data and is easier to interpret than the full model.",
    template: "I recommend using ___ because it ___ and ___.",
    analysis: [
      "主幹：I recommend using Model 2. 先把建議講清楚，PA 作答不要先繞背景。",
      "because 後面接理由，而且用 and 串兩個評分點：performance + interpretability。",
      "than the full model 是比較基準，讓建議不是憑感覺，而是有明確對照。"
    ],
    prompt: "我建議使用 random forest，因為它的驗證 RMSE 較低，而且能捕捉非線性關係。"
  },
  {
    id: "although-tradeoff",
    theme: "Trade-off",
    chinese: "雖然這個模型的訓練表現較好，但它可能較不適合部署，因為它比較複雜。",
    sentence: "Although this model performs better on the training data, it may be less suitable for deployment because it is more complex.",
    template: "Although ___, it may be less suitable for ___ because ___.",
    analysis: [
      "Although 先承認優點，再用主要子句說你的判斷，這是 PA 很常見的折衷寫法。",
      "may be less suitable 比 is bad 更精準，語氣保留但立場清楚。",
      "because it is more complex 把商業可執行性接回模型選擇。"
    ],
    prompt: "雖然 lasso 的變數較少，但它可能較不適合作為最終模型，因為測試 AUC 較低。"
  },
  {
    id: "appears-overfit",
    theme: "Validation",
    chinese: "這個模型似乎過度擬合訓練資料，因為驗證資料上的表現明顯比訓練資料差。",
    sentence: "The model appears to overfit the training data, as its validation performance is notably worse than its training performance.",
    template: "The model appears to ___, as ___ is notably worse than ___.",
    analysis: [
      "appears to 是考試好用語氣：根據輸出推論，但不講成絕對真理。",
      "as 在這裡等於 because，用來接證據。",
      "validation performance vs. training performance 是過度擬合的核心比較。"
    ],
    prompt: "這個模型似乎比較穩定，因為它在訓練資料和測試資料上的表現相近。"
  },
  {
    id: "holding-constant",
    theme: "Interpretation",
    chinese: "在其他變數不變的情況下，X 增加與目標變數較高的預測值有關。",
    sentence: "Holding other variables constant, an increase in X is associated with a higher predicted value of the target variable.",
    template: "Holding other variables constant, an increase in ___ is associated with ___.",
    analysis: [
      "Holding other variables constant 放句首，提醒讀者這是模型係數解讀，不是單純相關。",
      "is associated with 避免直接說 causes，PA 裡通常比較安全。",
      "a higher predicted value 指的是模型預測，不一定是真實因果。"
    ],
    prompt: "在其他變數不變的情況下，年齡增加與 claim amount 較高的預測值有關。"
  },
  {
    id: "not-appropriate",
    theme: "Critique",
    chinese: "PCA 不適合這個資料集，因為變數數量少，而且多數變數是類別型變數。",
    sentence: "PCA is not appropriate for this dataset because it has a small number of variables and many of them are categorical.",
    template: "___ is not appropriate for this dataset because ___ and ___.",
    analysis: [
      "not appropriate for this dataset 比 not good 更像正式考試答案。",
      "because 後面放資料特性，不只背方法缺點。",
      "and many of them are categorical 補第二個理由，增加拿分機會。"
    ],
    prompt: "線性模型不適合這個問題，因為關係可能是非線性的，而且有重要的交互作用。"
  },
  {
    id: "chart-indicates",
    theme: "Visualization",
    chinese: "這張圖顯示 Hour 和 Direction 是此模型中最重要的兩個預測變數。",
    sentence: "The chart indicates that Hour and Direction are the two most important predictors in this model.",
    template: "The chart indicates that ___ are the most important ___ in this model.",
    analysis: [
      "The chart indicates that 用圖表作為主詞，讓解讀直接連到證據。",
      "the two most important predictors 是清楚結論，先講讀者最需要知道的事。",
      "in this model 限定範圍，避免把模型內的重要性講成真實世界的因果。"
    ],
    prompt: "這張圖顯示 Month 和 Prior Claims 是此模型中最重要的兩個變數。"
  },
  {
    id: "however-risk",
    theme: "Business Risk",
    chinese: "然而，降低 cutoff 也會降低 specificity，這表示可能會有更多不必要的加派人力。",
    sentence: "However, lowering the cutoff also reduces specificity, which means there may be more unnecessary staffing increases.",
    template: "However, ___ also reduces ___, which means ___.",
    analysis: [
      "However 用來轉向代價，PA 常要求 technical consequence + business consequence。",
      "which means 把統計指標翻成商業語言。",
      "there may be more 用保守語氣描述風險，不過度斷言。"
    ],
    prompt: "然而，提高 cutoff 也會降低 sensitivity，這表示可能會錯過更多高風險客戶。"
  },
  {
    id: "further-analysis",
    theme: "Next Step",
    chinese: "在採用這個模型之前，應進一步分析模型在不同客群中的表現。",
    sentence: "Before adopting this model, further analysis should be performed to assess its performance across different customer segments.",
    template: "Before adopting ___, further analysis should be performed to assess ___.",
    analysis: [
      "Before adopting this model 放在句首，先設定決策時點。",
      "should be performed 是正式建議語氣，不用 I think。",
      "across different customer segments 是公平性與穩定性的檢查方向。"
    ],
    prompt: "在部署這個模型之前，應進一步分析它在不同年份中的表現。"
  },
  {
    id: "data-cleaning",
    theme: "Data Cleaning",
    chinese: "刪除這些觀測值可能會造成偏誤，因為缺失值本身可能與目標變數有關。",
    sentence: "Removing these observations may introduce bias because the missing values may be related to the target variable.",
    template: "Removing ___ may introduce bias because ___ may be related to ___.",
    analysis: [
      "may introduce bias 是資料清理題的高頻表達，指出方法的風險。",
      "because 後面說明缺失不是隨機的可能性。",
      "may be related to the target variable 把問題接回模型預測，而不只是資料不完整。"
    ],
    prompt: "刪除高收入客戶可能會造成偏誤，因為收入可能與購買機率有關。"
  },
  {
    id: "residual-plot",
    theme: "Diagnostics",
    chinese: "殘差圖顯示殘差變異隨著 fitted value 增加而變大。",
    sentence: "The residual plot shows that the variance of the residuals increases as the fitted value increases.",
    template: "The ___ plot shows that ___ increases as ___ increases.",
    analysis: [
      "shows that 後面接完整觀察結果，不只寫 there is a pattern。",
      "variance of the residuals 是技術名詞，對應 homoscedasticity。",
      "as A increases, B increases 是描述趨勢的穩定句型。"
    ],
    prompt: "Q-Q plot 顯示殘差右尾比常態分配更厚。"
  },
  {
    id: "simple-model",
    theme: "Parsimony",
    chinese: "較簡單的模型較受偏好，因為它有相近的預測表現，而且較容易向客戶解釋。",
    sentence: "The simpler model is preferred because it has similar predictive performance and is easier to explain to the client.",
    template: "The ___ model is preferred because it has ___ and is easier to ___.",
    analysis: [
      "is preferred 是被動語氣，適合正式寫作。",
      "similar predictive performance 表示沒有犧牲太多表現。",
      "easier to explain to the client 把 interpretability 接到商業溝通。"
    ],
    prompt: "較小的模型較受偏好，因為它有相近的 AUC，而且較容易部署。"
  },
  {
    id: "limitation-pdp",
    theme: "Limitation",
    chinese: "這個圖的一個限制是它可能會包含資料中不存在的變數組合。",
    sentence: "One limitation of this plot is that it may include combinations of variables that do not occur in the data.",
    template: "One limitation of ___ is that it may ___.",
    analysis: [
      "One limitation of... 是限制題萬用開頭。",
      "is that 後面接完整句，清楚說明限制內容。",
      "do not occur in the data 用來說明 PDP 在相關變數下的問題。"
    ],
    prompt: "這個模型的一個限制是它可能不容易向非技術客戶解釋。"
  },
  {
    id: "executive-summary",
    theme: "Executive Summary",
    chinese: "總結來說，模型可以幫助客戶辨識高風險案件，但結果應與商業判斷一起使用。",
    sentence: "In summary, the model can help the client identify high-risk cases, but the results should be used together with business judgment.",
    template: "In summary, the model can help ___, but ___ should be used together with ___.",
    analysis: [
      "In summary 適合 executive summary 或最後建議。",
      "can help the client identify... 把模型功能講成客戶價值。",
      "but 後面補限制，避免把模型說得過度萬能。"
    ],
    prompt: "總結來說，模型可以幫助公司預測需求，但預測結果應與營運限制一起考量。"
  },
  {
    id: "interaction",
    theme: "Model Enhancement",
    chinese: "加入交互作用項可以讓模型反映這個關係在不同地點之間有所不同。",
    sentence: "Adding an interaction term allows the model to reflect that the relationship differs across locations.",
    template: "Adding ___ allows the model to reflect that ___ differs across ___.",
    analysis: [
      "Adding an interaction term 是方法，allows the model to... 是方法帶來的好處。",
      "reflect that 比 capture that 更正式也很自然。",
      "differs across locations 說明交互作用要解決的是分群差異。"
    ],
    prompt: "加入 Month 和 Region 的交互作用項可以讓模型反映季節效果在不同地區之間有所不同。"
  },
  {
    id: "threshold",
    theme: "Classification",
    chinese: "降低門檻會增加 positive predictions，因此通常會提高 sensitivity 但降低 specificity。",
    sentence: "Lowering the threshold increases positive predictions, so it typically increases sensitivity but decreases specificity.",
    template: "Lowering ___ increases ___, so it typically increases ___ but decreases ___.",
    analysis: [
      "Lowering the threshold 是動名詞片語當主詞，適合描述調參效果。",
      "so 連接技術動作和指標後果。",
      "increases... but decreases... 是分類模型取捨的核心句型。"
    ],
    prompt: "提高門檻會減少 positive predictions，因此通常會降低 sensitivity 但提高 specificity。"
  },
  {
    id: "missing-values",
    theme: "EDA",
    chinese: "缺失值比例很低，因此用中位數補值不太可能明顯影響模型結果。",
    sentence: "The proportion of missing values is low, so median imputation is unlikely to materially affect the model results.",
    template: "The proportion of ___ is low, so ___ is unlikely to materially affect ___.",
    analysis: [
      "The proportion of missing values is low 先量化問題嚴重性。",
      "is unlikely to materially affect 是精準的保守判斷。",
      "model results 比 answer 更正式，也更符合 PA 語境。"
    ],
    prompt: "離群值比例很低，因此移除這些資料不太可能明顯影響模型結果。"
  },
  {
    id: "nonlinear",
    theme: "Relationship",
    chinese: "這個關係看起來不是線性的，因此樹模型可能比線性模型更適合。",
    sentence: "The relationship does not appear to be linear, so a tree-based model may be more appropriate than a linear model.",
    template: "The relationship does not appear to be ___, so ___ may be more appropriate than ___.",
    analysis: [
      "does not appear to be 用觀察語氣，適合根據圖形下結論。",
      "so 直接連到 modeling implication。",
      "more appropriate than 比 better than 更正式，且比較對象清楚。"
    ],
    prompt: "這個關係看起來不是單調的，因此把 DayOfWeek 當類別變數可能比當數值變數更適合。"
  },
  {
    id: "business-context",
    theme: "Communication",
    chinese: "從商業角度來看，錯過真正的高風險案件比誤報更昂貴。",
    sentence: "From a business perspective, missing a truly high-risk case is more costly than generating a false positive.",
    template: "From a business perspective, ___ is more costly than ___.",
    analysis: [
      "From a business perspective 提醒評分者你有連回客戶問題。",
      "missing a truly high-risk case 是動名詞片語，當作比較主詞。",
      "more costly than 用來說明錯誤類型的權衡。"
    ],
    prompt: "從商業角度來看，人力不足比短暫人力過剩更昂貴。"
  },
  {
    id: "standardize",
    theme: "Lasso",
    chinese: "變數需要標準化，因為 lasso penalty 會受到變數尺度影響。",
    sentence: "The variables should be standardized because the lasso penalty is affected by the scale of the predictors.",
    template: "The variables should be ___ because ___ is affected by ___.",
    analysis: [
      "should be standardized 是明確的程序建議。",
      "because 後面講機制，不只是背誦結論。",
      "the scale of the predictors 是解釋 lasso/ridge 的關鍵詞。"
    ],
    prompt: "連續變數需要轉換，因為線性模型可能受到高度偏態分配影響。"
  },
  {
    id: "not-enough",
    theme: "Evidence",
    chinese: "這個結果本身不足以支持部署模型，因為它沒有顯示模型在未見資料上的表現。",
    sentence: "This result alone is not sufficient to support deploying the model because it does not show how the model performs on unseen data.",
    template: "This result alone is not sufficient to support ___ because it does not show ___.",
    analysis: [
      "alone 強調單一證據不足，是 critique 題常用字。",
      "not sufficient to support deploying the model 是正式決策語言。",
      "unseen data 指 validation/test data，連到泛化能力。"
    ],
    prompt: "訓練準確率本身不足以支持選擇模型，因為它沒有顯示模型在測試資料上的表現。"
  }
];

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
  if (/^Removing|^Adding|^Lowering|^Holding|^missing/i.test(sentence)) {
    return "動詞放到主詞或句首時，要先變成 Ving 片語；整個動作被當成一件事來看。";
  }
  if (/which means/.test(sentence)) {
    return "which means 把前面的技術結果轉成後面的商業意思，適合把指標翻成人話。";
  }
  if (/that/.test(sentence)) {
    return "that 後面接一個完整句，讓『一件事』變成可被說明、判斷或解釋的內容。";
  }
  return "先找主詞與真正動詞，再把理由、比較、限制放到後面補充。";
}

function englishTrap(lesson) {
  const sentence = lesson.sentence;
  if (/because/.test(sentence)) {
    return "不要把中文『因為...所以...』硬翻成 because...so...。英文通常保留 because 或 so 其中一個就好。";
  }
  if (/is associated with/.test(sentence)) {
    return "不要直接寫 X causes Y，除非題目真的支持因果；模型解讀常用 is associated with 比較安全。";
  }
  if (/the data|data/.test(sentence)) {
    return "data 在考試寫作中多當複數概念處理，避免寫 datas，也避免 data is/are 前後混用。";
  }
  if (/may|appears|unlikely/.test(sentence)) {
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
