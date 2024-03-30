import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc',
  },
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjQ4ZjM4ZjJiMmZkMTQxMTg2YjYwY2I1MGVmMGU5NiIsInN1YiI6IjY2MDdiMmIzYTg5NGQ2MDE0OTYyOTkyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qfYULWVIUxDZs8ya68jyYZJLucfZSqyvbQE9qcZneFw',
    accept: 'application/json',
  },
};

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies(){
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie',options)
  }

  getTvShows() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv', options)
  }

  getRatedMovies() {
    return this.http.get('https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies', options)
  }

  getBannerImage(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/images`, options)
  }

  getBannerVideo(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos`, options);
  }

  getBannerDetail(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}`, options);
  }

  getNowPlayingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing', options)
  }

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular', options)
  }

  getTopRated() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated', options)
  }

  getUpcomingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming', options)
  }
}
