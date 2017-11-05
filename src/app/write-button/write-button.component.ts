import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DocwriterService } from "./../services/docwriter.service";
import * as _ from 'lodash';

@Component({
  selector: 'write-button',
  providers: [ DocwriterService ],
  templateUrl: './write-button.component.html',
  styleUrls: ['./write-button.component.css']
})
export class WriteButtonComponent implements OnInit {
  @Input() configOptions;
  @Input() paperContent;
  @Output() sectionAdded = new EventEmitter();
  @Output() subsectionAdded = new EventEmitter();
  @Output() subsubsectionAdded = new EventEmitter();
  docName: string = '';
  optionsOpen = false;
  headerObj = {
    applyTo: "",
    leftType: "",
    rightType: "",
    left: "",
    right: ""
  };
  titleFieldObj = {
    name: "",
    value: ""
  }
  paraObj = {
    alignment: "",
    spacing: 0,
    topIndent: 0,
    bottomIndent: 0,
    formatSections: []
  };
  formatSectObj = {
    bold: false,
    underline: false,
    italicize: false,
    fontSize: 12,
    font: "Times New Roman",
    content: ""
  };
  sectionObj = {
    sectionLevel: 0,
    onOwnPage: false,
    includeLabel: false,
    label: {			
      labelText: "",
      font: "Times New Roman",
      fontSize: 12,
      bold: false,
      underline: false,
      italicize: false,
      alignment: "",
      position: ""
    },
    paragraphs: []
  };
  citationObj = {
    keyData: "",
    fields: [],
    inText: "",
    quotations: []
  };
  citationFieldObj = {
    name: "",
    value: "",
    bold: false,
    underline: false,
    italicize: false,
    inQuotes: false,
    inParens: false
  };
  quotationObj = {
    content: "",
    block: false
  };
  paperObj =  {
    title: "",
    author: "",
    headers:  {
      includeHeaders: false,
      diffFirstPage: false,
      font: "Times New Roman",
      fontSize: 12,
      bold: false,
      italicize: false,
      underline: false,
      headers: []
    },	
    titleInfo:
    {
      onOwnPage: false,
      alignment: "",
      font: "Times New Roman",
      fontSize: 12,
      bold: false,
      underline: false,
      italicize: false,
      fields: []
    },
    summaryAbstract: {
      onOwnPage: false,
      includeLabel: false,
      label: {			
        labelText: "",
        font: "Times New Roman",
        fontSize: 12,
        bold: false,
        underline: false,
        italicize: false,
        alignment: "",
        position: ""
      },		
      paragraphs: []
    },
    body: {
      sections: []		
    },
    conclusion: {
      onOwnPage: false,
      includeLabel: false,
      label: {			
        labelText: "",
        font: "Times New Roman",
        fontSize: 12,
        bold: false,
        underline: false,
        italicize: false,
        alignment: "",
        position: ""
      },
      paragraphs: []
    },	
    references: {
      onOwnPage: false,
      includeLabel: false,
      alignment: "",
      topIndent: 0,
      bottomIndent: 0,
      fontSize: 12,
      font: "Times New Roman",
      spacing: 0,
      label: {			
        labelText: "",
        font: "Times New Roman",
        fontSize: 12,
        bold: false,
        underline: false,
        italicize: false,
        alignment: "",
        position: ""
      },	
      citations: []
    }
  };

  constructor(private docwriterService: DocwriterService) { }

  ngOnInit() {
  }

  changeName(newName) {
    this.docName = newName;
  }

  showOptions() {
    this.optionsOpen = !this.optionsOpen;
  }

  hideOptions() {
    this.optionsOpen = false;
  }

  addSection() {
    this.optionsOpen = false;
    this.sectionAdded.emit('added');
  }

  addSubsection() {
    this.optionsOpen = false;
    this.subsectionAdded.emit('added');
  }

  addSubsubsection() {
    this.optionsOpen = false;
    this.subsubsectionAdded.emit('added');
  }

