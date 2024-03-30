import { Component, OnInit } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import { IVideoContent } from 'src/app/shared/models/video-content.interface';
import { MovieService } from 'src/app/shared/movie.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent implements OnInit {
  movies: IVideoContent[] = [];
  tvShows: IVideoContent[] = [];
  ratedMovies: IVideoContent[] = [];
  nowPlayingMovies: IVideoContent[] = [];
  popularMovies: IVideoContent[] = [];
  topRatedMovies: IVideoContent[] = [];
  upcomingMovies: IVideoContent[] = [];

  sources = [
    this.movieService.getMovies(),
    this.movieService.getTvShows(),
    this.movieService.getRatedMovies(),
    this.movieService.getNowPlayingMovies(),
    this.movieService.getUpcomingMovies(),
    this.movieService.getPopularMovies(),
    this.movieService.getTopRated(),
  ];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    // this.movieService.getMovies().subscribe((response)=>{
    //   this.movies=response.results;
    // })




    forkJoin(this.sources)
      .pipe(
        map(
          ([
            movies,
            tvShows,
            ratedMovies,
            nowPlayingMovies,
            popularMovies,
            topRatedMovies,
            upcomingMovies,
          ]) => {
            return {
              movies,
              tvShows,
              ratedMovies,
              nowPlayingMovies,
              popularMovies,
              topRatedMovies,
              upcomingMovies,
            };
          }
        )
      )
      .subscribe((res: any) => {
        this.movies = res.movies.results as IVideoContent[];
        this.tvShows = res.tvShows.results as IVideoContent[];
        this.ratedMovies = res.ratedMovies.results as IVideoContent[];
        this.nowPlayingMovies = res.nowPlaying.results as IVideoContent[];
        this.upcomingMovies = res.upcoming.results as IVideoContent[];
        this.popularMovies = res.popular.results as IVideoContent[];
        this.topRatedMovies = res.topRated.results as IVideoContent[];
      });
  }
}
