import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [RouterTestingModule],
    })
    .compileComponents();
    localStorage.clear()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with navbar colapsed', () => {
    expect(component.displayNavbar).toBeFalsy();
  })

  it('should change displayNavbar value on activate toggleNavbar', () => {
    component.toggleNavbar();
    fixture.detectChanges();
    expect(component.displayNavbar).toBeTruthy();
  })

  it('#logout should clear session data from localStorage and redirect user to home', () => {
    localStorage.setItem('authToken', '1q2w3e4r');
    component.logout();
    fixture.detectChanges();
    expect(localStorage.getItem('authToken')).toBeNull()
  })

  it('#loggedIn should return true if localStorage contains key authToken', () => {
    localStorage.setItem('authToken', '1q2w3e4r');
    expect(component.logedIn()).toBeTruthy();
  })

  it('#loggedIn should return false if localStorage DONT contains key authToken', () => {
    expect(component.logedIn()).toBeFalsy()
  })

  it('#isPersonal should return true when current user is a personal', () => {
    localStorage.setItem('authToken', 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZDZjMmJmN2MtYzYxNC00NzFjLWI2MzUtZjhmOGZjNDk4OTYzIiwia2luZCI6InBlcnNvbmFsIiwiZXhwIjoxNjM5ODk2OTAyfQ.9r7U17YASx_12nTvpHitpVBQ01eB7Fgo0NitgXYdPXc');
    expect(component.isPersonal()).toBeTruthy();
  })

  it('#isPersonal should return false when current user dont have an authToken', () => {
    expect(component.isPersonal()).toBeFalsy();
  })
});
