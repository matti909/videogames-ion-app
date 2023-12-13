import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  translate = inject(TranslateService)

  setInitialLanguage() {
    let language = this.translate.getBrowserLang();
    let saveLang = localStorage.getItem('language');

    this.translate.setDefaultLang(language as string)

    if(saveLang) this.setLanguage(saveLang);
    else this.setLanguage(language as string)
  }

  setLanguage(lang: string){
    this.translate.use(lang)
    localStorage.setItem('language', lang)
  }


}
