import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { ReferenceHelperService } from './reference-helper.service';
//7 of 65
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
        let translatorFormatSection = this.referenceHelperService.getAuthorFormatSection(citationInfoObj['Translator']);
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
      ]
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
        {
          type: 'text',
          display: 'Source of Reference',
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
        }
      ],
      inText: citationInfoObj => {
        
      },
      referencesPage: citationInfoObj => {

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
          display: 'Accession/Order Number',
          placeholder: 'Number',
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
          type: 'dateY',
          display: 'Year of Publication',
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
          type: 'authorFML',
          display: 'Original Author',
          canAdd: true,
          required: true
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

      }
    },
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
        {
          type: 'date',
          display: 'Date of Publication',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
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
          placeholder: 'Host',
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
          type: 'authorFML',
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

      }
    }
  ]

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
