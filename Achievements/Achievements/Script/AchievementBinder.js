var Achievements;
(function (Achievements) {
    var AchievementBinder = (function () {
        function AchievementBinder(config) {
            var _this = this;
            this.showAchievement = function (event, achievement) {
                console.log(event);
                console.log(achievement);

                var holder = document.createElement("div");
                holder.attributes["className"] = _this.template.containerClass;
                holder.innerHTML = _this.template.template;

                //TODO: template should have a method to set it's properties
                // this.template.setAchievement(achievement);
                document.body.appendChild(holder);
                //TODO: hide the child / remove it after a set time
            };
            this.achievements = config.achievements;
            this.template = config.template;
        }
        AchievementBinder.prototype.bind = function () {
            var _this = this;
            this.achievements.forEach(function (achievement) {
                var eventTarget = document.getElementById(achievement.event.elementSelector);
                eventTarget.addEventListener(achievement.event.eventName, function (event) {
                    return _this.showAchievement(event, achievement);
                }, false);
            });
        };
        return AchievementBinder;
    })();
    Achievements.AchievementBinder = AchievementBinder;
})(Achievements || (Achievements = {}));
//# sourceMappingURL=AchievementBinder.js.map
