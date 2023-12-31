import { useEffect,useState } from 'react'
import '../styles/browsehero.css';
import { TbPlayerPlayFilled, TbInfoCircle } from "react-icons/tb";
import { useSelector } from 'react-redux';
import { AppState } from '../store';
import MovieModal from './MovieModal';
import { modalProp } from '../types/propTypes';


type List = {
    id: number;
    title: string,
    description: string;
    image: string;
    date: string;
    media_type: string,
    genre: any,
    hover: boolean;
}

const HeroBrowse = () => {

   
      
//MODAL
const [modalData, setModalData] = useState<modalProp>({
    mediaType: '',
    showId: 0,
    showImage: '',
    showTitle: '',
    showDescription: '',
    showDate:'',
    genre:[],
    active: false
  });

const modalStatus = (id:number,image:string,title:string,description:string,date:string,genre:number[]) => {
    setModalData({
      mediaType:'movie', 
      showId: id, 
      showImage: image, 
      showTitle:title, 
      showDescription: description, 
      showDate: date, 
      genre: genre, 
      active: true});
  }
    
    //RANDOM NUMBER
    const [randomNumber, setRandomNumber] = useState<number>(0);
    useEffect(() => {
        const rndm = getRandomNumber();
        setRandomNumber(rndm);
    }, []);

    const getRandomNumber = () => {
        const min = 0;
        const max = 17;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    

    //RANDOM SHOW
    const[movieList, setMovieList] = useState<List[]>([]);
    const trendShowData = useSelector((state: AppState) => state.trendMovies);

    useEffect(() => {
        setMovieList(trendShowData.data);
    }, [trendShowData])

  return (
    <>
        <div className='billboard-main'>
            <div className="space">
            <div className="billboard">
                <div className="hero-container">
                    <div className="hero-info">
                        <div className="logo-text">
                            <div className="fake-logo">
                            {(movieList.length > 0 ? movieList[randomNumber].title: '')}
                            </div>
                            {/* <img src={cobrakai.logo} alt="billboardlogo" /> */}
                            <div  className='title'>
                               {/* {(movieList.length > 0 ? movieList[randomNumber].title: '')} */}
                            </div>
                            <div className='desc'>
                            {(movieList.length > 0 ? movieList[randomNumber].description: '')}
                            </div>
                        </div>
                        <div className="button-layer">
                            <button><TbPlayerPlayFilled className='icon' /> <div>Play</div> </button>
                            <span onClick={() => (movieList.length > 0 ? modalStatus(movieList[randomNumber].id, movieList[randomNumber].image, movieList[randomNumber].title, movieList[randomNumber].description, movieList[randomNumber].date, movieList[randomNumber].genre) : {})} ><button className='button-gray'><TbInfoCircle className='icon' /> <div>More Info</div> </button></span>
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={(movieList.length > 0 ? `https://image.tmdb.org/t/p/w1280${movieList[randomNumber].image}` : '')} alt="heroimage" />
                    <div className="image-shadow"></div>
                    <div className="hero-shadow"></div>
                </div>
            </div>
            </div>
        </div>
        <MovieModal modalData = {modalData}/>
    </>
  )
}

export default HeroBrowse