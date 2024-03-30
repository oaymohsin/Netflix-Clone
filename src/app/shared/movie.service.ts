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
  constructor(private httpClient: HttpClient) {}

  getMovies(){
    return this.httpClient.get<any>('https://api.themoviedb.org/3/discover/movie',options)
  }
}
