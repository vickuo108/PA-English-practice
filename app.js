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
  "sensitivity-meaning": "Specificity measures the model's ability to identify truly negative cases.",
  "glm-offset": "In a claim frequency model, an exposure offset should be included because policies may have different numbers of active months.",
  "exposure": "Accident counts should be adjusted for vehicle-years so that policies with different exposure levels can be compared fairly.",
  "poisson-mean": "In a Poisson regression, the expected number of service calls is modeled as a function of customer characteristics.",
  "deviance": "A lower training deviance suggests a better fit, but it should not override poor test performance.",
  "residual-outliers": "Large residuals may indicate customer segments that the current predictors do not explain well.",
  "influential-observations": "Influential observations should be reviewed before deployment because they may change the selected pricing factors.",
  "correlation": "A strong correlation between age and driving experience may make the coefficient estimates less stable.",
  "eda-skewness": "The distribution of annual losses is right-skewed, so a log transformation may be appropriate.",
  "log-transform": "A square-root transformation can reduce skewness and make the claim count relationship easier to model.",
  "train-validation-test": "The validation set should be used to choose the cutoff, while the test set should be saved for final performance reporting.",
  "stratified-split": "A stratified split helps preserve the fraud rate in each data partition.",
  "missing-indicator": "Adding a missingness indicator may be useful if missing income values are related to purchase behavior.",
  "one-hot": "One-hot encoding represents each region with a separate indicator variable.",
  "high-cardinality": "High-cardinality ZIP code variables may increase model complexity and create unstable territorial effects.",
  "target-leakage-date": "Variables updated after the claim is closed should be excluded to avoid target leakage.",
  "class-weight": "Class weights can help the model pay more attention to rare fraud cases.",
  "precision": "Precision measures the proportion of flagged claims that are actually suspicious.",
  "lift-gains": "A lift chart can show whether the model places likely responders in the highest-score groups.",
  "roc-curve": "The ROC curve summarizes the trade-off between true positive rate and false positive rate across thresholds.",
  "threshold-recommendation": "The recommended fraud threshold should reflect the investigation cost of each type of error.",
  "profit-matrix": "A profit matrix can translate retention predictions into expected financial value.",
  "partial-dependence": "A partial dependence plot shows the average predicted effect of credit score after averaging over other variables.",
  "ice-plot": "An ICE plot can reveal whether the age effect differs across individual policyholders.",
  "variable-importance-limit": "Variable importance ranks rating factors, but it does not show whether each factor increases or decreases risk.",
  "permutation-importance": "Permutation importance measures how much validation AUC decreases when prior claims are randomly shuffled.",
  "model-stability": "Model stability should be checked because a model that works well in one accident year may not generalize.",
  "ensemble-benefit": "An ensemble can improve demand forecasts by combining several weaker prediction models.",
  "gbm-learning-rate": "A smaller learning rate usually requires more boosting iterations but may reduce overfitting.",
  "max-depth": "Limiting tree depth can reduce overfitting by preventing very specific customer segments.",
  "min-node-size": "Increasing the minimum node size can make the tree less sensitive to unusually large claims.",
  "cp-pruning": "Pruning removes splits that add little validation lift, which can improve generalization.",
  "linear-assumption": "A linear model assumes a constant marginal effect of mileage, which may not fit the observed loss pattern.",
  "interaction-detection": "An interaction should be considered if the effect of tenure changes across product types.",
  "extrapolation": "Predictions for very high policy limits should be interpreted cautiously if those limits are rare in the training data.",
  "confidence-interval": "A wider confidence interval indicates greater uncertainty around the estimated impact of the discount.",
  "prediction-interval": "A prediction interval for next month's claim count is wider than a confidence interval for the average count.",
  "holdout-performance": "Holdout performance provides a more objective estimate of how the churn model may perform on future customers.",
  "unseen-levels": "New product codes in the scoring data must be handled before the model is deployed.",
  "imbalanced-resampling": "Oversampling can help address rare fraud cases, but it should be applied only within the training data.",
  "sampling-bias": "Sampling bias may occur if the quote data do not represent the policies that will actually be written.",
  "documentation": "The final report should document the feature engineering choices so that the pricing analysis can be reviewed.",
  "reproducibility": "Saving the train-test split helps make the model comparison reproducible.",
  "executive-recommendation": "The recommendation should focus on the staffing decision, not only the model's AUC.",
  "limitations-section": "The limitations section should explain where the forecast may be unreliable during unusual claim periods.",
  "next-steps": "The next step is to validate the model with the next quarter of data before using it in production.",
  "data-quality": "Incomplete claim coding can limit model usefulness even if the algorithm is sophisticated.",
  "ethical-bias": "The model should be checked for potential geographic bias before it is used to support underwriting decisions.",
  "monitoring": "Conversion model performance should be monitored after deployment to detect deterioration over time.",
  "retraining": "The model may need to be retrained if customer behavior changes after a new pricing strategy.",
  "final-caveat": "The model should guide the underwriter's review rather than make the final underwriting decision."
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

