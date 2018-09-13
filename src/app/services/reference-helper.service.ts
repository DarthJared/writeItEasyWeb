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

  public getAuthorFormatSection(authorsObj) {
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

  getDateFormatSection(dateTxt, endWithPeriod, spaceBefore, spaceAfter) {
    let newFormatSection = _.cloneDeep(this.formatSectionObj);
    if (spaceBefore) {
      newFormatSection.content += ' ';
    }
    if (dateTxt.length < 1) {
      newFormatSection.content += '(n.d.)';
    }
    else {
      newFormatSection.content += `(${dateTxt})`;  
    }
    if (endWithPeriod) {
      newFormatSection.content += '.';
    }
    if (spaceAfter) {
      newFormatSection.content += ' ';
    }
    return newFormatSection;
  }

  getNoParenDateFormatSection(dateTxt, endWithComma, spaceBefore, spaceAfter) {
    let newFormatSection = _.cloneDeep(this.formatSectionObj);
    if (spaceBefore) {
      newFormatSection.content += ' ';
    }
    if (dateTxt.length < 1) {
      newFormatSection.content += 'n.d.';
    }
    else {
      newFormatSection.content += dateTxt;  
      if (!endWithComma) {
        newFormatSection.content += '.';
      }
    }
    if (endWithComma) {
      newFormatSection.content += ',';
    }
    if (spaceAfter) {
      newFormatSection.content += ' ';
    }
    return newFormatSection;
  }

  getTitleFormatSection(titleTxt, italic, quote, endWithPeriod, spaceBefore, spaceAfter) {
    if (titleTxt.length < 1) {
      // TODO: Throw error because there needs to be a title
    }
    let newFormatSection = _.cloneDeep(this.formatSectionObj);
    newFormatSection.italic = italic;
    if (spaceBefore) {
      newFormatSection.content += ' ';
    }
    if (quote) {
      newFormatSection.content += '"';
    }
    let nextCapital = true;
    for (let i = 0; i < titleTxt.length; i++) {
      let toCheck = titleTxt[i];
      if (nextCapital) {
        if (toCheck == ' ')
          nextCapital = false;
        newFormatSection.content += toCheck.toUpperCase();
      }
      else {
        newFormatSection.content += toCheck.toLowerCase();
      }
      if (toCheck == ':')
        nextCapital = true;
    }
    if (endWithPeriod) {
      newFormatSection.content += '.';
    }
    if (quote) {
      newFormatSection.content += '"';
    }
    if (spaceAfter) {
      newFormatSection.content += ' ';
    }
    return newFormatSection;
  }

  getEditionFormatSection(editionTxt, spaceAfter) {
    let newFormatSection = _.cloneDeep(this.formatSectionObj);
    if (editionTxt.length > 0) {
      newFormatSection.content += ` (${editionTxt} ed.).`
    }
    else {
      newFormatSection.content += '.';
    }
    if (spaceAfter) {
      newFormatSection.content += ' ';
    }
    return newFormatSection;
  }

  getPublishInfoFormatSection(publicationLocationTxt, publisherTxt, spaceBefore, spaceAfter) {
    let newFormatSection = _.cloneDeep(this.formatSectionObj);
    if (spaceBefore) {
      newFormatSection.content += ' ';
    }
    if (publicationLocationTxt.length > 0) {
      if (publisherTxt.length > 0) {
        newFormatSection.content += `${publicationLocationTxt}: `;
      }
      else {
        newFormatSection.content += `${publicationLocationTxt}.`;
      }
    }
    if (publisherTxt.length > 0) {
      newFormatSection.content += `${publisherTxt}.`;
    }
    if (spaceAfter) {
      newFormatSection.content += ' ';
    }
    return newFormatSection;
  }

  getTextFormatSection(text, endWithPeriod, spaceBefore, spaceAfter) {
    let newFormatSection = _.cloneDeep(this.formatSectionObj);
    if (spaceBefore) {
      newFormatSection.content += ' ';
    }
    newFormatSection.content += text;
    if (endWithPeriod) {
      newFormatSection.content += '.';
    }
    if (spaceAfter) {
      newFormatSection.content += ' ';
    }
    return newFormatSection;
  }

  getVolumeFormatSection(volText, pagesExist, spaceBefore, spaceAfter) {
    let newFormatSection = _.cloneDeep(this.formatSectionObj);
    if (spaceBefore) {
      newFormatSection.content += ' ';
    }
    if (volText.length > 0 || pagesExist) {
      newFormatSection.content += '(';
    }
    if (volText.length > 0) {
      newFormatSection.content += `Vol. ${volText}`;
      if (pagesExist) {
        newFormatSection.content += ',';
      } 
      else {
        newFormatSection.content += ').';
      }
    }
    if (spaceAfter) {
      newFormatSection.content += ' ';
    }
    return newFormatSection;
  }

  getPagesFormatSection(startPageText, endPageText, endWithParen, endWithPeriod, spaceBefore, spaceAfter) {
    let newFormatSection = _.cloneDeep(this.formatSectionObj);
    if (spaceBefore) {
      newFormatSection.content += ' ';
    }
    if (startPageText.length < 1 && endPageText.length > 0) {
      // TODO: Throw error because there needs to be a start page if there is an end page
    }
    else if (startPageText.length > 0 && endPageText.length > 0 &&
      startPageText != endPageText) {
      newFormatSection.content += `pp. ${startPageText}-${endPageText}`;
    }
    else if ((startPageText.length > 0 && endPageText.length < 1) ||
      (startPageText == endPageText && startPageText.length > 0)) {
      newFormatSection.content += `p. ${startPageText}`;
    }
    if (endWithPeriod) {
      newFormatSection.content += '(';
    }
    if (endWithPeriod) {
      newFormatSection.content += '.';
    }
    if (spaceAfter) {
      newFormatSection.content += ' ';
    }
    return newFormatSection;
  }

}
