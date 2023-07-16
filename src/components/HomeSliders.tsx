import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { trendMovies, comedyMovies, dramaMovies, trendShows, comedyShows, scifiShows } from '../store/actions/listActions';
import HeroBrowse from './HeroBrowse';
import TitleCard from './TitleCard';

const HomeSliders = () => {

 //DATA
 const comedyMvData = useSelector((state: AppState) => state.comedyMovies);
 const dramaMvData = useSelector((state: AppState) => state.dramaMovies);
 const trendMvData = useSelector((state: AppState) => state.trendMovies);
 const trendShowData = useSelector((state: AppState) => state.trendShows);
 const comedyShowData = useSelector((state: AppState) => state.comedyShows);
 const scifiShowData = useSelector((state: AppState) => state.scifiShows);
  
  return (
    <>
      <HeroBrowse />
          <div className='position-relative'>
              <TitleCard title = 'Trending Movies' screenType = 'movie' selector = {trendMvData} dpatch = {trendMovies} />
              <TitleCard title = 'Comedy Movies' screenType = 'movie' selector = {comedyMvData} dpatch = {comedyMovies} />
              <TitleCard title = 'Drama Movies' screenType = 'movie' selector = {dramaMvData} dpatch = {dramaMovies} />
              <TitleCard title = 'Trending TV Shows' screenType = 'tv' selector = {trendShowData} dpatch = {trendShows} />
              <TitleCard title = 'Comedy TV Shows' screenType = 'tv' selector = {comedyShowData} dpatch = {comedyShows} />
              <TitleCard title = 'Sci-Fi & Fantasy TV Shows' screenType = 'tv' selector = {scifiShowData} dpatch = {scifiShows} />
          </div>
    </>
  )
}

export default HomeSliders