function keywords(text) {
  const stopWords = new Set([
    "the", "a", "an", "and", "or", "but", "so", "that", "this", "it", "its", "is", "are", "was", "were",
    "be", "been", "being", "to", "of", "for", "in", "on", "with", "by", "as", "at", "from", "than",
    "should", "can", "may", "will", "would", "because", "rather"
  ]);
  return [...new Set(String(text).toLowerCase().match(/[a-z][a-z-']{2,}/g) || [])]
    .filter((word) => !stopWords.has(word));
}

function renderFeedbackList(items) {
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function renderAiFeedback(lesson, userAnswer) {
  const normalizedAnswer = userAnswer.trim();
  const answerWords = keywords(normalizedAnswer);
  const referenceWords = keywords(lesson.sentence);
  const matched = referenceWords.filter((word) => answerWords.includes(word));
  const missing = referenceWords.filter((word) => !answerWords.includes(word)).slice(0, 5);
  const hasFiniteVerb = /\b(am|is|are|was|were|be|been|being|do|does|did|have|has|had|can|could|may|might|must|should|would|will|recommend|indicate|suggest|show|shows|reduce|reduces|increase|increases|decrease|decreases|support|supports|help|helps|measure|measures|rank|ranks|reflect|reflects|provide|provides|improve|improves|allow|allows|represent|represents|translate|translates|assume|assumes)\b/i.test(normalizedAnswer);
  const startsCapitalized = /^[A-Z]/.test(normalizedAnswer);
  const endsCleanly = /[.!?]$/.test(normalizedAnswer);

  const score = Math.min(100, Math.round(
    35 +
    Math.min(matched.length, 6) * 7 +
    (hasFiniteVerb ? 12 : 0) +
    (startsCapitalized ? 5 : 0) +
    (endsCleanly ? 6 : 0)
  ));

  const feedback = [
    matched.length >= 3
      ? `你有抓到核心詞：${matched.slice(0, 5).join(", ")}。`
      : "目前和參考答案的核心詞重疊較少，建議先抓模型、指標、商業含義三個關鍵點。",
    hasFiniteVerb
      ? "句子看起來有主要動詞；下一步是確認主詞和動詞是否搭配。"
      : "我沒有明確看到主要有時態的動詞。先補出 S + V 的主幹，再加理由或限制。",
    startsCapitalized ? "開頭大小寫 OK。" : "英文句子開頭建議大寫。",
    endsCleanly ? "句尾標點 OK。" : "建議句尾加句點，讓答案像完整正式句。"
  ];

  const suggestions = [
    missing.length ? `可補進這些概念：${missing.join(", ")}。` : "核心概念已相當接近參考答案。",
    `五大句型提醒：${patternAnalysis(lesson)[1].replace("五大句型關係：", "")}`,
    `本題可參考句型：${lesson.template}`,
    `更穩的寫法：${lesson.sentence}`
  ];

  return `
    <section class="ai-feedback" data-role="ai-feedback">
      <h3>頁面內 AI 回饋</h3>
      <p class="ai-score">完成度 ${score}%</p>
      <h4>目前觀察</h4>
      ${renderFeedbackList(feedback)}
      <h4>修改方向</h4>
      ${renderFeedbackList(suggestions)}
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
            <button class="secondary" data-action="ask-ai" type="button">頁面內 AI 回饋</button>
          </div>
          <div class="ai-panel hidden" data-role="ai-panel"></div>
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

  if (button.dataset.action === "ask-ai") {
    const lesson = englishLessons.find((item) => item.id === card.dataset.id);
    const userAnswer = card.querySelector("[data-role='english-answer']").value.trim();
    const panel = card.querySelector("[data-role='ai-panel']");
    if (!userAnswer) {
      panel.innerHTML = `<section class="ai-feedback"><h3>頁面內 AI 回饋</h3><p>先寫一版英文，我才能幫你檢查主幹、關鍵詞和句型。</p></section>`;
      panel.classList.remove("hidden");
      return;
    }
    panel.innerHTML = renderAiFeedback(lesson, userAnswer);
    panel.classList.remove("hidden");
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
