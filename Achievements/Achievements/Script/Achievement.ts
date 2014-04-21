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

         constructor(config: IAchievementConfig) {
             this.name = config.name;
             this.descripion = config.description;
             this.event = config.event;
         }
     }
 }