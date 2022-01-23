import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationCarnetsComponent } from './modification-carnets.component';

describe('ModificationCarnetsComponent', () => {
  let component: ModificationCarnetsComponent;
  let fixture: ComponentFixture<ModificationCarnetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationCarnetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationCarnetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
