import { Component, OnInit, Input, EventEmitter, Output, group } from '@angular/core';
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
  fieldsGroupsToEnter: any;
  previousRefs: any;

  constructor(private refTypeService: ReferenceTypesService) { 
    this.referenceTypeOptions = this.isApa ? refTypeService.getAPAReferenceTypes() : refTypeService.getMLAReferenceTypes();
    this.fieldsGroupsToEnter = [];
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
    let groupIndex = 0;
    this.referenceData.fieldData = {};
    let referenceOptions = _.cloneDeep(this.referenceTypeOptions);
    this.fieldsGroupsToEnter = _(referenceOptions)
      .filter(
        option => option.type == this.referenceData.selectedRefType
      )
      .map(option => option.fields)
      .map(fields => {
        let fixedFields = _(fields).map((field) => {
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
        }).map((field) => {
          _.set(field, 'groupingIndex', groupIndex);
          groupIndex++;
          return field;
        }).groupBy((field) => {
          return Math.floor(field.groupingIndex/3);
        }).toArray().value();
        return fixedFields;
      })
      .head();
  }

  addAuthor(display, groupInd) {
    this.fieldsGroupsToEnter[groupInd] = _.map(this.fieldsGroupsToEnter[groupInd], (field) => {      
      if (field.display == display) {
        let newField = _.cloneDeep(field);
        let last = _.last(newField.authors);
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
        return newField;
      }
      return field;
    });
  }

  removeAuthor(display, groupIndex, authorIndex) {
    let newRefData = _.cloneDeep(this.referenceData.fieldData[display]);
    this.referenceData.fieldData[display] = _.map(newRefData, (author) => {
      if (author.ind == authorIndex) {
        return null;
      }
      return author;
    }).filter((author) => {
      return author != null;
    });
    let newFieldsGroupToEnter = _.cloneDeep(this.fieldsGroupsToEnter[groupIndex]);
    this.fieldsGroupsToEnter[groupIndex] = _.map(newFieldsGroupToEnter, (field) => {
      if (field.display == display) {
        let newAuthors = _.cloneDeep(field.authors);
        field.authors = _.map(newAuthors, (author) => {
          if (author.ind == authorIndex) {
            return null;
          }
          return author;
        }).filter(author => {
          return author != null;
        });
      }
      return field;
    });
    console.log(this.fieldsGroupsToEnter[display]);
  }

}
