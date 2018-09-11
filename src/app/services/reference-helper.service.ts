import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class ReferenceHelperService {
  
  formatSectionObj = {
    content: '',
    bold: false,
    italic: false,
    underline: false,
    font: 'Times New Roman',
    fontSize: 12
  };

  constructor() { }

  public getAuthorFormmatSection(authorsObj) {
    let newFormatSection = _.cloneDeep(this.formatSectionObj);
    if (authorsObj.length < 1) {
      // TODO: Throw error saying need to have author
    }
    let elipseAdded: boolean = false;
    for (let i = 0; i < authorsObj.length; i++) {
      let authorObj = authorsObj[i];
      if (i < 6 && i != authorsObj.length - 1) {
        if (authorObj.lastName.length > 0)
          newFormatSection.content += `${authorObj.lastName}, `;
        if (authorObj.firstName.length > 0) {
          newFormatSection.content += `${authorObj.firstName[0].toUpperCase()}.`;
          if (authorObj.middleName.length < 1)
            newFormatSection.content += ', ';
          else
            newFormatSection.content += ' ';
        }
        if (authorObj.middleName.length > 0) 
        newFormatSection.content += `${authorObj.middleName[0].toUpperCase()}., `
      }
      else if (i == authorsObj.length - 1) {
        if (!elipseAdded && i > 0)
          newFormatSection.content += '& ';
        if (authorObj.lastName.length > 0) {
          newFormatSection.content += authorObj.lastName;
          if (authorObj.firstName.length > 0 || authorObj.middleName.length > 0)
            newFormatSection.content += ',';
          newFormatSection.content += ' ';
        }
        if (authorObj.firstName.length > 0)
          newFormatSection.content += `${authorObj.firstName[0].toUpperCase()}. `;
        if (authorObj.middleName.length > 0) 
          newFormatSection.content += `${authorObj.middleName[0].toUpperCase()}. `;
      }
      else {
        if (!elipseAdded) {
          elipseAdded = true;
          newFormatSection.content += '... ';
        }
      }
    }
    return newFormatSection;
  }

}