  writeIt() {
    console.log('document preparing to write');
    this.optionsOpen = false;
    this.parseConfig();
    this.parseContent();
    let docsName = this.docName;
    if (!docsName || docsName == '') {
      docsName = 'My Paper';
    }
    this.docwriterService.writeDocument(this.paperObj, docsName);
  }

  parseConfig() {     
    this.paperObj.title = this.configOptions.paperTitle;
    //author needed?

    /*Configure Header*/
    this.paperObj.headers.includeHeaders = this.configOptions.includeHeader;
    if (this.configOptions.includeHeader) {
      this.paperObj.headers.diffFirstPage = this.configOptions.headerDifferentFirstPage;
      this.paperObj.headers.font = this.configOptions.headerFont;
      this.paperObj.headers.fontSize = this.configOptions.headerFontSize;
      this.paperObj.headers.bold = this.configOptions.headerFormat.bold;
      this.paperObj.headers.italicize = this.configOptions.headerFormat.italic;
      this.paperObj.headers.underline = this.configOptions.headerFormat.underline;
      let defaultHeader; 
      this.paperObj.headers.headers = [];
      for (let header of this.paperContent.headers) {
        if (header && header.applyTo == 'default') {
          defaultHeader = header;
        }
      }
      if (this.configOptions.headerDifferentFirstPage) {
        let headerFirst = JSON.parse(JSON.stringify(this.headerObj));
        let firstHeader; 
        for (let header of this.paperContent.headers) {
          if (header && header.applyTo == 'firstPage') {
            firstHeader = header;
          }
        }
        if (this.configOptions.headerMoreDifferent) {
          if (this.configOptions.headerFirstLeft == 'headerFirstLeftPaperTitle' || this.configOptions.headerFirstLeft == 'headerFirstLeftOtherText') {
            headerFirst.applyTo = 'firstPage';
            headerFirst.leftType = 'text';
            headerFirst.left = this.configOptions.headerUseRunningHead 
              ? 'Running head: ' + firstHeader.left 
              : firstHeader.left;
          }
          else if (this.configOptions.headerFirstLeft == 'headerFirstLeftPageNumber') {
            headerFirst.applyTo = 'firstPage';
            headerFirst.leftType = 'pageNumber';
          }
          else {
            headerFirst.applyTo = 'firstPage';
            headerFirst.leftType = 'none';
          }
          if (this.configOptions.headerFirstRight == 'headerFirstRightPaperTitle' || this.configOptions.headerFirstRight == 'headerFirstRightOtherText') {
            headerFirst.rightType = 'text';
            headerFirst.right = firstHeader.right;
          }
          else if (this.configOptions.headerFirstRight == 'headerFirstRightPageNumber') {
            headerFirst.rightType = 'pageNumber';
          }
          else {
            headerFirst.rightType = 'none';
          }
        }
        else {
          if (this.configOptions.headerLeft == 'headerLeftPaperTitle' || this.configOptions.headerLeft == 'headerLeftOtherText') {
            headerFirst.applyTo = 'firstPage';
            headerFirst.leftType = 'text';
            headerFirst.left = this.configOptions.headerUseRunningHead 
              ? 'Running head: ' + defaultHeader.left 
              : defaultHeader.left;
          }
          else if (this.configOptions.headerLeft == 'headerLeftPageNumber') {
            headerFirst.applyTo = 'firstPage';
            headerFirst.leftType = 'pageNumber';
          }
          else {
            headerFirst.applyTo = 'firstPage';
            headerFirst.leftType = 'none';
          }
          if (this.configOptions.headerRight == 'headerRightPaperTitle' || this.configOptions.headerRight == 'headerRightOtherText') {
            headerFirst.rightType = 'text';
            headerFirst.right = defaultHeader.right;
          }
          else if (this.configOptions.headerRight == 'headerRightPageNumber') {
            headerFirst.rightType = 'pageNumber';
          }
          else {
            headerFirst.rightType = 'none';
          }
        }
        this.paperObj.headers.headers.push(headerFirst)
      }
      let headerMain = JSON.parse(JSON.stringify(this.headerObj));
      
      if (this.configOptions.headerLeft == 'headerLeftPaperTitle' || this.configOptions.headerLeft == 'headerLeftOtherText') {
        headerMain.applyTo = 'default';
        headerMain.leftType = 'text';
        headerMain.left = defaultHeader.left;
      }
      else if (this.configOptions.headerLeft == 'headerLeftPageNumber') {
        headerMain.applyTo = 'default';
        headerMain.leftType = 'pageNumber';
      }
      else {
        headerMain.applyTo = 'default';
        headerMain.leftType = 'none';
      }
      if (this.configOptions.headerRight == 'headerRightPaperTitle' || this.configOptions.headerRight == 'headerRightOtherText') {
        headerMain.rightType = 'text';
        headerMain.right = defaultHeader.right;
      }
      else if (this.configOptions.headerRight == 'headerRightPageNumber') {
        headerMain.rightType = 'pageNumber';
      }
      else {
        headerMain.rightType = 'none';
      }
      this.paperObj.headers.headers.push(headerMain);
    }

    /*Configure Title Info*/
    if (this.configOptions.includeTitle) {
      this.paperObj.titleInfo.onOwnPage = this.configOptions.titleInfoPos == 'titleInfoSeparatePage';
      this.paperObj.titleInfo.bold = this.configOptions.titleInfoFormat.bold;
      this.paperObj.titleInfo.italicize = this.configOptions.titleInfoFormat.italic;
      this.paperObj.titleInfo.underline = this.configOptions.titleInfoFormat.underline;
      let titleAlign = '';
      if (this.configOptions.titleInfoAlign == 'titleInfoAlignLeft') {
        titleAlign = 'left';
      }
      else if (this.configOptions.titleInfoAlign == 'titleInfoAlignCenter') {
        titleAlign = 'center';
      }
      else if (this.configOptions.titleInfoAlign == 'titleInfoAlignRight') {
        titleAlign = 'right';
      }
      this.paperObj.titleInfo.alignment = titleAlign;
      this.paperObj.titleInfo.font = this.configOptions.titleInfoFont;
      this.paperObj.titleInfo.fontSize = this.configOptions.titleInfoFontSize;
      //bold, underline, and italicize needed
      // this.paperObj.titleInfo.fields = [];
      let updatedFields = [];
      for (let i = 0; i < 6; i++) {
        if (this.configOptions.titleInfoIncludeTitle && this.configOptions.titleInfoIncludeTitleIndex == i) {
          let toPush = {name: 'Title', value: ''};
          for (let titleField of this.paperObj.titleInfo.fields) {
            if (titleField.name == 'Title')
              toPush.value = titleField.value
          }
          updatedFields.push(toPush);
        }
        else if (this.configOptions.titleInfoIncludeName && this.configOptions.titleInfoIncludeNameIndex == i) {
          let toPush = {name: 'Name', value: ''};
          for (let titleField of this.paperObj.titleInfo.fields) {
            if (titleField.name == 'Name')
              toPush.value = titleField.value
          }
          updatedFields.push(toPush);
        }
        else if (this.configOptions.titleInfoIncludeClass && this.configOptions.titleInfoIncludeClassIndex == i) {
          let toPush = {name: 'Class', value: ''};
          for (let titleField of this.paperObj.titleInfo.fields) {
            if (titleField.name == 'Class')
              toPush.value = titleField.value
          }
          updatedFields.push(toPush);        
        }
        else if (this.configOptions.titleInfoIncludeProfessor && this.configOptions.titleInfoIncludeProfessorIndex == i) {
          let toPush = {name: 'Professor', value: ''};
          for (let titleField of this.paperObj.titleInfo.fields) {
            if (titleField.name == 'Professor')
              toPush.value = titleField.value
          }
          updatedFields.push(toPush);      
        }
        else if (this.configOptions.titleInfoIncludeSchool && this.configOptions.titleInfoIncludeSchoolIndex == i) {
          let toPush = {name: 'School', value: ''};
          for (let titleField of this.paperObj.titleInfo.fields) {
            if (titleField.name == 'School')
              toPush.value = titleField.value
          }
          updatedFields.push(toPush);          
        }
        else if (this.configOptions.titleInfoIncludeOtherText && this.configOptions.titleInfoIncludeOtherTextIndex == i) {
          let toPush = {name: 'Other', value: ''};
          for (let titleField of this.paperObj.titleInfo.fields) {
            if (titleField.name == 'Other')
              toPush.value = titleField.value
          }
          updatedFields.push(toPush);      
        }
      }   
      this.paperObj.titleInfo.fields = updatedFields;   
    }

    /*Summary / Abstract*/
    if (this.configOptions.includeAbstractSummary) {
      this.paperObj.summaryAbstract.onOwnPage = this.configOptions.summaryOwnPage;
      if (this.configOptions.summaryIncludeSectionLabel) {
        this.paperObj.summaryAbstract.includeLabel = true;
        this.paperObj.summaryAbstract.label.bold = this.configOptions.summaryLabelFormat.bold;
        this.paperObj.summaryAbstract.label.italicize = this.configOptions.summaryLabelFormat.italic;
        this.paperObj.summaryAbstract.label.underline = this.configOptions.summaryLabelFormat.underline;
        this.paperObj.summaryAbstract.label.font = this.configOptions.summaryLabelFont;
        this.paperObj.summaryAbstract.label.fontSize = this.configOptions.summaryLabelFontSize;
        if (this.configOptions.summarySectionLabelAlign == 'summarySectionLabelCenter')
          this.paperObj.summaryAbstract.label.alignment = 'center';
        else if (this.configOptions.summarySectionLabelAlign == 'summarySectionLabelLeft')
          this.paperObj.summaryAbstract.label.alignment = 'left';
        else if (this.configOptions.summarySectionLabelAlign == 'summarySectionLabelRight')
          this.paperObj.summaryAbstract.label.alignment = 'right';
      }
    }

    /*Paper Body*/
    //handle between sections

    /*Conclusion*/
    if (this.configOptions.includeConclusion) {
      this.paperObj.conclusion.onOwnPage = this.configOptions.conclusionOwnPage;
      if (this.configOptions.conclusionIncludeLabel) {
        this.paperObj.conclusion.includeLabel = true;
        this.paperObj.conclusion.label.bold = this.configOptions.conclusionLabelFormat.bold;
        this.paperObj.conclusion.label.italicize = this.configOptions.conclusionLabelFormat.italic;
        this.paperObj.conclusion.label.underline = this.configOptions.conclusionLabelFormat.underline;
        this.paperObj.conclusion.label.font = this.configOptions.conclusionLabelFont;
        this.paperObj.conclusion.label.fontSize = this.configOptions.conclusionLabelFontSize;
        if (this.configOptions.conclusionSectionLabelAlign == 'conclusionSectionLabelCenter')
          this.paperObj.conclusion.label.alignment = 'center';
        else if (this.configOptions.conclusionSectionLabelAlign == 'conclusionSectionLabelLeft')
          this.paperObj.conclusion.label.alignment = 'left';
        else if (this.configOptions.conclusionSectionLabelAlign == 'conclusionSectionLabelRight')
          this.paperObj.conclusion.label.alignment = 'right';
      }
    }

    /*References*/
    if (this.configOptions.includeReferencesWorksCited) {
      this.paperObj.references.onOwnPage = this.configOptions.referencesOwnPage;
      //handle hanging indent
      this.paperObj.references.font = this.configOptions.referencesFont;
      this.paperObj.references.fontSize = this.configOptions.referencesFontSize;
      let spacing = 2;
      if (this.configOptions.spacing =='singleSpace') {
        spacing = 1;
      }
      else if (this.configOptions.spacing == 'oneAndHalfSpace') {
        spacing = 1.5;
      }
      else if (this.configOptions.spacing == 'doubleSpace') {
        spacing = 2;
      }      
      this.paperObj.references.spacing = spacing;
      if (this.configOptions.referencesIncludeLabel) {
        this.paperObj.references.includeLabel = true;
        this.paperObj.references.label.labelText = this.configOptions.referencesLabelInput;
        this.paperObj.references.label.font = this.configOptions.referencesFont;
        this.paperObj.references.label.fontSize = this.configOptions.referencesFontSize;
        this.paperObj.references.label.bold = this.configOptions.referencesLabelFormat.bold;
        this.paperObj.references.label.italicize = this.configOptions.referencesLabelFormat.italic;
        this.paperObj.references.label.underline = this.configOptions.referencesLabelFormat.underline;      
        let align = "";
        if (this.configOptions.referencesLabelAlign == 'referencesLabelAlignLeft') {
          align = "left";
        }
        else if (this.configOptions.referencesLabelAlign == 'referencesLabelAlignCenter') {
          align = "center";
        }
        else if (this.configOptions.referencesLabelAlign == 'referencesLabelAlignRight') {
          align = "right";
        }
        this.paperObj.references.label.alignment = align;
      }
      //handle references
    }
  }

