import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { ReferenceHelperService } from './reference-helper.service';
import { format } from 'util';
//25 of 65
@Injectable()
export class ReferenceTypesService {

  constructor(public referenceHelperService: ReferenceHelperService) { }

  public getAPAReferenceTypes() {
    return this.referencesFrameworkAPA;
  }

  public getMLAReferenceTypes() {
    return this.referencesFrameworkMLA;
  }

  formatSectionObj = {
    content: '',
    bold: false,
    italic: false,
    underline: false,
    font: 'Times New Roman',
    fontSize: 12
  };

  referencesFrameworkAPA = [
    {
      type: 'bookAuth',
      display: 'Book with Author(s)',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: true
        },
        {
          type: 'dateY',
          display: 'Year of Publication',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Publisher Name',
          placeholder: 'Publisher',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Publication Location',
          placeholder: 'Location',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Edition',
          placeholder: 'Edition',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        let authorFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Author']);
        let beginFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Year of Publication'], true, false, true);
        let titleFormatObj = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Title'], true, false, false, false, true);
        let editionFormatObj = this.referenceHelperService.getEditionFormatSection(citationInfoObj['Edition'], true);
        let publishFormatObj = this.referenceHelperService.getPublishInfoFormatSection(citationInfoObj['Publication Location'], citationInfoObj['Publisher'], false, false);
        
        formatSections.push(authorFormatSection);
        formatSections.push(beginFormatSection);
        formatSections.push(titleFormatObj);
        formatSections.push(editionFormatObj);  
        formatSections.push(publishFormatObj);      
        return formatSections;
      }
    },
    {
      type: 'bookNoAuth',
      display: 'Book without Author',
      fields: [
        {
          type: 'dateY',
          display: 'Year of Publication',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Publisher Name',
          placeholder: 'Publisher',
          canAdd: false,
          required: false
        }, 
        {
          type: 'text',
          display: 'Publication Location',
          placeholder: 'Location',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Edition',
          placeholder: 'Edition',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        let titleFormatObj = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Title'], true, false, false, false, false);
        let editionFormatObj = this.referenceHelperService.getEditionFormatSection(citationInfoObj['Edition'], false);
        let dateFormatObj = this.referenceHelperService.getDateFormatSection(citationInfoObj['Year of Publication'], true, false, true);
        let publishFormatObj = this.referenceHelperService.getPublishInfoFormatSection(citationInfoObj['Publication Location'], citationInfoObj['Publisher Name'], false, false);
        
        formatSections.push(titleFormatObj);
        formatSections.push(editionFormatObj);
        formatSections.push(dateFormatObj);
        formatSections.push(publishFormatObj);
        return formatSections;
      }
    },
    {
      type: 'bookByOrg',
      display: 'Book by Organization',
      fields: [
        {
          type: 'text',
          display: 'Organization',
          placeholder: 'Organization',
          canAdd: false,
          required: true
        },
        {
          type: 'dateY',
          display: 'Year of Publication',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Publisher Name',
          placeholder: 'Publisher',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Publication Location',
          placeholder: 'Location',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Edition',
          placeholder: 'Edition',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        let orgFormatSection = this.referenceHelperService.getTextFormatSection(citationInfoObj['Organization'], false, true, false, true);
        let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Year of Publication'], true, false, true);
        let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Title'], true, false, false, false, false);
        let editionFormatSection = this.referenceHelperService.getEditionFormatSection(citationInfoObj['Edition'], true);
        let publishFormatSection = this.referenceHelperService.getPublishInfoFormatSection(citationInfoObj['Publication Location'], citationInfoObj['Publisher Name'], false, false);
        formatSections.push(orgFormatSection);
        formatSections.push(dateFormatSection);
        formatSections.push(titleFormatSection);
        formatSections.push(editionFormatSection);
        formatSections.push(publishFormatSection);
        return formatSections;
      }
    },
    {
      type: 'encyclopedia',
      display: 'Encyclopedia or Dictionary Entry',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: false
        },
        {
          type: 'dateY',
          display: 'Year of Publication',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Section or Word Referenced',
          placeholder: 'ex. History',
          canAdd: false,
          required: true
        },
        {
          type: 'text',
          display: 'Title of Encyclopedia or Dictionary',
          placeholder: 'ex. Webster Dictionary',
          canAdd: false,
          required: true
        },
        {
          type: 'text',
          display: 'Volume',
          placeholder: 'Volume Number',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Start Page',
          placeholder: 'Start Page',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'End Page',
          placeholder: 'End Page',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Publication Location',
          placeholder: 'Location',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Publisher Name',
          placeholder: 'Publisher',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        
        let beginFormatSection = _.cloneDeep(this.formatSectionObj);
        if (citationInfoObj['Author'].length > 0) {
          let authorFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Author']);
          let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Year of Publication'], true, false, true);
          if (citationInfoObj['Section or Word Referenced'].length < 1) {
            // TODO: Throw error because there needs to be a title
          }
          let sectWordFormatSection = this.referenceHelperService.getTextFormatSection(`${citationInfoObj['Section or Word Referenced']}. In`, false, false, false, true);
          if (citationInfoObj['Title of Encyclopedia or Dictionary'].length < 1) {
            // TODO: Throw error because there needs to be a title
          }
          let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Title of Encyclopedia or Dictionary'], true, false, true, false, true);
          let volFormatSection = this.referenceHelperService.getVolumeFormatSection(citationInfoObj['Volume'], citationInfoObj['Start Page'].length > 0, false, true);
          let pagesFormatSection = this.referenceHelperService.getPagesFormatSection(citationInfoObj['Start Page'], citationInfoObj['End Page'], true, true, false, true);
          let publishFormatSection = this.referenceHelperService.getPublishInfoFormatSection(citationInfoObj['Publication Location'], citationInfoObj['Publisher Name'], false, true);
          
          formatSections.push(authorFormatSection);
          formatSections.push(dateFormatSection);
          formatSections.push(sectWordFormatSection);
          formatSections.push(titleFormatSection);
          formatSections.push(volFormatSection);
          formatSections.push(pagesFormatSection);
          formatSections.push(publishFormatSection);
        }
        else {
          if (citationInfoObj['Section or Word Referenced'].length < 1) {
            // TODO: Throw error because there needs to be a title
          }
          let sectWordFormatSection = this.referenceHelperService.getTextFormatSection(`${citationInfoObj['Section or Word Referenced']}`, false, true, false, true);
          let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Year of Publication'], true, false, true);
          let inFormatSection = this.referenceHelperService.getTextFormatSection('In', false, false, false, true);
          if (citationInfoObj['Title of Encyclopedia or Dictionary'].length < 1) {
            // TODO: Throw error because there needs to be a title
          }
          let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Title of Encyclopedia or Dictionary'], true, false, true, false, true);
          let volFormatSection = this.referenceHelperService.getVolumeFormatSection(citationInfoObj['Volume'], citationInfoObj['Start Page'].length > 0, false, true);
          let pagesFormatSection = this.referenceHelperService.getPagesFormatSection(citationInfoObj['Start Page'], citationInfoObj['End Page'], true, true, false, true);
          let publishFormatSection = this.referenceHelperService.getPublishInfoFormatSection(citationInfoObj['Publication Location'], citationInfoObj['Publisher Name'], false, true);

          formatSections.push(sectWordFormatSection);
          formatSections.push(dateFormatSection);
          formatSections.push(inFormatSection);
          formatSections.push(titleFormatSection);
          formatSections.push(volFormatSection);
          formatSections.push(pagesFormatSection);
          formatSections.push(publishFormatSection);
        }
        return formatSections;
      }
    },
    {
      type: 'translated',
      display: 'Translated Book',
      fields: [
        {
          type: 'authorFML',
          display: 'Original Author',
          canAdd: true,
          required: false
        },
        {
          type: 'dateY',
          display: 'Year of Publication',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Title',
          placeholder: 'Title',
          canAdd: false,
          required: true
        },
        {
          type: 'authorFML',
          display: 'Translator',
          canAdd: true,
          required: false
        },
        {
          type: 'text',
          display: 'Publication Location',
          placeholder: 'Location',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Publisher Name',
          placeholder: 'Publisher',
          canAdd: false,
          required: false
        },
        {
          type: 'dateY',
          display: 'Original Year of Publication',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Edition',
          placeholder: 'Edition',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        if (citationInfoObj['Original Author'].length < 1) {
          // TODO: Throw error because there needs to be an author
        }
        let orgAuthorFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Original Author']);
        let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Year of Publication'], true, false, true);
        let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Title'], true, false, false, false, true);
        let editionFormatSection = this.referenceHelperService.getEditionFormatSection(citationInfoObj['Edition'], true);
        let openParenFormatSection = this.referenceHelperService.getTextFormatSection('(', false, false, false, false);
        if (citationInfoObj['Translator'].length < 1) {
          // TODO: Throw error because there needs to be an author
        }
        let translatorFormatSection = this.referenceHelperService.getReverseAuthorFormatSection(citationInfoObj['Translator']);
        let closeParenFormatSection = this.referenceHelperService.getTextFormatSection(', Trans.)', false, true, false, true);
        let publishFormatSection = this.referenceHelperService.getPublishInfoFormatSection(citationInfoObj['Publication Location'], citationInfoObj['Publisher Name'], false, true);
        if (citationInfoObj['Original Year of Publication'].length < 1) {
          // TODO: Throw error because there needs to be an Original Publication Date
        }
        let orgPubDateFormatSection = this.referenceHelperService.getTextFormatSection(`(Original work published ${citationInfoObj['Original Year of Publication']})`, false, false, false, true);
        formatSections.push(orgAuthorFormatSection);
        formatSections.push(dateFormatSection);
        formatSections.push(titleFormatSection);
        formatSections.push(editionFormatSection);
        formatSections.push(openParenFormatSection);
        formatSections.push(translatorFormatSection);
        formatSections.push(closeParenFormatSection);
        formatSections.push(publishFormatSection);
        formatSections.push(orgPubDateFormatSection);
        return formatSections;
      }
    },
    {
      type: 'magazine',
      display: 'Magazine Article',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: false
        },
        {
          type: 'date',
          display: 'Date of Publication',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Article Title',
          placeholder: 'Title',
          canAdd: false,
          required: true
        },
        {
          type: 'text',
          display: 'Magazine Name',
          placeholder: 'Name',
          canAdd: false,
          required: true
        },
        {
          type: 'text',
          display: 'Volume Number',
          placeholder: 'Volume',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Issue Number',
          placeholder: 'Issue',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Start Page',
          placeholder: 'Start Page',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'End Page',
          placeholder: 'End Page',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        if (citationInfoObj['Author'].length < 1) {
          // TODO: Throw error because there needs to be an author
        }
        let authorFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Author']);
        let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Article Title'], false, true, true, false, false);
        let magNameFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Magazine Name'], true, false, false, false, false);
        let commaFormatSection = this.referenceHelperService.getTextFormatSection(',', false, false, false, true);
        let dateFormatSection = this.referenceHelperService.getNoParenDateFormatSection(citationInfoObj['Date of Publication'], citationInfoObj['Start Page'].length > 0, false, true);
        let pagesFormatSection = this.referenceHelperService.getPagesFormatSection(citationInfoObj['Start Page'], citationInfoObj['End Page'], false, true, false, true);
        formatSections.push(authorFormatSection);
        formatSections.push(titleFormatSection);
        formatSections.push(magNameFormatSection);
        formatSections.push(commaFormatSection);
        formatSections.push(dateFormatSection);
        formatSections.push(pagesFormatSection);
        return formatSections;
      }
    },
    {
      type: 'newspaper',
      display: 'Newspaper Article',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: false
        },
        {
          type: 'date',
          display: 'Date of Publication',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Article Title',
          placeholder: 'Title',
          canAdd: false,
          required: true
        },
        {
          type: 'text',
          display: 'Newspaper Name',
          placeholder: 'Name',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Volume Number',
          placeholder: 'Volume',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Issue Number',
          placeholder: 'Issue',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Start Page',
          placeholder: 'Start Page',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'End Page',
          placeholder: 'End Page',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        let authorFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Author']);
        let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Date of Publication'], true, false, true);
        let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Article Title'], false, false, true, false, true);
        let magTitleFormatSection = this.referenceHelperService.getTextFormatSection(citationInfoObj['Newspaper Name'], true, false, false, false);
        let textToAdd = '';
        if (citationInfoObj['Volume Number'].length > 0 || citationInfoObj['Issue Number'].length > 0 || citationInfoObj['Start Page'].length > 0) {
          textToAdd = ', ';
        }
        let commaFormatSection = this.referenceHelperService.getTextFormatSection(textToAdd, true, false, false, false);
        let volFormatSection = this.referenceHelperService.getTextFormatSection(citationInfoObj['Volume Number'], true, false, false, false);
        let issueFormatSection = this.referenceHelperService.getTextFormatSection(`(${citationInfoObj['Issue Number']})`, false, false, false, false);
        let textToAdd2 = '';
        if ((citationInfoObj['Volume Number'].length > 0 || citationInfoObj['Issue Number'].length > 0) && citationInfoObj['Start Page'].length > 0) {
          textToAdd2 = ', ';
        }
        let comma2FormatSection = this.referenceHelperService.getTextFormatSection(textToAdd2, false, false, false, false);
        let pagesFormatSection = this.referenceHelperService.getPagesFormatSection(citationInfoObj['Start Page'], citationInfoObj['End Page'], false, true, false, false);
        formatSections.push(authorFormatSection);
        formatSections.push(dateFormatSection);
        formatSections.push(titleFormatSection);
        formatSections.push(magTitleFormatSection);
        formatSections.push(commaFormatSection);
        formatSections.push(volFormatSection);
        formatSections.push(issueFormatSection);
        formatSections.push(comma2FormatSection);
        formatSections.push(pagesFormatSection);
        return formatSections;
      }
    },
    {
      type: 'journal',
      display: 'Journal Article',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: true
        },
        {
          type: 'dateY',
          display: 'Year of Publication',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Article Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Journal Name',
          placeholder: 'Name',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Volume Number',
          placeholder: 'Volume',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Issue Number',
          placeholder: 'Issue',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Start Page',
          placeholder: 'Start Page',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'End Page',
          placeholder: 'End Page',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        let authorFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Author']);
        let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Year of Publication'], true, false, true);
        let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Article Title'], false, false, true, false, true);
        let journalFormatSection = this.referenceHelperService.getTextFormatSection(citationInfoObj['Journal Name'], true, false, false, false);
        let textToAdd = '';
        if (citationInfoObj['Volume Number'].length > 0 || citationInfoObj['Issue Number'].length > 0 || citationInfoObj['Start Page'].length > 0) {
          textToAdd = ', ';
        }
        let commaFormatSection = this.referenceHelperService.getTextFormatSection(textToAdd, true, false, false, false);
        let volFormatSection = this.referenceHelperService.getTextFormatSection(citationInfoObj['Volume Number'], true, false, false, false);
        let issueFormatSection = this.referenceHelperService.getTextFormatSection(`(${citationInfoObj['Issue Number']})`, false, false, false, false);
        let textToAdd2 = '';
        if ((citationInfoObj['Volume Number'].length > 0 || citationInfoObj['Issue Number'].length > 0) && citationInfoObj['Start Page'].length > 0) {
          textToAdd2 = ', ';
        }
        let comma2FormatSection = this.referenceHelperService.getTextFormatSection(textToAdd2, false, false, false, false);
        let pagesFormatSection = this.referenceHelperService.getPagesFormatSection(citationInfoObj['Start Page'], citationInfoObj['End Page'], false, false, false, true);
        formatSections.push(authorFormatSection);
        formatSections.push(dateFormatSection);
        formatSections.push(titleFormatSection);
        formatSections.push(journalFormatSection);
        formatSections.push(commaFormatSection);
        formatSections.push(volFormatSection);
        formatSections.push(issueFormatSection);
        formatSections.push(comma2FormatSection);
        formatSections.push(pagesFormatSection);
        return formatSections;
      }
    },
    {
      type: 'onlineJournal',
      display: 'Online Scholarly Journal',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: true
        },
        {
          type: 'dateY',
          display: 'Year of Publication',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Article Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Journal Name',
          placeholder: 'Name',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Volume Number',
          placeholder: 'Volume',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Issue Number',
          placeholder: 'Issue',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Start Page',
          placeholder: 'Start Page',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'End Page',
          placeholder: 'End Page',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        },
        {
          type: 'text',
          display: 'DOI',
          placeholder: 'ex. 10.1108/03090560710821161 or http://dx.doi.org/10.1016/j.appdev.2012.05.005',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        let authorFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Author']);
        let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Year of Publication'], true, false, true);
        let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Article Title'], false, false, true, false, true);
        let journalFormatSection = this.referenceHelperService.getTextFormatSection(citationInfoObj['Journal Name'], true, false, false, false);
        let textToAdd = '';
        if (citationInfoObj['Volume Number'].length > 0 || citationInfoObj['Issue Number'].length > 0 || citationInfoObj['Start Page'].length > 0) {
          textToAdd = ', ';
        }
        let commaFormatSection = this.referenceHelperService.getTextFormatSection(textToAdd, true, false, false, false);
        let volFormatSection = this.referenceHelperService.getTextFormatSection(citationInfoObj['Volume Number'], true, false, false, false);
        let issueFormatSection = this.referenceHelperService.getTextFormatSection(`(${citationInfoObj['Issue Number']})`, false, false, false, false);
        let textToAdd2 = '';
        if ((citationInfoObj['Volume Number'].length > 0 || citationInfoObj['Issue Number'].length > 0) && citationInfoObj['Start Page'].length > 0) {
          textToAdd2 = ', ';
        }
        let comma2FormatSection = this.referenceHelperService.getTextFormatSection(textToAdd2, false, false, false, false);
        let pagesFormatSection = this.referenceHelperService.getPagesFormatSection(citationInfoObj['Start Page'], citationInfoObj['End Page'], false, true, false, true);
        let onlineFormatSection = this.referenceHelperService.getOnlineRetrievedFormatSection(citationInfoObj['DOI'], citationInfoObj['Retrieved From'], false, false);
        formatSections.push(authorFormatSection);
        formatSections.push(dateFormatSection);
        formatSections.push(titleFormatSection);
        formatSections.push(journalFormatSection);
        formatSections.push(commaFormatSection);
        formatSections.push(volFormatSection);
        formatSections.push(issueFormatSection);
        formatSections.push(comma2FormatSection);
        formatSections.push(pagesFormatSection);
        formatSections.push(onlineFormatSection);
        return formatSections;
      }
    },
    {
      type: 'onlinePeriodical',
      display: 'Online Periodical',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: true
        },
        {
          type: 'dateY',
          display: 'Year of Publication',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Article Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Periodical Name',
          placeholder: 'Name',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Volume Number',
          placeholder: 'Volume',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Issue Number',
          placeholder: 'Issue',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Start Page',
          placeholder: 'Start Page',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'End Page',
          placeholder: 'End Page',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        },
        {
          type: 'text',
          display: 'DOI',
          placeholder: 'ex. 10.1108/03090560710821161 or http://dx.doi.org/10.1016/j.appdev.2012.05.005',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        let authorFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Author']);
        let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Year of Publication'], true, false, true);
        let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Article Title'], false, false, true, false, true);
        let periodicalFormatSection = this.referenceHelperService.getTextFormatSection(citationInfoObj['Periodical Name'], true, false, false, false);
        let textToAdd = '';
        if (citationInfoObj['Volume Number'].length > 0 || citationInfoObj['Issue Number'].length > 0 || citationInfoObj['Start Page'].length > 0) {
          textToAdd = ', ';
        }
        let commaFormatSection = this.referenceHelperService.getTextFormatSection(textToAdd, true, false, false, false);
        let volFormatSection = this.referenceHelperService.getTextFormatSection(citationInfoObj['Volume Number'], true, false, false, false);
        let issueFormatSection = this.referenceHelperService.getTextFormatSection(`(${citationInfoObj['Issue Number']})`, false, false, false, false);
        let textToAdd2 = '';
        if ((citationInfoObj['Volume Number'].length > 0 || citationInfoObj['Issue Number'].length > 0) && citationInfoObj['Start Page'].length > 0) {
          textToAdd2 = ', ';
        }
        let comma2FormatSection = this.referenceHelperService.getTextFormatSection(textToAdd2, false, false, false, false);
        let pagesFormatSection = this.referenceHelperService.getPagesFormatSection(citationInfoObj['Start Page'], citationInfoObj['End Page'], false, true, false, true);
        let onlineFormatSection = this.referenceHelperService.getOnlineRetrievedFormatSection(citationInfoObj['DOI'], citationInfoObj['Retrieved From'], false, false);
        formatSections.push(authorFormatSection);
        formatSections.push(dateFormatSection);
        formatSections.push(titleFormatSection);
        formatSections.push(periodicalFormatSection);
        formatSections.push(commaFormatSection);
        formatSections.push(volFormatSection);
        formatSections.push(issueFormatSection);
        formatSections.push(comma2FormatSection);
        formatSections.push(pagesFormatSection);
        formatSections.push(onlineFormatSection);
        return formatSections;
      }
    },
    {
      type: 'onlineNewspaper',
      display: 'Online Newpaper Article',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: true
        },
        {
          type: 'date',
          display: 'Date of Publication',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Article Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Newspaper Name',
          placeholder: 'Name',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'End Page',
          placeholder: 'End Page',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        let authorFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Author']);
        let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Date of Publication'], true, false, true);
        let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Article Title'], false, false, true, false, true);
        let newspaperFormatSection = this.referenceHelperService.getTextFormatSection(citationInfoObj['Newspaper Name'], true, true, false, true);
        let retrievedFormatSection = this.referenceHelperService.getRetrievedFromFormatSection(citationInfoObj['Retrieved From'], false, false);
        formatSections.push(authorFormatSection);
        formatSections.push(dateFormatSection);
        formatSections.push(titleFormatSection);
        formatSections.push(newspaperFormatSection);
        formatSections.push(retrievedFormatSection);
        return formatSections;
      }
    },
    {
      type: 'electronicBook',
      display: 'Electronic Book',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: true
        },
        {
          type: 'date',
          display: 'Date of Publication',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Book Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        let authorFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Author']);
        let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Date of Publication'], true, false, true);
        let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Book Title'], true, false, true, false, true);
        let retrievedFormatSection = this.referenceHelperService.getRetrievedFromFormatSection(citationInfoObj['Retrieved From'], false, false);
        formatSections.push(authorFormatSection);
        formatSections.push(dateFormatSection);
        formatSections.push(titleFormatSection);
        formatSections.push(retrievedFormatSection);
        return formatSections;
      }
    },
    {
      type: 'kindle',
      display: 'Kindle Book',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: true
        },
        {
          type: 'date',
          display: 'Date of Publication',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Book Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'DOI',
          placeholder: 'ex. 10.1108/03090560710821161 or http://dx.doi.org/10.1016/j.appdev.2012.05.005',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        let authorFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Author']);
        let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Date of Publication'], true, false, true);
        let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Book Title'], true, false, false, false, false);
        let kindleFormatSection = this.referenceHelperService.getTextFormatSection('[Kindle DX Version]', false, true, true, true);
        let retrievedFormatSection = this.referenceHelperService.getOnlineRetrievedFormatSection(citationInfoObj['DOI'], citationInfoObj['Retrieved From'], false, false);
        formatSections.push(authorFormatSection);
        formatSections.push(dateFormatSection);
        formatSections.push(titleFormatSection);
        formatSections.push(kindleFormatSection);
        formatSections.push(retrievedFormatSection);
        return formatSections;
      }
    },
    {
      type: 'onlineBibliography',
      display: 'Online Bibliography',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: true
        },
        {
          type: 'date',
          display: 'Date of Publication',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Book Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        let authorFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Author']);
        let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Date of Publication'], true, false, true);
        let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Book Title'], true, false, true, false, true);
        let retrievedFormatSection = this.referenceHelperService.getRetrievedFromFormatSection(citationInfoObj['Retrieved From'], false, false);
        formatSections.push(authorFormatSection);
        formatSections.push(dateFormatSection);
        formatSections.push(titleFormatSection);
        formatSections.push(retrievedFormatSection);
        return formatSections;
      }
    },
    {
      type: 'onlineInterview',
      display: 'Online Interview',
      fields: [
        {
          type: 'authorFML',
          display: 'Interviewer',
          canAdd: true,
          required: true
        },
        {
          type: 'authorFML',
          display: 'Interviewee',
          canAdd: true,
          required: true
        },
        {
          type: 'date',
          display: 'Date of Interview',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Interview Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        let interviewerFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Interviewer']);
        let textToAdd = '';
        if (citationInfoObj['Interviewer'].length > 1) {
          textToAdd = '(Interviewers) &';
        }
        else {
          textToAdd = '(Interviewer) &';
        } 
        let interviewerTextFormatSection = this.referenceHelperService.getTextFormatSection(textToAdd, false, false, false, true);
        let intervieweeFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Interviewee']);
        let textToAdd2 = '';
        if (citationInfoObj['Interviewee'].length > 1) {
          textToAdd = '(Interviewees)';
        }
        else {
          textToAdd = '(Interviewee)';
        } 
        let intervieweeTextFormatSection = this.referenceHelperService.getTextFormatSection(textToAdd2, false, true, false, true);
        let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Date of Interview'], true, false, true);
        let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Interview Title'], true, false, false, false, false);
        let transcriptFormatSection = this.referenceHelperService.getTextFormatSection('[Interview Transcript]', false, true, true, true);
        let retrievedFormatSection = this.referenceHelperService.getRetrievedFromFormatSection(citationInfoObj['Retrieved From'], false, false);
        formatSections.push(interviewerFormatSection);
        formatSections.push(interviewerTextFormatSection);
        formatSections.push(intervieweeFormatSection);
        formatSections.push(intervieweeTextFormatSection);
        formatSections.push(dateFormatSection);
        formatSections.push(titleFormatSection);
        formatSections.push(transcriptFormatSection);
        formatSections.push(retrievedFormatSection);
        return formatSections;
      }
    },
    {
      type: 'onlineEncyclopedia',
      display: 'Online Encyclopedia or Dictionary Entry',
      fields: [
        {
          type: 'text',
          display: 'Section or Word Referenced',
          placeholder: 'ex. History',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Date of Publication',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Title of Encyclopedia or Dictionary',
          placeholder: 'ex. Webster Dictionary',
          canAdd: false,
          required: true
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        let sectionFormatSection = this.referenceHelperService.getTextFormatSection(citationInfoObj['Section or Word Referenced'], false, true, false, true);
        let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Date of Publication'], true, false, true);
        let inFormatSection = this.referenceHelperService.getTextFormatSection('In', false, false, false, true);
        let titleFormatSection = this.referenceHelperService.getTextFormatSection(citationInfoObj['Title of Encyclopedia or Dictionary'], true, true, false, true);
        let retrievedFormatSection = this.referenceHelperService.getRetrievedFromFormatSection(citationInfoObj['Retrieved From'], false, false);
        formatSections.push(sectionFormatSection);
        formatSections.push(dateFormatSection);
        formatSections.push(inFormatSection);
        formatSections.push(titleFormatSection);
        formatSections.push(retrievedFormatSection);
        return formatSections;
      }
    },
    {
      type: 'forumDiscussion',
      display: 'Online Forum or Discussion Board',
      fields: [
        {
          type: 'authorFML',
          display: 'Person Posting',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Date Posted',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Title of Message',
          placeholder: 'Title',
          canAdd: false,
          required: true
        },
        {
          type: 'text',
          display: 'Message Number',
          placeholder: 'Number',
          canAdd: false,
          required: true
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        }
      ],
      inText: citationInfoObj => {

      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        let authorFormatSection = this.referenceHelperService.getOneAuthorFormatSection(citationInfoObj['Person Posting']);
        let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Date Posted'], true, false, true);
        let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Title of Message'], false, false, false, false, false);
        let numFormatSection = this.referenceHelperService.getTextFormatSection(` [Msg ${citationInfoObj['Message Number']}]`, false, false, false, false);
        let postedFormatSection = this.referenceHelperService.getTextFormatSection('. Message posted to', false, false, false, true);
        let retrievedFormatSection = this.referenceHelperService.getTextFormatSection(citationInfoObj['Retrieved From'], false, false, false, false);
        formatSections.push(authorFormatSection);
        formatSections.push(dateFormatSection);
        formatSections.push(titleFormatSection);
        formatSections.push(numFormatSection);
        formatSections.push(postedFormatSection);
        formatSections.push(retrievedFormatSection);
        return formatSections;
      }
    },
    {
      type: 'bookReview',
      display: 'Online Book Review',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: true
        },
        {
          type: 'date',
          display: 'Date of Publication',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Review Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Title Being Reviewed',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Source of Review',
          placeholder: 'Source',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Volume Number',
          placeholder: 'Volume',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Issue Number',
          placeholder: 'Issue',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Start Page',
          placeholder: 'Start Page',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'End Page',
          placeholder: 'End Page',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections;
        let authorFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Author']);
        let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Date of Publication'], true, false, true);
        let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Review Title'], false, false, false, false, false);
        let reviewOfFormatSection = this.referenceHelperService.getTextFormatSection('[Review of the book', false, false, true, true);
        let reviewedTitleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Title Being Reviewed'], true, false, false, false, false);
        let closeFormatSection = this.referenceHelperService.getTextFormatSection(']', false, true, false, false);
        let sourceFormatSection = this.referenceHelperService.getTextFormatSection(citationInfoObj['Source of Review'], true, false, false, true);
        let textToAdd = '';
        if (citationInfoObj['Volume Number'].length > 0 || citationInfoObj['Issue Number'].length > 0 || citationInfoObj['Start Page'].length > 0) {
          textToAdd = ', ';
        }
        let commaFormatSection = this.referenceHelperService.getTextFormatSection(textToAdd, true, false, false, false);
        let volFormatSection = this.referenceHelperService.getTextFormatSection(citationInfoObj['Volume Number'], true, false, false, false);
        let issueFormatSection = this.referenceHelperService.getTextFormatSection(`(${citationInfoObj['Issue Number']})`, false, false, false, false);
        let textToAdd2 = '';
        if ((citationInfoObj['Volume Number'].length > 0 || citationInfoObj['Issue Number'].length > 0) && citationInfoObj['Start Page'].length > 0) {
          textToAdd2 = ', ';
        }
        let comma2FormatSection = this.referenceHelperService.getTextFormatSection(textToAdd2, false, false, false, false);
        let pagesFormatSection = this.referenceHelperService.getPagesFormatSection(citationInfoObj['Start Page'], citationInfoObj['End Page'], false, true, false, true);
        let onlineFormatSection = this.referenceHelperService.getOnlineRetrievedFormatSection(citationInfoObj['DOI'], citationInfoObj['Retrieved From'], false, false);
        formatSections.push(authorFormatSection);
        formatSections.push(dateFormatSection);
        formatSections.push(titleFormatSection);
        formatSections.push(reviewOfFormatSection);
        formatSections.push(reviewedTitleFormatSection);
        formatSections.push(closeFormatSection);
        formatSections.push(sourceFormatSection);
        formatSections.push(commaFormatSection);
        formatSections.push(volFormatSection);
        formatSections.push(issueFormatSection);
        formatSections.push(comma2FormatSection);
        formatSections.push(pagesFormatSection);
        formatSections.push(onlineFormatSection);
        return formatSections;
      }
    },
    {
      type: 'blog',
      display: 'Blog',
      fields: [
        {
          type: 'authorFML',
          display: 'Person Posting',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Date Posted',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Title of Post',
          placeholder: 'Title',
          canAdd: false,
          required: true
        },
        // {
        //   type: 'text',
        //   display: 'Source of Reference',
        //   placeholder: 'Source',
        //   canAdd: false,
        //   required: false
        // },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        let posterFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Person Posting']);
        let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Date Posted'], true, false, true);
        let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Title of Post'], false, false, false, false, false);
        let formatFormatSection = this.referenceHelperService.getTextFormatSection('[web log comment]', false, true, true, true);
        let onlineFormatSection = this.referenceHelperService.getRetrievedFromFormatSection(citationInfoObj['Retrieved From'], false, false);
        formatSections.push(posterFormatSection);
        formatSections.push(dateFormatSection);
        formatSections.push(titleFormatSection);
        formatSections.push(formatFormatSection);
        formatSections.push(onlineFormatSection);
        return formatSections;
      }
    },
    {
      type: 'wiki',
      display: 'Wiki',
      fields: [
        {
          type: 'text',
          display: 'Title of Wiki',
          placeholder: 'Title',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Date Published',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Source of Reference',
          placeholder: 'Source',
          canAdd: false,
          required: false
        },
        {
          type: 'date',
          display: 'Date Retrieved',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        let titleFormatSection = this.referenceHelperService.getTextFormatSection(citationInfoObj['Title of Wiki'], false, true, false, true);
        let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Date Published'], true, false, true);
        let retrievedFormatSection = this.referenceHelperService.getTextFormatSection(`Retrieved ${citationInfoObj['Date Retrieved']} from ${citationInfoObj['Retrieved From']}`, false, false, false, false);
        formatSections.push(titleFormatSection);
        formatSections.push(dateFormatSection);
        formatSections.push(retrievedFormatSection);
        return formatSections;
      }
    },
    {
      type: 'webDoc',
      display: 'Web Document or Report',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: true
        },
        {
          type: 'date',
          display: 'Date of Publication',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'date',
          display: 'Date Retrieved',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        let authorFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Author']);
        let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Date of Publication'], true, false, true);
        let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Title'], true, false, true, false, true);
        let retrievedFormatSection = this.referenceHelperService.getRetrievedFromFormatSection(citationInfoObj['Retrieved From'], false, false);
        formatSections.push(authorFormatSection);
        formatSections.push(dateFormatSection);
        formatSections.push(titleFormatSection);
        formatSections.push(retrievedFormatSection);
        return formatSections;
      }
    },
    {
      type: 'onlineDissertation',
      display: 'Online Dissertation or Thesis',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: true
        },
        {
          type: 'date',
          display: 'Date of Publication',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = []
        let authorFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Author']);
        let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Date of Publication'], true, false, true);
        let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Title'], true, false, true, false, true);
        let retrievedFormatSection = this.referenceHelperService.getRetrievedFromFormatSection(citationInfoObj['Retrieved From'], false, false);
        formatSections.push(authorFormatSection);
        formatSections.push(dateFormatSection);
        formatSections.push(titleFormatSection);
        formatSections.push(retrievedFormatSection);
        return formatSections;
      }
    },
    {
      type: 'publishedDissertation',
      display: 'Published Dissertation',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: true
        },
        {
          type: 'dateY',
          display: 'Year of Publication',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Source',
          placeholder: 'Source',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        },
        {
          type: 'text',
          display: 'Accession/Order Number',
          placeholder: 'Number',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = []
        let authorFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Author']);
        let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Year of Publication'], true, false, true);
        let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Title'], true, false, false, false, false);
        let docDisFormatSection = this.referenceHelperService.getTextFormatSection('(Doctoral dissertation)', false, true, true, true);
        let retrievedFormatSection;
        if (citationInfoObj['Retrieved From'].length > 0) {
          retrievedFormatSection = this.referenceHelperService.getRetrievedFromFormatSection(citationInfoObj['Retrieved From'], false, true);
        }
        if (citationInfoObj['Accession/Order Number'].length > 0) {
          retrievedFormatSection = this.referenceHelperService.getTextFormatSection(`(${citationInfoObj['Accession/Order Number']})`, false, false, false, false);
        }
        formatSections.push(authorFormatSection);
        formatSections.push(dateFormatSection);
        formatSections.push(titleFormatSection);
        formatSections.push(docDisFormatSection);
        formatSections.push(retrievedFormatSection);
        return formatSections;
      }
    },
    {
      type: 'unpublishedDissertation',
      display: 'Unpublished Dissertation',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: true
        },
        {
          type: 'date',
          display: 'Date of Publication',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Institution Name',
          placeholder: 'Name',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Location',
          placeholder: 'Location',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        let authorFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Author']);
        let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Date of Publication'], true, false, true);
        let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Title'], true, false, false, false, false);
        let unpubDisFormatSection = this.referenceHelperService.getTextFormatSection('(Unpublished dissertation)', false, true, true, true);
        let locactionFormatSection = this.referenceHelperService.getTextFormatSection(`${citationInfoObj['Institution Name']}, ${citationInfoObj['Location']}`, false, true, false, false);
        formatSections.push(authorFormatSection);
        formatSections.push(dateFormatSection);
        formatSections.push(titleFormatSection);
        formatSections.push(unpubDisFormatSection);
        formatSections.push(locactionFormatSection);
        return formatSections;
      }
    },
    {
      type: 'governmentDocument',
      display: 'Government Document',
      fields: [
        {
          type: 'text',
          display: 'Organization Name',
          placeholder: 'Name',
          canAdd: false,
          required: false
        },
        {
          type: 'dateY',
          display: 'Year of Publication',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Publication Number',
          placeholder: 'Number',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Publisher',
          placeholder: 'Publisher',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Publication Location',
          placeholder: 'Location',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        let orgFormatSection = this.referenceHelperService.getTextFormatSection(citationInfoObj['Organization Name'], false, true, false, true);
        let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Year of Publication'], true, false, true);
        let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Title'], true, false, false, false, false);
        let textToAdd = '';
        if (citationInfoObj['Publication Number'].length > 0) {
          textToAdd = ` (Publication no. ${citationInfoObj['Publication Number']})`
        }
        let pubNoFormatSection = this.referenceHelperService.getTextFormatSection(textToAdd, false, true, false, true);
        let publishFormatSection = this.referenceHelperService.getPublishInfoFormatSection(citationInfoObj['Publication Location'], citationInfoObj['Publisher'], false, false);
        formatSections.push(orgFormatSection);
        formatSections.push(dateFormatSection);
        formatSections.push(titleFormatSection);
        formatSections.push(pubNoFormatSection);
        formatSections.push(publishFormatSection);
        return formatSections;
      }
    },
    // {
    //   type: 'review',
    //   display: 'Review',
    //   fields: [
    //     {
    //       type: 'authorFML',
    //       display: 'Reviewer',
    //       canAdd: true,
    //       required: true
    //     },
    //     {
    //       type: 'dateY',
    //       display: 'Year of Publication',
    //       canAdd: false,
    //       required: false
    //     },
    //     {
    //       type: 'text',
    //       display: 'Review Title',
    //       placeholder: 'Title',
    //       canAdd: false,
    //       required: false
    //     },
    //     {
    //       type: 'text',
    //       display: 'Title of Work Reviewed',
    //       placeholder: 'Title',
    //       canAdd: false,
    //       required: false
    //     },
    //     {
    //       type: 'text',
    //       display: 'Source of Review',
    //       placeholder: 'Source',
    //       canAdd: false,
    //       required: false
    //     },
    //     {
    //       type: 'text',
    //       display: 'Volume Number',
    //       placeholder: 'Volume',
    //       canAdd: false,
    //       required: false
    //     },
    //     {
    //       type: 'text',
    //       display: 'Issue Number',
    //       placeholder: 'Issue',
    //       canAdd: false,
    //       required: false
    //     },
    //     {
    //       type: 'text',
    //       display: 'Start Page',
    //       placeholder: 'Start Page',
    //       canAdd: false,
    //       required: false
    //     },
    //     {
    //       type: 'text',
    //       display: 'End Page',
    //       placeholder: 'End Page',
    //       canAdd: false,
    //       required: false
    //     },
    //     {
    //       type: 'text',
    //       display: 'Retrieved From',
    //       placeholder: 'ex. www.journals.com/journal',
    //       canAdd: false,
    //       required: true
    //     }
    //   ],
    //   inText: citationInfoObj => {
        
    //   },
    //   referencesPage: citationInfoObj => {
    //     let formatSections = [];
    //     let reviewerFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Reviewer']);
    //     let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Year of Publication'], true, false, true);
    //     let reviewTitleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Review Title'], false, false, false, false, false);
    //     let reviewOfFormatSection = this.referenceHelperService.getTextFormatSection('[Review of book', false, false, true, true);
    //     let reviewedFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Title of Work Reviewed'], true, false, false, false, false);
    //     let closeFormatSection = this.referenceHelperService.getTextFormatSection(']', false, true, false, true);
    //     let sourceFormatSection = this.referenceHelperService.getTextFormatSection(citationInfoObj['Source of Review'], true, true, false, true);
    //     let textToAdd = '';
    //     if (citationInfoObj['Volume Number'].length > 0 || citationInfoObj['Issue Number'].length > 0 || citationInfoObj['Start Page'].length > 0) {
    //       textToAdd = ', ';
    //     }
    //     let commaFormatSection = this.referenceHelperService.getTextFormatSection(textToAdd, true, false, false, false);
    //     let volFormatSection = this.referenceHelperService.getTextFormatSection(citationInfoObj['Volume Number'], true, false, false, false);
    //     let issueFormatSection = this.referenceHelperService.getTextFormatSection(`(${citationInfoObj['Issue Number']})`, false, false, false, false);
    //     let textToAdd2 = '';
    //     if ((citationInfoObj['Volume Number'].length > 0 || citationInfoObj['Issue Number'].length > 0) && citationInfoObj['Start Page'].length > 0) {
    //       textToAdd2 = ', ';
    //     }



    //     return formatSections;
    //   }
    // },
    {
      type: 'lectureNotesSlides',
      display: 'Online Lecture Notes or Slides',
      fields: [
        {
          type: 'authorFML',
          display: 'Presenter',
          canAdd: true,
          required: true
        },
        // {
        //   type: 'date',
        //   display: 'Date of Publication',
        //   placeholder: 'YYYY, Mmmm DD or YYYY',
        //   canAdd: false,
        //   required: false
        // },
        {
          type: 'text',
          display: 'Presentation Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'File Format',
          placeholder: 'Format',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        let authorFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Presenter']);
        let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Presentation Title'], true, false, false, false, false);
        let formatFormatSection = this.referenceHelperService.getTextFormatSection(`[${citationInfoObj['File Format']}]`, false, true, true, true);
        let retrievedFormatSection = this.referenceHelperService.getRetrievedFromFormatSection(citationInfoObj['Retrieved From'], false, false);
        formatSections.push(authorFormatSection);
        formatSections.push(titleFormatSection);
        formatSections.push(formatFormatSection);
        formatSections.push(retrievedFormatSection);
        return formatSections;
      }
    },
    {
      type: 'audioPodcast',
      display: 'Audio Podcast',
      fields: [
        {
          type: 'authorFML',
          display: 'Presenter',
          canAdd: true,
          required: true
        },
        {
          type: 'date',
          display: 'Date of Publication',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Podcast Host',
          placeholder: 'Host',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        let presenterFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Presenter']);
        let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Date of Publication'], true, false, true);
        let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Title'], false, false, true, false, true);
        let sourceFormatSection = this.referenceHelperService.getTextFormatSection(citationInfoObj['Podcast Host'], true, true, false, true);
        let retrievedFormatSection = this.referenceHelperService.getTextFormatSection(`Podcast retrieved from ${citationInfoObj['Retrieved From']}`, false, false, false, false);
        formatSections.push(presenterFormatSection);
        formatSections.push(dateFormatSection);
        formatSections.push(titleFormatSection);
        formatSections.push(sourceFormatSection);
        formatSections.push(retrievedFormatSection);
        return formatSections;
      }
    },
    {
      type: 'videoPodcast',
      display: 'Video Podcast',
      fields: [
        {
          type: 'authorFML',
          display: 'Director',
          canAdd: false,
          required: true
        },
        {
          type: 'authorFML',
          display: 'Producer',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Date of Production',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Episode Number',
          placeholder: 'Episode',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Podcast Source',
          placeholder: 'Host',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        let producerFormatSection;
        let producerLabelFormatSection;
        let directorFormatSection;
        let directorLabelFormatSection;
        let dirProExist = false;
        if (citationInfoObj['Producer'] && 
          (citationInfoObj['Producer'].firstName.length > 0 || 
          citationInfoObj['Producer'].middleName.length > 0 || 
          citationInfoObj['Producer'].lastName.length > 0)) {
          dirProExist = true;
          producerFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Producer']);
          let textToAdd = '(Producer)';
          if (citationInfoObj['Director'] && 
            (citationInfoObj['Director'].firstName.length > 0 || 
            citationInfoObj['Director'].middleName.length > 0 || 
            citationInfoObj['Director'].lastName.length > 0)) {
            textToAdd += ', &';
          }
          else {
            textToAdd += '.';
          }
          producerLabelFormatSection = this.referenceHelperService.getTextFormatSection(textToAdd, false, false, false, true);
        }
        else {
          producerFormatSection = this.referenceHelperService.getTextFormatSection('', false, false, false, false);
          producerLabelFormatSection = this.referenceHelperService.getTextFormatSection('', false, false, false, false);
        }
        if (citationInfoObj['Director'] && 
            (citationInfoObj['Director'].firstName.length > 0 || 
            citationInfoObj['Director'].middleName.length > 0 || 
            citationInfoObj['Director'].lastName.length > 0)) {
          dirProExist = true;
          directorFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Director']);
          directorLabelFormatSection = this.referenceHelperService.getTextFormatSection('(Director)', false, true, false, true);
        }
        else {
          directorFormatSection = this.referenceHelperService.getTextFormatSection('', false, false, false, false);
          directorLabelFormatSection = this.referenceHelperService.getTextFormatSection('', false, false, false, false);
        }
        let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Date of Production'], true, false, true);
        let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Title'], false, false, false, false, false);
        let textToAdd = '';
        if (citationInfoObj['Episode Number'].length > 0) {
          textToAdd = ` [Episode ${citationInfoObj['Episode Number']}]`;
        }
        let episodeFormatSection = this.referenceHelperService.getTextFormatSection(textToAdd, false, true, false, true);
        let sourceFormatSection = this.referenceHelperService.getTextFormatSection(citationInfoObj['Podcast Source'], true, true, false, true);
        let retrievedFormatSection = this.referenceHelperService.getTextFormatSection(`Podcast retrieved from ${citationInfoObj['Retrieved From']}`, false, false, false, false);
        formatSections.push(producerFormatSection);
        formatSections.push(producerLabelFormatSection);
        formatSections.push(directorFormatSection);
        formatSections.push(directorLabelFormatSection);
        if (dirProExist) {
          formatSections.push(dateFormatSection);
          formatSections.push(titleFormatSection);
          formatSections.push(episodeFormatSection);
        }
        else {
          formatSections.push(titleFormatSection);
          formatSections.push(episodeFormatSection);
          formatSections.push(dateFormatSection);
        }        
        formatSections.push(sourceFormatSection);
        formatSections.push(retrievedFormatSection);
        return formatSections;
      }
    },
    {
      type: 'motionPicture',
      display: 'Motion Picture',
      fields: [
        {        
          type: 'authorFML',
          display: 'Director',
          canAdd: false,
          required: true
        },
        {
          type: 'authorFML',
          display: 'Producer',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Date of Production',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Country of Origin',
          placeholder: 'Country',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Studio or Distributor',
          placeholder: 'Studio or Distributor',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        let producerFormatSection;
        let producerLabelFormatSection;
        let directorFormatSection;
        let directorLabelFormatSection;
        let dirProExist = false;
        if (citationInfoObj['Producer'] && 
          (citationInfoObj['Producer'].firstName.length > 0 || 
          citationInfoObj['Producer'].middleName.length > 0 || 
          citationInfoObj['Producer'].lastName.length > 0)) {
          dirProExist = true;
          producerFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Producer']);
          let textToAdd = '(Producer)';
          if (citationInfoObj['Director'] && 
            (citationInfoObj['Director'].firstName.length > 0 || 
            citationInfoObj['Director'].middleName.length > 0 || 
            citationInfoObj['Director'].lastName.length > 0)) {
            textToAdd += ', &';
          }
          else {
            textToAdd += '.';
          }
          producerLabelFormatSection = this.referenceHelperService.getTextFormatSection(textToAdd, false, false, false, true);
        }
        else {
          producerFormatSection = this.referenceHelperService.getTextFormatSection('', false, false, false, false);
          producerLabelFormatSection = this.referenceHelperService.getTextFormatSection('', false, false, false, false);
        }
        if (citationInfoObj['Director'] && 
            (citationInfoObj['Director'].firstName.length > 0 || 
            citationInfoObj['Director'].middleName.length > 0 || 
            citationInfoObj['Director'].lastName.length > 0)) {
          dirProExist = true;
          directorFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Director']);
          directorLabelFormatSection = this.referenceHelperService.getTextFormatSection('(Director)', false, true, false, true);
        }
        else {
          directorFormatSection = this.referenceHelperService.getTextFormatSection('', false, false, false, false);
          directorLabelFormatSection = this.referenceHelperService.getTextFormatSection('', false, false, false, false);
        }
        let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Date of Production'], true, false, true);
        let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Title'], true, false, false, false, true);
        let motionPicFormatSection = this.referenceHelperService.getTextFormatSection('[Motion Picture]', false, true, false, true);
        let locationStudioFormatSection = this.referenceHelperService.getLocationPlusFormatSection(citationInfoObj['Country of Origin'], citationInfoObj['Studio or Distributor'], false, false);
        formatSections.push(producerFormatSection);
        formatSections.push(producerLabelFormatSection);
        formatSections.push(directorFormatSection);
        formatSections.push(directorLabelFormatSection);
        if (dirProExist) {
          formatSections.push(dateFormatSection);
          formatSections.push(titleFormatSection);
          formatSections.push(motionPicFormatSection);
        }
        else {
          formatSections.push(titleFormatSection);
          formatSections.push(motionPicFormatSection);
          formatSections.push(dateFormatSection);
        }
        formatSections.push(locationStudioFormatSection);
        return formatSections;
      }
    },
    {
      type: 'tvBroadcast',
      display: 'TV Broadcast',
      fields: [
        {
          type: 'authorFML',
          display: 'Director',
          canAdd: false,
          required: true
        },
        {
          type: 'authorFML',
          display: 'Producer',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Date of Production',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Location',
          placeholder: 'Location',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Broadcaster',
          placeholder: 'Broadcaster',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        let producerFormatSection;
        let producerLabelFormatSection;
        let directorFormatSection;
        let directorLabelFormatSection;
        let dirProExist = false;
        if (citationInfoObj['Producer'] && 
          (citationInfoObj['Producer'].firstName.length > 0 || 
          citationInfoObj['Producer'].middleName.length > 0 || 
          citationInfoObj['Producer'].lastName.length > 0)) {
          dirProExist = true;
          producerFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Producer']);
          let textToAdd = '(Producer)';
          if (citationInfoObj['Director'] && 
            (citationInfoObj['Director'].firstName.length > 0 || 
            citationInfoObj['Director'].middleName.length > 0 || 
            citationInfoObj['Director'].lastName.length > 0)) {
            textToAdd += ', &';
          }
          else {
            textToAdd += '.';
          }
          producerLabelFormatSection = this.referenceHelperService.getTextFormatSection(textToAdd, false, false, false, true);
        }
        else {
          producerFormatSection = this.referenceHelperService.getTextFormatSection('', false, false, false, false);
          producerLabelFormatSection = this.referenceHelperService.getTextFormatSection('', false, false, false, false);
        }
        if (citationInfoObj['Director'] && 
            (citationInfoObj['Director'].firstName.length > 0 || 
            citationInfoObj['Director'].middleName.length > 0 || 
            citationInfoObj['Director'].lastName.length > 0)) {
          dirProExist = true;
          directorFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Director']);
          directorLabelFormatSection = this.referenceHelperService.getTextFormatSection('(Director)', false, true, false, true);
        }
        else {
          directorFormatSection = this.referenceHelperService.getTextFormatSection('', false, false, false, false);
          directorLabelFormatSection = this.referenceHelperService.getTextFormatSection('', false, false, false, false);
        }
        let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Date of Production'], true, false, true);
        let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Title'], true, false, false, false, true);
        let broadcastPicFormatSection = this.referenceHelperService.getTextFormatSection('[Television broadcast]', false, true, false, true);
        let locationBroadcasterFormatSection = this.referenceHelperService.getLocationPlusFormatSection(citationInfoObj['Location'], citationInfoObj['Broadcaster'], false, false);
        formatSections.push(producerFormatSection);
        formatSections.push(producerLabelFormatSection);
        formatSections.push(directorFormatSection);
        formatSections.push(directorLabelFormatSection);
        if (dirProExist) {
          formatSections.push(dateFormatSection);
          formatSections.push(titleFormatSection);
          formatSections.push(broadcastPicFormatSection);
        }
        else {
          formatSections.push(titleFormatSection);
          formatSections.push(broadcastPicFormatSection);
          formatSections.push(dateFormatSection);
        }
        formatSections.push(locationBroadcasterFormatSection);
        return formatSections;
      }
    },
    {
      type: 'tvEpisode',
      display: 'TV Episode',
      fields: [
        {
          type: 'authorFML',
          display: 'Writer',
          canAdd: false,
          required: true
        },
        {
          type: 'authorFML',
          display: 'Director',
          canAdd: false,
          required: true
        },
        {
          type: 'authorFML',
          display: 'Producer',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Date of Production',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Episode Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Series Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'City, State of Origin',
          placeholder: 'Origin',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Studio or Distributor',
          placeholder: 'Studio or Distributor',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        let writerFormatSection;
        let writerLabelFormatSection;
        let directorFormatSection;
        let directorLabelFormatSection;
        let dirWriExist = false;
        if (citationInfoObj['Writer'] && 
          (citationInfoObj['Writer'].firstName.length > 0 || 
          citationInfoObj['Writer'].middleName.length > 0 || 
          citationInfoObj['Writer'].lastName.length > 0)) {
          dirWriExist = true;
          writerFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Producer']);
          let textToAdd = '(Writer)';
          if (citationInfoObj['Director'] && 
            (citationInfoObj['Director'].firstName.length > 0 || 
            citationInfoObj['Director'].middleName.length > 0 || 
            citationInfoObj['Director'].lastName.length > 0)) {
            textToAdd += ', &';
          }
          else {
            textToAdd += '.';
          }
          writerLabelFormatSection = this.referenceHelperService.getTextFormatSection(textToAdd, false, false, false, true);
        }
        else {
          writerFormatSection = this.referenceHelperService.getTextFormatSection('', false, false, false, false);
          writerLabelFormatSection = this.referenceHelperService.getTextFormatSection('', false, false, false, false);
        }
        if (citationInfoObj['Director'] && 
            (citationInfoObj['Director'].firstName.length > 0 || 
            citationInfoObj['Director'].middleName.length > 0 || 
            citationInfoObj['Director'].lastName.length > 0)) {
          dirWriExist = true;
          directorFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Director']);
          directorLabelFormatSection = this.referenceHelperService.getTextFormatSection('(Director)', false, true, false, true);
        }
        else {
          directorFormatSection = this.referenceHelperService.getTextFormatSection('', false, false, false, false);
          directorLabelFormatSection = this.referenceHelperService.getTextFormatSection('', false, false, false, false);
        } 
        let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Date of Production'], true, false, true);
        let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Episode Title'], true, false, false, false, true);
        let seriesEpisodeFormatSection = this.referenceHelperService.getTextFormatSection('[Television series episode]', false, true, false, true);
        let inFormatSection = this.referenceHelperService.getTextFormatSection('In', false, false, false, true);
        let producerFormatSection = this.referenceHelperService.getReverseAuthorFormatSection(citationInfoObj['Producer']);
        let producerLabelFormatSection = this.referenceHelperService.getTextFormatSection('(Producer),', false, false, false, true);
        let seriesFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Series Title'], true, false, true, false, true);
        let locationStudioFormatSection = this.referenceHelperService.getLocationPlusFormatSection(citationInfoObj['City, State of Origin'], citationInfoObj['Studio or Distributor'], false, false);
        formatSections.push(writerFormatSection);
        formatSections.push(writerLabelFormatSection);
        formatSections.push(directorFormatSection);
        formatSections.push(directorLabelFormatSection);
        if (dirWriExist) {
          formatSections.push(dateFormatSection);
          formatSections.push(titleFormatSection);
          formatSections.push(seriesEpisodeFormatSection);
        }
        else {
          formatSections.push(titleFormatSection);
          formatSections.push(seriesEpisodeFormatSection);
          formatSections.push(dateFormatSection);
        }
        if (producerFormatSection.content.length > 0) {
          formatSections.push(inFormatSection);
          formatSections.push(producerFormatSection);
          formatSections.push(producerLabelFormatSection);
        }
        formatSections.push(seriesFormatSection);
        formatSections.push(locationStudioFormatSection);
        return formatSections;
      }
    },
    {
      type: 'music',
      display: 'Music Recording',
      fields: [
        {
          type: 'authorFML',
          display: 'Songwriter',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Date of Copyright',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Song Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Artist',
          canAdd: false,
          required: true
        },
        {
          type: 'text',
          display: 'Album',
          placeholder: 'Album',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Recording Medium',
          placeholder: 'Medium',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Recording Location',
          placeholder: 'Location',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Label',
          placeholder: 'Label',
          canAdd: false,
          required: false
        },
        {
          type: 'date',
          display: 'Date of Recording',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        let writerFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Songwriter']);
        let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Date of Copyright'], true, false, true);
        let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Song Title'], false, false, false, false, false);
        let textToAdd = '. On';
        if (citationInfoObj['Artist'].length > 0) {
          textToAdd = ` [Recorded by ${citationInfoObj['Artist']}]. On`;
        }
        let artistFormatSection = this.referenceHelperService.getTextFormatSection(textToAdd, false, false, false, true);
        let albumFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Album'], true, false, false, false, true);
        let mediumFormatSection = this.referenceHelperService.getTextFormatSection(`[${citationInfoObj['Recording Medium']}]`, false, true, false, true);
        let locationStudioFormatSection = this.referenceHelperService.getLocationPlusFormatSection(citationInfoObj['Recording Location'], citationInfoObj['Label'], false, true);
        formatSections.push(
          writerFormatSection, 
          dateFormatSection, 
          titleFormatSection, 
          artistFormatSection, 
          albumFormatSection,
          mediumFormatSection,
          locationStudioFormatSection
        );
        return formatSections;
      }
    },
    {
      type: 'interview',
      display: 'Personal Interview',
      fields: [
        {
          type: 'authorFML',
          display: 'Person Interviewed',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Date of Interview',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        // This one should return empty because you do not cite personal
        // communication in references page
        let formatSections = [];
        return formatSections;
      }
    },
    {
      type: 'email',
      display: 'Personal Email',
      fields: [
        {
          type: 'authorFML',
          display: 'Person Emailing',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Date of Email',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        // This one should return empty because you do not cite personal
        // communication in references page
        let formatSections = [];
        return formatSections;
      }
    },
    {
      type: 'personal',
      display: 'Personal Communication',
      fields: [
        {
          type: 'authorFML',
          display: 'Communicator',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Date of Communicating',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        // This one should return empty because you do not cite personal
        // communication in references page
        let formatSections = [];
        return formatSections;
      }
    },
    {
      type: 'letterToEditor',
      display: 'Letter to the Editor',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Date of Publication',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Letter Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Work that Published the Letter',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Volume Number',
          placeholder: 'Volume',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Issue Number',
          placeholder: 'Issue',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Start Page',
          placeholder: 'Start Page',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'End Page',
          placeholder: 'End Page',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];
        let authorFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Author']);
        let dateFormatSection = this.referenceHelperService.getDateFormatSection(citationInfoObj['Date of Publication'], true, false, true);
        let titleFormatSection = this.referenceHelperService.getTitleFormatSection(citationInfoObj['Title'], false, false, false, false, true);
        let letterLabelFormatSection = this.referenceHelperService.getTextFormatSection('[Letter to the editor]', false, true, false, true);
        let sourceFormatSection = this.referenceHelperService.getTextFormatSection(citationInfoObj['Work that Published the Letter'], true, false, false, false);



        return formatSections;
      }
    }
  ]

  ///////////////////////////////////////////////////
  //////////////////      MLA      //////////////////
  ///////////////////////////////////////////////////

  referencesFrameworkMLA = [
    {
      type: 'book',
      display: 'Book',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: true
        },
        {
          type: 'text',
          display: 'Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Publisher Name',
          placeholder: 'Publisher',
          canAdd: false,
          required: false
        },
        {
          type: 'date',
          display: 'Date of Publication',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Edition',
          placeholder: 'Edition',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {

      }
    },
    {
      type: 'shortStory',
      display: 'Short Story',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: true
        },
        {
          type: 'text',
          display: 'Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Collection Title',
          placeholder: 'Collection',
          canAdd: false,
          required: false
        },
        {
          type: 'authorFML',
          display: 'Editor',
          canAdd: false,
          required: true
        },
        {
          type: 'text',
          display: 'Publisher',
          placeholder: 'Publisher',
          canAdd: false,
          required: false
        },
        {
          type: 'dateY',
          display: 'Year of Publication',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Start Page',
          placeholder: 'Start Page',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'End Page',
          placeholder: 'End Page',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {

      }
    },
    {
      type: 'editorial',
      display: 'Editorial',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: false,
          required: true
        },
        {
          type: 'text',
          display: 'Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Source',
          placeholder: 'Source',
          canAdd: false,
          required: false
        },
        {
          type: 'date',
          display: 'Date of Publication',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Start Page',
          placeholder: 'Start Page',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'End Page',
          placeholder: 'End Page',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {

      }
    },
    {
      type: 'encyclopedia',
      display: 'Encyclopedia or Dictionary Entry',
      fields: [
        {
          type: 'text',
          display: 'Section or Word Referenced',
          placeholder: 'Section or Word',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Title of Encyclopedia/Dictionary',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Edition',
          placeholder: 'Edition',
          canAdd: false,
          required: false
        },
        {
          type: 'date',
          display: 'Date of Publication',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {

      }
    },
    {
      type: 'translated',
      display: 'Translated Book',
      fields: [
        {
          type: 'authorFML',
          display: 'Original Author',
          canAdd: true,
          required: false
        },
        {
          type: 'authorFML',
          display: 'Translator',
          canAdd: true,
          required: false
        },
        {
          type: 'text',
          display: 'Title',
          placeholder: 'Title',
          canAdd: false,
          required: true
        },
        {
          type: 'text',
          display: 'Publisher',
          placeholder: 'Publisher',
          canAdd: false,
          required: false
        },
        {
          type: 'date',
          display: 'Date of Publication',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {

      }
    },
    {
      type: 'magazine',
      display: 'Magazine Article',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: true
        },
        {
          type: 'text',
          display: 'Aricle Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Magazine Name',
          placeholder: 'Name',
          canAdd: false,
          required: false
        },
        {
          type: 'date',
          display: 'Date of Publication',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Start Page',
          placeholder: 'Start Page',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'End Page',
          placeholder: 'End Page',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {

      }
    },
    {
      type: 'newspaper',
      display: 'Newspaper Article',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: true
        },
        {
          type: 'text',
          display: 'Aricle Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Newspaper Name',
          placeholder: 'Name',
          canAdd: false,
          required: false
        },
        {
          type: 'date',
          display: 'Date of Publication',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Start Page',
          placeholder: 'Start Page',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'End Page',
          placeholder: 'End Page',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {

      }
    },
    {
      type: 'journal',
      display: 'Journal Article',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: true
        },
        {
          type: 'text',
          display: 'Aricle Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Journal Name',
          placeholder: 'Name',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Volume Number',
          placeholder: 'Volume',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Issue Number',
          placeholder: 'Issue',
          canAdd: false,
          required: false
        },
        {
          type: 'dateY',
          display: 'Year of Publication',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Start Page',
          placeholder: 'Start Page',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'End Page',
          placeholder: 'End Page',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {

      }
    },
    {
      type: 'onlineOnlyJournal',
      display: 'Online Only Scholarly Journal',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: true
        },
        {
          type: 'text',
          display: 'Aricle Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Journal Name',
          placeholder: 'Name',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Volume Number',
          placeholder: 'Volume',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Issue Number',
          placeholder: 'Issue',
          canAdd: false,
          required: false
        },
        {
          type: 'dateY',
          display: 'Year of Publication',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Accessed On',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {

      }
    },
    {
      type: 'onlinePeriodical',
      display: 'Online Periodical',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: true
        },
        {
          type: 'text',
          display: 'Aricle Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Periodical Name',
          placeholder: 'Name',
          canAdd: false,
          required: false
        },
        {
          type: 'date',
          display: 'Date of Publication',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Accessed On',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {

      }
    },
    {
      type: 'onlineNewspaper',
      display: 'Online Newspaper Article',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: true
        },
        {
          type: 'text',
          display: 'Aricle Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Newspaper Name',
          placeholder: 'Name',
          canAdd: false,
          required: false
        },
        {
          type: 'date',
          display: 'Date of Publication',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Start Page',
          placeholder: 'Start Page',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'End Page',
          placeholder: 'End Page',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Accessed On',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {

      }
    },
    {
      type: 'website',
      display: 'Website',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: true
        },
        {
          type: 'text',
          display: 'Page Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Main Site Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'date',
          display: 'Date of Publication',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Accessed On',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {

      }
    },
    {
      type: 'onlinePrintJournal',
      display: 'Online and Print Scholarly Journal',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: true
        },
        {
          type: 'text',
          display: 'Aricle Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Journal Name',
          placeholder: 'Name',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Volume Number',
          placeholder: 'Volume',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Issue Number',
          placeholder: 'Issue',
          canAdd: false,
          required: false
        },
        {
          type: 'dateY',
          display: 'Year of Publication',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Start Page',
          placeholder: 'Start Page',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'End Page',
          placeholder: 'End Page',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Accessed On',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {

      }
    },
    {
      type: 'onlineEncyclopedia',
      display: 'Online Encyclopedia or Dictionary Entry',
      fields: [
        {
          type: 'text',
          display: 'Section or Word Referenced',
          placeholder: 'Section or Word',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Title of Encyclopedia/Dictionary',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Accessed On',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {

      }
    },
    {
      type: 'blogDiscussion',
      display: 'Online Discussion or Blog Post',
      fields: [
        {
          type: 'authorFML',
          display: 'Person Posting',
          canAdd: true,
          required: true
        },
        {
          type: 'text',
          display: 'Person Posting Screen Name',
          placeholder: 'Screen Name',
          canAdd: false,
          required: true
        },
        {
          type: 'text',
          display: 'Post Title',
          placeholder: 'Title',
          canAdd: false,
          required: true
        },
        {
          type: 'text',
          display: 'Name of Website',
          placeholder: 'Website Name',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Date Posted',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Accessed On',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {

      }
    },
    {
      type: 'publishedDissertation',
      display: 'Published Dissertation',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: true
        },
        {
          type: 'text',
          display: 'Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'School',
          placeholder: 'School',
          canAdd: false,
          required: false
        },
        {
          type: 'dateY',
          display: 'Year Degree Awarded',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Accessed On',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {

      }
    },
    {
      type: 'publishedThesis',
      display: 'Published Thesis',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: true
        },
        {
          type: 'text',
          display: 'Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'School',
          placeholder: 'School',
          canAdd: false,
          required: false
        },
        {
          type: 'dateY',
          display: 'Year Degree Awarded',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Accessed On',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {

      }
    },
    {
      type: 'unpublishedDeissertation',
      display: 'Unpublished Dissertation',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: true
        },
        {
          type: 'text',
          display: 'Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'School',
          placeholder: 'School',
          canAdd: false,
          required: false
        },
        {
          type: 'dateY',
          display: 'Year Degree Awarded',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Accessed On',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {

      }
    },
    {
      type: 'unpublishedThesis',
      display: 'Unpublished Thesis',
      fields: [
        {
          type: 'authorFML',
          display: 'Author',
          canAdd: true,
          required: true
        },
        {
          type: 'text',
          display: 'Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'School',
          placeholder: 'School',
          canAdd: false,
          required: false
        },
        {
          type: 'dateY',
          display: 'Year Degree Awarded',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Accessed On',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {

      }
    },
    {
      type: 'governmentDocument',
      display: 'Government Document',
      fields: [
        {
          type: 'text',
          display: 'Written By',
          placeholder: 'Writer',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Publisher',
          placeholder: 'Publisher',
          canAdd: false,
          required: false
        },
        {
          type: 'dateY',
          display: 'Year of Publication',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Accessed On',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {

      }
    },
    {
      type: 'review',
      display: 'Review',
      fields: [
        {
          type: 'authorFML',
          display: 'Reviewer',
          canAdd: true,
          required: true
        },
        {
          type: 'text',
          display: 'Review Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Title of Work Reviewed',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'authorFML',
          display: 'Original Author',
          canAdd: true,
          required: true
        },
        {
          type: 'text',
          display: 'Source of Review',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'dateY',
          display: 'Year of Publication',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Start Page',
          placeholder: 'Start Page',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'End Page',
          placeholder: 'End Page',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Accessed On',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {

      }
    },
    {
      type: 'presentation',
      display: 'Oral Presentation',
      fields: [
        {
          type: 'authorFML',
          display: 'Presenter',
          canAdd: true,
          required: false
        },
        {
          type: 'text',
          display: 'Presentation Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Meeting Name',
          placeholder: 'Name',
          canAdd: false,
          required: false
        },
        {
          type: 'date',
          display: 'Date Given',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Venue',
          placeholder: 'Venue',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'City and State',
          placeholder: 'Name',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Format',
          placeholder: 'Format',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Accessed On',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {

      }
    },
    {
      type: 'movie',
      display: 'Movie',
      fields: [
        {
          type: 'text',
          display: 'Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'authorFML',
          display: 'Director',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Distributor',
          placeholder: 'Distributor',
          canAdd: false,
          required: false
        },
        {
          type: 'dateY',
          display: 'Year of Release',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {

      }
    },
    {
      type: 'tvEpisode',
      display: 'TV Episode',
      fields: [
        {
          type: 'text',
          display: 'Episode Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Series Title',
          placeholder: 'Title',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Season Number',
          placeholder: 'Number',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Episode Number',
          placeholder: 'Number',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Network',
          placeholder: 'Network',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Call Letters',
          placeholder: 'Letters',
          canAdd: false,
          required: false
        },
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {

      }
    },
    {
      type: 'music',
      display: 'Song',
      fields: [
        {
          type: 'text',
          display: 'Artist',
          placeholder: 'Artist',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Song',
          placeholder: 'Song',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Album',
          placeholder: 'Album',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Recording Manufacturer',
          placeholder: 'Recording Manufacturer',
          canAdd: false,
          required: false
        },
        {
          type: 'date',
          display: 'Copyright Date',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Retrieved From',
          placeholder: 'ex. www.journals.com/journal',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Accessed On',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {

      }
    },
    {
      type: 'interview',
      display: 'Personal Interview',
      fields: [
        {
          type: 'authorFML',
          display: 'Person Interviewed',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Interview Date',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {

      }
    },
    {
      type: 'email',
      display: 'Email',
      fields: [
        {
          type: 'authorFML',
          display: 'Person Sending Email',
          canAdd: false,
          required: true
        },
        {
          type: 'text',
          display: 'Subject Line',
          placeholder: 'Subject',
          canAdd: false,
          required: false
        },
        {
          type: 'authorFML',
          display: 'Person Receiving Email',
          canAdd: false,
          required: true
        },
        {
          type: 'date',
          display: 'Email Date',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {

      }
    },
    {
      type: 'letterToEditor',
      display: 'Letter to the Editor',
      fields: [
        {
          type: 'authorFML',
          display: 'Writer',
          canAdd: false,
          required: true
        },
        {
          type: 'text',
          display: 'Title of Letter',
          placeholder: 'Subject',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Work that Published the Letter',
          placeholder: 'Publisher',
          canAdd: false,
          required: false
        },
        {
          type: 'date',
          display: 'Date of Publication',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'Start Page',
          placeholder: 'Start Page',
          canAdd: false,
          required: false
        },
        {
          type: 'text',
          display: 'End Page',
          placeholder: 'End Page',
          canAdd: false,
          required: false
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {
        let formatSections = [];



        return formatSections;
      }
    }
  ]
}
