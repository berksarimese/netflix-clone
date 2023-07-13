import NavbarBrowse from '../components/NavbarBrowse'
import HeroBrowse from '../components/HeroBrowse'
import TitleCard from '../components/TitleCard'
import '../styles/browse.css'

import { comedyMovies, trendMovies, trendShows } from '../store/actions/listActions';
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../store'
import { useEffect } from 'react';
import { genreMv, genreTv } from '../store/actions/genreActions';


const Browse = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(genreTv() as any);
    dispatch(genreMv() as any);
  }, [])

  //TITLECARD DATA
  const comedyMvData = useSelector((state: AppState) => state.comedyMovies);
  const trendMvData = useSelector((state: AppState) => state.trendMovies);
  const trendShowData = useSelector((state: AppState) => state.trendShows);


  return (
    <div style={{backgroundColor: '#141414'}}>
      <NavbarBrowse />
      <HeroBrowse />
      <div>
          <TitleCard title = 'Trending Movies' screenType = 'movie' selector = {trendMvData} dpatch = {trendMovies} />
          <TitleCard title = 'Comedy Movies' screenType = 'movie' selector = {comedyMvData} dpatch = {comedyMovies} />
          <TitleCard title = 'Trending TV Shows' screenType = 'tv' selector = {trendShowData} dpatch = {trendShows} />
      </div>
    </div>
  )
}

export default Browse