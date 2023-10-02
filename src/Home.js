import React, { useState } from 'react'
import './Home.css'
import Product from "./Product"
import { Link } from "react-router-dom"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';



function Home() {
    const imageData = [
        {
            image: 'https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg'
        },
        {
            image: 'https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg'
        },
        {
            image: 'https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg'
        },
        {
            image: 'https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg'
        }
    ]
    const length = imageData.length;
    const [current, setCurrent] = useState(0)
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    // console.log(current);

    if (!Array.isArray(imageData) || imageData.length <= 0) {
        return null;
    }
    return (
        <div className="home">
            <div className="home_container">
                <Link to="/Favorite">
                    <FavoriteBorderIcon className="favItems" />
                </Link>
                < FaAngleLeft className="left-arrow" onClick={prevSlide} />
                <FaAngleRight className="right-arrow" onClick={nextSlide} />
                {imageData.map((slider, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<img className="home_image"
                                src={slider.image} alt="home image " />)}
                        </div>
                    )
                })}

            </div>

            <div className="home_row">
                <Product id='14567834' title="Christmas Adventure: Chasing the Yule Lads in Iceland (Professor Dragon)" price={29.99} image={'https://m.media-amazon.com/images/I/511qL6eVrML._SY342_.jpg'} rating={5} />
                <Product title="CyberpowerPC VR Gaming PC, Intel Core i7-12700F 2.1GHz, GeForce RTX 3060 12GB, 16GB DDR4, 1TB NVMe SSD, Black" image={'https://m.media-amazon.com/images/I/71FLsWWmE8L._SL1500_.jpg'} price={1087} rating={3} />

            </div>
            <div className="home_row">
                <Product id='14560834' title='Pokemon TCG: Random Cards from Every Series' image={'https://m.media-amazon.com/images/I/81r9FMdra4L._AC_SL1500_.jpg'} price={4.77} rating={4} />
                <Product id='14500834' title="Thing Hand Wednesday Addams Family" image="https://m.media-amazon.com/images/I/71ztCOhkFoL._AC_SL1500_.jpg" price={14.99} rating={3} />
                <Product id='14567890' title="MJigsaw Puzzles 1000 Pieces Puzzles" image="https://m.media-amazon.com/images/I/81XVVWjFjLL._AC_SL1500_.jpg" price={19.98} rating={5} />

            </div>
            <div className="home_row">
                <Product id='15567034' title='GHome Smart TV LED Backlight, 9.2ft WiFi Strip Light, Music Sync 16 Million RGB Color Changing Dimmable for 30-60in TV PC' price={11.98} rating={4} image={'https://m.media-amazon.com/images/I/713iwR5VZdL._SL1500_.jpg'} />

            </div>
        </div>
    )
}

export default Home



