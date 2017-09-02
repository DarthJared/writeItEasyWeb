import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FontsService } from "../services/fonts.service";

@Component({
  selector: 'format-bar',
  providers: [FontsService],
  templateUrl: './format-bar.component.html',
  styleUrls: ['./format-bar.component.css']
})
export class FormatBarComponent implements OnInit {
  
    bold: boolean = false;
    italic: boolean = false;
    underline: boolean = false;
  
    @Output() nameChangeEvent = new EventEmitter();
    @Output() boldEvent = new EventEmitter();
    @Output() italicsEvent = new EventEmitter();
    @Output() underlineEvent = new EventEmitter();
    @Output() fontChangeEvent = new EventEmitter();
    @Output() fontSizeChangeEvent = new EventEmitter();
    @Output() indentEvent = new EventEmitter();
    @Output() reverseIndentEvent = new EventEmitter();
    @Output() addReferenceEvent = new EventEmitter();

    fontSizes: Array<number> = [];
    fonts: Array<string> = [];

    @Input() docName: string = '';

  constructor(private fontsService: FontsService) {
    this.fontSizes = fontsService.getFontSizes();
    this.fonts = fontsService.getFontOptions();
  }

  ngOnInit() {
  }

  nameChanged() {
    this.nameChangeEvent.emit(this.docName);
  }

  setBold() {
    this.bold = !this.bold;
    this.boldEvent.emit('bolded');
  }

  setItalic() {
    this.italic = !this.italic;
    this.italicsEvent.emit('italics');
  }

  setUnderline() {
    this.underline = !this.underline;
    this.underlineEvent.emit('underlined');
  }

  isBold() {

  }

  isItalic() {

  }

  isUnderlined() {

  }

  fontChanged(newFont) {
    this.fontChangeEvent.emit(newFont);
  }

  fontSizeChanged(newSize) {
    this.fontSizeChangeEvent.emit(newSize);
  }

  indent() {
    this.indentEvent.emit('indented');
  }

  reverseIndent() {
    this.reverseIndentEvent.emit('reverseIndent');
  }

  insertReference() {
    this.addReferenceEvent.emit('newReference');
  }

}
