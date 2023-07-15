import React, { useState, useEffect, useRef } from 'react'
import '../styles/movieModal.css'
import '../styles/fonts.css'
import { TbPlayerPlayFilled, TbCheck, TbThumbUp, TbPlus } from "react-icons/tb";

import cobrahero from '../media/cobrahero.jpg'
import { modalProp } from '../types/propTypes';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store';
import { episodeList } from '../store/actions/showActions';

type PropTypes = {
    modalData: modalProp;
}

const MovieModal:React.FC<PropTypes> = ({modalData}) => {

const dispatch = useDispatch();

const [data, setData] = useState<modalProp>();
const [genreData, setGenreData] = useState<any>();
const similar = useSelector((state: AppState) => state.similar);
const [seasonSelect, setSeasonSelect] = useState<string>('Season 1');

const genreTvData = useSelector((state: AppState) => state.genreTv);
const genreMvData = useSelector((state: AppState) => state.genreMv);
const seasonsData = useSelector((state: AppState) => state.showInfo);
const episodesData = useSelector((state: AppState) => state.episodes);


const fixedDiv = useRef<HTMLDivElement>(null);

useEffect (() => {
    setData(modalData);

    //GENRE
    modalData.mediaType === 'tv' ? setGenreData(genreTvData) : setGenreData(genreMvData);
}, [modalData])


//MODAL CLOSE
const modalClose = () => {
    setData((prevState:any) => ({...prevState, active:false}));
    
    if (fixedDiv.current) {
        fixedDiv.current.scrollTop = 0;
      }
}

//SEASON SELECT
const selectSeason = (seasonNumber:number) => {
    setSeasonSelect(`Season ${seasonNumber + 1}`);
    const updatedSeason = seasonNumber + 1;
    dispatch(episodeList(data?.showId, updatedSeason) as any);
}

  return (
    <div ref={fixedDiv} className={`modal-wrapper ${data?.active ? 'modal-active' : ''}`}>
        <div className='modal-container'>
            <div className="wrap-container">
                <div className="modal-image-wrapper">
                    <img src={`https://image.tmdb.org/t/p/w1280${data?.showImage}`} alt="hero" />
                    <div className="title-wrapper">
                        <div className="title">{data?.showTitle}</div>
                        <div className="button-layer">
                            <button className='play'><TbPlayerPlayFilled className='icon' /> <div>Play</div> </button>
                            <button className="button-item"><TbCheck /></button>
                            <button className="button-item"><TbThumbUp /></button>
                        </div>
                    </div>
                <div className="shadow"></div>
                <div className="close"><TbPlus/></div>
                </div>

                <div className='info-wrapper'>
                    <div className="details-container">
                        <div className="details">
                            <div className='date'>"{data?.showDate}" 8 Seasons <span className='hd'>HD</span></div>
                            <div className='text'>{data?.showDescription}</div>
                        </div>
                        <div className="cast">
                            <div className="genre"> <span style={{ color:'#777'}}>Cast:</span> Andy Samberg, Andre Baraugher, Stephanie Betriz </div>
                            <div className="genre"> <span style={{ color:'#777'}}>Genres:</span> 
                            {
                             data?.genre.map((genre:number, i:number) => (
                                genreData.data.map((dat:any) => (
                                  genre === dat.id ? <span key={i}> {dat.name},</span> : ''
                                ))
                              )) 
                            }
                            </div>
                        </div>
                    </div>
                </div>
                {data?.mediaType === 'tv' && 
                <div className="episodes-wrapper">
                    <div className="head" style={{marginBottom:'8px'}}>
                        <div className="left">
                            <div className="text" style={{marginBottom: '16px', marginTop: '32px', fontSize: '24px'}}>Episodes</div>
                            <div className="text">Season 1:</div>
                        </div>
                        <div className="right">
                            <div className="select">
                                <div className="season">{seasonSelect}</div>
                                <div className="icon"><TbPlayerPlayFilled /></div>
                                <div className="select-list">
                                    {
                                        seasonsData.data.map((season:any, i:number) => (
                                            <div key={i} className='season-box' onClick={() => selectSeason(i)}>
                                            <div className="season-item">Season {i + 1}</div>
                                            <div className='season-item' style={{fontSize:'15px'}}>({season.episodes} Episodes)</div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="episode-container">
                        {
                        episodesData?.data.map((episode:any, i:number) => (
                        <div className="episode" key={i}>
                            <div className="index">{episode.episode_number}</div>
                            <img src={episode.still_path ? `https://image.tmdb.org/t/p/w1280${episode.still_path}` : cobrahero} alt="episodeimage" />
                            <div className="episode-info w-100">
                                <div className="title">{episode.name}</div>
                                <div className="desc">{episode.overview}</div>
                            </div>
                        </div>
                        ))
                        }
                    </div>
                </div>
                }
                <div className="similar-wrapper">
                    <div className="title">More Like This</div>
                    <div className="card-container">
                        {
                            similar.data.map((data:any, i:number) => (
                            <div className="similar-card" key={i}>
                                <img src={data.backdrop_path ? `https://image.tmdb.org/t/p/w1280${data.backdrop_path}` : cobrahero} alt="similarimage" />
                                
                                <div className="info-box">
                                    <div className="title">{data.name}</div>
                                    <div className="desc">{data.overview}</div>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className="back-close" onClick={() => modalClose()}></div>
    </div>
  )
}

export default MovieModal;