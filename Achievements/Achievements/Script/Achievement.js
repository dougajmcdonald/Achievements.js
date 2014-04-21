var Achievements;
(function (Achievements) {
    var Achievement = (function () {
        function Achievement(config) {
            this.name = config.name;
            this.descripion = config.description;
            this.event = config.event;
        }
        return Achievement;
    })();
    Achievements.Achievement = Achievement;
})(Achievements || (Achievements = {}));
//# sourceMappingURL=Achievement.js.map
