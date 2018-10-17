import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ReferenceTypesService } from './../services/reference-types.service';
import * as _ from 'lodash';

@Component({
  selector: 'quotation-dialog',
  templateUrl: './quotation-dialog.component.html',
  styleUrls: ['./quotation-dialog.component.css'],
  providers: [ReferenceTypesService]
})
export class QuotationDialogComponent implements OnInit {

  @Input() openDialog = false;
  @Output() closeDialogEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() addReferenceEvent: EventEmitter<any> = new EventEmitter<any>();

  @Input() isApa: boolean = true;
  isNewRef: boolean = true;
  referenceData: any = {
    selectedRefType: '',
    fieldData: {}
  };
  referenceTypeOptions;
  fieldsToEnter: any;
  previousRefs: any;

  constructor(private refTypeService: ReferenceTypesService) { 
    this.referenceTypeOptions = this.isApa ? refTypeService.getAPAReferenceTypes() : refTypeService.getMLAReferenceTypes();
    this.fieldsToEnter = [];
    this.previousRefs = [];
  }

  ngOnInit() {
  }

  closeDialog() {
    this.closeDialogEvent.emit('Close it!');
  }

  addReference() {
    this.addReferenceEvent.emit(this.referenceData);
  }

  updateFields() {
    this.referenceData.fieldData = {};
    let referenceOptions = _.cloneDeep(this.referenceTypeOptions);
    this.fieldsToEnter = _(referenceOptions)
      .filter(
        option => option.type == this.referenceData.selectedRefType
      )
      .map(option => option.fields)
      .map(fields => {
        let fixedFields = _.map(fields, (field) => {
          if (field.type == 'authorFML') {
            this.referenceData.fieldData[field.display] = [
              {
                first: '',
                middle: '',
                last: '',
                ind: 0
              }
            ];
            return _.set(field, 'authors', [{
              first: '',
              middle: '',
              last: '',
              ind: 0
            }]);
          }
          return field;
        })
        return fixedFields;
      })
      .head();
  }

  addAuthor(display) {
    this.fieldsToEnter = _.map(this.fieldsToEnter, (field) => {
      let newField = _.cloneDeep(field);
      if (newField.display == display) {
        let last = _(this.fieldsToEnter).last();
        let newInd = _.get(last, 'ind') + 1;
        this.referenceData.fieldData[display].push({
          first: '',
          middle: '',
          last: '',
          ind: newInd
        });
        newField.authors.push({
          first: '',
          middle: '',
          last: '',
          ind: newInd
        });
      }
      return newField;
    })
  }

  removeAuthor(display, authorIndex) {
    this.fieldsToEnter[display] = _.map(this.fieldsToEnter[display], (author) => {
      if (author.ind == authorIndex) {
        return null;
      }
      return author;
    }).filter((author) => {
      return author != null;
    });
  }

}
