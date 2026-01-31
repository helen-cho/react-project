import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './Swiper.css';
import { useEffect, useState } from "react";

const boxStyle = {
    border: '1px solid #DDDD',
    borderRadius: '5px'
}

const Swiper3 = () => {
    const [products, setProducts] = useState(null);

    const callAPI = async () => {
        const res = await fetch(`https://dummyjson.com/products?limit=24&skip=0`);
        const json = await res.json();
        setProducts(json.products);
    }

    useEffect(() => {
        callAPI();
    }, []);

    if (!products) return <h1 className='text-center my-5'>Loading...</h1>
    return (
        <div className='swiper-wrapper-custom'>
            <button className="prev-btn">〈</button>
            <button className="next-btn">〉</button>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={10}
                slidesPerView={2}
                slidesPerGroup={2}
                breakpoints={{
                    758:  { slidesPerView: 4, slidesPerGroup: 4 }, // width ≥ 768px (테블릿)
                    1024: { slidesPerView: 6, slidesPerGroup: 6 }, // width ≥ 1024px (PC)
                }}
                navigation={{ 
                    prevEl: ".prev-btn", nextEl: ".next-btn"
                }}
                loop={true}>
                { products.map(product =>
                    <SwiperSlide key={ product.id } style={boxStyle}>
                        <img src={ product.thumbnail} width='100%'/>
                        <div className="text-center px-2 text-truncate">
                            { product.id }. { product.title }
                        </div>
                        <div className="text-center mb-2">${product.price}</div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
}
export default Swiper3