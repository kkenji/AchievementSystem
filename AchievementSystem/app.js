var Achievement = require('achievement');
window.onload = function () {
    var a1 = new Achievement.Achievement("Badge1", 10);
    var a2 = new Achievement.Achievement("QuizBadge2", 7);
    var a3 = new Achievement.Achievement("Badge3", 5);
    a1.setProgress(2);
    alert(Achievement.outputString(a1));
};
//# sourceMappingURL=app.js.map