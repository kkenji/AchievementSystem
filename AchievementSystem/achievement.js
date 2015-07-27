var Achievement;
(function (Achievement) {
    var AchievementBadge = (function () {
        function AchievementBadge(badgename, limit) {
            this._badgename = badgename;
            this._limit = limit;
            this._completed = false;
            this._progress = 0;
            this._level = 0;
        }
        Object.defineProperty(AchievementBadge.prototype, "badgeName", {
            get: function () {
                return this._badgename;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AchievementBadge.prototype, "limit", {
            get: function () {
                return this._limit;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AchievementBadge.prototype, "progress", {
            get: function () {
                return this._progress;
            },
            enumerable: true,
            configurable: true
        });
        AchievementBadge.prototype.setProgress = function (newProgress) {
            this._progress = newProgress;
            this._level = Math.floor(this.progress / this.limit * 4);
            if (this._progress == this._limit)
                this._completed = true;
        };
        Object.defineProperty(AchievementBadge.prototype, "complete", {
            get: function () {
                if (this._completed)
                    return "complete.";
                return "incomplete.";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AchievementBadge.prototype, "level", {
            get: function () {
                return this._level;
            },
            enumerable: true,
            configurable: true
        });
        return AchievementBadge;
    })();
    Achievement.AchievementBadge = AchievementBadge;
})(Achievement || (Achievement = {}));
//# sourceMappingURL=achievement.js.map