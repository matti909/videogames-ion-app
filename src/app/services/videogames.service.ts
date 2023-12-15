import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideogamesService {
  http = inject(HttpClient)

  getGames() {
    return this.http.get(environment.baseUrl)
  }

  getGenres() {
    return this.http.get(environment.baseGen)
  }
}
