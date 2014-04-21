module Achievements {

    window.onload = () => {

        var achievementList = [
            new Achievement({
                name: "Click on div1",
                description: "This is the content of the achievement, wow you did it! text",
                event: new AchievmentEvent({
                    eventName: "click",
                    elementSelector: "div1"
                })
            })
        ];

        var template = new LayoutTemplate({
            template: "<div><p>SOmething</p><p>more something</p></div>",
            containerClass: "defaultTemplate"
        });

        var theApp = new AchievementBinder({
            achievements: achievementList,
            template: template
        });

        theApp.bind();

    }
}