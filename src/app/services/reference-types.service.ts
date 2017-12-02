import { Injectable } from '@angular/core';

@Injectable()
export class ReferenceTypesService {

  constructor() { }

  public getAPAReferenceTypes() {
    return this.referencesFrameworkAPA;
  }

  public getMLAReferenceTypes() {
    return this.referencesFrameworkMLA;
  }

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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
          display: 'Accecssed On',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ]
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
          display: 'Accecssed On',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ]
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
          display: 'Accecssed On',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ]
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
          display: 'Accecssed On',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ]
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
          display: 'Accecssed On',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ]
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
          display: 'Accecssed On',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ]
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
          display: 'Accecssed On',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ]
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
          display: 'Accecssed On',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ]
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
          display: 'Accecssed On',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ]
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
          display: 'Accecssed On',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ]
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
          display: 'Accecssed On',
          placeholder: 'YYYY, Mmmm DD or YYYY',
          canAdd: false,
          required: false
        }
      ]
    },
    {
      type: 'governmentDocument',
      display: 'Government Document',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'review',
      display: 'Review',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'presentation',
      display: 'Oral Presentation',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'movie',
      display: 'Movie',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'tvEpisode',
      display: 'TV Episode',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'music',
      display: 'Song',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'interview',
      display: 'Personal Interview',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'email',
      display: 'Email',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'letterToEditor',
      display: 'Letter to the Editor',
      fields: [
        {
          
        }
      ]
    }
  ]
}