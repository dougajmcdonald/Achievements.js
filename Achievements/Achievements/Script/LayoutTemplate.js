var Achievements;
(function (Achievements) {
    var LayoutTemplate = (function () {
        function LayoutTemplate(config) {
            this.displayTime = 1000;
            this.template = config.template;
            this.containerClass = config.containerClass;
            this.displayTime = config.displayTime ? config.displayTime : this.displayTime;
        }
        return LayoutTemplate;
    })();
    Achievements.LayoutTemplate = LayoutTemplate;
})(Achievements || (Achievements = {}));
//# sourceMappingURL=LayoutTemplate.js.map
