import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHtmlComponent } from './page-html.component';

describe('PageHtmlComponent', () => {
  let component: PageHtmlComponent;
  let fixture: ComponentFixture<PageHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
