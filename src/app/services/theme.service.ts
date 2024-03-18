import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private activeTheme: string = 'dark';
  private themeChangedSubject = new Subject<string>();

  themeChanged$ = this.themeChangedSubject.asObservable();

  getTheme(): string {
    return this.activeTheme;
  }

  setTheme(theme: string): void {
    let themeLink = document.getElementById('app-theme') as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = theme + '.css';
    }
    this.activeTheme = theme;
    this.themeChangedSubject.next(theme); }
}
