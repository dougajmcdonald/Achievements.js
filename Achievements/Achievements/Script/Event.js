var Achievements;
(function (Achievements) {
    var AchievmentEvent = (function () {
        function AchievmentEvent(config) {
            this.eventName = config.eventName;
            this.elementSelector = config.elementSelector;
        }
        return AchievmentEvent;
    })();
    Achievements.AchievmentEvent = AchievmentEvent;
})(Achievements || (Achievements = {}));
//# sourceMappingURL=Event.js.map
