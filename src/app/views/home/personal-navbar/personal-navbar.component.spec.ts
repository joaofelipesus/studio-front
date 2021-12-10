import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalNavbarComponent } from './personal-navbar.component';

describe('PersonalNavbarComponent', () => {
  let component: PersonalNavbarComponent;
  let fixture: ComponentFixture<PersonalNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
