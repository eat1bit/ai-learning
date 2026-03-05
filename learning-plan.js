// AI 学习计划数据（160 天）
const learningPlan = {
    totalDays: 160,
    startDate: "2026-03-06",
    phases: [
        { name: "Python 基础", days: "1-10", color: "#667eea" },
        { name: "机器学习", days: "11-40", color: "#f59e0b" },
        { name: "深度学习", days: "41-70", color: "#10b981" },
        { name: "项目实践", days: "71-130", color: "#8b5cf6" },
        { name: "求职准备", days: "131-160", color: "#ef4444" }
    ],
    plans: {
        // 阶段 1: Python 基础（第 1-10 天）
        1: {
            title: "Python 环境安装 + 基础语法",
            resource: "廖雪峰 Python 教程 - 基础部分",
            task: "安装 Anaconda，完成基础语法练习",
            time: "1h"
        },
        2: {
            title: "Python 控制流（if/for/while）",
            resource: "廖雪峰 Python 教程 - 控制流",
            task: "完成循环和条件判断练习",
            time: "1h"
        },
        3: {
            title: "Python 函数 + 模块",
            resource: "廖雪峰 Python 教程 - 函数",
            task: "编写 3 个函数，学习 pip 安装包",
            time: "1h"
        },
        4: {
            title: "Python 列表推导 + 装饰器",
            resource: "B 站 Python 进阶教程",
            task: "列表推导练习，理解装饰器",
            time: "1h"
        },
        5: {
            title: "numpy 基础",
            resource: "动手学深度学习 - numpy 章节",
            task: "完成 numpy 基础练习",
            time: "1h"
        },
        6: {
            title: "numpy 进阶（广播、矩阵运算）",
            resource: "动手学深度学习",
            task: "矩阵乘法、广播练习",
            time: "1h"
        },
        7: {
            title: "pandas 基础",
            resource: "动手学深度学习 - pandas 章节",
            task: "读取数据，基础数据操作",
            time: "1h"
        },
        8: {
            title: "pandas 进阶（分组、聚合）",
            resource: "动手学深度学习",
            task: "数据分组聚合练习",
            time: "1h"
        },
        9: {
            title: "数据可视化",
            resource: "B 站 matplotlib 教程",
            task: "绘制折线图、柱状图、热力图",
            time: "1h"
        },
        10: {
            title: "Python 综合练习",
            resource: "综合应用",
            task: "用 pandas+matplotlib 分析数据集",
            time: "周末 4h"
        },
        // 阶段 2: 机器学习（第 11-40 天）
        11: {
            title: "ML 概述 + 线性回归",
            resource: "吴恩达 ML L1-L2（B 站）",
            task: "观看视频，理解线性回归原理",
            time: "1h"
        },
        12: {
            title: "梯度下降算法",
            resource: "吴恩达 ML L3",
            task: "手推梯度下降公式",
            time: "1h"
        },
        13: {
            title: "线性回归实战",
            resource: "sklearn 实践",
            task: "用 sklearn 完成房价预测",
            time: "1h"
        },
        14: {
            title: "逻辑回归",
            resource: "吴恩达 ML L4-L5",
            task: "理解 sigmoid 函数和决策边界",
            time: "1h"
        },
        15: {
            title: "逻辑回归实战",
            resource: "sklearn 实践",
            task: "用 sklearn 完成分类任务",
            time: "1h"
        },
        16: {
            title: "过拟合与正则化",
            resource: "吴恩达 ML L6",
            task: "理解 L1/L2 正则化",
            time: "1h"
        },
        17: {
            title: "正则化实战",
            resource: "代码实践",
            task: "在代码中应用正则化",
            time: "1h"
        },
        18: {
            title: "决策树",
            resource: "吴恩达 ML L7",
            task: "理解信息增益和剪枝",
            time: "1h"
        },
        19: {
            title: "决策树实战",
            resource: "sklearn 实践",
            task: "用 sklearn 完成决策树分类",
            time: "1h"
        },
        20: {
            title: "随机森林 + 集成学习",
            resource: "集成学习教程",
            task: "理解 Bagging 和 Boosting",
            time: "1h"
        },
        // 后续天数用模板生成
        default: {
            title: "AI 学习第 {day} 天",
            resource: "根据学习计划",
            task: "跟随计划学习 + 代码实践",
            time: "1h（工作日）/ 4h（周末）"
        }
    }
};

// 获取当日学习内容
function getDayPlan(day) {
    return learningPlan.plans[day] || learningPlan.plans.default;
}

// 获取当前是第几天
function getCurrentDay() {
    const start = new Date(learningPlan.startDate);
    const today = new Date();
    const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24)) + 1;
    return Math.max(1, Math.min(diff, learningPlan.totalDays));
}

// 获取学习阶段
function getPhase(day) {
    if (day <= 10) return learningPlan.phases[0];
    if (day <= 40) return learningPlan.phases[1];
    if (day <= 70) return learningPlan.phases[2];
    if (day <= 130) return learningPlan.phases[3];
    return learningPlan.phases[4];
}
