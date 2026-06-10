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

const practiceAnswers = {
  "recommend-model-2": "I recommend using a random forest because it has a lower validation RMSE and can capture nonlinear relationships.",
  "although-tradeoff": "Although lasso uses fewer variables, it may be less suitable as the final model because it has a lower test AUC.",
  "appears-overfit": "The model appears to be more stable because its performance on the training data and test data is similar.",
  "holding-constant": "Holding other variables constant, an increase in age is associated with a higher predicted claim amount.",
  "not-appropriate": "A linear model is not appropriate for this problem because the relationship may be nonlinear and there may be important interactions.",
  "chart-indicates": "The chart indicates that Month and Prior Claims are the two most important variables in this model.",
  "however-risk": "However, increasing the cutoff also reduces sensitivity, which means more high-risk customers may be missed.",
  "further-analysis": "Before deploying this model, further analysis should be performed to assess its performance across different years.",
  "data-cleaning": "Removing high-income customers may introduce bias because income may be related to the purchase probability.",
  "residual-plot": "The Q-Q plot shows that the right tail of the residuals is heavier than the normal distribution.",
  "simple-model": "The smaller model is preferred because it has a similar AUC and is easier to deploy.",
  "limitation-pdp": "One limitation of this model is that it may not be easy to explain to nontechnical clients.",
  "executive-summary": "In summary, the model can help the company forecast demand, but the predictions should be considered together with operational constraints.",
  "interaction": "Adding an interaction term between Month and Region allows the model to reflect that the seasonal effect differs across regions.",
  "threshold": "Raising the threshold decreases positive predictions, so it typically decreases sensitivity but increases specificity.",
  "missing-values": "The proportion of outliers is low, so removing these data points is unlikely to materially affect the model results.",
  "nonlinear": "The relationship does not appear to be monotonic, so treating DayOfWeek as a categorical variable may be more appropriate than treating it as a numeric variable.",
  "business-context": "From a business perspective, understaffing is more costly than temporary overstaffing.",
  "standardize": "Continuous variables should be transformed because a linear model may be affected by highly skewed distributions.",
  "not-enough": "Training accuracy alone is not sufficient to support selecting the model because it does not show how the model performs on the test data.",
  "auc-comparison": "Model B has a lower test RMSE, indicating that it performs better at predicting claim amount.",
  "rmse-interpretation": "A higher accuracy indicates that the model has a higher overall proportion of correct classifications.",
  "calibration": "If the model is stable, the error on the validation data should be close to the error on the test data.",
  "class-imbalance": "Because positive cases are rare, accuracy may hide the model's limited ability to detect positive cases.",
  "data-leakage": "This field should be excluded because it may contain information that would only be known after the claim is closed.",
  "train-test-split": "The validation data should be used for model selection to avoid making decisions based only on the training data.",
  "cross-validation": "Repeated sampling can reduce the dependence of the model evaluation on a single sample draw.",
  "feature-engineering": "Creating a loss ratio variable may be useful because it more directly reflects policy risk.",
  "categorical-encoding": "Date variables need to be transformed properly so that the model can capture seasonality.",
  "factor-vs-numeric": "Treating ZIP code as a categorical variable avoids forcing the model to assume that ZIP codes have a numeric order.",
  "multicollinearity": "Highly correlated variables may make variable importance unstable and difficult to interpret.",
  "outlier-impact": "Unusually high claim amounts may have a large impact on RMSE, so they should be investigated further.",
  "imputation-choice": "Using a trimmed mean is more robust than using the mean because it is less affected by extreme losses.",
  "interpretability-performance": "A deeper tree may improve training performance, but it can reduce model stability.",
  "business-recommendation": "Based on test AUC and deployment cost, I recommend using logistic regression.",
  "executive-audience": "For management, this result should be explained in terms of operational impact rather than only reporting the p-value.",
  "confidence-limitation": "This forecast is subject to uncertainty, so it should not be treated as a guaranteed result.",
  "p-value": "A larger p-value indicates that the observed result would not be unusual if the null hypothesis were true.",
  "coefficient-sign": "A negative coefficient means that, all else equal, higher values of this variable correspond to lower predicted values.",
  "logistic-odds": "In Poisson regression, the coefficient represents a change in the log mean rather than a direct change in the mean.",
  "tree-split": "A classification tree splits the data sequentially to create subgroups with more similar responses.",
  "random-forest-variance": "Bagging reduces variance by averaging the predictions from multiple models.",
  "boosting-bias": "Gradient boosting builds trees sequentially so that later trees correct the errors of earlier models.",
  "regularization": "Lasso penalizes the absolute values of coefficients to perform variable selection.",
  "lasso-selection": "Ridge can shrink coefficients, so it can be used to reduce model variance.",
  "lambda-effect": "A smaller lambda decreases the strength of the penalty, causing the model to be closer to an unregularized model.",
  "hyperparameter-tuning": "The cutoff threshold should be selected using validation data rather than the test data.",
  "cutoff-business": "The optimal staffing threshold should reflect the relative costs of understaffing and overstaffing.",
  "confusion-matrix": "The lift chart shows how the actual response rate changes within high-score groups.",
  "sensitivity-meaning": "Specificity measures the model's ability to identify truly negative cases."
};

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
            <h3>換你練參考解答</h3>
            <p class="practice-answer">${escapeHtml(practiceAnswers[lesson.id] || "這題尚未建立參考解答。")}</p>
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
