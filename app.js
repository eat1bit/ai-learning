// AI 学习系统主应用
let currentDay = getCurrentDay();
let userAnswers = {};
let hasSubmitted = false;

// 初始化页面
function init() {
    // 加载学习内容
    loadLearningContent();
    
    // 加载题目
    loadQuiz();
    
    // 加载统计数据
    loadStats();
    
    // 更新进度条
    updateProgress();
}

// 加载学习内容
function loadLearningContent() {
    const plan = getDayPlan(currentDay);
    const phase = getPhase(currentDay);
    
    document.getElementById('dayNum').textContent = currentDay;
    document.getElementById('contentTitle').textContent = plan.title;
    document.getElementById('contentResource').textContent = plan.resource;
    document.getElementById('contentTask').textContent = plan.task;
    document.getElementById('contentTime').textContent = plan.time;
    
    // 更新页面标题
    document.title = `AI 学习第 ${currentDay} 天 - ${phase.name}`;
}

// 加载题目
function loadQuiz() {
    const quiz = getDayQuiz(currentDay);
    const container = document.getElementById('quizContainer');
    
    let html = '';
    quiz.forEach((item, index) => {
        html += `
            <div class="quiz-item" data-index="${index}">
                <div class="quiz-question">${index + 1}. ${item.question}</div>
                <div class="quiz-options">
                    ${item.options.map((opt, i) => `
                        <div class="quiz-option" onclick="selectOption(${index}, ${i})">
                            <input type="radio" name="q${index}" id="q${index}o${i}">
                            <label for="q${index}o${i}">${String.fromCharCode(65 + i)}. ${opt}</label>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// 选择选项
function selectOption(questionIndex, optionIndex) {
    if (hasSubmitted) return;
    
    userAnswers[questionIndex] = optionIndex;
    
    // 更新选中状态
    const item = document.querySelector(`.quiz-item[data-index="${questionIndex}"]`);
    item.querySelectorAll('.quiz-option').forEach((opt, i) => {
        opt.classList.remove('selected');
        if (i === optionIndex) {
            opt.classList.add('selected');
            opt.querySelector('input').checked = true;
        }
    });
}

// 提交答案
function submitQuiz() {
    if (hasSubmitted) return;
    
    const quiz = getDayQuiz(currentDay);
    
    // 检查是否全部作答
    const answeredCount = Object.keys(userAnswers).length;
    if (answeredCount < quiz.length) {
        alert(`还有 ${quiz.length - answeredCount} 题未作答，请完成后再提交！`);
        return;
    }
    
    hasSubmitted = true;
    
    // 计算得分
    let correctCount = 0;
    quiz.forEach((item, index) => {
        if (userAnswers[index] === item.answer) {
            correctCount++;
        }
    });
    
    const score = Math.round((correctCount / quiz.length) * 100);
    
    // 显示结果
    showResult(score, correctCount, quiz);
    
    // 保存答题记录
    saveQuizResult(score);
    
    // 禁用提交按钮
    document.getElementById('submitBtn').disabled = true;
    document.getElementById('submitBtn').textContent = '已提交';
}

// 显示结果
function showResult(score, correctCount, quiz) {
    const result = document.getElementById('result');
    const resultTitle = document.getElementById('resultTitle');
    const resultScore = document.getElementById('resultScore');
    const explanation = document.getElementById('explanation');
    
    result.classList.add('show');
    result.className = 'result show ' + (score >= 60 ? 'success' : 'error');
    
    resultTitle.textContent = score >= 60 ? '✅ 答题完成！' : '❌ 继续加油！';
    resultScore.textContent = `得分：${score}/100（${correctCount}/${quiz.length} 正确）`;
    
    // 显示答案解析
    let expHtml = '<strong>📖 答案解析：</strong><br><br>';
    quiz.forEach((item, index) => {
        const isCorrect = userAnswers[index] === item.answer;
        expHtml += `
            <div style="margin-bottom: 15px; padding: 10px; background: ${isCorrect ? '#dcfce7' : '#fee2e2'}; border-radius: 5px;">
                <strong>第${index + 1}题：</strong>${isCorrect ? '✅ 正确' : '❌ 错误'}<br>
                正确答案：${String.fromCharCode(65 + item.answer)}<br>
                你的答案：${String.fromCharCode(65 + userAnswers[index])}<br>
                <strong>解析：</strong>${item.explanation}
            </div>
        `;
    });
    
    explanation.innerHTML = expHtml;
}

// 保存答题结果
function saveQuizResult(score) {
    const key = `quiz_result_${currentDay}`;
    localStorage.setItem(key, JSON.stringify({
        day: currentDay,
        score: score,
        date: new Date().toISOString(),
        answers: userAnswers
    }));
    
    // 更新学习天数
    const studiedDays = JSON.parse(localStorage.getItem('studiedDays') || '[]');
    if (!studiedDays.includes(currentDay)) {
        studiedDays.push(currentDay);
        localStorage.setItem('studiedDays', JSON.stringify(studiedDays));
    }
}

// 加载统计数据
function loadStats() {
    const studiedDays = JSON.parse(localStorage.getItem('studiedDays') || '[]');
    const totalQuizzes = studiedDays.length;
    
    // 计算平均正确率
    let totalScore = 0;
    studiedDays.forEach(day => {
        const result = JSON.parse(localStorage.getItem(`quiz_result_${day}`) || '{"score":0}');
        totalScore += result.score;
    });
    
    const avgAccuracy = totalQuizzes > 0 ? Math.round(totalScore / totalQuizzes) : 0;
    
    // 计算连续学习天数
    const streak = calculateStreak();
    
    // 更新显示
    document.getElementById('statDays').textContent = totalQuizzes;
    document.getElementById('statAccuracy').textContent = avgAccuracy + '%';
    document.getElementById('statStreak').textContent = streak;
}

// 计算连续学习天数
function calculateStreak() {
    const studiedDays = JSON.parse(localStorage.getItem('studiedDays') || '[]');
    if (studiedDays.length === 0) return 0;
    
    studiedDays.sort((a, b) => b - a);
    
    let streak = 1;
    for (let i = 0; i < studiedDays.length - 1; i++) {
        if (studiedDays[i] - studiedDays[i + 1] === 1) {
            streak++;
        } else {
            break;
        }
    }
    
    return streak;
}

// 更新进度条
function updateProgress() {
    const progress = (currentDay / 160) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

// 页面加载时初始化
window.addEventListener('DOMContentLoaded', init);
