var Achievements;
(function (Achievements) {
    window.onload = function () {
        var achievementList = [
            new Achievements.Achievement({
                name: "Click on div1",
                description: "This is the content of the achievement, wow you did it! text",
                event: new Achievements.AchievmentEvent({
                    eventName: "click",
                    elementSelector: "div1"
                })
            })
        ];

        var template = new Achievements.LayoutTemplate({
            template: "<div><p>SOmething</p><p>more something</p></div>",
            containerClass: "defaultTemplate"
        });

        var theApp = new Achievements.AchievementBinder({
            achievements: achievementList,
            template: template
        });

        theApp.bind();
    };
})(Achievements || (Achievements = {}));
//# sourceMappingURL=app.js.map
