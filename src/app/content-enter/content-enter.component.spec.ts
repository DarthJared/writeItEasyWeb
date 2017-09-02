import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentEnterComponent } from './content-enter.component';

describe('ContentEnterComponent', () => {
  let component: ContentEnterComponent;
  let fixture: ComponentFixture<ContentEnterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentEnterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
