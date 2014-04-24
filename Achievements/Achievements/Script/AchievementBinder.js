var Achievements;
(function (Achievements) {
    var AchievementBinder = (function () {
        function AchievementBinder(config) {
            this.achievements = config.achievements;
            this.template = config.template;
        }
        AchievementBinder.prototype.bind = function () {
            var _this = this;
            this.achievements.forEach(function (achievement) {
                var eventTarget = document.getElementById(achievement.event.elementSelector);
                eventTarget.addEventListener(achievement.event.eventName, function () {
                    return achievement.show(_this.template);
                }, false);
            });
        };
        return AchievementBinder;
    })();
    Achievements.AchievementBinder = AchievementBinder;
})(Achievements || (Achievements = {}));
//# sourceMappingURL=AchievementBinder.js.map
