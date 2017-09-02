import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConfigOptionsService } from "./../services/config-options.service";
import { FontsService } from "./../services/fonts.service";

@Component({
  selector: 'config-bar',
  templateUrl: './config-bar.component.html',
  styleUrls: ['./config-bar.component.css'],
  providers: [ConfigOptionsService, FontsService]
})
export class ConfigBarComponent implements OnInit {

  @Output() configObj: EventEmitter<string> = new EventEmitter<string>();
  sections: any = [];
  subsections: any = [];
  apaMla: string= "APA";

  paperSettings: any = {};
  paperOptions: any = {};

  constructor(private configOptions: ConfigOptionsService, private fontsService: FontsService) { 
    this.paperSettings = this.configOptions.getPaperSettings();    
    this.paperOptions = this.configOptions.getPaperOptions();
    // console.log("started");
  }  

  ngOnInit() {
    this.sendConfigObj();
  }

  getOrderedInfo(info) {
    let ordered = [];
    for (let i = 0; i < info.length; i++) {
      for (let j = 0; j < info.length; j++) {
        if (info[j].index == i) {
          ordered.push(info[j]);
        }
      }
    }
    return ordered;
  }

  moveUp(fieldName, optionName, index) {
    if (index > 0) {
      for (let i = 0; i < this.paperOptions.sections.length; i++) {
        let section = this.paperOptions.sections[i];
        for (let j = 0; j < section.fields.length; j++) {
          if (section.fields[j].name == fieldName) {          
            for (let k = 0; k < section.fields[j]['options'].length; k++) {
              let option = section.fields[j]['options'][k];            
              if (option.index == index - 1) {
                option.index++;
              }
            }
            for (let k = 0; k < section.fields[j]['options'].length; k++) {
              let option = section.fields[j]['options'][k];
              if (option.name == optionName) {
                option.index--;
              }
            }
            for (let k = 0; k < section.fields[j]['options'].length; k++) {
              let option = section.fields[j]['options'][k];
              this.paperSettings[option.name + 'Index'] = option.index;          
            }
          }        
        }
      }
    }
  }
  
  moveDown(fieldName, optionName, index) {    
    for (let i = 0; i < this.paperOptions.sections.length; i++) {
      let section = this.paperOptions.sections[i];
      for (let j = 0; j < section.fields.length; j++) {
        if (section.fields[j].name == fieldName) {
          if (index < section.fields[j]['options'].length - 1) {
            for (let k = 0; k < section.fields[j]['options'].length; k++) {
              let option = section.fields[j]['options'][k];            
              if (option.index == index + 1) {
                option.index--;
              }
            }
            for (let k = 0; k < section.fields[j]['options'].length; k++) {
              let option = section.fields[j]['options'][k];
              if (option.name == optionName) {
                option.index++;
              }
            }
            for (let k = 0; k < section.fields[j]['options'].length; k++) {
              let option = section.fields[j]['options'][k];
              this.paperSettings[option.name + 'Index'] = option.index;          
            }
          }
        }
      }    
    }
  }

  checkHides(hideUntil) {
    for (let hider in hideUntil) {
      if (!this.paperSettings[hideUntil[hider]])
        return false;
    }
    return true;
  }

  correctEnabled(toCheck) {
    let correct = true;
    for (let i = 0; i < toCheck.length; i++) {
      if (!this.paperSettings[toCheck[i]]) {
        correct = false;
      }
    }
    return correct;
  }

  sendConfigObj() {
    this.configObj.emit(this.paperSettings);
  }

  radioUpdated(fieldName:string, value: any) {
    this.paperSettings[fieldName] = value.srcElement.checked;
  }

  ngOnChanges() {
    console.log("here");
  }

  addSection(sectionName: string) {
    console.log("here2");
    this.sections += sectionName; 
  }

  sectionIncluded(sectionName: string) {
    return this.sections.indexOf(sectionName) != -1;
  }

  addSubsection(sectionName: string) {
    this.subsections += sectionName; 
  }

  subsectionIncluded(sectionName: string) {
    return this.subsections.indexOf(sectionName) != -1;
  }
}
