module Achievement {
    export class AchievementBadge {
        private _badgename: string;
        private _completed: boolean;
        private _progress: number;
        private _limit: number;
        private _level; number;

        constructor(badgename: string, limit: number) {
            this._badgename = badgename;
            this._limit = limit;
            this._completed = false;
            this._progress = 0;
            this._level = 0;
        }

        get badgeName(): string {
            return this._badgename;
        }

        get limit(): number {
            return this._limit;
        }

        get progress(): number {
            return this._progress;
        }

        setProgress(newProgress: number) {
            this._progress = newProgress;
            this._level = Math.floor(this.progress / this.limit * 4)
            if (this._progress == this._limit)
                this._completed = true;
        }

        get complete(): string {
            if (this._completed)
                return "complete.";
            return "incomplete.";
        }

        get level(): number {
            return this._level;
        }


    }
}