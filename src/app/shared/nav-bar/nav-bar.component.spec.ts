import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';

import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarComponent],
      imports: [TranslateModule.forRoot(), PrimeNgModule]

    });
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // =============== TEST FOR onThemeChange ===============

  it('should change theme and call themeService.setTheme with correct parameter when onThemeChange is called', () => {
    const themeServiceSpy = jasmine.createSpyObj('ThemeService', ['setTheme']);
    component.themeService = themeServiceSpy;

    component.onThemeChange('dark');

    expect(component.selectedTheme).toBe('dark');
    expect(themeServiceSpy.setTheme).toHaveBeenCalledWith('dark');
  });

  // =============== TEST FOR closeSidebar ===============

  it('should set sidebarVisible to false when closeSidebar is called', () => {
    component.sidebarVisible = true;

    component.closeSidebar();

    expect(component.sidebarVisible).toBe(false);
  });

});
