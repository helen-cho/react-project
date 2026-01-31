import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './Swiper.css';

const Swiper2 = () => {
    const images = [
        'https://picsum.photos/id/1/960/200',
        'https://picsum.photos/id/2/960/200',
        'https://picsum.photos/id/3/960/200',
        'https://picsum.photos/id/4/960/200',
        'https://picsum.photos/id/5/960/200',
    ]
    return (
        <div className='swiper-wrapper-custom'>
            <button className="prev-btn">〈</button>
            <button className="next-btn">〉</button>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={1}
                slidesPerView={1}
                slidesPerGroup={1}
                navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}>
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img src={src} alt='배경이미지' width='100%'/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
export default Swiper2