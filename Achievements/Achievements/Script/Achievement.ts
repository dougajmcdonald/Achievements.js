 module Achievements {

     export interface IAchievementConfig {
         name: string;
         description: string;
         event: AchievmentEvent;
     }

     export class Achievement {

         name: string;
         descripion: string;
         event: AchievmentEvent;

         visible: boolean = false;

         constructor(config: IAchievementConfig) {
             this.name = config.name;
             this.descripion = config.description;
             this.event = config.event;
         }

         show(template: LayoutTemplate): void {

             if (this.visible) {
                 return;
             }

             var el = document.createElement("div");

             el.setAttribute("class", template.containerClass);
             el.innerHTML = template.template;

             var title = el.getElementsByClassName("achieveTitle");
             (<HTMLElement>title[0]).innerText = this.name;

             var body = el.getElementsByClassName("achieveBody");
             (<HTMLElement>body[0]).innerText = this.descripion;
                       
             document.body.appendChild(el);
             this.visible = true;

             setTimeout(() => {
                 document.body.removeChild(el);
                 this.visible = false;
             }, template.displayTime);

         }
     }
 }