  parseContent() {
    if (this.paperContent.titleFields) {
      for (let titleField of this.paperObj.titleInfo.fields) {
        for (let updatedField of this.paperContent.titleFields) {
          if (titleField.name == updatedField.name) {
            titleField.value = updatedField.value;
          }
        }
      }
    }
    if (this.paperContent.summaryLabel) {
      this.paperObj.summaryAbstract.label.labelText = this.paperContent.summaryLabel.labelText;
    }
    if (this.paperContent.summaryParagraphs) {
      this.paperObj.summaryAbstract.paragraphs = this.paperContent.summaryParagraphs;
    }
    if (this.paperContent.bodySections) {
      this.paperObj.body.sections = _.sortBy(this.paperContent.bodySections, ['indexVal']);
      for (let section of this.paperObj.body.sections) {
        if (section.includeLabel) {
          let sectionLevel;
          switch(section.sectionLevel) {
            case 1: 
              sectionLevel = 'Section';
              break;
            case 2:
              sectionLevel = 'Subsection';
              break;
            case 3:
              sectionLevel = 'Subsubsection';
              break;
            default:
              sectionLevel = 'Just not right';
          }
          section.label.font = this.configOptions[`body${sectionLevel}LabelFont`];
          section.label.fontSize = this.configOptions[`body${sectionLevel}LabelFontSize`];
          if (this.configOptions[`body${sectionLevel}LabelAlign`] == `body${sectionLevel}LabelLeft`) {
            section.label.alignment = 'left';
          }
          else if (this.configOptions[`body${sectionLevel}LabelAlign`] == `body${sectionLevel}LabelCenter`) {
            section.label.alignment = 'center';
          }
          else if (this.configOptions[`body${sectionLevel}LabelAlign`] == `body${sectionLevel}LabelRight`) {
            section.label.alignment = 'right';
          }
          section.label.bold = this.configOptions[`body${sectionLevel}LabelFormat`].bold;
          section.label.italicize = this.configOptions[`body${sectionLevel}LabelFormat`].italic;
          section.label.underline = this.configOptions[`body${sectionLevel}LabelFormat`].underline;
          let labelPos;
          switch (this.configOptions[`body${sectionLevel}LabelPos`]) {
            case `body${sectionLevel}LabelOwnLine`:
              labelPos = 'lineBefore';
              break;
            default:
              labelPos = 'inline';
          }
          section.label.position = labelPos;
        }
      }
    }
    if (this.paperContent.conclusionLabel) {
      this.paperObj.conclusion.label.labelText = this.paperContent.conclusionLabel.labelText;
    }
    if (this.paperContent.conclusionParagraphs) {
      this.paperObj.conclusion.paragraphs = this.paperContent.conclusionParagraphs;
    }
  }

  samplePaperObj = {
    title: "My Paper",
    author: "Jared Beagley",
    headers:  {
      includeHeaders: true,
      diffFirstPage: true,
      bold: false,
      italicize: false,
      underline: false,
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
        alignment: "center"
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
  }
}
