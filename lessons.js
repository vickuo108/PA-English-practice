window.englishLessons = [
  {
    "id": "recommend-model-2",
    "theme": "Model Recommendation",
    "chinese": "我建議使用模型 2，因為它在測試資料上表現最好，而且比完整模型更容易解釋。",
    "sentence": "I recommend using Model 2 because it performs best on the test data and is easier to interpret than the full model.",
    "template": "I recommend using ___ because it ___ and ___.",
    "analysis": [
      "主幹是 I recommend using Model 2，先給結論。",
      "because 後面接兩個理由：表現與可解釋性。",
      "than the full model 提供比較基準。"
    ],
    "prompt": "我建議使用 random forest，因為它的驗證 RMSE 較低，而且能捕捉非線性關係。"
  },
  {
    "id": "although-tradeoff",
    "theme": "Trade-off",
    "chinese": "雖然這個模型的訓練表現較好，但它可能較不適合部署，因為它比較複雜。",
    "sentence": "Although this model performs better on the training data, it may be less suitable for deployment because it is more complex.",
    "template": "Although ___, it may be less suitable for ___ because ___.",
    "analysis": [
      "Although 先承認優點，再回到主要判斷。",
      "may be less suitable 語氣保留但立場清楚。",
      "because 把部署限制說明清楚。"
    ],
    "prompt": "雖然 lasso 的變數較少，但它可能較不適合作為最終模型，因為測試 AUC 較低。"
  },
  {
    "id": "appears-overfit",
    "theme": "Validation",
    "chinese": "這個模型似乎過度擬合訓練資料，因為驗證資料上的表現明顯比訓練資料差。",
    "sentence": "The model appears to overfit the training data, as its validation performance is notably worse than its training performance.",
    "template": "The model appears to ___, as ___ is notably worse than ___.",
    "analysis": [
      "appears to 適合根據模型輸出做推論。",
      "as 等於 because，用來接證據。",
      "validation performance 和 training performance 是核心比較。"
    ],
    "prompt": "這個模型似乎比較穩定，因為它在訓練資料和測試資料上的表現相近。"
  },
  {
    "id": "holding-constant",
    "theme": "Interpretation",
    "chinese": "在其他變數不變的情況下，X 增加與目標變數較高的預測值有關。",
    "sentence": "Holding other variables constant, an increase in X is associated with a higher predicted value of the target variable.",
    "template": "Holding other variables constant, an increase in ___ is associated with ___.",
    "analysis": [
      "Holding other variables constant 是係數解讀的標準開頭。",
      "is associated with 避免過度宣稱因果。",
      "predicted value 表示這是模型內的解讀。"
    ],
    "prompt": "在其他變數不變的情況下，年齡增加與 claim amount 較高的預測值有關。"
  },
  {
    "id": "not-appropriate",
    "theme": "Critique",
    "chinese": "PCA 不適合這個資料集，因為變數數量少，而且多數變數是類別型變數。",
    "sentence": "PCA is not appropriate for this dataset because it has a small number of variables and many of them are categorical.",
    "template": "___ is not appropriate for this dataset because ___ and ___.",
    "analysis": [
      "not appropriate for this dataset 比 not good 更正式。",
      "because 後面要連到資料特性。",
      "兩個理由可以提高完整度。"
    ],
    "prompt": "線性模型不適合這個問題，因為關係可能是非線性的，而且有重要的交互作用。"
  },
  {
    "id": "chart-indicates",
    "theme": "Visualization",
    "chinese": "這張圖顯示 Hour 和 Direction 是此模型中最重要的兩個預測變數。",
    "sentence": "The chart indicates that Hour and Direction are the two most important predictors in this model.",
    "template": "The chart indicates that ___ are the most important ___ in this model.",
    "analysis": [
      "The chart indicates that 讓圖表成為證據來源。",
      "most important predictors 是直接結論。",
      "in this model 限定解讀範圍。"
    ],
    "prompt": "這張圖顯示 Month 和 Prior Claims 是此模型中最重要的兩個變數。"
  },
  {
    "id": "however-risk",
    "theme": "Business Risk",
    "chinese": "然而，降低 cutoff 也會降低 specificity，這表示可能會有更多不必要的加派人力。",
    "sentence": "However, lowering the cutoff also reduces specificity, which means there may be more unnecessary staffing increases.",
    "template": "However, ___ also reduces ___, which means ___.",
    "analysis": [
      "However 用來轉向代價。",
      "which means 把技術指標翻成商業意義。",
      "there may be more 用保守語氣描述風險。"
    ],
    "prompt": "然而，提高 cutoff 也會降低 sensitivity，這表示可能會錯過更多高風險客戶。"
  },
  {
    "id": "further-analysis",
    "theme": "Next Step",
    "chinese": "在採用這個模型之前，應進一步分析模型在不同客群中的表現。",
    "sentence": "Before adopting this model, further analysis should be performed to assess its performance across different customer segments.",
    "template": "Before adopting ___, further analysis should be performed to assess ___.",
    "analysis": [
      "Before adopting 設定決策時點。",
      "should be performed 是正式建議語氣。",
      "across segments 表示檢查穩定性。"
    ],
    "prompt": "在部署這個模型之前，應進一步分析它在不同年份中的表現。"
  },
  {
    "id": "data-cleaning",
    "theme": "Data Cleaning",
    "chinese": "刪除這些觀測值可能會造成偏誤，因為缺失值本身可能與目標變數有關。",
    "sentence": "Removing these observations may introduce bias because the missing values may be related to the target variable.",
    "template": "Removing ___ may introduce bias because ___ may be related to ___.",
    "analysis": [
      "Removing 是 Ving 當主詞。",
      "may introduce bias 是資料清理風險常用語。",
      "target variable 把問題接回模型目的。"
    ],
    "prompt": "刪除高收入客戶可能會造成偏誤，因為收入可能與購買機率有關。"
  },
  {
    "id": "residual-plot",
    "theme": "Diagnostics",
    "chinese": "殘差圖顯示殘差變異隨著 fitted value 增加而變大。",
    "sentence": "The residual plot shows that the variance of the residuals increases as the fitted value increases.",
    "template": "The ___ plot shows that ___ increases as ___ increases.",
    "analysis": [
      "shows that 後面接完整觀察。",
      "variance of the residuals 對應 homoscedasticity。",
      "as A increases, B increases 描述趨勢。"
    ],
    "prompt": "Q-Q plot 顯示殘差右尾比常態分配更厚。"
  },
  {
    "id": "simple-model",
    "theme": "Parsimony",
    "chinese": "較簡單的模型較受偏好，因為它有相近的預測表現，而且較容易向客戶解釋。",
    "sentence": "The simpler model is preferred because it has similar predictive performance and is easier to explain to the client.",
    "template": "The ___ model is preferred because it has ___ and is easier to ___.",
    "analysis": [
      "is preferred 是正式被動語氣。",
      "similar performance 表示沒有犧牲太多表現。",
      "explain to the client 接回商業溝通。"
    ],
    "prompt": "較小的模型較受偏好，因為它有相近的 AUC，而且較容易部署。"
  },
  {
    "id": "limitation-pdp",
    "theme": "Limitation",
    "chinese": "這個圖的一個限制是它可能會包含資料中不存在的變數組合。",
    "sentence": "One limitation of this plot is that it may include combinations of variables that do not occur in the data.",
    "template": "One limitation of ___ is that it may ___.",
    "analysis": [
      "One limitation of 是限制題萬用開頭。",
      "is that 後面接完整句。",
      "do not occur in the data 說明不合理組合。"
    ],
    "prompt": "這個模型的一個限制是它可能不容易向非技術客戶解釋。"
  },
  {
    "id": "executive-summary",
    "theme": "Executive Summary",
    "chinese": "總結來說，模型可以幫助客戶辨識高風險案件，但結果應與商業判斷一起使用。",
    "sentence": "In summary, the model can help the client identify high-risk cases, but the results should be used together with business judgment.",
    "template": "In summary, the model can help ___, but ___ should be used together with ___.",
    "analysis": [
      "In summary 適合 executive summary。",
      "can help the client 強調商業價值。",
      "but 後面補限制。"
    ],
    "prompt": "總結來說，模型可以幫助公司預測需求，但預測結果應與營運限制一起考量。"
  },
  {
    "id": "interaction",
    "theme": "Model Enhancement",
    "chinese": "加入交互作用項可以讓模型反映這個關係在不同地點之間有所不同。",
    "sentence": "Adding an interaction term allows the model to reflect that the relationship differs across locations.",
    "template": "Adding ___ allows the model to reflect that ___ differs across ___.",
    "analysis": [
      "Adding an interaction term 是方法。",
      "allows the model to 是方法的作用。",
      "differs across locations 說明分群差異。"
    ],
    "prompt": "加入 Month 和 Region 的交互作用項可以讓模型反映季節效果在不同地區之間有所不同。"
  },
  {
    "id": "threshold",
    "theme": "Classification",
    "chinese": "降低門檻會增加 positive predictions，因此通常會提高 sensitivity 但降低 specificity。",
    "sentence": "Lowering the threshold increases positive predictions, so it typically increases sensitivity but decreases specificity.",
    "template": "Lowering ___ increases ___, so it typically increases ___ but decreases ___.",
    "analysis": [
      "Lowering the threshold 是動作當主詞。",
      "so 連接動作與後果。",
      "increases...but decreases... 表示取捨。"
    ],
    "prompt": "提高門檻會減少 positive predictions，因此通常會降低 sensitivity 但提高 specificity。"
  },
  {
    "id": "missing-values",
    "theme": "EDA",
    "chinese": "缺失值比例很低，因此用中位數補值不太可能明顯影響模型結果。",
    "sentence": "The proportion of missing values is low, so median imputation is unlikely to materially affect the model results.",
    "template": "The proportion of ___ is low, so ___ is unlikely to materially affect ___.",
    "analysis": [
      "proportion 量化問題大小。",
      "is unlikely to materially affect 是保守判斷。",
      "model results 接回模型結果。"
    ],
    "prompt": "離群值比例很低，因此移除這些資料不太可能明顯影響模型結果。"
  },
  {
    "id": "nonlinear",
    "theme": "Relationship",
    "chinese": "這個關係看起來不是線性的，因此樹模型可能比線性模型更適合。",
    "sentence": "The relationship does not appear to be linear, so a tree-based model may be more appropriate than a linear model.",
    "template": "The relationship does not appear to be ___, so ___ may be more appropriate than ___.",
    "analysis": [
      "does not appear to be 是圖形推論語氣。",
      "so 接模型選擇含義。",
      "more appropriate than 提供比較。"
    ],
    "prompt": "這個關係看起來不是單調的，因此把 DayOfWeek 當類別變數可能比當數值變數更適合。"
  },
  {
    "id": "business-context",
    "theme": "Communication",
    "chinese": "從商業角度來看，錯過真正的高風險案件比誤報更昂貴。",
    "sentence": "From a business perspective, missing a truly high-risk case is more costly than generating a false positive.",
    "template": "From a business perspective, ___ is more costly than ___.",
    "analysis": [
      "From a business perspective 接回客戶問題。",
      "missing... 是 Ving 片語當主詞。",
      "more costly than 說明錯誤成本。"
    ],
    "prompt": "從商業角度來看，人力不足比短暫人力過剩更昂貴。"
  },
  {
    "id": "standardize",
    "theme": "Lasso",
    "chinese": "變數需要標準化，因為 lasso penalty 會受到變數尺度影響。",
    "sentence": "The variables should be standardized because the lasso penalty is affected by the scale of the predictors.",
    "template": "The variables should be ___ because ___ is affected by ___.",
    "analysis": [
      "should be standardized 是明確程序建議。",
      "because 後面講機制。",
      "scale of the predictors 是 lasso/ridge 關鍵。"
    ],
    "prompt": "連續變數需要轉換，因為線性模型可能受到高度偏態分配影響。"
  },
  {
    "id": "not-enough",
    "theme": "Evidence",
    "chinese": "這個結果本身不足以支持部署模型，因為它沒有顯示模型在未見資料上的表現。",
    "sentence": "This result alone is not sufficient to support deploying the model because it does not show how the model performs on unseen data.",
    "template": "This result alone is not sufficient to support ___ because it does not show ___.",
    "analysis": [
      "alone 強調單一證據不足。",
      "not sufficient to support 是正式決策語言。",
      "unseen data 指泛化能力。"
    ],
    "prompt": "訓練準確率本身不足以支持選擇模型，因為它沒有顯示模型在測試資料上的表現。"
  },
  {
    "id": "auc-comparison",
    "theme": "Model Comparison",
    "chinese": "模型 A 的測試 AUC 較高，表示它在區分正負案例方面表現較好。",
    "sentence": "Model A has a higher test AUC, indicating that it performs better at distinguishing positive cases from negative cases.",
    "template": "___ has a higher ___, indicating that it performs better at ___.",
    "analysis": [
      "indicating that 用分詞補充前面結果。",
      "performs better at 後面接 Ving。",
      "positive from negative 是分類語境。"
    ],
    "prompt": "模型 B 的測試 RMSE 較低，表示它在預測 claim amount 方面表現較好。"
  },
  {
    "id": "rmse-interpretation",
    "theme": "Performance Metric",
    "chinese": "較低的 RMSE 表示模型的預測值平均而言更接近實際值。",
    "sentence": "A lower RMSE indicates that the model's predictions are closer to the actual values on average.",
    "template": "A lower ___ indicates that ___ are closer to ___.",
    "analysis": [
      "A lower RMSE 當主詞。",
      "indicates that 後面接完整解釋。",
      "on average 避免說每一筆都更準。"
    ],
    "prompt": "較高的 accuracy 表示模型整體分類正確的比例較高。"
  },
  {
    "id": "calibration",
    "theme": "Model Evaluation",
    "chinese": "如果模型校準良好，預測機率應該接近實際發生率。",
    "sentence": "If the model is well calibrated, the predicted probabilities should be close to the observed event rates.",
    "template": "If ___ is well calibrated, ___ should be close to ___.",
    "analysis": [
      "If 子句放條件。",
      "should be close to 表示合理預期。",
      "observed event rates 是實際結果。"
    ],
    "prompt": "如果模型穩定，驗證資料上的誤差應該接近測試資料上的誤差。"
  },
  {
    "id": "class-imbalance",
    "theme": "Classification",
    "chinese": "由於目標類別不平衡，accuracy 可能會高估模型的實用性。",
    "sentence": "Because the target classes are imbalanced, accuracy may overstate the usefulness of the model.",
    "template": "Because ___ are imbalanced, ___ may overstate ___.",
    "analysis": [
      "Because 放原因。",
      "may overstate 表示可能高估。",
      "usefulness of the model 接商業實用性。"
    ],
    "prompt": "由於正例很少，accuracy 可能會掩蓋模型偵測正例的能力不足。"
  },
  {
    "id": "data-leakage",
    "theme": "Data Risk",
    "chinese": "這個變數應該被移除，因為它可能包含預測時不可取得的資訊。",
    "sentence": "This variable should be removed because it may contain information that would not be available at the time of prediction.",
    "template": "This variable should be removed because it may contain information that ___.",
    "analysis": [
      "should be removed 是清楚建議。",
      "may contain 保留可能性。",
      "at the time of prediction 是資料洩漏關鍵。"
    ],
    "prompt": "這個欄位應該被排除，因為它可能包含理賠結案後才會知道的資訊。"
  },
  {
    "id": "train-test-split",
    "theme": "Validation",
    "chinese": "測試資料應保留到最後使用，以提供模型泛化能力的客觀評估。",
    "sentence": "The test data should be held out until the end to provide an unbiased assessment of the model's ability to generalize.",
    "template": "The ___ should be held out until ___ to provide ___.",
    "analysis": [
      "should be held out 是驗證流程常用語。",
      "until the end 說明使用時點。",
      "ability to generalize 是泛化能力。"
    ],
    "prompt": "驗證資料應用於模型選擇，以避免只根據訓練資料做決策。"
  },
  {
    "id": "cross-validation",
    "theme": "Validation",
    "chinese": "交叉驗證可以降低結果對單一資料切分方式的依賴。",
    "sentence": "Cross-validation can reduce the dependence of the results on a single train-test split.",
    "template": "___ can reduce the dependence of ___ on ___.",
    "analysis": [
      "Cross-validation 當主詞。",
      "can reduce 表示方法效果。",
      "dependence on 表示對某事的依賴。"
    ],
    "prompt": "重複抽樣可以降低模型評估對單一次樣本抽取的依賴。"
  },
  {
    "id": "feature-engineering",
    "theme": "Feature Engineering",
    "chinese": "建立這個衍生變數可能有幫助，因為它更直接反映客戶行為。",
    "sentence": "Creating this derived variable may be useful because it more directly reflects customer behavior.",
    "template": "Creating ___ may be useful because it more directly reflects ___.",
    "analysis": [
      "Creating 是 Ving 當主詞。",
      "may be useful 語氣適中。",
      "more directly reflects 說明特徵價值。"
    ],
    "prompt": "建立 loss ratio 變數可能有幫助，因為它更直接反映保單風險。"
  },
  {
    "id": "categorical-encoding",
    "theme": "Data Preparation",
    "chinese": "類別變數需要適當編碼，模型才能使用它們作為預測變數。",
    "sentence": "Categorical variables need to be encoded properly so that the model can use them as predictors.",
    "template": "___ need to be ___ so that the model can use them as ___.",
    "analysis": [
      "need to be encoded 是必要處理。",
      "so that 表示目的。",
      "as predictors 指明模型用途。"
    ],
    "prompt": "日期變數需要適當轉換，模型才能捕捉季節性。"
  },
  {
    "id": "factor-vs-numeric",
    "theme": "Model Design",
    "chinese": "把 DayOfWeek 當作類別變數可以避免強迫模型假設線性趨勢。",
    "sentence": "Treating DayOfWeek as a categorical variable avoids forcing the model to assume a linear trend.",
    "template": "Treating ___ as ___ avoids forcing the model to ___.",
    "analysis": [
      "Treating...as... 是方法當主詞。",
      "avoids forcing 說明避免的問題。",
      "assume a linear trend 是模型假設。"
    ],
    "prompt": "把 ZIP code 當作類別變數可以避免強迫模型假設郵遞區號有數值順序。"
  },
  {
    "id": "multicollinearity",
    "theme": "Regression",
    "chinese": "高度相關的預測變數可能使係數估計不穩定且難以解釋。",
    "sentence": "Highly correlated predictors may make coefficient estimates unstable and difficult to interpret.",
    "template": "Highly correlated ___ may make ___ unstable and difficult to ___.",
    "analysis": [
      "Highly correlated predictors 是名詞片語。",
      "may make A B 表示造成狀態。",
      "difficult to interpret 接可解釋性。"
    ],
    "prompt": "高度相關的變數可能使變數重要性不穩定且難以解釋。"
  },
  {
    "id": "outlier-impact",
    "theme": "EDA",
    "chinese": "極端值可能對線性模型有很大影響，因此應進一步檢查。",
    "sentence": "Extreme values may have a large impact on a linear model, so they should be investigated further.",
    "template": "Extreme values may have a large impact on ___, so they should be ___.",
    "analysis": [
      "may have a large impact 表示可能影響。",
      "so 連到下一步。",
      "investigated further 是正式建議。"
    ],
    "prompt": "異常高的 claim amounts 可能對 RMSE 有很大影響，因此應進一步檢查。"
  },
  {
    "id": "imputation-choice",
    "theme": "Data Cleaning",
    "chinese": "中位數補值比平均數補值更穩健，因為它較不受極端值影響。",
    "sentence": "Median imputation is more robust than mean imputation because it is less affected by extreme values.",
    "template": "___ is more robust than ___ because it is less affected by ___.",
    "analysis": [
      "more robust than 做比較。",
      "because 接原因。",
      "less affected by 是被動概念。"
    ],
    "prompt": "使用 trimmed mean 比平均數更穩健，因為它較不受極端損失影響。"
  },
  {
    "id": "interpretability-performance",
    "theme": "Trade-off",
    "chinese": "較複雜的模型可能提升預測表現，但會降低模型透明度。",
    "sentence": "A more complex model may improve predictive performance, but it can reduce model transparency.",
    "template": "A more complex ___ may improve ___, but it can reduce ___.",
    "analysis": [
      "may improve 承認優點。",
      "but 轉向代價。",
      "transparency 是解釋與溝通問題。"
    ],
    "prompt": "更深的 tree 可能提升訓練表現，但會降低模型穩定性。"
  },
  {
    "id": "business-recommendation",
    "theme": "Recommendation",
    "chinese": "基於模型表現和可解釋性，我建議使用較簡單的模型。",
    "sentence": "Based on model performance and interpretability, I recommend using the simpler model.",
    "template": "Based on ___ and ___, I recommend using ___.",
    "analysis": [
      "Based on 放決策依據。",
      "I recommend using 給結論。",
      "simpler model 強調簡潔性。"
    ],
    "prompt": "基於測試 AUC 和部署成本，我建議使用 logistic regression。"
  },
  {
    "id": "executive-audience",
    "theme": "Communication",
    "chinese": "對非技術讀者來說，這個結果應用商業語言解釋，而不是只報告模型指標。",
    "sentence": "For a nontechnical audience, this result should be explained in business terms rather than only reporting model metrics.",
    "template": "For ___, this result should be explained in ___ rather than ___.",
    "analysis": [
      "For a nontechnical audience 設定讀者。",
      "should be explained 是建議。",
      "rather than 對比不建議做法。"
    ],
    "prompt": "對管理層來說，這個結果應用營運影響解釋，而不是只報告 p-value。"
  },
  {
    "id": "confidence-limitation",
    "theme": "Uncertainty",
    "chinese": "這個估計值有不確定性，因此不應被視為精確預測。",
    "sentence": "This estimate is subject to uncertainty, so it should not be treated as an exact prediction.",
    "template": "This ___ is subject to uncertainty, so it should not be treated as ___.",
    "analysis": [
      "subject to uncertainty 是正式不確定性說法。",
      "so 接實務含義。",
      "should not be treated as 避免誤用。"
    ],
    "prompt": "這個 forecast 有不確定性，因此不應被視為保證結果。"
  },
  {
    "id": "p-value",
    "theme": "Regression",
    "chinese": "較小的 p-value 表示在零假設成立下觀察到此結果的機率較低。",
    "sentence": "A smaller p-value indicates that the observed result would be less likely if the null hypothesis were true.",
    "template": "A smaller ___ indicates that ___ would be less likely if ___.",
    "analysis": [
      "A smaller p-value 當主詞。",
      "would be less likely if 是假設語氣。",
      "不要把 p-value 解釋成假設為真的機率。"
    ],
    "prompt": "較大的 p-value 表示在零假設成立下觀察到此結果並不罕見。"
  },
  {
    "id": "coefficient-sign",
    "theme": "Interpretation",
    "chinese": "正係數表示，在其他條件相同時，此變數較高通常對應較高的預測值。",
    "sentence": "A positive coefficient means that, all else equal, higher values of this variable correspond to higher predicted values.",
    "template": "A positive coefficient means that, all else equal, ___ correspond to ___.",
    "analysis": [
      "A positive coefficient means that 是係數解釋開頭。",
      "all else equal 等於控制其他變數。",
      "correspond to 避免過度因果。"
    ],
    "prompt": "負係數表示，在其他條件相同時，此變數較高通常對應較低的預測值。"
  },
  {
    "id": "logistic-odds",
    "theme": "Logistic Regression",
    "chinese": "在 logistic regression 中，係數代表 log-odds 的變化，而不是機率的直接變化。",
    "sentence": "In logistic regression, the coefficient represents a change in log-odds rather than a direct change in probability.",
    "template": "In ___, the coefficient represents ___ rather than ___.",
    "analysis": [
      "In logistic regression 設定模型。",
      "represents 說明係數意義。",
      "rather than 避免常見誤解。"
    ],
    "prompt": "在 Poisson regression 中，係數代表 log mean 的變化，而不是平均值的直接變化。"
  },
  {
    "id": "tree-split",
    "theme": "Tree Models",
    "chinese": "決策樹會依序切分資料，以建立較同質的子群。",
    "sentence": "A decision tree splits the data sequentially to create more homogeneous subgroups.",
    "template": "A ___ splits the data sequentially to create ___.",
    "analysis": [
      "splits the data sequentially 是樹模型機制。",
      "to create 表目的。",
      "homogeneous subgroups 說明切分目標。"
    ],
    "prompt": "分類樹會依序切分資料，以建立 response 較相似的子群。"
  },
  {
    "id": "random-forest-variance",
    "theme": "Random Forest",
    "chinese": "Random forest 透過平均多棵樹的預測來降低變異。",
    "sentence": "A random forest reduces variance by averaging the predictions from many individual trees.",
    "template": "A ___ reduces variance by ___.",
    "analysis": [
      "reduces variance 是模型效果。",
      "by averaging 表方法。",
      "many individual trees 說明 ensemble 來源。"
    ],
    "prompt": "Bagging 透過平均多個模型的預測來降低變異。"
  },
  {
    "id": "boosting-bias",
    "theme": "Boosting",
    "chinese": "Boosting 會依序建立模型，讓後面的模型專注於前面模型表現不佳的觀測值。",
    "sentence": "Boosting builds models sequentially so that later models focus on observations that earlier models handled poorly.",
    "template": "___ builds models sequentially so that later models focus on ___.",
    "analysis": [
      "builds models sequentially 是 boosting 機制。",
      "so that 表目的。",
      "handled poorly 是前模型錯誤處。"
    ],
    "prompt": "Gradient boosting 會依序建立樹，讓後面的樹修正前面模型的錯誤。"
  },
  {
    "id": "regularization",
    "theme": "Regularization",
    "chinese": "正則化會懲罰較大的係數，以降低模型複雜度。",
    "sentence": "Regularization penalizes larger coefficients to reduce model complexity.",
    "template": "___ penalizes ___ to reduce ___.",
    "analysis": [
      "penalizes larger coefficients 是方法。",
      "to reduce model complexity 是目的。",
      "句子短但資訊密度高。"
    ],
    "prompt": "Lasso 會懲罰係數絕對值，以進行變數選擇。"
  },
  {
    "id": "lasso-selection",
    "theme": "Lasso",
    "chinese": "Lasso 可以把部分係數壓縮到零，因此可用於變數選擇。",
    "sentence": "Lasso can shrink some coefficients to zero, so it can be used for variable selection.",
    "template": "___ can shrink ___ to zero, so it can be used for ___.",
    "analysis": [
      "shrink to zero 是 lasso 關鍵機制。",
      "so 接用途。",
      "variable selection 是考試常用詞。"
    ],
    "prompt": "Ridge 可以縮小係數，因此可用於降低模型變異。"
  },
  {
    "id": "lambda-effect",
    "theme": "Hyperparameter",
    "chinese": "較大的 lambda 會增加懲罰強度，使係數更接近零。",
    "sentence": "A larger lambda increases the strength of the penalty, causing coefficients to move closer to zero.",
    "template": "A larger ___ increases ___, causing ___ to ___.",
    "analysis": [
      "A larger lambda 是比較主詞。",
      "causing 用分詞補後果。",
      "closer to zero 是係數效果。"
    ],
    "prompt": "較小的 lambda 會降低懲罰強度，使模型較接近未正則化模型。"
  },
  {
    "id": "hyperparameter-tuning",
    "theme": "Model Tuning",
    "chinese": "超參數應使用驗證資料或交叉驗證選擇，而不是用測試資料選擇。",
    "sentence": "Hyperparameters should be selected using validation data or cross-validation rather than the test data.",
    "template": "___ should be selected using ___ rather than ___.",
    "analysis": [
      "should be selected 是程序建議。",
      "using 表方法。",
      "rather than the test data 避免資料洩漏。"
    ],
    "prompt": "cutoff threshold 應使用驗證資料選擇，而不是用測試資料選擇。"
  },
  {
    "id": "cutoff-business",
    "theme": "Classification",
    "chinese": "最佳 cutoff 應反映 false positive 和 false negative 的相對成本。",
    "sentence": "The optimal cutoff should reflect the relative costs of false positives and false negatives.",
    "template": "The optimal ___ should reflect the relative costs of ___ and ___.",
    "analysis": [
      "optimal cutoff 是決策變數。",
      "should reflect 接商業考量。",
      "relative costs 是分類決策核心。"
    ],
    "prompt": "最佳 staffing threshold 應反映人力不足和人力過剩的相對成本。"
  },
  {
    "id": "confusion-matrix",
    "theme": "Classification",
    "chinese": "Confusion matrix 顯示模型如何在實際類別與預測類別之間分配觀測值。",
    "sentence": "The confusion matrix shows how observations are distributed across actual and predicted classes.",
    "template": "The ___ shows how observations are distributed across ___ and ___.",
    "analysis": [
      "shows how 接間接問句。",
      "distributed across 表分布在不同類別。",
      "actual and predicted classes 是矩陣兩軸。"
    ],
    "prompt": "lift chart 顯示高分族群中的實際 response rate 如何變化。"
  },
  {
    "id": "sensitivity-meaning",
    "theme": "Classification",
    "chinese": "Sensitivity 衡量模型辨識真正 positive cases 的能力。",
    "sentence": "Sensitivity measures the model's ability to identify truly positive cases.",
    "template": "___ measures the model's ability to ___.",
    "analysis": [
      "measures the ability to 是指標解釋句型。",
      "identify 接模型任務。",
      "truly positive cases 避免混淆預測與實際。"
    ],
    "prompt": "Specificity 衡量模型辨識真正 negative cases 的能力。"
  },
  {
    "id": "glm-offset",
    "theme": "GLM",
    "chinese": "應加入 offset，因為不同保單可能有不同的暴險期間。",
    "sentence": "An offset should be included because policyholders may have different exposure periods.",
    "template": "An offset should be included because ___ may have different ___.",
    "analysis": [
      "should be included 是建模建議。",
      "because 後面說明 offset 的必要性。",
      "exposure periods 是 frequency model 常見語境。"
    ],
    "prompt": "在 claim frequency model 中，應加入 exposure offset，因為每張保單的有效月數不同。"
  },
  {
    "id": "exposure",
    "theme": "Frequency Modeling",
    "chinese": "理賠頻率應依暴險調整，才能公平比較不同期間的保單。",
    "sentence": "Claim frequency should be adjusted for exposure so that policies with different durations can be compared fairly.",
    "template": "___ should be adjusted for ___ so that ___ can be compared fairly.",
    "analysis": [
      "should be adjusted for exposure 是頻率模型重點。",
      "so that 表目的。",
      "compared fairly 把技術處理轉成商業理由。"
    ],
    "prompt": "Accident counts 應依 vehicle-years 調整，才能公平比較不同 exposure level 的保單。"
  },
  {
    "id": "poisson-mean",
    "theme": "Poisson Regression",
    "chinese": "在 Poisson model 中，預期理賠件數會被建模為預測變數的函數。",
    "sentence": "In a Poisson model, the expected claim count is modeled as a function of the predictors.",
    "template": "In ___, ___ is modeled as a function of ___.",
    "analysis": [
      "In a Poisson model 設定模型。",
      "is modeled as 表示建模方式。",
      "function of the predictors 是正式模型語言。"
    ],
    "prompt": "在 Poisson regression 中，expected number of service calls 會被建模為 customer characteristics 的函數。"
  },
  {
    "id": "deviance",
    "theme": "Model Fit",
    "chinese": "較低的 deviance 表示配適較好，但仍應與驗證表現一起評估。",
    "sentence": "A lower deviance suggests a better fit, but it should be evaluated together with validation performance.",
    "template": "A lower ___ suggests ___, but it should be evaluated together with ___.",
    "analysis": [
      "suggests a better fit 語氣比 proves 保守。",
      "but 補上限制。",
      "validation performance 避免只看訓練配適。"
    ],
    "prompt": "較低的 training deviance 表示配適較好，但不應壓過 poor test performance。"
  },
  {
    "id": "residual-outliers",
    "theme": "Diagnostics",
    "chinese": "大型殘差可能表示模型無法良好解釋的觀測值。",
    "sentence": "Large residuals may indicate observations that the model does not explain well.",
    "template": "Large ___ may indicate observations that ___.",
    "analysis": [
      "Large residuals 是診斷重點。",
      "may indicate 保留推論空間。",
      "does not explain well 說明模型限制。"
    ],
    "prompt": "大型 residuals 可能表示 current predictors 無法良好解釋的 customer segments。"
  },
  {
    "id": "influential-observations",
    "theme": "Diagnostics",
    "chinese": "具影響力的觀測值應被檢查，因為它們可能對 fitted model 有很大影響。",
    "sentence": "Influential observations should be reviewed because they may have a large effect on the fitted model.",
    "template": "___ should be reviewed because they may have a large effect on ___.",
    "analysis": [
      "should be reviewed 是正式建議。",
      "may have a large effect 語氣保守。",
      "fitted model 指已配適模型。"
    ],
    "prompt": "Influential observations 應在 deployment 前被檢查，因為它們可能改變 selected pricing factors。"
  },
  {
    "id": "correlation",
    "theme": "EDA",
    "chinese": "預測變數之間高度相關可能使模型較不穩定且較難解釋。",
    "sentence": "A strong correlation between predictors may make the model less stable and harder to interpret.",
    "template": "A strong correlation between ___ may make ___ less stable and harder to ___.",
    "analysis": [
      "A strong correlation between predictors 是主詞。",
      "may make A B 表示造成狀態。",
      "harder to interpret 接可解釋性。"
    ],
    "prompt": "Age 和 driving experience 高度相關，可能使 coefficient estimates 較不穩定。"
  },
  {
    "id": "eda-skewness",
    "theme": "EDA",
    "chinese": "理賠金額分布右偏，因此轉換可能是適當的。",
    "sentence": "The distribution of claim size is right-skewed, so a transformation may be appropriate.",
    "template": "The distribution of ___ is ___, so ___ may be appropriate.",
    "analysis": [
      "distribution of claim size 是 EDA 主詞。",
      "right-skewed 描述分布形狀。",
      "may be appropriate 是保守建議。"
    ],
    "prompt": "Annual losses 的分布右偏，因此 log transformation 可能是適當的。"
  },
  {
    "id": "log-transform",
    "theme": "Data Preparation",
    "chinese": "Log 轉換可以降低偏態，並讓關係更容易建模。",
    "sentence": "A log transformation can reduce skewness and make the relationship easier to model.",
    "template": "A ___ transformation can reduce ___ and make ___ easier to ___.",
    "analysis": [
      "can reduce skewness 說明方法效果。",
      "make the relationship easier to model 是第二個好處。",
      "and 串連兩個理由。"
    ],
    "prompt": "Square-root transformation 可以降低 skewness，並讓 claim count relationship 更容易建模。"
  },
  {
    "id": "train-validation-test",
    "theme": "Validation",
    "chinese": "Validation set 應用於調整模型，而 test set 應保留做最終評估。",
    "sentence": "The validation set should be used to tune the model, while the test set should be saved for final evaluation.",
    "template": "The ___ should be used to ___, while the ___ should be saved for ___.",
    "analysis": [
      "should be used to 表示用途。",
      "while 對比兩種資料集功能。",
      "final evaluation 強調 test set 不應提前使用。"
    ],
    "prompt": "Validation set 應用於選擇 cutoff，而 test set 應保留做 final performance reporting。"
  },
  {
    "id": "stratified-split",
    "theme": "Validation",
    "chinese": "分層切分有助於保留每個資料分割中的 response rate。",
    "sentence": "A stratified split helps preserve the response rate in each data partition.",
    "template": "A ___ split helps preserve ___ in each ___.",
    "analysis": [
      "helps preserve 表示方法目的。",
      "response rate 是分類資料核心比例。",
      "data partition 指 train/validation/test。"
    ],
    "prompt": "Stratified split 有助於保留每個 data partition 中的 fraud rate。"
  },
  {
    "id": "missing-indicator",
    "theme": "Missing Values",
    "chinese": "如果缺失值含有預測資訊，加入 missingness indicator 可能有幫助。",
    "sentence": "Adding a missingness indicator may be useful if missing values contain predictive information.",
    "template": "Adding ___ may be useful if ___ contain ___.",
    "analysis": [
      "Adding 是 Ving 當主詞。",
      "may be useful 語氣適中。",
      "if 後面接使用條件。"
    ],
    "prompt": "如果 missing income values 與 purchase behavior 有關，加入 missingness indicator 可能有幫助。"
  },
  {
    "id": "one-hot",
    "theme": "Encoding",
    "chinese": "One-hot encoding 會用個別 indicator variable 表示每個類別。",
    "sentence": "One-hot encoding represents each category with a separate indicator variable.",
    "template": "___ represents each ___ with a separate ___.",
    "analysis": [
      "represents each category 是方法定義。",
      "with a separate indicator variable 說明輸出形式。",
      "句子短，適合解釋資料處理。"
    ],
    "prompt": "One-hot encoding 會用 separate indicator variable 表示每個 region。"
  },
  {
    "id": "high-cardinality",
    "theme": "Encoding",
    "chinese": "高基數變數可能增加模型複雜度並產生不穩定估計。",
    "sentence": "High-cardinality variables may increase model complexity and create unstable estimates.",
    "template": "High-cardinality ___ may increase ___ and create ___.",
    "analysis": [
      "High-cardinality variables 是資料風險。",
      "may increase 語氣保守。",
      "unstable estimates 說明建模後果。"
    ],
    "prompt": "High-cardinality ZIP code variables 可能增加 model complexity，並產生 unstable territorial effects。"
  },
  {
    "id": "target-leakage-date",
    "theme": "Data Leakage",
    "chinese": "預測日期之後建立的變數應被排除，以避免 target leakage。",
    "sentence": "Variables created after the prediction date should be excluded to avoid target leakage.",
    "template": "Variables created after ___ should be excluded to avoid ___.",
    "analysis": [
      "created after the prediction date 限定問題來源。",
      "should be excluded 是明確建議。",
      "to avoid target leakage 表目的。"
    ],
    "prompt": "Claim closed 後才更新的 variables 應被排除，以避免 target leakage。"
  },
  {
    "id": "class-weight",
    "theme": "Classification",
    "chinese": "Class weights 可以幫助模型更重視少數類別。",
    "sentence": "Class weights can help the model pay more attention to the minority class.",
    "template": "___ can help the model pay more attention to ___.",
    "analysis": [
      "can help 表示方法效果。",
      "pay more attention to 是白話但正式可用。",
      "minority class 是不平衡分類語境。"
    ],
    "prompt": "Class weights 可以幫助模型更重視 rare fraud cases。"
  },
  {
    "id": "precision",
    "theme": "Classification",
    "chinese": "Precision 衡量預測為 positive 的案件中實際為 positive 的比例。",
    "sentence": "Precision measures the proportion of predicted positive cases that are actually positive.",
    "template": "___ measures the proportion of ___ that are actually ___.",
    "analysis": [
      "measures the proportion 是指標定義。",
      "predicted positive cases 和 actually positive 對比預測與實際。",
      "避免把 precision 和 sensitivity 混淆。"
    ],
    "prompt": "Precision 衡量 flagged claims 中 actually suspicious 的比例。"
  },
  {
    "id": "lift-gains",
    "theme": "Model Evaluation",
    "chinese": "Lift chart 可以顯示模型是否把高風險案件排在前面。",
    "sentence": "A lift chart can show whether the model ranks high-risk cases near the top.",
    "template": "A ___ chart can show whether ___ ranks ___ near the top.",
    "analysis": [
      "can show whether 接間接問句。",
      "ranks high-risk cases near the top 說明模型排序能力。",
      "適合模型評估段落。"
    ],
    "prompt": "Lift chart 可以顯示模型是否把 likely responders 排在 highest-score groups。"
  },
  {
    "id": "roc-curve",
    "theme": "Model Evaluation",
    "chinese": "ROC curve 總結不同 threshold 下 sensitivity 和 specificity 的取捨。",
    "sentence": "The ROC curve summarizes the trade-off between sensitivity and specificity across thresholds.",
    "template": "The ___ summarizes the trade-off between ___ and ___ across ___.",
    "analysis": [
      "summarizes the trade-off 是圖表功能。",
      "between sensitivity and specificity 指分類取捨。",
      "across thresholds 說明不是單一 cutoff。"
    ],
    "prompt": "ROC curve 總結不同 thresholds 下 true positive rate 和 false positive rate 的取捨。"
  },
  {
    "id": "threshold-recommendation",
    "theme": "Classification",
    "chinese": "建議的 threshold 應反映每種錯誤的 business cost。",
    "sentence": "The recommended threshold should reflect the business cost of each type of error.",
    "template": "The recommended ___ should reflect ___ of each type of ___.",
    "analysis": [
      "recommended threshold 是決策重點。",
      "should reflect 接商業考量。",
      "each type of error 指 false positive/false negative。"
    ],
    "prompt": "Recommended fraud threshold 應反映每種 error 的 investigation cost。"
  },
  {
    "id": "profit-matrix",
    "theme": "Business Value",
    "chinese": "Profit matrix 可以把模型預測轉換成預期商業價值。",
    "sentence": "A profit matrix can translate model predictions into expected business value.",
    "template": "A ___ can translate ___ into ___.",
    "analysis": [
      "can translate A into B 是轉換句型。",
      "model predictions 是技術輸出。",
      "expected business value 是商業語言。"
    ],
    "prompt": "Profit matrix 可以把 retention predictions 轉換成 expected financial value。"
  },
  {
    "id": "partial-dependence",
    "theme": "Interpretability",
    "chinese": "Partial dependence plot 顯示在平均其他變數後，某個預測變數的平均預測效果。",
    "sentence": "A partial dependence plot shows the average predicted effect of a predictor after averaging over other variables.",
    "template": "A ___ plot shows the average predicted effect of ___ after ___.",
    "analysis": [
      "shows the average predicted effect 是 PDP 核心。",
      "after averaging over other variables 說明控制方式。",
      "避免把 PDP 解釋為個別觀測效果。"
    ],
    "prompt": "Partial dependence plot 顯示在 averaging over other variables 後，credit score 的 average predicted effect。"
  },
  {
    "id": "ice-plot",
    "theme": "Interpretability",
    "chinese": "ICE plot 可以揭露預測變數效果是否在不同觀測值之間不同。",
    "sentence": "An ICE plot can reveal whether the effect of a predictor differs across individual observations.",
    "template": "An ___ plot can reveal whether ___ differs across ___.",
    "analysis": [
      "can reveal whether 接間接問句。",
      "effect of a predictor 是解釋對象。",
      "individual observations 是 ICE 和 PDP 的差異。"
    ],
    "prompt": "ICE plot 可以揭露 age effect 是否在 individual policyholders 之間不同。"
  },
  {
    "id": "variable-importance-limit",
    "theme": "Interpretability",
    "chinese": "Variable importance 會排序預測變數，但不顯示效果方向。",
    "sentence": "Variable importance ranks predictors, but it does not show the direction of the effect.",
    "template": "___ ranks ___, but it does not show ___.",
    "analysis": [
      "ranks predictors 說明功能。",
      "but 補限制。",
      "direction of the effect 是常被誤解的部分。"
    ],
    "prompt": "Variable importance 會排序 rating factors，但不顯示每個 factor 是增加還是降低 risk。"
  },
  {
    "id": "permutation-importance",
    "theme": "Interpretability",
    "chinese": "Permutation importance 衡量隨機打亂某個預測變數後，模型表現下降多少。",
    "sentence": "Permutation importance measures how much model performance decreases when a predictor is randomly shuffled.",
    "template": "___ measures how much ___ decreases when ___ is randomly shuffled.",
    "analysis": [
      "measures how much 是程度衡量。",
      "model performance decreases 是指標變化。",
      "when a predictor is randomly shuffled 說明方法。"
    ],
    "prompt": "Permutation importance 衡量 prior claims 被 randomly shuffled 後，validation AUC 下降多少。"
  },
  {
    "id": "model-stability",
    "theme": "Validation",
    "chinese": "應檢查模型穩定性，因為在單一切分表現良好的模型不一定能泛化。",
    "sentence": "Model stability should be checked because a model that performs well on one split may not generalize.",
    "template": "___ should be checked because ___ may not ___.",
    "analysis": [
      "should be checked 是檢查建議。",
      "performs well on one split 是過度依賴單次切分。",
      "may not generalize 是泛化風險。"
    ],
    "prompt": "Model stability 應被檢查，因為某一個 accident year 表現好的模型不一定能 generalize。"
  },
  {
    "id": "ensemble-benefit",
    "theme": "Ensemble",
    "chinese": "Ensemble 可以透過結合多個較弱模型來提升預測表現。",
    "sentence": "An ensemble can improve predictive performance by combining multiple weaker models.",
    "template": "An ___ can improve ___ by ___.",
    "analysis": [
      "can improve predictive performance 是效果。",
      "by combining 表方法。",
      "multiple weaker models 是 ensemble 來源。"
    ],
    "prompt": "Ensemble 可以透過 combining several weaker prediction models 來提升 demand forecasts。"
  },
  {
    "id": "gbm-learning-rate",
    "theme": "Boosting",
    "chinese": "較小的 learning rate 通常需要更多 trees，但可能改善泛化能力。",
    "sentence": "A smaller learning rate usually requires more trees but may improve generalization.",
    "template": "A smaller ___ usually requires ___ but may improve ___.",
    "analysis": [
      "A smaller learning rate 是比較主詞。",
      "requires more trees 說明代價。",
      "may improve generalization 說明可能好處。"
    ],
    "prompt": "較小的 learning rate 通常需要更多 boosting iterations，但可能降低 overfitting。"
  },
  {
    "id": "max-depth",
    "theme": "Tree Tuning",
    "chinese": "限制 tree depth 可以透過限制模型複雜度來降低 overfitting。",
    "sentence": "Limiting tree depth can reduce overfitting by restricting model complexity.",
    "template": "Limiting ___ can reduce ___ by restricting ___.",
    "analysis": [
      "Limiting 是 Ving 當主詞。",
      "can reduce overfitting 是效果。",
      "by restricting model complexity 說明機制。"
    ],
    "prompt": "限制 tree depth 可以透過避免 very specific customer segments 來降低 overfitting。"
  },
  {
    "id": "min-node-size",
    "theme": "Tree Tuning",
    "chinese": "提高 minimum node size 可以讓樹對雜訊較不敏感。",
    "sentence": "Increasing the minimum node size can make the tree less sensitive to noise.",
    "template": "Increasing ___ can make ___ less sensitive to ___.",
    "analysis": [
      "Increasing 當主詞。",
      "make the tree less sensitive 是效果。",
      "to noise 說明穩定性來源。"
    ],
    "prompt": "提高 minimum node size 可以讓 tree 對 unusually large claims 較不敏感。"
  },
  {
    "id": "cp-pruning",
    "theme": "Tree Tuning",
    "chinese": "Pruning 會移除幾乎沒有增加預測價值的 split，這可能改善泛化能力。",
    "sentence": "Pruning removes splits that add little predictive value, which can improve generalization.",
    "template": "___ removes ___ that add little ___, which can improve ___.",
    "analysis": [
      "removes splits 是 pruning 功能。",
      "that add little predictive value 說明移除條件。",
      "which can improve generalization 補充結果。"
    ],
    "prompt": "Pruning 會移除幾乎沒有增加 validation lift 的 splits，這可能改善 generalization。"
  },
  {
    "id": "linear-assumption",
    "theme": "Regression",
    "chinese": "線性模型假設邊際效果固定，而這可能不符合此關係。",
    "sentence": "A linear model assumes a constant marginal effect, which may not fit this relationship.",
    "template": "A ___ assumes ___, which may not fit ___.",
    "analysis": [
      "assumes a constant marginal effect 是線性假設。",
      "which may not fit 補限制。",
      "this relationship 指資料中的實際型態。"
    ],
    "prompt": "Linear model 假設 mileage 的 marginal effect 固定，而這可能不符合 observed loss pattern。"
  },
  {
    "id": "interaction-detection",
    "theme": "Interaction",
    "chinese": "如果一個預測變數的效果會隨另一個預測變數的層級改變，應考慮 interaction。",
    "sentence": "An interaction should be considered if the effect of one predictor changes across levels of another predictor.",
    "template": "An ___ should be considered if ___ changes across levels of ___.",
    "analysis": [
      "should be considered 是建模建議。",
      "if 後面接判斷條件。",
      "changes across levels 是 interaction 的核心。"
    ],
    "prompt": "如果 tenure 的 effect 會隨 product type 改變，應考慮 interaction。"
  },
  {
    "id": "extrapolation",
    "theme": "Prediction Risk",
    "chinese": "訓練資料範圍外的預測應謹慎解釋。",
    "sentence": "Predictions outside the range of the training data should be interpreted cautiously.",
    "template": "Predictions outside ___ should be interpreted ___.",
    "analysis": [
      "Predictions outside the range 是風險來源。",
      "should be interpreted cautiously 是正式警語。",
      "適合限制段落。"
    ],
    "prompt": "Very high policy limits 的 predictions 應謹慎解釋，若這些 limits 在 training data 中很少見。"
  },
  {
    "id": "confidence-interval",
    "theme": "Uncertainty",
    "chinese": "較寬的 confidence interval 表示估計效果有較高不確定性。",
    "sentence": "A wider confidence interval indicates greater uncertainty around the estimated effect.",
    "template": "A wider ___ indicates greater uncertainty around ___.",
    "analysis": [
      "A wider confidence interval 當主詞。",
      "indicates greater uncertainty 是解讀。",
      "estimated effect 是不確定性的對象。"
    ],
    "prompt": "較寬的 confidence interval 表示 discount 的 estimated impact 有較高 uncertainty。"
  },
  {
    "id": "prediction-interval",
    "theme": "Uncertainty",
    "chinese": "Prediction interval 比 confidence interval 寬，因為它包含個別結果的變異。",
    "sentence": "A prediction interval is wider than a confidence interval because it includes individual outcome variability.",
    "template": "A ___ is wider than ___ because it includes ___.",
    "analysis": [
      "is wider than 做比較。",
      "because 說明原因。",
      "individual outcome variability 是 prediction interval 的額外不確定性。"
    ],
    "prompt": "Next month's claim count 的 prediction interval 比 average count 的 confidence interval 寬。"
  },
  {
    "id": "holdout-performance",
    "theme": "Validation",
    "chinese": "Holdout performance 提供模型在新資料上表現的較客觀估計。",
    "sentence": "Holdout performance provides a more objective estimate of how the model may perform on new data.",
    "template": "___ provides a more objective estimate of how ___ may perform on ___.",
    "analysis": [
      "provides a more objective estimate 是驗證語言。",
      "how the model may perform 是間接問句。",
      "new data 指泛化情境。"
    ],
    "prompt": "Holdout performance 提供 churn model 在 future customers 上表現的較客觀估計。"
  },
  {
    "id": "unseen-levels",
    "theme": "Deployment",
    "chinese": "部署模型前，必須處理 scoring data 中新的 factor levels。",
    "sentence": "New factor levels in the scoring data must be handled before the model is deployed.",
    "template": "New ___ in ___ must be handled before ___ is deployed.",
    "analysis": [
      "must be handled 是必要條件。",
      "before the model is deployed 設定時點。",
      "new factor levels 是部署常見問題。"
    ],
    "prompt": "Scoring data 中新的 product codes 必須在 model deployed 前處理。"
  },
  {
    "id": "imbalanced-resampling",
    "theme": "Classification",
    "chinese": "Resampling 可以協助處理 class imbalance，但只應用在 training data 內。",
    "sentence": "Resampling can help address class imbalance, but it should be applied only within the training data.",
    "template": "___ can help address ___, but it should be applied only within ___.",
    "analysis": [
      "can help address 表示方法用途。",
      "but 補資料洩漏限制。",
      "only within the training data 是關鍵規則。"
    ],
    "prompt": "Oversampling 可以協助處理 rare fraud cases，但只應用在 training data 內。"
  },
  {
    "id": "sampling-bias",
    "theme": "Data Risk",
    "chinese": "如果 training data 無法代表模型使用族群，可能會產生 sampling bias。",
    "sentence": "Sampling bias may occur if the training data do not represent the population where the model will be used.",
    "template": "___ may occur if ___ do not represent ___.",
    "analysis": [
      "may occur if 是風險條件句。",
      "training data do not represent 說明偏誤來源。",
      "population where the model will be used 接部署情境。"
    ],
    "prompt": "如果 quote data 無法代表 actually written policies，可能會產生 sampling bias。"
  },
  {
    "id": "documentation",
    "theme": "Reporting",
    "chinese": "最終報告應記錄建模選擇，使分析可以被審查。",
    "sentence": "The final report should document the modeling choices so that the analysis can be reviewed.",
    "template": "The final report should document ___ so that ___ can be reviewed.",
    "analysis": [
      "should document 是報告建議。",
      "modeling choices 是可審查對象。",
      "so that 表目的。"
    ],
    "prompt": "Final report 應記錄 feature engineering choices，使 pricing analysis 可以被 reviewed。"
  },
  {
    "id": "reproducibility",
    "theme": "Workflow",
    "chinese": "設定 random seed 有助於讓建模結果可重現。",
    "sentence": "Setting a random seed helps make the modeling results reproducible.",
    "template": "Setting ___ helps make ___ reproducible.",
    "analysis": [
      "Setting 是 Ving 當主詞。",
      "helps make A B 表示使某事達到狀態。",
      "reproducible 是考試報告常見品質要求。"
    ],
    "prompt": "保存 train-test split 有助於讓 model comparison 可重現。"
  },
  {
    "id": "executive-recommendation",
    "theme": "Executive Summary",
    "chinese": "建議應聚焦商業決策，而不只是統計指標。",
    "sentence": "The recommendation should focus on the business decision, not only the statistical metric.",
    "template": "The recommendation should focus on ___, not only ___.",
    "analysis": [
      "should focus on 是報告建議。",
      "business decision 是高層讀者關心點。",
      "not only 補充避免過度技術化。"
    ],
    "prompt": "Recommendation 應聚焦 staffing decision，而不只是 model's AUC。"
  },
  {
    "id": "limitations-section",
    "theme": "Reporting",
    "chinese": "限制段落應說明模型在哪些地方可能不可靠。",
    "sentence": "The limitations section should explain where the model may be unreliable.",
    "template": "The ___ section should explain where ___ may be ___.",
    "analysis": [
      "should explain where 接間接問句。",
      "may be unreliable 保留語氣。",
      "limitations section 是報告標準段落。"
    ],
    "prompt": "Limitations section 應說明 forecast 在 unusual claim periods 可能 unreliable。"
  },
  {
    "id": "next-steps",
    "theme": "Next Step",
    "chinese": "下一步是在正式使用前，用額外資料驗證模型。",
    "sentence": "The next step is to validate the model with additional data before using it in production.",
    "template": "The next step is to ___ before ___.",
    "analysis": [
      "The next step is to 是行動建議開頭。",
      "validate the model with additional data 是具體動作。",
      "before using it in production 設定時點。"
    ],
    "prompt": "Next step 是在 production 使用前，用 next quarter of data 驗證 model。"
  },
  {
    "id": "data-quality",
    "theme": "Data Risk",
    "chinese": "即使演算法很複雜，資料品質差仍會限制模型實用性。",
    "sentence": "Poor data quality can limit model usefulness even if the algorithm is sophisticated.",
    "template": "Poor ___ can limit ___ even if ___ is sophisticated.",
    "analysis": [
      "Poor data quality 是風險來源。",
      "can limit model usefulness 說明影響。",
      "even if 承認演算法優點但回到限制。"
    ],
    "prompt": "即使 algorithm 很 sophisticated，incomplete claim coding 仍會限制 model usefulness。"
  },
  {
    "id": "ethical-bias",
    "theme": "Model Governance",
    "chinese": "模型在用於支援決策前，應檢查潛在 bias。",
    "sentence": "The model should be checked for potential bias before it is used to support decisions.",
    "template": "The model should be checked for ___ before it is used to ___.",
    "analysis": [
      "should be checked for 是治理檢查。",
      "potential bias 是風險。",
      "before it is used to support decisions 設定使用前提。"
    ],
    "prompt": "Model 在用於 support underwriting decisions 前，應檢查 potential geographic bias。"
  },
  {
    "id": "monitoring",
    "theme": "Deployment",
    "chinese": "部署後應監控模型表現，以偵測隨時間惡化的情況。",
    "sentence": "Model performance should be monitored after deployment to detect deterioration over time.",
    "template": "___ should be monitored after ___ to detect ___.",
    "analysis": [
      "should be monitored 是部署後建議。",
      "after deployment 設定時點。",
      "deterioration over time 是模型衰退。"
    ],
    "prompt": "Conversion model performance 應在 deployment 後監控，以偵測 deterioration over time。"
  },
  {
    "id": "retraining",
    "theme": "Deployment",
    "chinese": "如果底層理賠型態改變，模型可能需要重新訓練。",
    "sentence": "The model may need to be retrained if the underlying claim patterns change.",
    "template": "The model may need to be ___ if ___ change.",
    "analysis": [
      "may need to be retrained 是部署維護語氣。",
      "if 接觸發條件。",
      "underlying claim patterns 指資料生成機制。"
    ],
    "prompt": "如果 customer behavior 在 new pricing strategy 後改變，model 可能需要 retrained。"
  },
  {
    "id": "final-caveat",
    "theme": "Executive Summary",
    "chinese": "模型應支援商業判斷，而不是取代商業判斷。",
    "sentence": "The model should support business judgment rather than replace it.",
    "template": "The model should ___ rather than ___.",
    "analysis": [
      "should support business judgment 是結論定位。",
      "rather than replace it 對比錯誤使用方式。",
      "適合 executive summary 結尾。"
    ],
    "prompt": "Model 應 guide underwriter's review，而不是 make the final underwriting decision。"
  },
  {
    "id": "exam-pa-alpha",
    "theme": "Exam PA Concept",
    "chinese": "Alpha 是介於 0 到 1 之間的混合係數，用來決定 ridge 和 lasso 正則化懲罰的相對權重。",
    "sentence": "Alpha is the mixing coefficient ranging from 0 to 1 and determining the relative weight of the ridge and lasso regularization penalties.",
    "template": "___ is the mixing coefficient ranging from ___ to ___ and determining ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-variance-inflation-factor",
    "theme": "Exam PA Concept",
    "chinese": "Variance Inflation Factor（VIF）是完整模型中某個預測變數係數變異數，相對於該變數單獨建模時係數變異數的比率。",
    "sentence": "Variance Inflation Factor (VIF) is the ratio of the variance of a predictor's coefficient in the full model to its variance when fitted in a standalone model.",
    "template": "___ is the ratio of ___ to ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-partial-dependence-plot",
    "theme": "Exam PA Concept",
    "chinese": "Partial dependence plot 讓我們了解特徵與預測結果之間的關係。",
    "sentence": "Partial dependence plots allow us to understand the relationship between features and predicted outcome.",
    "template": "___ allow ___ to ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-partial-dependence-plot-calculation",
    "theme": "Exam PA Concept",
    "chinese": "計算 partial dependence 時，我們會把該變數替換成指定值，對所有觀測值產生預測，然後取平均。",
    "sentence": "To calculate partial dependence, we replace the variable with chosen values, predict outcomes for all observations, and take the average.",
    "template": "To calculate ___, ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-studentized-residual",
    "theme": "Exam PA Concept",
    "chinese": "Studentized residual 是原始殘差除以其估計標準誤的比率，並且會考慮每個資料點的 leverage。",
    "sentence": "A studentized residual is the ratio of the raw residual to its estimated standard error, which accounts for each data point's leverage.",
    "template": "A studentized residual is the ratio of the raw residual to its ___, ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-aic",
    "theme": "Exam PA Concept",
    "chinese": "AIC 透過結合 deviance 和模型複雜度懲罰來衡量模型表現。",
    "sentence": "AIC measures model performance by combining deviance with a penalty for model complexity.",
    "template": "___ measures ___ by ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-aic-is-defined-as-the-deviance-plus-a-penalty-of",
    "theme": "Exam PA Concept",
    "chinese": "AIC 定義為 deviance 加上 2 倍參數數量或自由度的懲罰。",
    "sentence": "AIC is defined as the deviance plus a penalty of 2 times the number of parameters/degrees of freedom.",
    "template": "___ is defined as ___ plus ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-confusion-matrix",
    "theme": "Exam PA Concept",
    "chinese": "Confusion matrix 是模型預測結果的方便摘要，並提供多種表現指標。",
    "sentence": "The confusion matrix is a convenient summary of the model predictions, providing several performance measures.",
    "template": "___ is a convenient summary ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-accuracy",
    "theme": "Exam PA Concept",
    "chinese": "Accuracy 是資料中被正確分類的觀測值比例。",
    "sentence": "Accuracy is the percentage of observations in the data that are correctly classified.",
    "template": "___ is the percentage of ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-precision",
    "theme": "Exam PA Concept",
    "chinese": "Precision 是正類預測中真正正確的比例。",
    "sentence": "The precision is the percentage of positive predictions that are correct.",
    "template": "___ is the percentage of ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-sensitivity-true-positive-rate-tpr",
    "theme": "Exam PA Concept",
    "chinese": "Sensitivity 是正類觀測值中被正確預測的比例。",
    "sentence": "The sensitivity is the percentage of positive observations with correct predictions.",
    "template": "___ is the percentage of ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-specificity-false-positive-rate-fpr",
    "theme": "Exam PA Concept",
    "chinese": "Specificity 是負類觀測值中被正確預測的比例。",
    "sentence": "Specificity is the percentage of negative observations with correct predictions.",
    "template": "___ is the percentage of ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-area-under-the-curve-auc",
    "theme": "Exam PA Concept",
    "chinese": "AUC 是 ROC curve 下方的面積，而 ROC curve 會在所有 0 到 1 的 cutoff 下繪製 sensitivity 對 1 - specificity 的關係。",
    "sentence": "The AUC is the area under the ROC curve, which plots the sensitivity against 1 - specificity across all cutoffs from 0 to 1.",
    "template": "___ is the area under ___, which ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-outliers-refer-to-observations-with-unusual-valu",
    "theme": "Exam PA Concept",
    "chinese": "Outlier 是指 target variable 有異常值的觀測值。",
    "sentence": "Outliers refer to observations with unusual values of the target variable.",
    "template": "Outliers ___ to ___ with ___ the ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-unstructured-data",
    "theme": "Exam PA Concept",
    "chinese": "Unstructured data 包含無法放進表格中的資訊。",
    "sentence": "Unstructured data includes information that does not fit into tables.",
    "template": "___ includes ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-explain-why-standardizing-numeric-predictors-has",
    "theme": "Exam PA Concept",
    "chinese": "以數值預測變數建立的 decision tree 分割，取決於該變數的排序。",
    "sentence": "The splits of a decision tree based on a numeric predictor depend on their ranks.",
    "template": "The ___ decision ___ a ___ on ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-interactions",
    "theme": "Exam PA Concept",
    "chinese": "當某個預測變數和 target variable 的關係取決於另一個預測變數的值時，兩個預測變數之間就有 interaction。",
    "sentence": "Two predictors have an interaction when the relationship between a predictor and the target variable depends on the value of another predictor.",
    "template": "___ depends on ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-describe-the-modeling-impacts-of-the-factor-conv",
    "theme": "Exam PA Concept",
    "chinese": "如果變數維持數值型態，tree split 會根據它們的排序來決定。",
    "sentence": "If the variables remain numeric, tree splits are determined based on their ranks.",
    "template": "If the variables remain numeric, ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-explain-two-differences-between-the-interaction-",
    "theme": "Exam PA Concept",
    "chinese": "Correlation 描述兩個變數之間的線性關係，但 interaction 描述的是三方關係。",
    "sentence": "A correlation describes the linear relationship between two variables, but an interaction describes a three-way relationship: How the relationship between a predictor and the target variable depends on the value of another predictor.",
    "template": "___ depends on ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-lambda",
    "theme": "Exam PA Concept",
    "chinese": "Lambda 是 shrinkage parameter，可用來表示 elastic net 的複雜度。",
    "sentence": "Lambda is the shrinkage parameter that can be used to index the complexity of an elastic net.",
    "template": "___ can be used to ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-variable-importance-of-regression-trees",
    "theme": "Exam PA Concept",
    "chinese": "Variable importance 會依照變數對模型的貢獻，顯示變數的重要性排序。",
    "sentence": "Variable importance shows the ordering of variables according to their contribution to the model.",
    "template": "___ shows ___ to ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-standardized-in-lasso-model",
    "theme": "Exam PA Concept",
    "chinese": "Lasso 的 regularization term 是模型係數絕對值的總和。",
    "sentence": "The lasso regulation term is the sum of absolute values of model coefficients.",
    "template": "___ is the sum of absolute values of ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-random-forest-why-random-why-forest",
    "theme": "Exam PA Concept",
    "chinese": "Random Forest 中的 random 來自於每棵樹都是用 bootstrap sample 建立。",
    "sentence": "Each tree is built on a bootstrapped sample (randomly selected with replacement).",
    "template": "___ is ___ with ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-descriptive-analytics",
    "theme": "Exam PA Concept",
    "chinese": "Descriptive analytics 著重於從過去資料取得洞察，並回答「發生了什麼？」這個問題。",
    "sentence": "Descriptive analytics focuses on insights from the past and answers the question, \"What happened?\"",
    "template": "___ focuses on ___ from ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-prescriptive-analytics",
    "theme": "Exam PA Concept",
    "chinese": "Prescriptive analytics 會建議決策選項。",
    "sentence": "Prescriptive analytics suggests decision options.",
    "template": "___ suggests ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-predictive-analytics",
    "theme": "Exam PA Concept",
    "chinese": "Predictive analytics 著重於未來，並處理「接下來可能發生什麼？」這個問題。",
    "sentence": "Predictive analytics focuses on the future and addresses the question, \"What might happen next?\"",
    "template": "___ focuses on ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-state-why-changing-the-random-seed-would-affect-",
    "theme": "Exam PA Concept",
    "chinese": "每次執行 cost-complexity pruning 演算法時，cross validation 中使用的資料分割都會被隨機指定。",
    "sentence": "Each time the cost-complexity pruning algorithm is run, the splits of data used in the cross validation are randomly assigned.",
    "template": "Each time ___ is run, ___ are randomly assigned.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-ntree-in-random-forests-hyperparameters",
    "theme": "Exam PA Concept",
    "chinese": "Ntree 是 random forest 要配適的樹的數量。",
    "sentence": "Ntree refers to the number of trees to fit for the random forest.",
    "template": "___ refers to ___ to ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-mtry-in-random-forests-hyperparameters",
    "theme": "Exam PA Concept",
    "chinese": "mtry hyperparameter 是每次分割時隨機選出並納入考慮的預測變數數量。",
    "sentence": "The mtry hyperparameter is the number of predictors chosen at random to be considered at each split.",
    "template": "The ___ hyperparameter is the number of ___ chosen at random to be considered at each split.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-nodesize-in-random-forests-hyperparameters",
    "theme": "Exam PA Concept",
    "chinese": "Nodesize 是每個 terminal node 允許的最小觀測值數量。",
    "sentence": "Nodesize is the minimum number of observations allowed in each terminal node.",
    "template": "___ is the minimum ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-maxnodes-in-random-forests-hyperparameters",
    "theme": "Exam PA Concept",
    "chinese": "Maxnodes 定義每棵樹允許的最大 terminal node 數量。",
    "sentence": "Maxnodes defines the maximum number of terminal nodes allowed in each tree.",
    "template": "___ defines ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-biplot",
    "theme": "Exam PA Concept",
    "chinese": "這張圖稱為 biplot，因為它同時顯示兩種資訊。",
    "sentence": "The plot is called a biplot because it displays two types of information: observation scores of the first two PCs (plotted on the left and bottom axes) and variable loadings of the first two PCs (plotted on the top and right axes).",
    "template": "___ is called ___ because ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-describe-a-scenario-where-a-big-shrinkage-value-",
    "theme": "Exam PA Concept",
    "chinese": "當只建立少數幾棵樹時，較大的 shrinkage 會比較適合。",
    "sentence": "When just a few trees are built, a big shrinkage would be preferable.",
    "template": "When just a few trees are built, ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-describe-the-differences-between-using-weights-a",
    "theme": "Exam PA Concept",
    "chinese": "Weight 會改變每個觀測值對模型的重要性。",
    "sentence": "Weight: Change how important each observation is to the model.",
    "template": "___ changes how important each observation is to ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-describe-the-differences-between-using-weights-a-37059a",
    "theme": "Exam PA Concept",
    "chinese": "在 GLM 中把變數作為 weight 使用，會調整每個觀測值在模型中的影響力。",
    "sentence": "Using a variable as a weight in a GLM adjusts the impact of each observation in the model.",
    "template": "___ adjusts ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-hierarchical-clustering",
    "theme": "Exam PA Concept",
    "chinese": "Hierarchical clustering 演算法一開始有 n 個 cluster，然後反覆合併最相似的觀測值，最後形成 dendrogram。",
    "sentence": "The hierarchical clustering algorithm starts with n clusters and iteratively fuses the most similar observations, resulting in a dendrogram.",
    "template": "___ starts with ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-overdispereion",
    "theme": "Exam PA Concept",
    "chinese": "資料中的變異性大於模型估計的變異數。",
    "sentence": "The variability in the data is larger than the model’s estimated variance.",
    "template": "___ is larger ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-there-are-two-ways-to-detect-the-presence-of-ove",
    "theme": "Exam PA Concept",
    "chinese": "Residual deviance 與 degrees of freedom 的比率明顯大於 1。",
    "sentence": "The ratio of the residual deviance (104,664) to the degrees of freedom (14,310) is significantly greater than 1.",
    "template": "The ratio of ___ to ___ is significantly greater than ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-shrinkage-parameter-eta-in-boosting",
    "theme": "Exam PA Concept",
    "chinese": "Eta 介於 0 和 1 之間，用來控制 boosting 學習的快慢。",
    "sentence": "Between 0 and 1, controls how slow or fast boosting learns.",
    "template": "Between ___ and ___ controls ___ or fast ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-explain-whether-oversampling-should-be-performed",
    "theme": "Exam PA Concept",
    "chinese": "Oversampling 應該在訓練資料被切成 k 個 folds 之後執行。",
    "sentence": "Oversampling should be performed after the training data is split into the k folds.",
    "template": "___ should be performed after ___ is split into ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-why-one-hot-encoding-binarization-is-avoided-in-",
    "theme": "Exam PA Concept",
    "chinese": "在 decision tree 中，不建議對 categorical variables 使用 one-hot encoding，因為這會造成資料稀疏，並大幅降低模型的計算效率與可解釋性。",
    "sentence": "In decision trees, one-hot encoding for categorical variables is discouraged, as it leads to data sparsity and significantly reduces the model's computational efficiency and interpretability.",
    "template": "In decision trees, ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-generalized-linear-model-glm",
    "theme": "Exam PA Concept",
    "chinese": "GLM 是一種模型，會假設 target 的分配並指定 link function，兩者都由分析者選擇。",
    "sentence": "GLMs are models that assume a distribution for the target and a link function, both chosen by the analyst.",
    "template": "___ are ___ that ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-generalized-linear-model-glm-non-technical",
    "theme": "Exam PA Concept",
    "chinese": "GLM 使用特徵或條件，透過公式來估計結果。",
    "sentence": "GLMs use features or conditions to estimate outcomes through a formula.",
    "template": "___ use ___ to ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-f-statistic",
    "theme": "Exam PA Concept",
    "chinese": "F-statistic 是 explained variance 與 unexplained residual variance 的比率，用來檢定 regression model 的整體顯著性。",
    "sentence": "The F-statistic is the ratio of the explained variance to the unexplained (residual) variance, used to test the global significance of a regression model.",
    "template": "The F-statistic is the ratio of the explained variance to the ___, ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-t-statistic",
    "theme": "Exam PA Concept",
    "chinese": "t-statistic 用來檢定單一預測變數係數的顯著性。",
    "sentence": "The t-statistic is used to test the significance of an individual predictor's coefficient.",
    "template": "___ is used to ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-target-leakage",
    "theme": "Exam PA Concept",
    "chinese": "Predictors 包含模型實際應用時無法取得的 target information。",
    "sentence": "Predictors include target information that is unavailable when the model is applied in practice.",
    "template": "___ include ___ when ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-roc-curve",
    "theme": "Exam PA Concept",
    "chinese": "ROC curve 用來評估 classifiers 的表現。",
    "sentence": "An receiver operating characteristic(ROC) curve is used to evaluate the performance of classifiers.",
    "template": "___ is used to ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-stepwise-selection-vs-regularization",
    "theme": "Exam PA Concept",
    "chinese": "它們都會執行 feature selection，使沒有貢獻的 predictors 被移除。",
    "sentence": "They perform feature selection, resulting in predictors that do not contribute to being dropped.",
    "template": "They ___ resulting ___ do not ___ to being ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-compare-and-contrast-roc-and-auc-in-the-context-",
    "theme": "Exam PA Concept",
    "chinese": "ROC 和 AUC 都用來評估 classifiers 的表現。",
    "sentence": "Both ROC and AUC are used to evaluate the performance of classifiers.",
    "template": "Both ___ and ___ are ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-explain-three-differences-between-fitting-a-norm",
    "theme": "Exam PA Concept",
    "chinese": "Normal linear regression model 使用 OLS 估計係數，但 GLM 使用 MLE。",
    "sentence": "The normal linear regression model estimates the coefficients using OLS(ordinary least squares) but the GLM does it using MLE(maximum likelihood estimation).",
    "template": "The ___ model ___ using ___ but ___ it using ___ estimation).",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-minsplit-in-decision-tree",
    "theme": "Exam PA Concept",
    "chinese": "Minsplit 是一個 node 要被分割所需的最小觀測值數量。",
    "sentence": "The minimum number of observations required in a node for splitting.",
    "template": "The ___ observations ___ node ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-minbucket-in-decision-tree",
    "theme": "Exam PA Concept",
    "chinese": "Minbucket 是任何 terminal node 所需的最小觀測值數量，通常稱為 minimum bucket size。",
    "sentence": "The minimum number of observations required in any terminal node, usually called “minimum bucket size”.",
    "template": "The minimum number of observations required in any terminal node, ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-cp-in-decision-tree",
    "theme": "Exam PA Concept",
    "chinese": "cp 非常小，表示只需要少量 information gain 就能進行 split，因此會產生更多 splits。",
    "sentence": "The cp is very small, meaning a small amount of information gain is required for a split to be made, leading to more splits.",
    "template": "The cp is very small, meaning a small amount of information gain is required for a split to be made, ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-maxdepth-in-decision-tree",
    "theme": "Exam PA Concept",
    "chinese": "這個參數指的是最終樹中任何 node 的最大深度，其中 root node 算作深度 0。",
    "sentence": "This parameter refers to the maximum depth of any node of the final tree, with the root node counted as depth 0.",
    "template": "This parameter refers to the ___, ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-compare-and-contrast-stepwise-selection-with-shr",
    "theme": "Exam PA Concept",
    "chinese": "Stepwise selection 和 lasso / ridge regression 都能避免對資料過度擬合，特別是在觀測值數量相對於預測變數數量很少時。",
    "sentence": "Both stepwise selection and lasso/ridge regression avoid overfitting to the data, especially when the number of observations is small compared to the number of predictors.",
    "template": "Both stepwise selection and lasso/ridge regression avoid overfitting to the ___, ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-state-the-difference-between-dissimilarity-and-l",
    "theme": "Exam PA Concept",
    "chinese": "Dissimilarity 衡量兩個個別觀測值之間的距離，而 linkage 衡量兩個觀測值群集之間的距離。",
    "sentence": "Dissimilarity measures the distance between two individual observations, while linkage measures the distance between two clusters of observations.",
    "template": "___ measures ___ while ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-how-binarization-impact-the-feature-selection",
    "theme": "Exam PA Concept",
    "chinese": "Binarization 可能進一步簡化模型，因為如果某些 factor level 對模型沒有顯著貢獻，就可以被移除。",
    "sentence": "Binarization may help simplify the model even more, as individual factor levels could be removed if they do not contribute significantly to the model.",
    "template": "___ may help simplify the model even more, as individual factor levels could be removed if they do not contribute significantly to ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-cost-complexity-pruning",
    "theme": "Exam PA Concept",
    "chinese": "Pruning 是一種降低 decision tree 複雜度並幫助避免 overfitting 的技術。",
    "sentence": "Pruning is a technique used to reduce the complexity of a decision tree and helps prevent overfitting.",
    "template": "___ reduce ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-explain-the-difference-in-the-resulting-feature-",
    "theme": "Exam PA Concept",
    "chinese": "PCA 會產生稱為 principal components 的數值特徵，而這些特徵是原始變數的線性組合。",
    "sentence": "PCA results in numeric features called principal components, which are linear combinations of the original variables.",
    "template": "PCA results in numeric features called principal components, ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-one-potential-strength-and-one-potential-weaknes",
    "theme": "Exam PA Concept",
    "chinese": "一個潛在優點是，同一個 factor 中只有有用的 dummy variables 可以保留在模型中，因此能簡化模型。",
    "sentence": "A potential strength is that only the useful dummy variables from the same factor can be retained in the model, thus simplifying the model.",
    "template": "A potential strength is that only the useful dummy variables from the same factor can be retained in the model, ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-variance",
    "theme": "Exam PA Concept",
    "chinese": "Variance 表示預測結果會如何隨使用的訓練資料而變動。",
    "sentence": "The variance indicate how much the predictions vary depending on the training data used.",
    "template": "___ indicate ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-bias",
    "theme": "Exam PA Concept",
    "chinese": "Bias 表示期望預測值與 unseen data 上實際結果的接近程度。",
    "sentence": "The bias indicates how close expected predictions and actual results are on unseen data.",
    "template": "___ indicates ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-bias-variance-trade-off",
    "theme": "Exam PA Concept",
    "chinese": "Inflexible models 具有低 variance 但高 bias，而 flexible models 具有高 variance 但低 bias。",
    "sentence": "Inflexible models have low variance but high bias, while flexible models have high variance but low bias.",
    "template": "Inflexible ___ variance but ___ while ___ high ___ but ___ bias.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-one-standard-error-rule",
    "theme": "Exam PA Concept",
    "chinese": "我們可以不選擇最小 cross-validation error 的模型，而是選擇 error 在該最小值一個標準誤以內的最簡單模型。",
    "sentence": "Instead of the minimum cross-validation error, we may select the simplest model (lowest flexibility) whose error is within one standard error of that minimum.",
    "template": "___ is ___ that ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-splitting-criteria-for-classification-decision-t",
    "theme": "Exam PA Concept",
    "chinese": "Classification decision tree 使用 entropy、Gini index 和 classification error rate 來衡量 impurity。",
    "sentence": "Classification decision tree measure impurity using entropy, Gini index, and classification error rate.",
    "template": "___ measure ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-cluster-algorithm",
    "theme": "Exam PA Concept",
    "chinese": "Cluster algorithm 一開始有 n 個 clusters，然後根據哪些觀測值最相似來反覆合併它們。",
    "sentence": "The cluster algorithm starts with n clusters and iteratively fuses them based on which observations are most similar.",
    "template": "___ starts with ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-forward-selection",
    "theme": "Exam PA Concept",
    "chinese": "Forward selection 從沒有變數開始，然後持續加入變數，直到選定指標不再改善。",
    "sentence": "Forward selection starts with no variables and then adds them until there is no improvement by the selected metric.",
    "template": "___ starts with ___ by ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-bar-charts",
    "theme": "Exam PA Concept",
    "chinese": "Bar charts 顯示 factor variable 每個 level 中的觀測值數量或比例。",
    "sentence": "Bar charts show the number (or proportion) of observations in each level of a factor variable.",
    "template": "___ show ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-a-stacked-bar-chart",
    "theme": "Exam PA Concept",
    "chinese": "Stacked bar chart 用來顯示變數各個 level 中的觀測值數量。",
    "sentence": "A stacked bar chart to show the number of observations in each level of the variable.",
    "template": "___ show ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-a-filled-bar-chart",
    "theme": "Exam PA Concept",
    "chinese": "Filled bar chart 用來顯示該變數與 target variable 之間的關係。",
    "sentence": "A filled bar chart to show the relationship between that variable and target variable.",
    "template": "___ show ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-frequency-tables",
    "theme": "Exam PA Concept",
    "chinese": "Frequency tables 提供 categorical variable 最簡單的摘要。",
    "sentence": "Frequency tables provide the simplest summary of a categorical variable.",
    "template": "___ provide ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-advantages-of-pca",
    "theme": "Exam PA Concept",
    "chinese": "PCA 可以讓我們用較少特徵建立較簡單的模型。",
    "sentence": "PCA could allow us to build a simpler model with fewer features.",
    "template": "___ could allow us to ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-principal-component-analysis-pca",
    "theme": "Exam PA Concept",
    "chinese": "Principal component analysis 是一種 unsupervised learning 技術，會建立新的不相關變數，並使 variance 最大化。",
    "sentence": "Principal component analysis is an unsupervised learning technique that creates new uncorrelated variables that maximize variance.",
    "template": "___ is an unsupervised learning technique ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-pca-loadings",
    "theme": "Exam PA Concept",
    "chinese": "Loadings 代表每個 principal component 中標準化原始變數線性組合的係數。",
    "sentence": "Loadings represent the coefficients in the linear combination of the standardized original variables for each PC.",
    "template": "___ represent ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-the-proportion-of-variance-in-pca",
    "theme": "Exam PA Concept",
    "chinese": "Proportion of variance 代表每個 principal component 解釋資料總變異的百分比。",
    "sentence": "The proportion of variance represents the percentage of the total variance in the data explained by each principal component.",
    "template": "___ represents ___ by ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-information-gain",
    "theme": "Exam PA Concept",
    "chinese": "Information gain 表示 decision tree 進行 split 時 impurity 減少的程度。",
    "sentence": "Information gain means how much impurity is reduced when a decision tree makes a split.",
    "template": "___ is ___ when ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-lasso",
    "theme": "Exam PA Concept",
    "chinese": "Lasso 在 loss function 中使用 penalty，來懲罰模型中的大型係數。",
    "sentence": "Lasso uses a penalty in the loss function that penalizes large coefficients in the model.",
    "template": "___ uses ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-structured-data",
    "theme": "Exam PA Concept",
    "chinese": "Structured data 可以放進表格中。",
    "sentence": "Structured data can fit into tables.",
    "template": "Structured ___ can ___ into ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-cross-validation",
    "theme": "Exam PA Concept",
    "chinese": "Cross-validation 透過讓每個資料點在多個 folds 中同時用於 training 和 testing 來降低 variance。",
    "sentence": "Cross-validation (CV) reduces variance by using every data point for both training and testing across multiple folds.",
    "template": "___ reduces ___ by ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-binarization",
    "theme": "Exam PA Concept",
    "chinese": "Binarization 的過程會把單一 categorical factor variable 轉換成多個 Boolean 或 binary variables。",
    "sentence": "The process of binarization turns a single categorical (factor) variable into multiple Boolean/binary variables.",
    "template": "The ___ turns ___ (factor) ___ Boolean/binary ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-proxy-variable",
    "theme": "Exam PA Concept",
    "chinese": "Proxy variables 用來代替真實資訊，通常是因為想要的資訊很難或不可能被衡量。",
    "sentence": "Proxy variables are used instead of real information, usually because the desired information is hard or impossible to measure.",
    "template": "___ are used instead of ___, usually because ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-random-forests-vs-boosting",
    "theme": "Exam PA Concept",
    "chinese": "對 Random Forests 而言，trees 會使用不同 bootstrap samples 獨立建立，確保一棵樹的建立不會影響另一棵樹。",
    "sentence": "For Random Forests, trees are built independently using separate bootstrap samples, ensuring that one tree's construction does not influence another.",
    "template": "___ are ___ that ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-why-lambda-and-alpha-are-hyperparameters",
    "theme": "Exam PA Concept",
    "chinese": "在 elastic net 中，alpha 和 lambda 是 hyperparameters，因為它們必須事先提供，而且不會由模型配適演算法最佳化。",
    "sentence": "In an elastic net, alpha and lambda are hyperparameters because they are parameters that we have to supply in advance and are not optimized by the model fitting algorithm.",
    "template": "In an elastic net, ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-describe-the-modeling-impacts-of-the-factor-conv-743015",
    "theme": "Exam PA Concept",
    "chinese": "將變數視為 numeric，代表假設它對 target 有固定的邊際影響和單調關係，並能提供較有效率且 variance 較低的模型。",
    "sentence": "Treating a variable as numeric assumes a constant marginal impact and a monotonic relationship with the target, offering a more efficient model with lower variance.",
    "template": "Treating ___ as numeric ___ marginal ___ and ___ monotonic ___ with ___ target, ___ efficient ___ with ___ variance.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-perfect-collinearity",
    "theme": "Exam PA Concept",
    "chinese": "Perfect collinearity 發生在某個 predictor 是同一模型中其他 predictors 的線性組合時。",
    "sentence": "Perfect collinearity happens when a predictor is a linear combination of the other predictors in the same model.",
    "template": "___ happens ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-link-function",
    "theme": "Exam PA Concept",
    "chinese": "Link function 會把 target mean 和 predictors 連結起來。",
    "sentence": "The link function relates the target mean to the predictors.",
    "template": "The ___ the ___ to the ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-how-clustering-can-be-used-to-develop-features-f",
    "theme": "Exam PA Concept",
    "chinese": "Cluster analysis 可用來建立一個 factor variable，用來識別資料中不同觀測值被分派到的 cluster group。",
    "sentence": "Cluster analysis can be used to create a factor variable identifying the cluster groups that different observations in the data are assigned to.",
    "template": "___ can be used to ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-stratified-sampling-steps-for-variable-region-fa",
    "theme": "Exam PA Concept",
    "chinese": "Stratified sampling 會從資料中每個 strata 或 group 獨立抽取一組隨機紀錄。",
    "sentence": "Stratified sampling works by independently drawing a set of random records from each strata or group in your data.",
    "template": "___ works ___ from ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-the-benefits-of-stratified-sampling",
    "theme": "Exam PA Concept",
    "chinese": "Stratified sampling 的好處是能根據 stratification variables 產生具代表性的 training set 和 test set。",
    "sentence": "The benefits of stratified sampling is to produce representative training and test sets with respect to the stratification variables, which is often the target variables.",
    "template": "The benefits of stratified sampling is to produce ___, ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-the-key-assumptions-of-the-generalized-linear-mo",
    "theme": "Exam PA Concept",
    "chinese": "資料中的所有觀測值彼此獨立。",
    "sentence": "All observations in the data are independent.",
    "template": "All observations in ___ are ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-in-considering-a-random-forest-model-you-produce",
    "theme": "Exam PA Concept",
    "chinese": "這張圖顯示 cross-validation 檢查了 6 個不同的 mtry 值。",
    "sentence": "The plot reveals that six different values of mtry were examined by cross-validation.",
    "template": "The ___ six ___ mtry were ___ by cross-validation.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-disadvantages-of-pca",
    "theme": "Exam PA Concept",
    "chinese": "使用部分 principal components 會導致部分資訊損失。",
    "sentence": "Using a subset of the principal components results in some information loss.",
    "template": "Using ___ the ___ in ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-interpret-the-complexity-parameter-table-recomme",
    "theme": "Exam PA Concept",
    "chinese": "Complexity parameter（CP）決定進行 split 所需的 information gain 門檻。",
    "sentence": "The complexity parameter (CP) determines the threshold of information gain required for a split to be made.",
    "template": "The ___ determines ___ information ___ a ___ to be made.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-bagging",
    "theme": "Exam PA Concept",
    "chinese": "Bagging 是同時在資料的不同隨機子集上訓練多個模型的過程。",
    "sentence": "Bagging (bootstrap aggregating) is the process of training multiple models at the same time on different random subsets of the data.",
    "template": "___ is the process ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-bootstrapping",
    "theme": "Exam PA Concept",
    "chinese": "Bootstrapping 是指從原始資料集中反覆有放回抽取相同大小的隨機樣本，以估計統計量的變異性或抽樣分配。",
    "sentence": "Bootstrapping involves repeatedly drawing random sampling of the same size from the original dataset with replacement to estimate the variability or sampling distribution of a statistic.",
    "template": "___ involves ___ from ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-compare-and-contrast-single-decision-tree-and-tr",
    "theme": "Exam PA Concept",
    "chinese": "兩種方法都可以用來建立 regression 或 classification models，並根據 impurity 或 information gain measures 決定 splits。",
    "sentence": "Both methods can be used to build regression or classification models, determining splits based on impurity or information gain measures.",
    "template": "Both methods can be used to build ___, ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-describe-one-limitation-of-a-partial-dependence-",
    "theme": "Exam PA Concept",
    "chinese": "Partial dependence plot 會將目標變數固定在特定值，並對其他變數下的預測取平均；這樣做會忽略變數之間的關係並假設獨立。",
    "sentence": "A partial dependence plot holds the variable of interest at fixed values, averages predictions over the other variables, and by doing so ignores their relationships and assumes independence.",
    "template": "A ___ holds ___ interest ___ averages ___ other ___ and by doing ___ relationships and ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-bic-2l-p-1-ln-n",
    "theme": "Exam PA Concept",
    "chinese": "BIC 等於 -2 倍 log-likelihood 加上參數數量乘以樣本數自然對數的懲罰。",
    "sentence": "BIC = -2l + (p+1) ln(N)",
    "template": "BIC ___ (p+1) ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-cutoff",
    "theme": "Exam PA Concept",
    "chinese": "模型產生機率預測後，我們會決定一個 cutoff，以取得正類和負類的預測。",
    "sentence": "After a model produces predictions of probabilities, we decide a cutoff to obtain predictions of positive and negative.",
    "template": "After ___ predictions ___ decide ___ to obtain ___ and ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-the-process-of-searching-for-the-optimal-value-o",
    "theme": "Exam PA Concept",
    "chinese": "Lambda 的 optimal value 可以透過 cross-validation 找到。",
    "sentence": "The optimal value for lambda can be found using cross-validation.",
    "template": "The ___ lambda can be ___ using ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-undersampling",
    "theme": "Exam PA Concept",
    "chinese": "Undersampling 會刪除 majority class 中的觀測值。",
    "sentence": "Undersampling deletes observations in the majority class.",
    "template": "___ deletes ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-oversampling",
    "theme": "Exam PA Concept",
    "chinese": "Oversampling 會複製 minority class 中的觀測值。",
    "sentence": "Oversampling duplicates observations in the minority class.",
    "template": "___ duplicates ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-critique-the-use-of-a-training-data-based-metric",
    "theme": "Exam PA Concept",
    "chinese": "雖然 AIC 是快速且常用的模型比較工具，但它只是基於訓練資料的間接估計。",
    "sentence": "Although AIC is a fast and common tool for comparing models, it is only an indirect estimate based on the training data.",
    "template": "Although AIC is a fast and common tool for comparing models, ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-describe-the-k-mean-steps-to-calculate-the-withi",
    "theme": "Exam PA Concept",
    "chinese": "計算每個 cluster 的 centroid。",
    "sentence": "Calculate the centroid of each cluster.",
    "template": "Calculate ___ each ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-standardization-of-clustering",
    "theme": "Exam PA Concept",
    "chinese": "縮放或標準化變數可確保它們都在相同尺度上，並在 clustering 中得到相同權重。",
    "sentence": "Scaled or standardizing variables ensures that they are all on the same scale and will get an equal weight in the clustering.",
    "template": "___ ensures ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-three-assumptions-of-ordinary-least-squares-regr",
    "theme": "Exam PA Concept",
    "chinese": "殘差服從常態分配。",
    "sentence": "The residuals have a normal distribution.",
    "template": "The ___ normal ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-k-means-clustering",
    "theme": "Exam PA Concept",
    "chinese": "K-means clustering 從隨機初始分派開始，並反覆更新直到 clusters 穩定。",
    "sentence": "K-means clustering works by starting with random initial assignments and iteratively updating them until the clusters stabilize.",
    "template": "___ works ___ with ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-box-plot",
    "theme": "Exam PA Concept",
    "chinese": "Boxplots 提供資料分布的視覺表示，包括最小值、第一四分位數、中位數、第三四分位數、最大值，也能辨識潛在 outliers。",
    "sentence": "Boxplots provide a visual representation of the distribution of the data, including the minimum, first quartile (25th percentile), median (50th percentile), third quartile (75th percentile), maximum, and also identify potential outliers.",
    "template": "___ provide ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-split-boxplot",
    "theme": "Exam PA Concept",
    "chinese": "Split boxplot 是 categorical variable 和 numeric variable 之間 bivariate visualization 的一個例子。",
    "sentence": "A split boxplot is one example of a bivariate visualization between a categorical and numeric variable.",
    "template": "___ is one example ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-hierarchical-clustering-vs-k-means-clustering",
    "theme": "Exam PA Concept",
    "chinese": "在 k-means clustering 中，cluster 數量會先被選定，然後再決定 clusters；但在 hierarchical clustering 中，cluster 數量是在建立 clusters 後才選定。",
    "sentence": "In k-means clustering, the number of clusters is chosen first and then the clusters are determined, but in hierarchical clustering, the number of clusters is chosen after creating the clusters.",
    "template": "In k-means clustering, ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-the-difference-between-accuracy-and-auc",
    "theme": "Exam PA Concept",
    "chinese": "Accuracy 是正確預測數量與總預測數量的比率。",
    "sentence": "Accuracy is the ratio of the number of correct predictions to the total number of predictions.",
    "template": "___ is the ratio of ___ to ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-random-sampling",
    "theme": "Exam PA Concept",
    "chinese": "每筆紀錄都有相同機率被無放回抽樣。",
    "sentence": "Each record has an equal probability of being sampled without replacement.",
    "template": "Each ___ equal ___ sampled ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-describe-two-ways-impurity-measures-are-used-in-",
    "theme": "Exam PA Concept",
    "chinese": "在 classification tree 中，impurity measures 的一種用途是決定 decision tree 下一個 split 是否應該被執行。",
    "sentence": "One way that impurity measures are used in a classification tree is to decide which split in the decision tree (if any) should be made next.",
    "template": "___ measures ___ to ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-best-subset-vs-stepwise-selection",
    "theme": "Exam PA Concept",
    "chinese": "Best subset 會找到最佳的 predictors 集合，也就是 global minimum；而 stepwise selection 會找到 local minimum，可能有比 global minimum 更高的 error。",
    "sentence": "Best subset will find the optimal set of predictors, i.e., the global minimum, whereas stepwise selection will find a local minimum which may have a higher error than the global minimum.",
    "template": "Best ___ will ___ the ___ predictors, ___ minimum, ___ will ___ minimum ___ may ___ a ___ than the ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-explain-how-binarizing-factor-variables-in-advan",
    "theme": "Exam PA Concept",
    "chinese": "事先 binarizing factor variables 對 fitted GLM 的結果沒有影響。",
    "sentence": "Binarizing factor variables in advance has no effect on the results of a fitted GLM.",
    "template": "Binarizing ___ advance ___ on ___ a ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-describe-the-handling-of-categorical-variables-i",
    "theme": "Exam PA Concept",
    "chinese": "Linear models 會為 categorical variable 中除了 base level 以外的每個 level 配適一個係數。",
    "sentence": "Linear models fit a coefficient for each level of a categorical variable except the base level.",
    "template": "Linear ___ coefficient ___ of ___ except ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-curse-of-dimensionality",
    "theme": "Exam PA Concept",
    "chinese": "Curse of dimensionality 指的是所謂的 small n, large p 情境，也就是觀測值 n 的數量相對於特徵 p 的數量很少。",
    "sentence": "The curse of dimensionality refers to the so-called \"small n, large p\" setting, where the number of observations n is small compared to the number of features p.",
    "template": "The curse of dimensionality refers to the ___, ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-elastic-net-regression",
    "theme": "Exam PA Concept",
    "chinese": "Elastic net regression 包含一個捕捉 regression coefficients 大小的 penalty term。",
    "sentence": "Elastic net regression includes a penalty term captures the size of the regression coefficients.",
    "template": "___ includes ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-the-height-in-the-dendrogram",
    "theme": "Exam PA Concept",
    "chinese": "Height 是 hierarchical clustering algorithm 每一步合併兩個最接近 clusters 時的 inter-cluster dissimilarity。",
    "sentence": "The height is the inter-cluster dissimilarity between the two closest clusters when they are fused in each step of the hierarchical clustering algorithm.",
    "template": "___ is ___ when ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-80-20-train-test-split-vs-5-fold-cross-validatio",
    "theme": "Exam PA Concept",
    "chinese": "80% / 20% train/test split 和 5-fold cross-validation 都使用 80% 的資料訓練候選模型，並使用 20% 的資料測試模型。",
    "sentence": "80%/20% train/test split and 5-fold cross-validation use 80% of the data to train the potential models and 20% of the data to test the models.",
    "template": "___ use ___ to ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-histograms-and-box-plots-are-used-for-continuous",
    "theme": "Exam PA Concept",
    "chinese": "Histograms 和 box plots 用於 continuous numeric variables。",
    "sentence": "Histograms and box plots are used for continuous numeric variables.",
    "template": "___ and ___ are used for ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-tweedie",
    "theme": "Exam PA Concept",
    "chinese": "Tweedie 是同時具有 discrete 和 continuous components 的混合分配。",
    "sentence": "Tweedie is a mixed distribution with both discrete and continuous components.",
    "template": "___ is a mixed distribution ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-describe-how-the-lambda-hyperparameter-impacts-v",
    "theme": "Exam PA Concept",
    "chinese": "較大的 lambda 會增加計算 penalty term 時給予每個係數大小的權重。",
    "sentence": "A larger lambda increases the weight given to the size of each coefficient when calculating the penalty term.",
    "template": "A ___ the ___ to the ___ coefficient when ___ penalty ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-the-differences-between-the-lasso-and-drop1",
    "theme": "Exam PA Concept",
    "chinese": "Drop1 要求建模者手動移除 predictor。",
    "sentence": "Drop1 requires the modeler to manually remove the predictor.",
    "template": "___ requires ___ to ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-intercept-only-glm",
    "theme": "Exam PA Concept",
    "chinese": "Intercept-only GLM 不使用任何 predictors 的資訊，並可被視為最基準的 predictive model。",
    "sentence": "The intercept-only GLM does not use the information of any predictors and can be regarded as the most benchmark predictive model.",
    "template": "___ use ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-drop1",
    "theme": "Exam PA Concept",
    "chinese": "Drop1 會顯示個別移除每個 predictor variable 對 AIC 的影響。",
    "sentence": "Drop1 shows the AIC impact from individually removing each predictor variable.",
    "template": "___ shows ___ from ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-domain-gaussian-all-real-values-poisson-negative",
    "theme": "Exam PA Concept",
    "chinese": "Gaussian domain 包含所有實數。",
    "sentence": "The Gaussian domain includes all real values.",
    "template": "___ includes ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-regression-trees",
    "theme": "Exam PA Concept",
    "chinese": "Regression tree 使用 target 和 predicted values 之間的 residual sum of squares error。",
    "sentence": "Use residual sum of squares error (RSS, known as sum of squared estimate of errors (SSE)) between target and predicted values.",
    "template": "Use ___ squares ___ as ___ estimate ___ between ___ and ___ values.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-backward-selection",
    "theme": "Exam PA Concept",
    "chinese": "Backward selection 從所有變數開始，並依序移除變數，直到選定準則不再改善。",
    "sentence": "Starts with all the variables and sequentially removes them until no improvement by selected criterion.",
    "template": "___ removes ___ by ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-visualizing-categorical-variables",
    "theme": "Exam PA Concept",
    "chinese": "使用 frequency tables、counts、percentages 和 bar charts 來視覺化這些資訊。",
    "sentence": "Use frequency tables, counts, percentages, and bar charts to visualize this information.",
    "template": "Use ___ percentages, and ___ to ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-residuals",
    "theme": "Exam PA Concept",
    "chinese": "預測值與觀測值之間的差異稱為 residual。",
    "sentence": "The difference between predicted and observed is called the residual.",
    "template": "The difference between ___ and ___ is called ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-greedy",
    "theme": "Exam PA Concept",
    "chinese": "Decision trees 的限制是，它們在每個當前步驟都根據最大 information gain 做 greedy splits，而不是產生整體最佳配適模型。",
    "sentence": "Decision trees have a limitation in that they make greedy splits based on the largest information gain at each current step, rather than to produce the best fitting overall model.",
    "template": "Decision trees have a limitation in that they make greedy splits based on the largest information gain at each current step, ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-explain-the-differences-between-using-a-variable",
    "theme": "Exam PA Concept",
    "chinese": "當一個變數在 GLM 中被作為 weight 使用時，它會調整每個觀測值在模型中的影響力。",
    "sentence": "When a variable is used as a weight in a GLM, it adjusts the influence of each observation in the model.",
    "template": "When a variable is used as a weight in a GLM, ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-explain-what-an-interaction-variable-might-captu",
    "theme": "Exam PA Concept",
    "chinese": "Interaction 可讓模型為每個 DayType 估計不同的 transformed month coefficients。",
    "sentence": "An interaction would allow the model to estimate different transformed month coefficients for each DayType.",
    "template": "___ allow ___ to ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-interpret-the-na-values-in-the-sunday-ind-variab",
    "theme": "Exam PA Concept",
    "chinese": "這個模型顯示 perfect multicollinearity。",
    "sentence": "This model shows the perfect multicollinearity.",
    "template": "___ shows ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-feature-importance-vs-partial-dependence-plots",
    "theme": "Exam PA Concept",
    "chinese": "Feature importance 和 partial dependence plots 都是用來解釋 random forests 等 black box models 的方法。",
    "sentence": "Feature importance and partial dependence plots are both methods used to interpret \"black box\" models like random forests.",
    "template": "___ and ___ are both methods used to ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-interpret-standard-deviation-and-proportion-of-v",
    "theme": "Exam PA Concept",
    "chinese": "PC1 的標準差 1.6983 遠大於 PC2 和 PC3，表示它捕捉了 SAT features 中大部分變異。",
    "sentence": "A standard deviation of 1.6983 for PC1 is much greater than that for PC2 and PC3, implying that it captures most of the variation in the SAT features.",
    "template": "___ captures ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-pca-is-useful-if-the-dataset-has-a-large-number-",
    "theme": "Exam PA Concept",
    "chinese": "如果資料集有大量變數 p，而不是大量觀測值 n，PCA 會很有用。",
    "sentence": "PCA is useful if the dataset has a large number of variables(p), not a large number of observations(n).",
    "template": "PCA is useful if the dataset has a large number of variables(p), ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-calculate-the-rmse-and-mae-for-the-test-data-abo",
    "theme": "Exam PA Concept",
    "chinese": "RMSE 是 95,754.90，而 MAE 是 87,000。",
    "sentence": "RMSE is 95,754.90 and MAE is 87,000.",
    "template": "___ is ___ and ___ is ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-between-root-mean-square-error-rmse-and-mean-abs",
    "theme": "Exam PA Concept",
    "chinese": "我建議使用 MAE，因為它對 outliers 較 robust。",
    "sentence": "I recommend MAE because it is more robust to outliers.",
    "template": "I recommend ___ because it is more robust to ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-explain-the-advantages-and-disadvantages-of-appl",
    "theme": "Exam PA Concept",
    "chinese": "這個轉換會移除變數的右偏，使其分布更對稱。",
    "sentence": "The transformation removes right-skew from the variable, making its distribution more symmetric.",
    "template": "___ removes ___ from ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-the-leverage-plot",
    "theme": "Exam PA Concept",
    "chinese": "Leverage plot 可用來辨識具有 high leverage 的 outliers，代表它們對模型係數估計有很大影響。",
    "sentence": "The leverage plot can be used to identify outliers with high leverage, meaning they have a large impact on the model coefficient estimates.",
    "template": "The leverage plot can be used to identify ___, ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-how-to-construct-a-stratified-sample-of-10-obser",
    "theme": "Exam PA Concept",
    "chinese": "我會先建立一個名為 Region_to_region 的額外變數，包含航班往返的兩個地區。",
    "sentence": "I would start by constructing an additional variable called \"Region_to_region\" that contains the two regions that a flight goes between.",
    "template": "I would ___ by constructing ___ called ___ the ___ a ___ between.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-linkage-inter-cluster-dissimilarity-complete-lar",
    "theme": "Exam PA Concept",
    "chinese": "Complete linkage 使用最大的 pairwise dissimilarity。",
    "sentence": "Complete linkage uses the largest pairwise dissimilarity.",
    "template": "___ uses ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-describe-the-trade-off-involved-when-selecting-t",
    "theme": "Exam PA Concept",
    "chinese": "增加 training set size 會提高模型 robustness 和 signal learning，但會減少 test set size，使 unseen data 上的 predictive performance 評估較不可靠。",
    "sentence": "Increasing the training set size improves model robustness and signal learning, but reduces the test set size, making the evaluation of predictive performance on unseen data less reliable.",
    "template": "___ reduces ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-interpret-the-estimates-of-the-intercept-and-the",
    "theme": "Exam PA Concept",
    "chinese": "當所有 numeric variables 等於 0 且所有 categorical variables 位於 baseline levels 時，通過的 odds 估計為 1.6487。",
    "sentence": "The odds of passing is estimated to be 1.6487 when all numeric variables equal 0 and all categorical variables are at their baseline levels.",
    "template": "___ is ___ when ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-nrounds-in-a-boosting",
    "theme": "Exam PA Concept",
    "chinese": "這是 boosting iterations 的最大數量。",
    "sentence": "This is the maximum number of boosting iterations.",
    "template": "___ is the maximum ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-describe-the-characteristics-of-the-prediction-p",
    "theme": "Exam PA Concept",
    "chinese": "由於沒有 predictors，intercept-only GLM 會給所有觀測值相同的 predicted pass probability。",
    "sentence": "Because of the absence of predictors, the intercept-only GLM will assign all observations (whether training or test observations) the same predicted pass probability, which is the pass rate on the training set, regardless of students' characteristics.",
    "template": "Because of the absence of predictors, ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-granularity",
    "theme": "Exam PA Concept",
    "chinese": "Granularity 指的是變數被衡量得多精確，換句話說，就是它包含的細節程度。",
    "sentence": "Granularity refers to how precisely a variable is measured, or in other words, the level of detail it contains.",
    "template": "Granularity refers to how precisely a variable is measured, or in other words, ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-explain-the-rationale-behind-the-pearson-statist",
    "theme": "Exam PA Concept",
    "chinese": "Pearson statistic 是觀測值與預測值差異平方除以預測值後，對所有觀測值加總的比率。",
    "sentence": "The Pearson statistic is the ratio of the squared difference between observed and predicted values to the predicted value, summed across all observations.",
    "template": "The Pearson statistic is the ratio of the squared difference between observed and predicted values to the ___, ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-explain-how-the-pearson-statistic-can-be-used-to",
    "theme": "Exam PA Concept",
    "chinese": "為了選擇 optimal model，我們會計算每個候選模型在 test set 上的 Pearson statistic。",
    "sentence": "To select the optimal model, we evaluate each candidate by calculating its Pearson statistic on the test set.",
    "template": "To select ___, ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-show-that-the-pearson-statistic-for-the-intercep",
    "theme": "Exam PA Concept",
    "chinese": "Poisson 的 canonical link 是 log link。",
    "sentence": "The canonical link for Poisson (which is the target distribution of the intercept-only GLM, as the model formula shows) is the log link, so the prediction produced by the model is = û = e -2.66081 = 0.069892, which applies to all observations.",
    "template": "The canonical link for ___ is ___, so the prediction produced by the model is ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-backward-selection-is-the-default-of-the-stepaic",
    "theme": "Exam PA Concept",
    "chinese": "Backward selection 是 stepAIC() function 的預設方法。",
    "sentence": "Backward selection is the default of the stepAIC() function.",
    "template": "___ is the default ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-discuss-two-similarities-in-the-formulation-of-r",
    "theme": "Exam PA Concept",
    "chinese": "兩者都涉及最小化由兩個項目組成的 penalized objective function。",
    "sentence": "The second term serves as a penalty term to hedge against overfitting.",
    "template": "The ___ as ___ to ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-describe-how-regularization-works-in-a-glm",
    "theme": "Exam PA Concept",
    "chinese": "Regularized regression 透過在 GLM 的 training deviance 中加入基於 coefficient size 的 penalty term 來避免 overfitting。",
    "sentence": "Regularized regression (Ridge, Lasso, and Elastic Net) prevents overfitting by adding a penalty term based on coefficient size to the GLM's training deviance.",
    "template": "___ prevents ___ by ___.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  },
  {
    "id": "exam-pa-interaction-depth-in-a-boosting",
    "theme": "Exam PA Concept",
    "chinese": "這個 hyperparameter 控制 boosted model 中 terminal nodes 的最大深度。",
    "sentence": "The hyperparameter controls the maximum depth of terminal nodes for the boosted model.",
    "template": "The ___ maximum ___ nodes ___ model.",
    "analysis": [
      "先抓本句主詞與真正有時態的動詞。",
      "再把定義、用途或限制補完整。",
      "保留 PA 專有名詞，例如 AIC、GLM、PCA、cutoff。"
    ],
    "prompt": ""
  }
];
