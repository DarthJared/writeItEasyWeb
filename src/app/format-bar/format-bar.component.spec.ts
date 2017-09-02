import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatBarComponent } from './format-bar.component';

describe('FormatBarComponent', () => {
  let component: FormatBarComponent;
  let fixture: ComponentFixture<FormatBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
