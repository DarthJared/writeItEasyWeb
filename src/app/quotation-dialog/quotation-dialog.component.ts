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

  constructor(private refTypeService: ReferenceTypesService) { 
    this.referenceTypeOptions = this.isApa ? refTypeService.getAPAReferenceTypes() : refTypeService.getMLAReferenceTypes();
    this.fieldsToEnter = [];
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
    this.fieldsToEnter = _(this.referenceTypeOptions)
      .filter(
        option => option.type == this.referenceData.selectedRefType
      )
      .map(option => option.fields)
      .head();
  }

}
