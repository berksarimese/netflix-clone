import { useRef, useEffect, useState } from 'react'
import '../styles/titlecard.css'
import '../styles/fonts.css'
import { RiArrowLeftSLine ,RiArrowRightSLine } from "react-icons/ri";
import { TbChevronDown, TbThumbUp , TbPlayerPlayFilled , TbPlus } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { List,comedyMvState } from '../types/comedyMovies';
import { AppState } from '../store';
import MovieModal from './MovieModal';
import { modalProp } from '../types/propTypes';
import { similar } from '../store/actions/modalActions';
import { episodeList, showInfo } from '../store/actions/showActions';


type PropTypes = {
  title: string,
  screenType: string,
  selector: comedyMvState,
  dpatch: any
}


const TitleCard:React.FC<PropTypes> = ({title, screenType, selector, dpatch}) => {

  const dispatch = useDispatch();

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [slideWidth, setSlideWidth] = useState<any>();
  const [slidePos, setSlidePos] = useState<number>(0);
  const [movieList, setMovieList] = useState<List[]>([]);
  const [cardWidth, setCardWidth] = useState<any>(0);
  // const [cardCount, setCardCount] = useState<number>(0);
  const [slidePage, setSlidePage] = useState<number>(1);
  const [cardLeft, setCardLeft] = useState<boolean>(false);
  const [cardRight, setCardRight] = useState<boolean>(false);
  const [elementIndex, setElementIndex] = useState<number>();
  const [slideCount, setSlideCount] = useState<number>(1);
  const [modalData, setModalData] = useState<modalProp>({
    mediaType: screenType,
    showId: 0,
    showImage: '',
    showTitle: '',
    showDescription: '',
    showDate:'',
    genre:[],
    active: false
  });

  //REFS
  const slideElement = useRef<HTMLDivElement>(null);
  const titleCard = useRef<any[]>([]);
  
  //MOVIE OR SHOW DATA
  useEffect(() => {
    dispatch(dpatch() as any);
  }, [dispatch, dpatch])

  useEffect(() => {
    setMovieList(selector.data);
  }, [selector])

  //GENRE DATA
  const genreTvData = useSelector((state: AppState) => state.genreTv);
  const genreMvData = useSelector((state: AppState) => state.genreMv);
  
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
    setSlidePage(1);

    //CARD COUNT ON LIST
    // windowWidth > 1400 ? setCardCount(6) : 
    // windowWidth > 1100 ? setCardCount(5) : 
    // windowWidth > 800 ? setCardCount(4) :
    // windowWidth > 500 ? setCardCount(3) : setCardCount(2)

  }, [windowWidth])

  //CARD WIDTH
  const getCardWidth = () => {
    setCardWidth(titleCard.current[0]?.offsetWidth);
  }

  

  //BUTTONS
  const slideLeft = () => {
    const lastPage = (slideWidth * (slideCount - 1)) * -1;
    if(slidePos > lastPage) {
      setSlidePage(slidePage + 1);
      setSlidePos(slidePos - slideWidth);
    } else {
      setSlidePage(1);
      setSlidePos(slidePos + slideWidth * (slideCount - 1));
    }
  }

  const slideRight = () => {
    if(slidePos !== 0) {
    setSlidePage(slidePage - 1);
    setSlidePos(slidePos + slideWidth);
    } else {
      setSlidePage(slideCount);
      setSlidePos(slidePos - slideWidth * (slideCount - 1));
    }
  }

  const countSlide = () => {
    const count = Math.ceil((cardWidth * movieList.length) / slideWidth);
    setSlideCount(count);
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
    setCardLeft(false);
    setCardRight(false);
    setMovieList(movieList => 
      movieList.map(item => {
        if(item.id === e) {
          return{...item,hover: false};
        }
        return item;
      })
    )
  }


//DETECTING FIRST AND THE LAST CARD ON THE SLIDE PAGE TO BETTER POSITIONING
const cardLoc = (index:number) => {
  if (titleCard.current[index]) {
    const offsetLeft = titleCard.current[index].offsetLeft;

    if(offsetLeft > ((slideWidth * slidePage) - slideWidth) - 75 && offsetLeft < ((slideWidth * slidePage) - slideWidth) + 75) {
      setCardLeft(true);
    }

    if(offsetLeft > ((slideWidth * slidePage) - cardWidth) - 75 && offsetLeft < ((slideWidth * slidePage) - cardWidth) + 75) {
      setCardRight(true);
    }
  }
}

//MODAL
const modalStatus = (id:number,image:string,title:string,description:string,date:string,genre:number[]) => {
  
  if( screenType === 'tv' ) { dispatch(showInfo(id) as any); dispatch(episodeList(id, 1) as any); }
  dispatch(similar(id, screenType) as any);
  setModalData({
    mediaType:screenType, 
    showId: id, 
    showImage: image, 
    showTitle:title, 
    showDescription: description, 
    showDate: date, 
    genre: genre, 
    active: true});
}
  
  return (
    <>
    <div className='card-main'>
      <div className="head">
        <a href="#/" className='title'>{title}</a>
      </div>
      <div className="card-slide">
        <div className="slider">
          <span className='previous-button' onClick={() => slideRight()} onMouseOver={() => countSlide()}><RiArrowLeftSLine /></span>
          <div className="slider-row" style={{left:`${slidePos}px`}}  ref={slideElement}>
            {
              (movieList.length > 0 ?
              movieList.map((movie, index:number) => (
                <div className='card-wrapper' ref={(el) => (titleCard.current[index] = el)} key={movie.id} >
                  <img src={`https://image.tmdb.org/t/p/w1280${movie.image}`} style={{opacity:'1'}} alt="Movie Banner"/>
                  <div className={`card-hover ${movie.hover ? 'card-true' : ''}`} onMouseOver={() => {onCard(movie.id); cardLoc(index);}} onMouseLeave={() => offCard(movie.id)}>
                    <div key={index} className={`hover-image ${movie.hover ? 'hover-true' : ''}  ${index === elementIndex && cardLeft ? 'card-left-true' : ''} ${index === elementIndex && cardRight ? 'card-right-true' : ''} `} onMouseOver={() => setElementIndex(index)}>
                      <img src={`https://image.tmdb.org/t/p/w1280${movie.image}`} alt="Hover Banner" onMouseOver={() => getCardWidth()} />
                      <div className ={`info ${movie.hover ? 'info-true' : ''}`}>
                        <div className="button-box justify-content-between">
                          <div className='d-flex flex-row' style={{gap:'0.6vw'}}>
                            <button className="button-item" style={{backgroundColor:'white', color:'black'}}><TbPlayerPlayFilled /></button>
                            <button className="button-item"><TbPlus /></button>
                            <button className="button-item"><TbThumbUp /></button>
                          </div>
                          <button className="button-item" onClick={() => modalStatus(movie.id, movie.image, movie.title, movie.description, movie.date, movie.genre)}><TbChevronDown /></button>
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
                                genre === data.id ? <div key={i}>{data.name},</div> : ''
                              ))
                            )) :
                            movie.genre.map((genre:number, i:number) => (
                              genreTvData.data.map((data:any) => (
                                genre === data.id ? <div key={i}>{data.name},</div> : ''
                              ))
                            ))
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
          <span className='next-button' onClick={() => slideLeft()} onMouseOver={() => countSlide()}><RiArrowRightSLine /></span>
        </div>
      </div>
    </div>
    <MovieModal modalData = {modalData}/>
    </>
  )
}

export default TitleCard