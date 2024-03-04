import { Component, OnInit, inject } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'shared-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  checked: boolean = true;
  sidebarVisible: boolean = false;

  selectedTheme: string = 'dark';

  themeService: ThemeService = inject(ThemeService);

  ngOnInit(): void {
    this.themeService.setTheme(this.selectedTheme);
  }

  onThemeChange(theme: string): void {
    this.selectedTheme = theme;
    this.themeService.setTheme(theme);
  }
}
