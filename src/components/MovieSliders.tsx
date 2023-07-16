import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { trendMovies, comedyMovies, dramaMovies } from '../store/actions/listActions';
import HeroBrowse from './HeroBrowse';
import TitleCard from './TitleCard';

const MovieSliders = () => {

   //DATA
    const comedyMvData = useSelector((state: AppState) => state.comedyMovies);
    const dramaMvData = useSelector((state: AppState) => state.dramaMovies);
    const trendMvData = useSelector((state: AppState) => state.trendMovies);
  
  return (
    <>
      <HeroBrowse />
          <div className='position-relative'>
              <TitleCard title = 'Trending Movies' screenType = 'movie' selector = {trendMvData} dpatch = {trendMovies} />
              <TitleCard title = 'Comedy Movies' screenType = 'movie' selector = {comedyMvData} dpatch = {comedyMovies} />
              <TitleCard title = 'Drama Movies' screenType = 'movie' selector = {dramaMvData} dpatch = {dramaMovies} />
          </div>
    </>
  )
}

export default MovieSliders