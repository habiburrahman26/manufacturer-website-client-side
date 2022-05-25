import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay,Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import hp from '../../../assets/icon/hp-svgrepo-com.svg';
import assus from '../../../assets/icon/asus-logo.svg';
import accer from '../../../assets/icon/acer-2.svg';
import intel from '../../../assets/icon/intel-logo.svg';
import amd from '../../../assets/icon/amd-ryzen-1.svg';
import msi from '../../../assets/icon/msi-5.svg';
import samsung from '../../../assets/icon/samsung-logo-svgrepo-com.svg';
import sandisk from '../../../assets/icon/sandisk-logo-2007.svg';
import gigabyte from '../../../assets/icon/gigabyte-technology-logo-2008.svg';
import logitech from '../../../assets/icon/logitech-2-1.svg';
import adata from '../../../assets/icon/adata-1.svg';
import razer from '../../../assets/icon/razer-1.svg';
import walton from '../../../assets/icon/wtc-3.svg';
import pny from '../../../assets/icon/pny-technologies-logo.svg';
import dell from '../../../assets/icon/dell-2.svg';
import ScreenSize from '../../../hooks/ScreenSize';

const Brands = () => {
  const { minWidth } = ScreenSize();

  let slide = 8;
  if (minWidth <= 1200) {
    slide = 5;
  }
  if (minWidth <= 600) {
    slide = 3;
  }

  return (
    <div className="pb-24">
      <h2 className="text-lg lg:text-2xl uppercase font-semibold text-primary text-center pb-8">
        Our Awesome Brands
      </h2>
      <Swiper
        slidesPerView={slide}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination,Navigation]}
        className="mySwiper w-[300px] md:w-[900px] lg:w-[1200px] mx-auto px-3"
      >
        <SwiperSlide>
          <img className="w-16 h-16 lg:w-20 lg:h-20" src={hp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-16 h-16 lg:w-20 lg:h-20" src={accer} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-16 h-16 lg:w-20 lg:h-20" src={pny} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-16 h-16 lg:w-20 lg:h-20" src={samsung} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-16 h-16 lg:w-20 lg:h-20" src={sandisk} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-16 h-16 lg:w-20 lg:h-20" src={dell} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-16 h-16 lg:w-20 lg:h-20" src={adata} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-16 h-16 lg:w-20 lg:h-20" src={intel} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-16 h-16 lg:w-20 lg:h-20" src={amd} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-16 h-16 lg:w-20 lg:h-20" src={razer} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-16 h-16 lg:w-20 lg:h-20" src={walton} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-16 h-16 lg:w-20 lg:h-20" src={msi} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-16 h-16 lg:w-20 lg:h-20" src={assus} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-16 h-16 lg:w-20 lg:h-20" src={logitech} alt="" />
        </SwiperSlide>
        <SwiperSlide className="mb-16">
          <img className="w-16 h-16 lg:w-20 lg:h-20" src={gigabyte} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Brands;
