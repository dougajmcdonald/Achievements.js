module Achievements {

    export interface IEventConfig {
        eventName: string;
        elementSelector: string;
    }

    export class AchievmentEvent {

        eventName: string;
        elementSelector: string;

        constructor(config: IEventConfig) {
            this.eventName = config.eventName;
            this.elementSelector = config.elementSelector;
        }
    }
}