import { useRef, useEffect, useState } from 'react'
import '../styles/titlecard.css'
import '../styles/fonts.css'
import { RiArrowLeftSLine ,RiArrowRightSLine } from "react-icons/ri";
import { TbChevronDown, TbThumbUp , TbPlayerPlayFilled , TbPlus } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { List,comedyMvState } from '../types/comedyMovies';
import { AppState } from '../store';



type PropTypes = {
  title: string,
  screenType: string,
  selector: comedyMvState,
  dpatch: any
}

type genreType = {
  name: string
}


const TitleCard:React.FC<PropTypes> = ({title, screenType, selector, dpatch}) => {

  const dispatch = useDispatch();

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [slideWidth, setSlideWidth] = useState<any>();
  const [slidePos, setSlidePos] = useState<number>(0);
  const [movieList, setMovieList] = useState<List[]>([]);

  //REFS
  const slideElement = useRef<HTMLDivElement>(null);
  const titleCard = useRef<HTMLDivElement>(null);
  
  //DIPATCH DATA
  useEffect(() => {
    dispatch(dpatch() as any);
  }, [])
  
  useEffect(() => {
    setMovieList(selector.data);
  }, [selector])

  //WINDOW WIDTH
  
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  useEffect(() => {
    setSlidePos(0);
    setSlideWidth(slideElement.current?.offsetWidth);
  }, [windowWidth])

  //BUTTONS
  const slideLeft = () => {
    setSlidePos(slidePos - slideWidth);
  }

  const slideRight = () => {
    if(slidePos !== 0) {
    setSlidePos(slidePos + slideWidth);
    console.log(slidePos)
    }
  }

  //CARD HOVER
  const onCard = (e:number) => {
    setMovieList(movieList => 
      movieList.map(item => {
        if(item.id === e) {
          return{...item,hover: true};
        }
        return item;
      })
    )
  }

  const offCard = (e:number) => {
    setMovieList(movieList => 
      movieList.map(item => {
        if(item.id === e) {
          return{...item,hover: false};
        }
        return item;
      })
    )
  }

  //GENRE
  const genreTvData = useSelector((state: AppState) => state.genreTv);
  const genreMvData = useSelector((state: AppState) => state.genreMv);
  const [genres, setGenres] = useState<genreType[]>([{name:'Genre'}]);

  // const genreList = (genre:number[]) => {
  //   setGenres([]);
  //   genre.map((gnr:number) => {
  //     genreMvData.data.map((data:any) => {
  //       if(gnr === data.id) {
  //         const genreName = data.name;
  //         setGenres(current => [...current, genreName]);
  //         console.log(genres);
  //       }
  //     })
  //   })
  // }

  
  return (
    <>
    <div className='card-main'>
      <div className="head">
        <a href="#/" className='title'>{title}</a>
      </div>
      <div className="card-slide">
        <div className="slider">
          <span className='previous-button' onClick={() => slideRight()} ><RiArrowLeftSLine /></span>
          <div className="slider-row" style={{left:`${slidePos}px`}}  ref={slideElement}>
            {
              (movieList.length > 0 ?
              movieList.map((movie) => (
                <div className='card-wrapper' ref={titleCard} key={movie.id}>
                  <img src={`https://image.tmdb.org/t/p/w1280${movie.image}`} style={{opacity:'0'}} alt="Movie Banner"/>
                  <div className={`card-hover ${movie.hover ? 'card-true' : ''}`} onMouseOver={() => onCard(movie.id)} onMouseLeave={() => offCard(movie.id)}>
                    <div className={`hover-image ${movie.hover ? 'hover-true' : ''}`}>
                      <img src={`https://image.tmdb.org/t/p/w1280${movie.image}`} alt="Hover Banner"/>
                      <div className ={`info ${movie.hover ? 'info-true' : ''}`}>
                        <div className="button-box justify-content-between">
                          <div className='d-flex flex-row' style={{gap:'0.6vw'}}>
                            <button className="button-item" style={{backgroundColor:'white', color:'black'}}><TbPlayerPlayFilled /></button>
                            <button className="button-item"><TbPlus /></button>
                            <button className="button-item"><TbThumbUp /></button>
                          </div>
                          <button className="button-item"><TbChevronDown /></button>
                        </div>
                        <div className='movie-title'>{movie.title}</div>
                        <div className="show-info">
                          <div className="match"> 99% Match</div>
                          <div className="episode">4 Seasons</div>
                          <div className="hd">HD</div>
                        </div>
                        <div className="genres">
                          {
                            screenType === 'movie' ?
                            movie.genre.map((genre:number, i:number) => (
                              genreMvData.data.map((data:any) => (
                                genre === data.id ? <div>{data.name}</div> : ''
                              ))
                            ))
                            : ''
                          }
                         
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              ))
              : 'test')
            }
          </div>
          <span className='next-button' onClick={() => slideLeft()} ><RiArrowRightSLine /></span>
        </div>
      </div>
    </div>
    </>
  )
}

export default TitleCard