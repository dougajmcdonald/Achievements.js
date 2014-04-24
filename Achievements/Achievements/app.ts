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
            }),
            new Achievement({
                name: "Click on div2",
                description: "This is the content of a totally different achievement, congratulations on doing things!",
                event: new AchievmentEvent({
                    eventName: "mouseover",
                    elementSelector: "div2"
                })
            })
        ];

        var template = new LayoutTemplate({
            template: "<div><p class='achieveTitle'>Achievement Title</p><p class='achieveBody'>Congratulations, you've done a thing! well done!</p></div>",
            containerClass: "defaultTemplate"
        });

        var theApp = new AchievementBinder({
            achievements: achievementList,
            template: template
        });

        theApp.bind();

    }
}