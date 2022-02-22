import { useLocation } from 'react-router'
import { ButtonLight } from '../buttonLight/ButtonLight'
import CardItem from '../cardItem/CardItem'
import { ClothesHeader } from '../clothes-header/ClothesHeader'
import './Clothes.css'
import loading from '../../assets/static/Square-Loading.gif'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Navigation } from "swiper"
import "swiper/css/grid"

const Clothes = ({ category, products }) => {

    const url = useLocation().pathname
    let elem = null
    let loader
    let styles = { marginTop: 96 }

    url === '/' ? elem = <ClothesHeader category={category} /> : styles = { marginTop: 0 }
    url === '/'
        ? loader = <ButtonLight text='See all' size={'100%'} />
        : loader = <div className='clothes__loader'><img src={loading} alt="loading..." /></div>

    return (<div className="container">
        <section className='clothes'
            style={styles}
            data-test-id={`clothes-${category}`}>

            {elem}

            <ul className='clothes__products'>
                <Swiper
                    modules={[Navigation, Grid]}
                    spaceBetween={30}
                    slidesPerView={4}
                    grid={{ rows: 2, fill: 'rows' }}
                    grabCursor={true}
                    navigation={{
                        nextEl: '.arrow-right',
                        prevEl: '.arroe-left',
                    }}
                >
                    {products.map(item => (<SwiperSlide key={`${item.id}-${item.category}`}>
                        <li
                            key={`${item.id}-${item.category}`}
                        >
                            <CardItem
                                key={`${item.id}-${item.category}`}
                                item={item}
                            />
                        </li></SwiperSlide>))}

                </Swiper>
            </ul>

            {loader}

        </section></div>
    )
}

export default Clothes