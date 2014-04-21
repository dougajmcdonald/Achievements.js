module Achievements {

    export interface ILayoutTemplateConfig {
        template: string;
        containerClass: string;
    }

    export class LayoutTemplate {

        template: string;
        containerClass: string;

        constructor(config: ILayoutTemplateConfig) {
            this.template = config.template;
            this.containerClass = config.containerClass;
        }
    }

} 