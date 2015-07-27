/// <reference path="achievement.ts" />
var AchievementBadge = Achievement;
function outputString(a) {
    return a.badgeName + " is " + a.progress + " out of " + a.limit + " which is " + a.complete + " and is level " + a.level;
}
window.onload = function () {
    var a1 = new AchievementBadge.AchievementBadge("Badge1", 10);
    var a2 = new AchievementBadge.AchievementBadge("QuizBadge2", 7);
    var a3 = new AchievementBadge.AchievementBadge("Badge3", 5);
    a1.setProgress(2);
    alert(outputString(a1));
};
//# sourceMappingURL=app.js.map