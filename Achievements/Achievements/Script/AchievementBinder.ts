module Achievements {

    export interface IAchievementBinderConfig {
        achievements: Array<Achievement>;
        template: LayoutTemplate;
    }

    export class AchievementBinder {

        achievements: Array<Achievement>;
        template: LayoutTemplate;

        constructor(config: IAchievementBinderConfig) {
            this.achievements = config.achievements;
            this.template = config.template;
        }

        public bind() : void {
            this.achievements.forEach((achievement: Achievement) => {
                var eventTarget: EventTarget = document.getElementById(achievement.event.elementSelector);
                eventTarget.addEventListener(achievement.event.eventName, (event) => this.showAchievement(event, achievement), false);
            });           
        }

        public showAchievement = (event: Event, achievement: Achievement) => {

            console.log(event);
            console.log( achievement);

            var holder = document.createElement("div");
            holder.attributes["className"] = this.template.containerClass;
            holder.innerHTML = this.template.template;

            //TODO: template should have a method to set it's properties
            // this.template.setAchievement(achievement);

            document.body.appendChild(holder);

            //TODO: hide the child / remove it after a set time

        }
    }

}  