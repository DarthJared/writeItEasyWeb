import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteButtonComponent } from './write-button.component';

describe('WriteButtonComponent', () => {
  let component: WriteButtonComponent;
  let fixture: ComponentFixture<WriteButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
