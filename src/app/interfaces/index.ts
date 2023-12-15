export interface Videogames {
  id: number;
  name: string;
  background_image: string;
  released: string;
  rating: number;
  platforms: IPlatform[];
  genres: IGenre[];
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IPlatform2 {
  platform: IPlatform;
  released_at: string;
}

export interface IPlatform {
  id: number;
  name: string;
}
