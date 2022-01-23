import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreercarnetComponent } from './creercarnet.component';

describe('CreercarnetComponent', () => {
  let component: CreercarnetComponent;
  let fixture: ComponentFixture<CreercarnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreercarnetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreercarnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
