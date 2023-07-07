import React, { useRef, useEffect, useState } from 'react'
import '../styles/titlecard.css'
import '../styles/fonts.css'
import { RiArrowLeftSLine ,RiArrowRightSLine } from "react-icons/ri";
import movieImage from '../media/cobrahero.jpg'
import heroImage from '../media/heroimage.jpg'
import tvImage from '../media/tv.png'

type movie = {
  id: number,
  name: string,
  image: string
}

const TitleCard = () => {

  const movieList:movie[] = [
    {
      id: 1,
      name:'KEKO1',
      image:movieImage
    },
    {
      id: 2,
      name:'KEKO2',
      image:heroImage
    },
    {
      id: 3,
      name:'KEKO3',
      image:tvImage
    },
    {
      id: 4,
      name:'KEKO4',
      image:movieImage
    },
    {
      id: 5,
      name:'KEKO5',
      image:movieImage
    },
    {
      id: 6,
      name:'KEKO6',
      image:movieImage
    },
    {
      id: 7,
      name:'KEKO7',
      image:heroImage
    },
    {
      id: 8,
      name:'KEKO8',
      image:movieImage
    },
    {
      id: 9,
      name:'KEKO9',
      image:movieImage
    },
    {
      id: 10,
      name:'KEKO10',
      image:movieImage
    },
    {
      id: 11,
      name:'KEKO11',
      image:movieImage
    },
    {
      id: 12,
      name:'KEKO12',
      image:movieImage
    },
    {
      id: 13,
      name:'KEKO13',
      image:movieImage
    },
    {
      id: 14,
      name:'KEKO13',
      image:movieImage
    },
    {
      id: 15,
      name:'KEKO15',
      image:movieImage
    },
    {
      id: 16,
      name:'KEKO16',
      image:heroImage
    },
    {
      id: 17,
      name:'KEKO17',
      image:movieImage
    },
    {
      id: 18,
      name:'KEKO18',
      image:movieImage
    },
  ]

  const [slideWidth, setSlideWidth] = useState<any>();
  const [slidePos, setSlidePos] = useState<number>(0);
  const slideElement = useRef<HTMLDivElement>(null);
  const titleCard = useRef<HTMLDivElement>(null);
  
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
    console.log(e);
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
              movieList.map((movie) => (
                <div className='card-wrapper' ref={titleCard} key={movie.id} onMouseEnter={() => titleId(movie.id)}>
                  <img src={movie.image} alt="Movie Banner"/>
                  <div className='card-hover'>
                    <div className='hover-image'>
                      <img src={heroImage} alt="Movie Banner"/>
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