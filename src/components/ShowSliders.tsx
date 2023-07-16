import { useSelector } from 'react-redux';
import { AppState } from '../store';
import { trendShows, comedyShows, scifiShows } from '../store/actions/listActions';
import HeroBrowse from './HeroBrowse';
import TitleCard from './TitleCard';

const ShowSliders = () => {

    //DATA
    const trendShowData = useSelector((state: AppState) => state.trendShows);
    const comedyShowData = useSelector((state: AppState) => state.comedyShows);
    const scifiShowData = useSelector((state: AppState) => state.scifiShows);
  
  return (
    <>
      <HeroBrowse />
          <div className='position-relative'>
              <TitleCard title = 'Trending TV Shows' screenType = 'tv' selector = {trendShowData} dpatch = {trendShows} />
              <TitleCard title = 'Comedy TV Shows' screenType = 'tv' selector = {comedyShowData} dpatch = {comedyShows} />
              <TitleCard title = 'Sci-Fi & Fantasy TV Shows' screenType = 'tv' selector = {scifiShowData} dpatch = {scifiShows} />
          </div>
    </>
  )
}

export default ShowSliders