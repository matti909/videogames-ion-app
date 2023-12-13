import { Component, OnInit, inject } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  language = inject(LanguageService);
  selectedLanguage = '';

  ngOnInit() {
    this.selectedLanguage = localStorage.getItem('language') as string;
  }

  setLanguage() {
    this.language.setLanguage(this.selectedLanguage);
  }
}
