import { Component } from '@angular/core';
import { ReferenceTypesService } from './services/reference-types.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options = {
    toolbarButtons: ['bold', 'italic', 'underline', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', '|', 'paragraphFormat', 'align', 'outdent', 'indent', 'insertLink', 'insertImage', 'insertTable', 'specialCharacters', 'selectAll', 'clearFormatting', '|', 'spellChecker', '|', 'undo', 'redo'],
    toolbarButtonsMD: ['bold', 'italic', 'underline'],
    toolbarButtonsSM: ['bold', 'italic', 'underline']
  }

  configOptions = {};
  paperContent = {};
  dialogAdderOpen = false;
  isApa: boolean = true;

  constructor(private refTypeService: ReferenceTypesService) {}
  
  updateConfig(configObj) {
    this.configOptions = configObj;
    this.isApa = configObj.apaMla == 'apa';
  }

  updateContent(contentObj) {
    this.paperContent = contentObj;
  }

  closeAdder(closeMsg) {
    this.dialogAdderOpen = false;
  }

  addReference(refData) {
    console.log(refData);
    this.dialogAdderOpen = false;
    let newRefFormats = this.refTypeService.getReferenceFormats(refData, this.isApa);
  }

  openReferenceDialog(openMsg) {
    this.dialogAdderOpen = true;
  }

  samplePaperObj = {
    title: "My Paper",
    author: "Jared Beagley",
    headers:  {
        includeHeaders: true,
        diffFirstPage: true,
        font: "Times New Roman",
        fontSize: 12,
        headers: [
            {
                applyTo: "firstPage",
                leftType: "text",
                rightType: "pageNumber",
                left: "Running head: MY PAPER"
            },
            {
                applyTo: "default",
                leftType: "text",
                rightType: "pageNumber",
                left: "MY PAPER"
            }
        ]
    },	
    titleInfo:
    {
      onOwnPage: true,
          alignment: "center",
      font: "Times New Roman",
          fontSize: 12,
          bold: false,
          underline: false,
          italicize: false,
      fields: [
          {
          name: "Title",
          value: "My Paper"
          },
          {
          name: "Author",
          value: "Jared Beagley"
          },
          {
          name: "Course",
          value: "CS 124"
          }
      ]
      },
      summaryAbstract: {
      onOwnPage: true,
      includeLabel: true,
      label: {			
          labelText: "Summary",
          font: "Times New Roman",
              fontSize: 12,
          bold: true,
          underline: false,
          italicize: false,
          alignment: "center",
          position: "lineBefore"
      },		
      paragraphs: 
      [	
          {
          alignment: "left",
                  spacing: 2,
          topIndent: 1,
          bottomIndent: 0,
          formatSections:
          [
              {
              bold: false,
              underline: false,
              italicize: false,
              fontSize: 12,
              font: "Times New Roman",
              content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
              },
              {
              bold: true,
              underline: false,
              italicize: false,
              fontSize: 12,
              font: "Times New Roman",
              content: "do not like teaching"
              },
              {
              bold: false,
              underline: false,
              italicize: false,
              fontSize: 12,
              font: "Times New Roman",
              content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
              }
          ]
          },
          {
          alignment: "left",
                  spacing: 2,
          topIndent: 1,
          bottomIndent: 0,
          formatSections:
          [
              {
              bold: false,
              underline: false,
              italicize: false,
              fontSize: 12,
              font: "Times New Roman",
              content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally do not like teaching or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
              }
          ]
          }	
      ]
      },
      body: {
      sections: [
          {
          sectionLevel: 1,
          onOwnPage: false,
          includeLabel: true,
          label: {			
              labelText: "Section 1",
              font: "Times New Roman",
                      fontSize: 12,
              bold: true,
              underline: false,
              italicize: false,
              alignment: "center",
              position: "lineBefore"
          },
          paragraphs: 
          [	
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: true,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "center",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally do not like teaching or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: true,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              }		
          ]
          },
          {
          sectionLevel: 2,
          onOwnPage: false,
          includeLabel: true,
          label: {			
              labelText: "Subsection 1",
              font: "Times New Roman",
                      fontSize: 12,
              bold: true,
              underline: false,
              italicize: false,
              alignment: "left",
              position: "lineBefore"
          },
          paragraphs: 
          [	
              {
              alignment: "right",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: true,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally do not like teaching or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              }		
          ]
          },
          {
          sectionLevel: 3,
          onOwnPage: false,
          includeLabel: true,
          label: {			
              labelText: "Subsubsection 1",
              font: "Times New Roman",
                      fontSize: 12,
              bold: true,
              underline: false,
              italicize: false,
              alignment: "left",
              position: "inline"
          },
          paragraphs: 
          [	
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally do not like teaching or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              }		
          ]
          },
          {
          sectionLevel: 2,
          onOwnPage: false,
          includeLabel: true,
          label: {			
              labelText: "Subsection 2",
              font: "Times New Roman",
                      fontSize: 12,
              bold: true,
              underline: false,
              italicize: false,
              alignment: "left",
              position: "lineBefore"
          },
          paragraphs: 
          [	
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally do not like teaching or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              }		
          ]
          },
          {
          sectionLevel: 3,
          onOwnPage: false,
          includeLabel: true,
          label: {			
              labelText: "Subsubsection 1",
              font: "Times New Roman",
                      fontSize: 12,
              bold: true,
              underline: false,
              italicize: false,
              alignment: "left",
              position: "inline"
          },
          paragraphs: 
          [	
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally do not like teaching or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              }		
          ]
          },
          {
          sectionLevel: 3,
          onOwnPage: false,
          includeLabel: true,
          label: {			
              labelText: "Subsubsection 2",
              font: "Times New Roman",
                      fontSize: 12,
              bold: true,
              underline: false,
              italicize: false,
              alignment: "left",
              position: "inline"
          },
          paragraphs: 
          [	
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally do not like teaching or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              }		
          ]
          },
          {
          sectionLevel: 1,
          onOwnPage: false,
          includeLabel: true,
          label: {			
              labelText: "Section 2",
              font: "Times New Roman",
                      fontSize: 12,
              bold: true,
              underline: false,
              italicize: false,
              alignment: "center",
              position: "lineBefore"
          },
          paragraphs: 
          [	
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally do not like teaching or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              }		
          ]
          },
          {
          sectionLevel: 2,
          onOwnPage: false,
          includeLabel: true,
          label: {			
              labelText: "Subsection 1",
              font: "Times New Roman",
                      fontSize: 12,
              bold: true,
              underline: false,
              italicize: false,
              alignment: "left",
              position: "lineBefore"
          },
          paragraphs: 
          [	
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally do not like teaching or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              }		
          ]
          },
          {
          sectionLevel: 3,
          onOwnPage: false,
          includeLabel: true,
          label: {			
              labelText: "Subsubsection 1",
              font: "Times New Roman",
                      fontSize: 12,
              bold: true,
              underline: false,
              italicize: false,
              alignment: "left",
              position: "inline"
          },
          paragraphs: 
          [	
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally do not like teaching or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              }		
          ]
          },
          {
          sectionLevel: 2,
          onOwnPage: false,
          includeLabel: true,
          label: {			
              labelText: "Subsection 2",
              font: "Times New Roman",
                      fontSize: 12,
              bold: true,
              underline: false,
              italicize: false,
              alignment: "left",
              position: "lineBefore"
          },
          paragraphs: 
          [	
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally do not like teaching or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              }		
          ]
          },
          {
          sectionLevel: 3,
          onOwnPage: false,
          includeLabel: true,
          label: {			
              labelText: "Subsubsection 1",
              font: "Times New Roman",
                      fontSize: 12,
              bold: true,
              underline: false,
              italicize: false,
              alignment: "left",
              position: "inline"
          },
          paragraphs: 
          [	
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally do not like teaching or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              }		
          ]
          },
          {
          sectionLevel: 3,
          onOwnPage: false,
          includeLabel: true,
          label: {			
              labelText: "Subsubsection 2",
              font: "Times New Roman",
                      fontSize: 12,
              bold: true,
              underline: false,
              italicize: false,
              alignment: "left",
              position: "inline"
          },
          paragraphs: 
          [	
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally do not like teaching or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              }		
          ]
          },
          {
          sectionLevel: 1,
          onOwnPage: false,
          includeLabel: true,
          label: {			
              labelText: "Section 3",
              font: "Times New Roman",
                      fontSize: 12,
              bold: true,
              underline: false,
              italicize: false,
              alignment: "center",
              position: "lineBefore"
          },
          paragraphs: 
          [	
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally do not like teaching or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              }		
          ]
          },
          {
          sectionLevel: 2,
          onOwnPage: false,
          includeLabel: true,
          label: {			
              labelText: "Subsection 1",
              font: "Times New Roman",
                      fontSize: 12,
              bold: true,
              underline: false,
              italicize: false,
              alignment: "left",
              position: "lineBefore"
          },
          paragraphs: 
          [	
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally do not like teaching or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              }		
          ]
          },
          {
          sectionLevel: 3,
          onOwnPage: false,
          includeLabel: true,
          label: {			
              labelText: "Subsubsection 1",
              font: "Times New Roman",
                      fontSize: 12,
              bold: true,
              underline: false,
              italicize: false,
              alignment: "left",
              position: "inline"
          },
          paragraphs: 
          [	
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally do not like teaching or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              }		
          ]
          },
          {
          sectionLevel: 2,
          onOwnPage: false,
          includeLabel: true,
          label: {			
              labelText: "Subsection 2",
              font: "Times New Roman",
                      fontSize: 12,
              bold: true,
              underline: false,
              italicize: false,
              alignment: "left",
              position: "lineBefore"
          },
          paragraphs: 
          [	
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally do not like teaching or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              }		
          ]
          },
          {
          sectionLevel: 3,
          onOwnPage: false,
          includeLabel: true,
          label: {			
              labelText: "Subsubsection 1",
              font: "Times New Roman",
                      fontSize: 12,
              bold: true,
              underline: false,
              italicize: false,
              alignment: "left",
              position: "inline"
          },
          paragraphs: 
          [	
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally do not like teaching or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              }		
          ]
          },
          {
          sectionLevel: 3,
          onOwnPage: false,
          includeLabel: true,
          label: {			
              labelText: "Subsubsection 2",
              font: "Times New Roman",
                      fontSize: 12,
              bold: true,
              underline: false,
              italicize: false,
              alignment: "left",
              position: "inline"
          },
          paragraphs: 
          [	
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally do not like teaching or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              },
              {
              alignment: "left",
                          spacing: 2,
              topIndent: 1,
              bottomIndent: 0,
              formatSections:
              [
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: "do not like teaching"
                  },
                  {
                  bold: false,
                  underline: false,
                  italicize: false,
                  fontSize: 12,
                  font: "Times New Roman",
                  content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
                  }
              ]
              }		
          ]
          }
      ]		
      },
      conclusion: {
      onOwnPage: true,
      includeLabel: true,
      label: {			
          labelText: "Conclusion",
          font: "Times New Roman",
              fontSize: 12,
          bold: true,
          underline: false,
          italicize: false,
          alignment: "center",
          position: "lineBefore"
      },
      paragraphs: 
      [	
          {
          alignment: "left",
                  spacing: 2,
          topIndent: 1,
          bottomIndent: 0,
          formatSections:
          [
              {
              bold: false,
              underline: false,
              italicize: false,
              fontSize: 12,
              font: "Times New Roman",
              content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally "
              },
              {
              bold: false,
              underline: false,
              italicize: false,
              fontSize: 12,
              font: "Times New Roman",
              content: "do not like teaching"
              },
              {
              bold: false,
              underline: false,
              italicize: false,
              fontSize: 12,
              font: "Times New Roman",
              content: " or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
              }
          ]
          },
          {
          alignment: "left",
                  spacing: 2,
          topIndent: 1,
          bottomIndent: 0,
          formatSections:
          [
              {
              bold: false,
              underline: false,
              italicize: false,
              fontSize: 12,
              font: "Times New Roman",
              content: "I do not plan on getting a Ph.D. at any point.  In the reading it says, 'Do not even think of applying for a Ph.D. if you have not tried research and/or teaching and found that you like at least one of those' (Harchol-Balter, 2014).  I personally do not like teaching or research and research is not exciting to me at all.  What I want to do to continue my education and training is to keep myself up to date on the latest technology through self-training and going to conferences whenever the opportunity arises.  In that sense, I will keep up to scratch with the people coming straight out of college with the new techniques and still gain experience in the work force.  If my company offers to send me to a graduate school, I might consider it, but I will be perfectly happy doing the work that my bachelor's degree will get me"
              }
          ]
          }	
      ]
      },	
      references: {
      onOwnPage: true,
      includeLabel: true,
          alignment: "left",
          topIndent: 0,
          bottomIndent: 1,
          fontSize: 12,
      font: "Times New Roman",
          spacing: 2,
      label: {			
          labelText: "References",
          font: "Times New Roman",
              fontSize: 12,
          bold: true,
          underline: false,
          italicize: false,
          alignment: "center",
          position: "lineBefore"
      },	
      citations: [
          {
          keyData: "Title",
          fields: [
              {
              name: "Author",
              value: "Beagley, J. A.",
              bold: false,
              underline: false,
              italicize: false,
              inQuotes: false,
              inParens: false
              },
              {
              name: "Title",
              value: "My Awesome Book",
              underline: false,
              italicize: false,
              inQuotes: true,
              inParens: false
              },
              {
              name: "Publication Date",
              value: "2017",
              underline: false,
              italicize: false,
              inQuotes: false,
              inParens: true
              }
          ],
          inText: "(Beagley, 2017)",
          quotations: [
              {
              content: "I am awesome",
              block: false
              },
              {
              content: "I am awesome I am awesome I am awesome I am awesome I am awesome I am awesome I am awesome I am awesome I am awesome I am awesome I am awesome I am awesome I am awesome I am awesome",
              block: true
              }
          ]
          },
          {
          keyData: "Title",
          fields: [
              {
              name: "Author",
              value: "Beagley, N. P.",
              bold: false,
              underline: false,
              italicize: false,
              inQuotes: false,
              inParens: false
              },
              {
              name: "Title",
              value: "My Awesomer Book",
              underline: false,
              italicize: false,
              inQuotes: true,
              inParens: false
              },
              {
              name: "Publication Date",
              value: "2018",
              underline: false,
              italicize: false,
              inQuotes: false,
              inParens: true
              }
          ],
          inText: "(Beagley, 2018)",
          quotations: [
              {
              content: "I am awesomest",
              block: false
              },
              {
              content: "I am awesome I am awesomest I am awesome I am awesome I am awesome I am awesome I am awesome I am awesomest I am awesome I am awesome I am awesome I am awesome I am awesome I am awesomest",
              block: true
              }
          ]
          }
      ]
      }
  };
}
