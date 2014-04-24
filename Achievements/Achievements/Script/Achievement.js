var Achievements;
(function (Achievements) {
    var Achievement = (function () {
        function Achievement(config) {
            this.visible = false;
            this.name = config.name;
            this.descripion = config.description;
            this.event = config.event;
        }
        Achievement.prototype.show = function (template) {
            var _this = this;
            if (this.visible) {
                return;
            }

            var el = document.createElement("div");

            el.setAttribute("class", template.containerClass);
            el.innerHTML = template.template;

            var title = el.getElementsByClassName("achieveTitle");
            title[0].innerText = this.name;

            var body = el.getElementsByClassName("achieveBody");
            body[0].innerText = this.descripion;

            document.body.appendChild(el);
            this.visible = true;

            setTimeout(function () {
                document.body.removeChild(el);
                _this.visible = false;
            }, template.displayTime);
        };
        return Achievement;
    })();
    Achievements.Achievement = Achievement;
})(Achievements || (Achievements = {}));
//# sourceMappingURL=Achievement.js.map
