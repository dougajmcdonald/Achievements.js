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
            }),
            new Achievements.Achievement({
                name: "Click on div2",
                description: "This is the content of a totally different achievement, congratulations on doing things!",
                event: new Achievements.AchievmentEvent({
                    eventName: "mouseover",
                    elementSelector: "div2"
                })
            })
        ];

        var template = new Achievements.LayoutTemplate({
            template: "<div><p class='achieveTitle'>Achievement Title</p><p class='achieveBody'>Congratulations, you've done a thing! well done!</p></div>",
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
