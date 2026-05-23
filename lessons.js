window.englishLessons = [
  {
    id: "recommend-model-2",
    theme: "Model Recommendation",
    chinese: "我建議使用模型 2，因為它在測試資料上表現最好，而且比完整模型更容易解釋。",
    sentence: "I recommend using Model 2 because it performs best on the test data and is easier to interpret than the full model.",
    template: "I recommend using ___ because it ___ and ___.",
    analysis: ["主幹是 I recommend using Model 2，先給結論。", "because 後面接兩個理由：表現與可解釋性。", "than the full model 提供比較基準。"],
    prompt: "我建議使用 random forest，因為它的驗證 RMSE 較低，而且能捕捉非線性關係。"
  },
  {
    id: "although-tradeoff",
    theme: "Trade-off",
    chinese: "雖然這個模型的訓練表現較好，但它可能較不適合部署，因為它比較複雜。",
    sentence: "Although this model performs better on the training data, it may be less suitable for deployment because it is more complex.",
    template: "Although ___, it may be less suitable for ___ because ___.",
    analysis: ["Although 先承認優點，再回到主要判斷。", "may be less suitable 語氣保留但立場清楚。", "because 把部署限制說明清楚。"],
    prompt: "雖然 lasso 的變數較少，但它可能較不適合作為最終模型，因為測試 AUC 較低。"
  },
  {
    id: "appears-overfit",
    theme: "Validation",
    chinese: "這個模型似乎過度擬合訓練資料，因為驗證資料上的表現明顯比訓練資料差。",
    sentence: "The model appears to overfit the training data, as its validation performance is notably worse than its training performance.",
    template: "The model appears to ___, as ___ is notably worse than ___.",
    analysis: ["appears to 適合根據模型輸出做推論。", "as 等於 because，用來接證據。", "validation performance 和 training performance 是核心比較。"],
    prompt: "這個模型似乎比較穩定，因為它在訓練資料和測試資料上的表現相近。"
  },
  {
    id: "holding-constant",
    theme: "Interpretation",
    chinese: "在其他變數不變的情況下，X 增加與目標變數較高的預測值有關。",
    sentence: "Holding other variables constant, an increase in X is associated with a higher predicted value of the target variable.",
    template: "Holding other variables constant, an increase in ___ is associated with ___.",
    analysis: ["Holding other variables constant 是係數解讀的標準開頭。", "is associated with 避免過度宣稱因果。", "predicted value 表示這是模型內的解讀。"],
    prompt: "在其他變數不變的情況下，年齡增加與 claim amount 較高的預測值有關。"
  },
  {
    id: "not-appropriate",
    theme: "Critique",
    chinese: "PCA 不適合這個資料集，因為變數數量少，而且多數變數是類別型變數。",
    sentence: "PCA is not appropriate for this dataset because it has a small number of variables and many of them are categorical.",
    template: "___ is not appropriate for this dataset because ___ and ___.",
    analysis: ["not appropriate for this dataset 比 not good 更正式。", "because 後面要連到資料特性。", "兩個理由可以提高完整度。"],
    prompt: "線性模型不適合這個問題，因為關係可能是非線性的，而且有重要的交互作用。"
  },
  {
    id: "chart-indicates",
    theme: "Visualization",
    chinese: "這張圖顯示 Hour 和 Direction 是此模型中最重要的兩個預測變數。",
    sentence: "The chart indicates that Hour and Direction are the two most important predictors in this model.",
    template: "The chart indicates that ___ are the most important ___ in this model.",
    analysis: ["The chart indicates that 讓圖表成為證據來源。", "most important predictors 是直接結論。", "in this model 限定解讀範圍。"],
    prompt: "這張圖顯示 Month 和 Prior Claims 是此模型中最重要的兩個變數。"
  },
  {
    id: "however-risk",
    theme: "Business Risk",
    chinese: "然而，降低 cutoff 也會降低 specificity，這表示可能會有更多不必要的加派人力。",
    sentence: "However, lowering the cutoff also reduces specificity, which means there may be more unnecessary staffing increases.",
    template: "However, ___ also reduces ___, which means ___.",
    analysis: ["However 用來轉向代價。", "which means 把技術指標翻成商業意義。", "there may be more 用保守語氣描述風險。"],
    prompt: "然而，提高 cutoff 也會降低 sensitivity，這表示可能會錯過更多高風險客戶。"
  },
  {
    id: "further-analysis",
    theme: "Next Step",
    chinese: "在採用這個模型之前，應進一步分析模型在不同客群中的表現。",
    sentence: "Before adopting this model, further analysis should be performed to assess its performance across different customer segments.",
    template: "Before adopting ___, further analysis should be performed to assess ___.",
    analysis: ["Before adopting 設定決策時點。", "should be performed 是正式建議語氣。", "across segments 表示檢查穩定性。"],
    prompt: "在部署這個模型之前，應進一步分析它在不同年份中的表現。"
  },
  {
    id: "data-cleaning",
    theme: "Data Cleaning",
    chinese: "刪除這些觀測值可能會造成偏誤，因為缺失值本身可能與目標變數有關。",
    sentence: "Removing these observations may introduce bias because the missing values may be related to the target variable.",
    template: "Removing ___ may introduce bias because ___ may be related to ___.",
    analysis: ["Removing 是 Ving 當主詞。", "may introduce bias 是資料清理風險常用語。", "target variable 把問題接回模型目的。"],
    prompt: "刪除高收入客戶可能會造成偏誤，因為收入可能與購買機率有關。"
  },
  {
    id: "residual-plot",
    theme: "Diagnostics",
    chinese: "殘差圖顯示殘差變異隨著 fitted value 增加而變大。",
    sentence: "The residual plot shows that the variance of the residuals increases as the fitted value increases.",
    template: "The ___ plot shows that ___ increases as ___ increases.",
    analysis: ["shows that 後面接完整觀察。", "variance of the residuals 對應 homoscedasticity。", "as A increases, B increases 描述趨勢。"],
    prompt: "Q-Q plot 顯示殘差右尾比常態分配更厚。"
  },
  {
    id: "simple-model",
    theme: "Parsimony",
    chinese: "較簡單的模型較受偏好，因為它有相近的預測表現，而且較容易向客戶解釋。",
    sentence: "The simpler model is preferred because it has similar predictive performance and is easier to explain to the client.",
    template: "The ___ model is preferred because it has ___ and is easier to ___.",
    analysis: ["is preferred 是正式被動語氣。", "similar performance 表示沒有犧牲太多表現。", "explain to the client 接回商業溝通。"],
    prompt: "較小的模型較受偏好，因為它有相近的 AUC，而且較容易部署。"
  },
  {
    id: "limitation-pdp",
    theme: "Limitation",
    chinese: "這個圖的一個限制是它可能會包含資料中不存在的變數組合。",
    sentence: "One limitation of this plot is that it may include combinations of variables that do not occur in the data.",
    template: "One limitation of ___ is that it may ___.",
    analysis: ["One limitation of 是限制題萬用開頭。", "is that 後面接完整句。", "do not occur in the data 說明不合理組合。"],
    prompt: "這個模型的一個限制是它可能不容易向非技術客戶解釋。"
  },
  {
    id: "executive-summary",
    theme: "Executive Summary",
    chinese: "總結來說，模型可以幫助客戶辨識高風險案件，但結果應與商業判斷一起使用。",
    sentence: "In summary, the model can help the client identify high-risk cases, but the results should be used together with business judgment.",
    template: "In summary, the model can help ___, but ___ should be used together with ___.",
    analysis: ["In summary 適合 executive summary。", "can help the client 強調商業價值。", "but 後面補限制。"],
    prompt: "總結來說，模型可以幫助公司預測需求，但預測結果應與營運限制一起考量。"
  },
  {
    id: "interaction",
    theme: "Model Enhancement",
    chinese: "加入交互作用項可以讓模型反映這個關係在不同地點之間有所不同。",
    sentence: "Adding an interaction term allows the model to reflect that the relationship differs across locations.",
    template: "Adding ___ allows the model to reflect that ___ differs across ___.",
    analysis: ["Adding an interaction term 是方法。", "allows the model to 是方法的作用。", "differs across locations 說明分群差異。"],
    prompt: "加入 Month 和 Region 的交互作用項可以讓模型反映季節效果在不同地區之間有所不同。"
  },
  {
    id: "threshold",
    theme: "Classification",
    chinese: "降低門檻會增加 positive predictions，因此通常會提高 sensitivity 但降低 specificity。",
    sentence: "Lowering the threshold increases positive predictions, so it typically increases sensitivity but decreases specificity.",
    template: "Lowering ___ increases ___, so it typically increases ___ but decreases ___.",
    analysis: ["Lowering the threshold 是動作當主詞。", "so 連接動作與後果。", "increases...but decreases... 表示取捨。"],
    prompt: "提高門檻會減少 positive predictions，因此通常會降低 sensitivity 但提高 specificity。"
  },
  {
    id: "missing-values",
    theme: "EDA",
    chinese: "缺失值比例很低，因此用中位數補值不太可能明顯影響模型結果。",
    sentence: "The proportion of missing values is low, so median imputation is unlikely to materially affect the model results.",
    template: "The proportion of ___ is low, so ___ is unlikely to materially affect ___.",
    analysis: ["proportion 量化問題大小。", "is unlikely to materially affect 是保守判斷。", "model results 接回模型結果。"],
    prompt: "離群值比例很低，因此移除這些資料不太可能明顯影響模型結果。"
  },
  {
    id: "nonlinear",
    theme: "Relationship",
    chinese: "這個關係看起來不是線性的，因此樹模型可能比線性模型更適合。",
    sentence: "The relationship does not appear to be linear, so a tree-based model may be more appropriate than a linear model.",
    template: "The relationship does not appear to be ___, so ___ may be more appropriate than ___.",
    analysis: ["does not appear to be 是圖形推論語氣。", "so 接模型選擇含義。", "more appropriate than 提供比較。"],
    prompt: "這個關係看起來不是單調的，因此把 DayOfWeek 當類別變數可能比當數值變數更適合。"
  },
  {
    id: "business-context",
    theme: "Communication",
    chinese: "從商業角度來看，錯過真正的高風險案件比誤報更昂貴。",
    sentence: "From a business perspective, missing a truly high-risk case is more costly than generating a false positive.",
    template: "From a business perspective, ___ is more costly than ___.",
    analysis: ["From a business perspective 接回客戶問題。", "missing... 是 Ving 片語當主詞。", "more costly than 說明錯誤成本。"],
    prompt: "從商業角度來看，人力不足比短暫人力過剩更昂貴。"
  },
  {
    id: "standardize",
    theme: "Lasso",
    chinese: "變數需要標準化，因為 lasso penalty 會受到變數尺度影響。",
    sentence: "The variables should be standardized because the lasso penalty is affected by the scale of the predictors.",
    template: "The variables should be ___ because ___ is affected by ___.",
    analysis: ["should be standardized 是明確程序建議。", "because 後面講機制。", "scale of the predictors 是 lasso/ridge 關鍵。"],
    prompt: "連續變數需要轉換，因為線性模型可能受到高度偏態分配影響。"
  },
  {
    id: "not-enough",
    theme: "Evidence",
    chinese: "這個結果本身不足以支持部署模型，因為它沒有顯示模型在未見資料上的表現。",
    sentence: "This result alone is not sufficient to support deploying the model because it does not show how the model performs on unseen data.",
    template: "This result alone is not sufficient to support ___ because it does not show ___.",
    analysis: ["alone 強調單一證據不足。", "not sufficient to support 是正式決策語言。", "unseen data 指泛化能力。"],
    prompt: "訓練準確率本身不足以支持選擇模型，因為它沒有顯示模型在測試資料上的表現。"
  },
  {
    id: "auc-comparison",
    theme: "Model Comparison",
    chinese: "模型 A 的測試 AUC 較高，表示它在區分正負案例方面表現較好。",
    sentence: "Model A has a higher test AUC, indicating that it performs better at distinguishing positive cases from negative cases.",
    template: "___ has a higher ___, indicating that it performs better at ___.",
    analysis: ["indicating that 用分詞補充前面結果。", "performs better at 後面接 Ving。", "positive from negative 是分類語境。"],
    prompt: "模型 B 的測試 RMSE 較低，表示它在預測 claim amount 方面表現較好。"
  },
  {
    id: "rmse-interpretation",
    theme: "Performance Metric",
    chinese: "較低的 RMSE 表示模型的預測值平均而言更接近實際值。",
    sentence: "A lower RMSE indicates that the model's predictions are closer to the actual values on average.",
    template: "A lower ___ indicates that ___ are closer to ___.",
    analysis: ["A lower RMSE 當主詞。", "indicates that 後面接完整解釋。", "on average 避免說每一筆都更準。"],
    prompt: "較高的 accuracy 表示模型整體分類正確的比例較高。"
  },
  {
    id: "calibration",
    theme: "Model Evaluation",
    chinese: "如果模型校準良好，預測機率應該接近實際發生率。",
    sentence: "If the model is well calibrated, the predicted probabilities should be close to the observed event rates.",
    template: "If ___ is well calibrated, ___ should be close to ___.",
    analysis: ["If 子句放條件。", "should be close to 表示合理預期。", "observed event rates 是實際結果。"],
    prompt: "如果模型穩定，驗證資料上的誤差應該接近測試資料上的誤差。"
  },
  {
    id: "class-imbalance",
    theme: "Classification",
    chinese: "由於目標類別不平衡，accuracy 可能會高估模型的實用性。",
    sentence: "Because the target classes are imbalanced, accuracy may overstate the usefulness of the model.",
    template: "Because ___ are imbalanced, ___ may overstate ___.",
    analysis: ["Because 放原因。", "may overstate 表示可能高估。", "usefulness of the model 接商業實用性。"],
    prompt: "由於正例很少，accuracy 可能會掩蓋模型偵測正例的能力不足。"
  },
  {
    id: "data-leakage",
    theme: "Data Risk",
    chinese: "這個變數應該被移除，因為它可能包含預測時不可取得的資訊。",
    sentence: "This variable should be removed because it may contain information that would not be available at the time of prediction.",
    template: "This variable should be removed because it may contain information that ___.",
    analysis: ["should be removed 是清楚建議。", "may contain 保留可能性。", "at the time of prediction 是資料洩漏關鍵。"],
    prompt: "這個欄位應該被排除，因為它可能包含理賠結案後才會知道的資訊。"
  },
  {
    id: "train-test-split",
    theme: "Validation",
    chinese: "測試資料應保留到最後使用，以提供模型泛化能力的客觀評估。",
    sentence: "The test data should be held out until the end to provide an unbiased assessment of the model's ability to generalize.",
    template: "The ___ should be held out until ___ to provide ___.",
    analysis: ["should be held out 是驗證流程常用語。", "until the end 說明使用時點。", "ability to generalize 是泛化能力。"],
    prompt: "驗證資料應用於模型選擇，以避免只根據訓練資料做決策。"
  },
  {
    id: "cross-validation",
    theme: "Validation",
    chinese: "交叉驗證可以降低結果對單一資料切分方式的依賴。",
    sentence: "Cross-validation can reduce the dependence of the results on a single train-test split.",
    template: "___ can reduce the dependence of ___ on ___.",
    analysis: ["Cross-validation 當主詞。", "can reduce 表示方法效果。", "dependence on 表示對某事的依賴。"],
    prompt: "重複抽樣可以降低模型評估對單一次樣本抽取的依賴。"
  },
  {
    id: "feature-engineering",
    theme: "Feature Engineering",
    chinese: "建立這個衍生變數可能有幫助，因為它更直接反映客戶行為。",
    sentence: "Creating this derived variable may be useful because it more directly reflects customer behavior.",
    template: "Creating ___ may be useful because it more directly reflects ___.",
    analysis: ["Creating 是 Ving 當主詞。", "may be useful 語氣適中。", "more directly reflects 說明特徵價值。"],
    prompt: "建立 loss ratio 變數可能有幫助，因為它更直接反映保單風險。"
  },
  {
    id: "categorical-encoding",
    theme: "Data Preparation",
    chinese: "類別變數需要適當編碼，模型才能使用它們作為預測變數。",
    sentence: "Categorical variables need to be encoded properly so that the model can use them as predictors.",
    template: "___ need to be ___ so that the model can use them as ___.",
    analysis: ["need to be encoded 是必要處理。", "so that 表示目的。", "as predictors 指明模型用途。"],
    prompt: "日期變數需要適當轉換，模型才能捕捉季節性。"
  },
  {
    id: "factor-vs-numeric",
    theme: "Model Design",
    chinese: "把 DayOfWeek 當作類別變數可以避免強迫模型假設線性趨勢。",
    sentence: "Treating DayOfWeek as a categorical variable avoids forcing the model to assume a linear trend.",
    template: "Treating ___ as ___ avoids forcing the model to ___.",
    analysis: ["Treating...as... 是方法當主詞。", "avoids forcing 說明避免的問題。", "assume a linear trend 是模型假設。"],
    prompt: "把 ZIP code 當作類別變數可以避免強迫模型假設郵遞區號有數值順序。"
  },
  {
    id: "multicollinearity",
    theme: "Regression",
    chinese: "高度相關的預測變數可能使係數估計不穩定且難以解釋。",
    sentence: "Highly correlated predictors may make coefficient estimates unstable and difficult to interpret.",
    template: "Highly correlated ___ may make ___ unstable and difficult to ___.",
    analysis: ["Highly correlated predictors 是名詞片語。", "may make A B 表示造成狀態。", "difficult to interpret 接可解釋性。"],
    prompt: "高度相關的變數可能使變數重要性不穩定且難以解釋。"
  },
  {
    id: "outlier-impact",
    theme: "EDA",
    chinese: "極端值可能對線性模型有很大影響，因此應進一步檢查。",
    sentence: "Extreme values may have a large impact on a linear model, so they should be investigated further.",
    template: "Extreme values may have a large impact on ___, so they should be ___.",
    analysis: ["may have a large impact 表示可能影響。", "so 連到下一步。", "investigated further 是正式建議。"],
    prompt: "異常高的 claim amounts 可能對 RMSE 有很大影響，因此應進一步檢查。"
  },
  {
    id: "imputation-choice",
    theme: "Data Cleaning",
    chinese: "中位數補值比平均數補值更穩健，因為它較不受極端值影響。",
    sentence: "Median imputation is more robust than mean imputation because it is less affected by extreme values.",
    template: "___ is more robust than ___ because it is less affected by ___.",
    analysis: ["more robust than 做比較。", "because 接原因。", "less affected by 是被動概念。"],
    prompt: "使用 trimmed mean 比平均數更穩健，因為它較不受極端損失影響。"
  },
  {
    id: "interpretability-performance",
    theme: "Trade-off",
    chinese: "較複雜的模型可能提升預測表現，但會降低模型透明度。",
    sentence: "A more complex model may improve predictive performance, but it can reduce model transparency.",
    template: "A more complex ___ may improve ___, but it can reduce ___.",
    analysis: ["may improve 承認優點。", "but 轉向代價。", "transparency 是解釋與溝通問題。"],
    prompt: "更深的 tree 可能提升訓練表現，但會降低模型穩定性。"
  },
  {
    id: "business-recommendation",
    theme: "Recommendation",
    chinese: "基於模型表現和可解釋性，我建議使用較簡單的模型。",
    sentence: "Based on model performance and interpretability, I recommend using the simpler model.",
    template: "Based on ___ and ___, I recommend using ___.",
    analysis: ["Based on 放決策依據。", "I recommend using 給結論。", "simpler model 強調簡潔性。"],
    prompt: "基於測試 AUC 和部署成本，我建議使用 logistic regression。"
  },
  {
    id: "executive-audience",
    theme: "Communication",
    chinese: "對非技術讀者來說，這個結果應用商業語言解釋，而不是只報告模型指標。",
    sentence: "For a nontechnical audience, this result should be explained in business terms rather than only reporting model metrics.",
    template: "For ___, this result should be explained in ___ rather than ___.",
    analysis: ["For a nontechnical audience 設定讀者。", "should be explained 是建議。", "rather than 對比不建議做法。"],
    prompt: "對管理層來說，這個結果應用營運影響解釋，而不是只報告 p-value。"
  },
  {
    id: "confidence-limitation",
    theme: "Uncertainty",
    chinese: "這個估計值有不確定性，因此不應被視為精確預測。",
    sentence: "This estimate is subject to uncertainty, so it should not be treated as an exact prediction.",
    template: "This ___ is subject to uncertainty, so it should not be treated as ___.",
    analysis: ["subject to uncertainty 是正式不確定性說法。", "so 接實務含義。", "should not be treated as 避免誤用。"],
    prompt: "這個 forecast 有不確定性，因此不應被視為保證結果。"
  },
  {
    id: "p-value",
    theme: "Regression",
    chinese: "較小的 p-value 表示在零假設成立下觀察到此結果的機率較低。",
    sentence: "A smaller p-value indicates that the observed result would be less likely if the null hypothesis were true.",
    template: "A smaller ___ indicates that ___ would be less likely if ___.",
    analysis: ["A smaller p-value 當主詞。", "would be less likely if 是假設語氣。", "不要把 p-value 解釋成假設為真的機率。"],
    prompt: "較大的 p-value 表示在零假設成立下觀察到此結果並不罕見。"
  },
  {
    id: "coefficient-sign",
    theme: "Interpretation",
    chinese: "正係數表示，在其他條件相同時，此變數較高通常對應較高的預測值。",
    sentence: "A positive coefficient means that, all else equal, higher values of this variable correspond to higher predicted values.",
    template: "A positive coefficient means that, all else equal, ___ correspond to ___.",
    analysis: ["A positive coefficient means that 是係數解釋開頭。", "all else equal 等於控制其他變數。", "correspond to 避免過度因果。"],
    prompt: "負係數表示，在其他條件相同時，此變數較高通常對應較低的預測值。"
  },
  {
    id: "logistic-odds",
    theme: "Logistic Regression",
    chinese: "在 logistic regression 中，係數代表 log-odds 的變化，而不是機率的直接變化。",
    sentence: "In logistic regression, the coefficient represents a change in log-odds rather than a direct change in probability.",
    template: "In ___, the coefficient represents ___ rather than ___.",
    analysis: ["In logistic regression 設定模型。", "represents 說明係數意義。", "rather than 避免常見誤解。"],
    prompt: "在 Poisson regression 中，係數代表 log mean 的變化，而不是平均值的直接變化。"
  },
  {
    id: "tree-split",
    theme: "Tree Models",
    chinese: "決策樹會依序切分資料，以建立較同質的子群。",
    sentence: "A decision tree splits the data sequentially to create more homogeneous subgroups.",
    template: "A ___ splits the data sequentially to create ___.",
    analysis: ["splits the data sequentially 是樹模型機制。", "to create 表目的。", "homogeneous subgroups 說明切分目標。"],
    prompt: "分類樹會依序切分資料，以建立 response 較相似的子群。"
  },
  {
    id: "random-forest-variance",
    theme: "Random Forest",
    chinese: "Random forest 透過平均多棵樹的預測來降低變異。",
    sentence: "A random forest reduces variance by averaging the predictions from many individual trees.",
    template: "A ___ reduces variance by ___.",
    analysis: ["reduces variance 是模型效果。", "by averaging 表方法。", "many individual trees 說明 ensemble 來源。"],
    prompt: "Bagging 透過平均多個模型的預測來降低變異。"
  },
  {
    id: "boosting-bias",
    theme: "Boosting",
    chinese: "Boosting 會依序建立模型，讓後面的模型專注於前面模型表現不佳的觀測值。",
    sentence: "Boosting builds models sequentially so that later models focus on observations that earlier models handled poorly.",
    template: "___ builds models sequentially so that later models focus on ___.",
    analysis: ["builds models sequentially 是 boosting 機制。", "so that 表目的。", "handled poorly 是前模型錯誤處。"],
    prompt: "Gradient boosting 會依序建立樹，讓後面的樹修正前面模型的錯誤。"
  },
  {
    id: "regularization",
    theme: "Regularization",
    chinese: "正則化會懲罰較大的係數，以降低模型複雜度。",
    sentence: "Regularization penalizes larger coefficients to reduce model complexity.",
    template: "___ penalizes ___ to reduce ___.",
    analysis: ["penalizes larger coefficients 是方法。", "to reduce model complexity 是目的。", "句子短但資訊密度高。"],
    prompt: "Lasso 會懲罰係數絕對值，以進行變數選擇。"
  },
  {
    id: "lasso-selection",
    theme: "Lasso",
    chinese: "Lasso 可以把部分係數壓縮到零，因此可用於變數選擇。",
    sentence: "Lasso can shrink some coefficients to zero, so it can be used for variable selection.",
    template: "___ can shrink ___ to zero, so it can be used for ___.",
    analysis: ["shrink to zero 是 lasso 關鍵機制。", "so 接用途。", "variable selection 是考試常用詞。"],
    prompt: "Ridge 可以縮小係數，因此可用於降低模型變異。"
  },
  {
    id: "lambda-effect",
    theme: "Hyperparameter",
    chinese: "較大的 lambda 會增加懲罰強度，使係數更接近零。",
    sentence: "A larger lambda increases the strength of the penalty, causing coefficients to move closer to zero.",
    template: "A larger ___ increases ___, causing ___ to ___.",
    analysis: ["A larger lambda 是比較主詞。", "causing 用分詞補後果。", "closer to zero 是係數效果。"],
    prompt: "較小的 lambda 會降低懲罰強度，使模型較接近未正則化模型。"
  },
  {
    id: "hyperparameter-tuning",
    theme: "Model Tuning",
    chinese: "超參數應使用驗證資料或交叉驗證選擇，而不是用測試資料選擇。",
    sentence: "Hyperparameters should be selected using validation data or cross-validation rather than the test data.",
    template: "___ should be selected using ___ rather than ___.",
    analysis: ["should be selected 是程序建議。", "using 表方法。", "rather than the test data 避免資料洩漏。"],
    prompt: "cutoff threshold 應使用驗證資料選擇，而不是用測試資料選擇。"
  },
  {
    id: "cutoff-business",
    theme: "Classification",
    chinese: "最佳 cutoff 應反映 false positive 和 false negative 的相對成本。",
    sentence: "The optimal cutoff should reflect the relative costs of false positives and false negatives.",
    template: "The optimal ___ should reflect the relative costs of ___ and ___.",
    analysis: ["optimal cutoff 是決策變數。", "should reflect 接商業考量。", "relative costs 是分類決策核心。"],
    prompt: "最佳 staffing threshold 應反映人力不足和人力過剩的相對成本。"
  },
  {
    id: "confusion-matrix",
    theme: "Classification",
    chinese: "Confusion matrix 顯示模型如何在實際類別與預測類別之間分配觀測值。",
    sentence: "The confusion matrix shows how observations are distributed across actual and predicted classes.",
    template: "The ___ shows how observations are distributed across ___ and ___.",
    analysis: ["shows how 接間接問句。", "distributed across 表分布在不同類別。", "actual and predicted classes 是矩陣兩軸。"],
    prompt: "lift chart 顯示高分族群中的實際 response rate 如何變化。"
  },
  {
    id: "sensitivity-meaning",
    theme: "Classification",
    chinese: "Sensitivity 衡量模型辨識真正 positive cases 的能力。",
    sentence: "Sensitivity measures the model's ability to identify truly positive cases.",
    template: "___ measures the model's ability to ___.",
    analysis: ["measures the ability to 是指標解釋句型。", "identify 接模型任務。", "truly positive cases 避免混淆預測與實際。"],
    prompt: "Specificity 衡量模型辨識真正 negative cases 的能力。"
  }
];