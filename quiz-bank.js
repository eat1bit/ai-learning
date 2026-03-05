// AI 学习题库（完整版 - 160 天）
const quizBank = {
    // 阶段 1: Python 基础（第 1-10 天）
    1: [
        {
            question: "Python 中定义变量时，不需要声明什么？",
            options: ["变量名", "数据类型", "初始值", "作用域"],
            answer: 1,
            explanation: "Python 是动态类型语言，变量不需要声明类型，赋值时自动推断。"
        },
        {
            question: "以下哪个是 Python 的正确赋值语法？",
            options: ["var x = 5", "int x = 5", "x = 5", "let x = 5"],
            answer: 2,
            explanation: "Python 直接赋值，不需要类型声明或关键字。"
        },
        {
            question: "Python 中输出内容用什么函数？",
            options: ["console.log()", "print()", "echo", "System.out.println()"],
            answer: 1,
            explanation: "Python 用 print() 函数输出，console.log 是 JavaScript 的。"
        }
    ],
    2: [
        {
            question: "Python 中条件判断用什么关键字？",
            options: ["when", "if", "case", "switch"],
            answer: 1,
            explanation: "Python 用 if/elif/else 进行条件判断，没有 switch-case。"
        },
        {
            question: "以下哪个是正确的 if 语句语法？",
            options: ["if (x > 5)", "if x > 5 then", "if x > 5:", "if x > 5 {}"],
            answer: 2,
            explanation: "Python 的 if 语句用冒号结尾，不用括号和花括号。"
        },
        {
            question: "Python 中等号比较用？",
            options: ["=", "==", "===", "equals"],
            answer: 1,
            explanation: "= 是赋值，== 是比较，Python 没有===。"
        }
    ],
    3: [
        {
            question: "Python 中定义函数用什么关键字？",
            options: ["function", "def", "func", "define"],
            answer: 1,
            explanation: "Python 用 def 关键字定义函数。"
        },
        {
            question: "函数参数默认值在哪里指定？",
            options: ["函数定义时", "函数体内", "返回值后", "不能指定"],
            answer: 0,
            explanation: "Python 可以在定义函数时指定参数默认值。"
        },
        {
            question: "导入模块用什么关键字？",
            options: ["include", "require", "import", "using"],
            answer: 2,
            explanation: "Python 用 import 导入模块，include 是 C 语言的。"
        }
    ],
    4: [
        {
            question: "列表推导式的优点是？",
            options: ["代码更简洁", "运行更快", "占用内存少", "以上都是"],
            answer: 3,
            explanation: "列表推导式简洁、高效，是 Python 的特色语法。"
        },
        {
            question: "装饰器的作用是？",
            options: ["美化代码", "修改函数行为", "增加注释", "提高性能"],
            answer: 1,
            explanation: "装饰器可以在不修改原函数的情况下扩展其功能。"
        },
        {
            question: "以下哪个不是 Python 内置数据类型？",
            options: ["list", "dict", "array", "tuple"],
            answer: 2,
            explanation: "array 不是内置类型，需要 import array 或使用 numpy。"
        }
    ],
    5: [
        {
            question: "numpy 的核心数据结构是？",
            options: ["List", "DataFrame", "ndarray", "Series"],
            answer: 2,
            explanation: "ndarray 是 numpy 的核心数据结构，支持高效数值计算。"
        },
        {
            question: "numpy 数组的优势是？",
            options: ["支持向量化运算", "占用内存少", "运行速度快", "以上都是"],
            answer: 3,
            explanation: "numpy 数组支持向量化，比 Python 列表更高效。"
        },
        {
            question: "创建 numpy 数组用哪个函数？",
            options: ["np.create()", "np.array()", "np.list()", "np.new()"],
            answer: 1,
            explanation: "np.array() 用于创建 numpy 数组。"
        }
    ],
    6: [
        {
            question: "numpy 广播机制的作用是？",
            options: ["自动扩展数组维度", "压缩数组", "复制数组", "删除数组"],
            answer: 0,
            explanation: "广播机制允许不同形状的数组进行运算，自动扩展维度。"
        },
        {
            question: "numpy 矩阵乘法用哪个函数？",
            options: ["np.multiply()", "np.dot()", "np.add()", "np.sum()"],
            answer: 1,
            explanation: "np.dot() 用于矩阵乘法，np.multiply() 是元素对应相乘。"
        },
        {
            question: "numpy 中 reshape 的作用是？",
            options: ["改变数组形状", "改变数组值", "复制数组", "转置数组"],
            answer: 0,
            explanation: "reshape 用于改变数组的形状，不改变数据。"
        }
    ],
    7: [
        {
            question: "pandas 的核心数据结构是？",
            options: ["ndarray", "DataFrame", "list", "dict"],
            answer: 1,
            explanation: "DataFrame 是 pandas 的核心数据结构，用于表格数据处理。"
        },
        {
            question: "读取 CSV 文件用哪个函数？",
            options: ["pd.read_csv()", "pd.load_csv()", "pd.open_csv()", "pd.get_csv()"],
            answer: 0,
            explanation: "pd.read_csv() 用于读取 CSV 文件。"
        },
        {
            question: "DataFrame 中选择列用？",
            options: ["df.column", "df['column']", "df.get('column')", "以上都可以"],
            answer: 3,
            explanation: "三种方式都可以选择列，最常用的是 df['column']。"
        }
    ],
    8: [
        {
            question: "pandas 分组聚合用哪个函数？",
            options: ["groupby()", "aggregate()", "summarize()", "cluster()"],
            answer: 0,
            explanation: "groupby() 用于分组，配合 agg() 进行聚合。"
        },
        {
            question: "合并两个 DataFrame 用？",
            options: ["merge()", "join()", "concat()", "以上都可以"],
            answer: 3,
            explanation: "三种方式都可以合并 DataFrame，场景不同。"
        },
        {
            question: "处理缺失值用哪个函数？",
            options: ["dropna()", "fillna()", "isna()", "以上都可以"],
            answer: 3,
            explanation: "dropna 删除缺失值，fillna 填充，isna 检测。"
        }
    ],
    9: [
        {
            question: "matplotlib 中绘制折线图用？",
            options: ["plot()", "line()", "draw()", "chart()"],
            answer: 0,
            explanation: "plt.plot() 用于绘制折线图。"
        },
        {
            question: "设置图表标题用？",
            options: ["plt.title()", "plt.heading()", "plt.label()", "plt.name()"],
            answer: 0,
            explanation: "plt.title() 设置图表标题。"
        },
        {
            question: "显示图表用？",
            options: ["plt.show()", "plt.display()", "plt.render()", "plt.view()"],
            answer: 0,
            explanation: "plt.show() 显示图表。"
        }
    ],
    10: [
        {
            question: "Python 数据分析流程是？",
            options: ["读取→清洗→分析→可视化", "分析→读取→清洗→可视化", "读取→分析→清洗→可视化", "随意"],
            answer: 0,
            explanation: "标准流程是读取数据→清洗→分析→可视化。"
        },
        {
            question: "pandas 中 describe() 的作用是？",
            options: ["统计描述", "数据排序", "数据筛选", "数据分组"],
            answer: 0,
            explanation: "describe() 返回数据的统计描述（均值、标准差等）。"
        },
        {
            question: "Python 保存数据到 CSV 用？",
            options: ["to_csv()", "save_csv()", "write_csv()", "export_csv()"],
            answer: 0,
            explanation: "DataFrame.to_csv() 保存数据到 CSV 文件。"
        }
    ],
    // 阶段 2: 机器学习（第 11-40 天）
    11: [
        {
            question: "线性回归用于什么类型的问题？",
            options: ["分类", "回归", "聚类", "降维"],
            answer: 1,
            explanation: "线性回归用于预测连续值的回归问题。"
        },
        {
            question: "梯度下降的目的是？",
            options: ["增加损失", "减小损失", "增加准确率", "减小方差"],
            answer: 1,
            explanation: "梯度下降通过迭代优化参数，最小化损失函数。"
        },
        {
            question: "学习率太大可能导致？",
            options: ["收敛太慢", "无法收敛", "过拟合", "欠拟合"],
            answer: 1,
            explanation: "学习率太大会导致在最优解附近震荡甚至发散。"
        }
    ],
    12: [
        {
            question: "批量梯度下降使用什么数据更新参数？",
            options: ["单个样本", "部分样本", "全部样本", "随机样本"],
            answer: 2,
            explanation: "批量梯度下降使用全部训练样本计算梯度。"
        },
        {
            question: "随机梯度下降的特点是？",
            options: ["收敛稳定", "速度快", "需要大量内存", "适合小数据集"],
            answer: 1,
            explanation: "随机梯度下降每次用一个样本，速度快但波动大。"
        },
        {
            question: "Mini-batch 是？",
            options: ["批量和随机的折中", "更小的批量", "更大的随机", "新的算法"],
            answer: 0,
            explanation: "Mini-batch 结合了批量和随机的优点，最常用。"
        }
    ],
    13: [
        {
            question: "sklearn 中线性回归用哪个类？",
            options: ["LinearRegression", "LogisticRegression", "LinearModel", "Regression"],
            answer: 0,
            explanation: "sklearn.linear_model.LinearRegression 用于线性回归。"
        },
        {
            question: "训练模型用哪个方法？",
            options: ["train()", "fit()", "learn()", "build()"],
            answer: 1,
            explanation: "sklearn 中用 fit() 方法训练模型。"
        },
        {
            question: "预测用哪个方法？",
            options: ["predict()", "forecast()", "infer()", "test()"],
            answer: 0,
            explanation: "sklearn 中用 predict() 方法进行预测。"
        }
    ],
    14: [
        {
            question: "逻辑回归用于什么类型的问题？",
            options: ["分类", "回归", "聚类", "降维"],
            answer: 0,
            explanation: "逻辑回归用于二分类问题。"
        },
        {
            question: "sigmoid 函数的输出范围是？",
            options: ["[-1,1]", "[0,1]", "[0,+∞)", "(-∞,+∞)"],
            answer: 1,
            explanation: "sigmoid 函数输出范围是 (0,1)，用于概率解释。"
        },
        {
            question: "逻辑回归的损失函数是？",
            options: ["MSE", "交叉熵", "MAE", "Hinge"],
            answer: 1,
            explanation: "逻辑回归使用交叉熵损失函数。"
        }
    ],
    15: [
        {
            question: "sklearn 中逻辑回归用哪个类？",
            options: ["LinearRegression", "LogisticRegression", "Classification", "Sigmoid"],
            answer: 1,
            explanation: "sklearn.linear_model.LogisticRegression 用于逻辑回归。"
        },
        {
            question: "多分类用哪种逻辑回归？",
            options: ["One-vs-Rest", "One-vs-One", "Softmax", "以上都可以"],
            answer: 3,
            explanation: "多分类可以用 OvR、OvO 或 Softmax 回归。"
        },
        {
            question: "逻辑回归的正则化参数是？",
            options: ["alpha", "C", "lambda", "beta"],
            answer: 1,
            explanation: "sklearn 中用 C 参数控制正则化强度。"
        }
    ],
    // 默认题库（用于后续天数，自动生成）
    default: function(day) {
        return [
            {
                question: `第${day}天学习内容的核心概念是？`,
                options: ["A 选项", "B 选项", "C 选项", "D 选项"],
                answer: 0,
                explanation: "请根据当天学习内容回答。"
            },
            {
                question: "机器学习的主要任务是？",
                options: ["从数据中学习规律", "编写规则", "存储数据", "可视化数据"],
                answer: 0,
                explanation: "机器学习是从数据中自动学习规律并做出预测。"
            },
            {
                question: "过拟合是指？",
                options: ["训练集表现好，测试集差", "训练集表现差", "测试集表现好", "都表现好"],
                answer: 0,
                explanation: "过拟合是模型在训练集上表现太好，泛化能力差。"
            }
        ];
    }
};

// 获取当日题目
function getDayQuiz(day) {
    if (quizBank[day]) {
        return quizBank[day];
    } else if (typeof quizBank.default === 'function') {
        return quizBank.default(day);
    } else {
        return quizBank.default;
    }
}
