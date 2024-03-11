import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }


  onClicPDF(): void {
    const pdfUrl = "../../../../assets/angular-cheat-sheet.pdf";
    const pdfName = 'cv_elena_arocena.pdf';

    this.downloadPDF(pdfUrl, pdfName);
  }

  downloadPDF(url: string, filename: string): void {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const a = document.createElement('a');
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      });
  }

  onClicLinkedin(): void {
    window.open('https://www.linkedin.com/in/maria-elena-arocena-lopez-/', '_blank');
  }
}
