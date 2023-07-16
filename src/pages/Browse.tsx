import NavbarBrowse from '../components/NavbarBrowse'
import '../styles/browse.css'
import { useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { genreMv, genreTv } from '../store/actions/genreActions';
import { Route, Routes } from 'react-router-dom';
import HomeSliders from '../components/HomeSliders';
import ShowSliders from '../components/ShowSliders';
import MovieSliders from '../components/MovieSliders';
import FooterBrowse from '../components/FooterBrowse';


const Browse = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(genreTv() as any);
    dispatch(genreMv() as any);
  }, [dispatch])



  return (
    <div className='position-relative' style={{backgroundColor: '#141414'}}>
      <NavbarBrowse />
      <Routes>
        <Route path='/home' Component={HomeSliders} />
        <Route path='/tvshows' Component={ShowSliders} />
        <Route path='/movies' Component={MovieSliders} />
      </Routes>
      <FooterBrowse />
    </div>
  )
}

export default Browse