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
                eventTarget.addEventListener(achievement.event.eventName, () => achievement.show(this.template), false);
            });           
        }
    }
}  