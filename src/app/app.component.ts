import { Component } from '@angular/core';

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
}
