module Achievements {

    export interface ILayoutTemplateConfig {
        template: string;
        containerClass: string;
        displayTime?: number;
    }

    export class LayoutTemplate {

        template: string;
        containerClass: string;
        displayTime: number = 1000;

        constructor(config: ILayoutTemplateConfig) {
            this.template = config.template;
            this.containerClass = config.containerClass;
            this.displayTime = config.displayTime ? config.displayTime : this.displayTime;
        }
    }

} 