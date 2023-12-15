import { Component, OnInit, inject } from '@angular/core';
import { IGenre, Videogames } from 'src/app/interfaces';
import { LanguageService } from 'src/app/services/language.service';
import { VideogamesService } from 'src/app/services/videogames.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  language = inject(LanguageService);
  gamesSvc = inject(VideogamesService);
  videogames: Videogames[] = [];
  genres: IGenre[] = [];
  selectedLanguage = '';

  ngOnInit() {  
    this.selectedLanguage = localStorage.getItem('language') as string;
    this.getVGames();
    this.getVGenres();
  }

  setLanguage() {
    this.language.setLanguage(this.selectedLanguage);
  }

  getVGames() {
    this.gamesSvc.getGames().subscribe({
      next: (res: any) => {
        console.log(res);
        this.videogames = res;
      },
    });
  }

  getVGenres() {
    this.gamesSvc.getGenres().subscribe({
      next: (res: any) => {
        console.log(res);
        this.genres = res;
      },
    });
  }
}
