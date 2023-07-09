import { useRef, useEffect, useState } from 'react'
import '../styles/titlecard.css'
import '../styles/fonts.css'
import { RiArrowLeftSLine ,RiArrowRightSLine } from "react-icons/ri";
import api from '../util/api';


type movieInfo = {
  id: number,
  title: string,
  description: string,
  image: string,
  date: string,
  hover: boolean
}

const TitleCard = () => {



  const [slideWidth, setSlideWidth] = useState<any>();
  const [slidePos, setSlidePos] = useState<number>(0);
  const slideElement = useRef<HTMLDivElement>(null);
  const titleCard = useRef<HTMLDivElement>(null);

  //API BAŞLA
  const[movieList, setMovieList] = useState<movieInfo[]>([]);
  
  useEffect(() => {
      api.get('/discover/movie?api_key=4b6302b96ea953e5fff1cabe4032191e&include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=28')
    .then(function (response) {
      newList(response.data.results);
    })
    .catch(function (error) {
      console.log(error);
    })
    
  }, [])

  const newList = (e:any) => {
    setMovieList([]);
    const getList = e.slice(0,18)
    const updatedMovieList = getList.map((movie:any) => ( 
      {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      image: movie.backdrop_path,
      date: movie.release_date,
      hover: false
    }));
    setMovieList(prevMovieList => [...prevMovieList, ...updatedMovieList]);   
  }
// API SON

  useEffect(() => {
    setSlideWidth(slideElement.current?.offsetWidth);
  }, [])

  const slideLeft = () => {
    setSlidePos(slidePos - slideWidth);
    console.log(slidePos)
  }

  const slideRight = () => {
    if(slidePos !== 0) {
    setSlidePos(slidePos + slideWidth);
    console.log(slidePos)
    }
  }

  const titleId = (e:any) => {
    // console.log(e);
  }
  


  return (
    <>
    <div className='card-main'>
      <div className="head">
        <a href="#/" className='title'>Exciting US Supernatural TV Shows</a>
      </div>
      <div className="card-slide">
        <div className="slider">
          <span className='previous-button' onClick={() => slideRight()} ><RiArrowLeftSLine /></span>
          <div className="slider-row" style={{left:`${slidePos}px`}}  ref={slideElement}>
            {
              movieList.map((movie,i) => (
                <div className='card-wrapper' ref={titleCard} key={movie.id} onMouseEnter={() => titleId(movie.id)}>
                  <img src={`https://image.tmdb.org/t/p/w1280${movie.image}`} alt="Movie Banner"/>
                  <div className='card-hover'>
                    <div className='hover-image'>
                      <img src={`https://image.tmdb.org/t/p/w1280${movie.image}`} alt="Hover Banner"/>
                      <div className="info">
                        
                      </div>
                    </div>
                  </div>
                </div>
              ))
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