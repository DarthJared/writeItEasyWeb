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
          display: 'Title',
          placeholder: 'Title',
          canAdd: false,
          required: true
        },
        {
          type: 'authorFML',
          display: 'Translator Name',
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
          
        }
      ]
    },
    {
      type: 'forumDiscussion',
      display: 'Online Forum or Discussion Board',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'bookReview',
      display: 'Online Book Review',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'blog',
      display: 'Blog',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'wiki',
      display: 'Wiki',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'webDoc',
      display: 'Web Document or Report',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'onlineDissertation',
      display: 'Online Dissertation or Thesis',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'publishedDissertation',
      display: 'Published Dissertation',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'unpublishedDissertation',
      display: 'Unpublished Dissertation',
      fields: [
        {
          
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
      type: 'lectureNotesSlides',
      display: 'Online Lecture Notes or Slides',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'audioPodcast',
      display: 'Audio Podcast',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'videoPodcast',
      display: 'Video Podcast',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'motionPicture',
      display: 'Motion Picture',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'tvBroadcast',
      display: 'TV Broadcast',
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
      display: 'Music Recording',
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
      display: 'Personal Email',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'personal',
      display: 'Personal Communication',
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

  referencesFrameworkMLA = [
    {
      type: 'book',
      display: 'Book',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'shortStory',
      display: 'Short Story',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'editorial',
      display: 'Editorial',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'encyclopedia',
      display: 'Encyclopedia or Dictionary Entry',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'translated',
      display: 'Translated Book',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'magazine',
      display: 'Magazine Article',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'newspaper',
      display: 'Newspaper Article',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'journal',
      display: 'Journal Article',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'onlineOnlyJournal',
      display: 'Online Only Scholarly Journal',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'onlinePeriodical',
      display: 'Online Periodical',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'onlineNewspaper',
      display: 'Online Newspaper Article',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'website',
      display: 'Website',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'onlinePrintJournal',
      display: 'Online and Print Scholarly Journal',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'onlineEncyclopedia',
      display: 'Online Encyclopedia or Dictionary Entry',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'blogDiscussion',
      display: 'Online Discussion or Blog Post',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'publishedDissertation',
      display: 'Published Dissertation',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'publishedThesis',
      display: 'Published Thesis',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'unpublishedDeissertation',
      display: 'Unpublished Dissertation',
      fields: [
        {
          
        }
      ]
    },
    {
      type: 'unpublishedThesis',
      display: 'Unpublished Thesis',
      fields: [
        {
          
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
