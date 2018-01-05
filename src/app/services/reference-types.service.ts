import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class ReferenceTypesService {

  constructor() { }

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
        
        let beginFormatSection = _.cloneDeep(this.formatSectionObj);
        if (citationInfoObj['Author'].length < 1) {
          // TODO: Throw error saying need to have author
        }
        let elipseAdded: boolean = false;
        for (let i = 0; i < citationInfoObj['Author'].length; i++) {
          let authorObj = citationInfoObj['Author'][i];
          if (i < 6 && i != citationInfoObj['Author'].length - 1) {
            if (authorObj.lastName.length > 0)
              beginFormatSection.content += `${authorObj.lastName}, `;
            if (authorObj.firstName.length > 0) {
              beginFormatSection.content += `${authorObj.firstName[0].toUpperCase()}.`;
              if (authorObj.middleName.length < 1)
                beginFormatSection.content += ', ';
              else
                beginFormatSection.content += ' ';
            }
            if (authorObj.middleName.length > 0) 
              beginFormatSection.content += `${authorObj.middleName[0].toUpperCase()}., `
          }
          else if (i == citationInfoObj['Author'].length - 1) {
            if (!elipseAdded && i > 0)
              beginFormatSection.content += '& ';
            if (authorObj.lastName.length > 0) {
              beginFormatSection.content += authorObj.lastName;
              if (authorObj.firstName.length > 0 || authorObj.middleName.length > 0)
                beginFormatSection.content += ',';
              beginFormatSection.content += ' ';
            }
            if (authorObj.firstName.length > 0)
              beginFormatSection.content += `${authorObj.firstName[0].toUpperCase()}. `;
            if (authorObj.middleName.length > 0) 
              beginFormatSection.content += `${authorObj.middleName[0].toUpperCase()}. `;
          }
          else {
            if (!elipseAdded) {
              elipseAdded = true;
              beginFormatSection.content += '... ';
            }
          }
        }
        if (citationInfoObj['Year of Publication'].length < 1) {
          beginFormatSection.content += '(n.d.). ';
        }
        else {
          beginFormatSection.content += `(${citationInfoObj['Year of Publication']}). `;  
        }
        if (citationInfoObj['Title'].length < 1) {
          // TODO: Throw error because there needs to be a title
        }
        let titleFormatObj = _.cloneDeep(this.formatSectionObj);
        titleFormatObj.italic = true;
        let nextCapital = true;
        for (let i = 0; i < citationInfoObj['Title'].length; i++) {
          let toCheck = citationInfoObj['Title'][i];
          if (nextCapital) {
            if (toCheck == ' ')
              nextCapital = false;
            titleFormatObj.content += toCheck.toUpperCase();
          }
          else {
            titleFormatObj.content += toCheck.toLowerCase();
          }
          if (toCheck == ':')
            nextCapital = true;
        }
        let finishFormatObj = _.cloneDeep(this.formatSectionObj);
        if (citationInfoObj['Edition'].length < 1) {
          titleFormatObj.content += '. ';
        }
        else {
          finishFormatObj.content += ` (${citationInfoObj['Edition']} ed.). `
        }
        if (citationInfoObj['Publication Location'].length > 0) {
          if (citationInfoObj['Publisher'].length > 0) {
            finishFormatObj.content += `${citationInfoObj['Publication Location']}: `;
          }
          else {
            finishFormatObj.content += `${citationInfoObj['Publication Location']}.`;
          }
        }
        if (citationInfoObj['Publisher'].length > 0) {
          finishFormatObj.content += `${citationInfoObj['Publisher']}.`;
        }

        formatSections.push(beginFormatSection);
        formatSections.push(titleFormatObj);
        formatSections.push(finishFormatObj);        
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
        let beginFormatSection = _.cloneDeep(this.formatSectionObj);
        if (citationInfoObj['Title'].length < 1) {
          // TODO: Throw error because title is required
        }
        beginFormatSection.italic = true;
        let nextCapital = true;
        for (let i = 0; i < citationInfoObj['Title'].length; i++) {
          if (nextCapital) {
            if (citationInfoObj['Title'][i] != ' ') {
              nextCapital = false;
            }
            beginFormatSection.content += citationInfoObj['Title'][i].toUpperCase();
          }
          else {
            beginFormatSection.content += citationInfoObj['Title'][i].toLowerCase();
          }
          if (citationInfoObj['Title'][i] == ':') {
            nextCapital = true;
          }
        }
        let midFormatSection = _.cloneDeep(this.formatSectionObj);
        if (citationInfoObj['Edition'].length > 0) {
          midFormatSection.content += ` (${citationInfoObj['Edition']} ed.).`;
        }
        else {
          midFormatSection.content += '.';
        }
        if (citationInfoObj['Year of Publication'].length > 0) {
          midFormatSection.content += `(${citationInfoObj['Year of Publication']}). `;
        }
        else {
          midFormatSection.content += '(n.d.). ';
        }
        if (citationInfoObj['Publication Location'].length > 0) {
          if (citationInfoObj['Publisher Name'].length > 0) {
            midFormatSection.content += `${citationInfoObj['Publication Location']}: `;
          }
          else {
            midFormatSection.content += `${citationInfoObj['Publication Location']}.`;
          }
        }
        if (citationInfoObj['Publisher Name'].length > 0) {
          midFormatSection.content += `${citationInfoObj['Publisher Name']}.`;
        }
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
        let beginFormatSection = _.cloneDeep(this.formatSectionObj);
        if (citationInfoObj['Organization'].length < 1) {
          // TODO: Throw error because title is required
        }
        beginFormatSection.content += `${citationInfoObj['Organization']}. `;
        if (citationInfoObj['Year of Publication'].length > 0) {
          beginFormatSection.content += `(${citationInfoObj['Year of Publication']}). `;
        }
        else {
          beginFormatSection.content += '(n.d.). ';
        }
        let midFormatSection = _.cloneDeep(this.formatSectionObj);
        midFormatSection.italic = true;
        let nextCapital = true;
        if (citationInfoObj['Title'].length < 1) {
          // TODO: Throw error because title is required
        }
        for (let i = 0; i < citationInfoObj['Title'].length; i++) {
          if (nextCapital) {
            if (citationInfoObj['Title'][i] != ' ') {
              nextCapital = false;
            }
            midFormatSection.content += citationInfoObj['Title'][i].toUpperCase();
          }
          else {
            midFormatSection.content += citationInfoObj['Title'][i].toLowerCase();
          }
          if (citationInfoObj['Title'][i] == ':') {
            nextCapital = true;
          }
        }
        let endFormatSection = _.cloneDeep(this.formatSectionObj);
        if (citationInfoObj['Edition'].length > 0) {
          endFormatSection.content += ` (${citationInfoObj['Edition']} ed.). `;
        }
        else {
          midFormatSection.content += '. ';
        }
        if (citationInfoObj['Publication Location'].length > 0) {
          if (citationInfoObj['Publisher Name'].length > 0) {
            midFormatSection.content += `${citationInfoObj['Publication Location']}: `;
          }
          else {
            midFormatSection.content += `${citationInfoObj['Publication Location']}.`;
          }
        }
        if (citationInfoObj['Publisher Name'].length > 0) {
          midFormatSection.content += `${citationInfoObj['Publisher Name']}.`;
        }
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
          display: 'Publisher',
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



        return formattedReference;
      }
    }
  ]
}
