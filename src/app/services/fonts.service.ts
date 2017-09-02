import { Injectable } from '@angular/core';

@Injectable()
export class FontsService {
  public getFontOptions() {
    return [
      'Times New Roman',
      'Arial',
      'Helvetica',
      'Consolas',
      'Courier',
      'Calibri',
      'Calisto',
      'Serif',
      'San-Serif'
    ];
  }

  public getFontSizes(){
    return [
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      18,
      20,
      22,
      24,
      28,
      30,
      36,
      42,
      48
    ];
  }

  constructor() { }

}
