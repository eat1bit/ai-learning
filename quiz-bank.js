// AI 学习题库
const quizBank = {
    // 第 1 天：Python 基础语法
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
    // 第 2 天：Python 控制流
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
    // 第 3 天：Python 函数
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
    // 第 4 天：Python 进阶
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
    // 第 5 天：numpy
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
    // 第 11 天：机器学习基础
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
    // 第 12 天：梯度下降
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
    // 默认题库（用于后续天数）
    default: [
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
        },
        {
            question: "以下哪个不是机器学习算法？",
            options: ["决策树", "SVM", "Python", "KMeans"],
            answer: 2,
            explanation: "Python 是编程语言，不是算法。"
        }
    ]
};

// 获取当日题目
function getDayQuiz(day) {
    return quizBank[day] || quizBank.default;
}
