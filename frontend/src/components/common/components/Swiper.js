import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const swiperStyles = {
  height: "30rem",
  display: "flex",
  textAlign: "center",
  margin: "3rem 0 5rem 0"
}

export const SwiperCom = () => {
  return (
    <Swiper
      style={ swiperStyles }
      modules={[Navigation, Pagination, Scrollbar]}
      loop={ true }
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
    >
    <SwiperSlide>
      <img 
        style={{ width: "100%", height: "90%" }}
        src="https://fundaciondelcorazon.com/images/stories/iStock-949190756.jpg" alt="Noticia Image" 
      />
    </SwiperSlide>
    <SwiperSlide>
      <img 
        style={{ width: "100%", height: "90%" }}
        src="https://www.shutterstock.com/image-photo/heat-thermometer-shows-temperature-hot-600nw-2472353719.jpg" alt="Noticia Image" 
      />
    </SwiperSlide>
    <SwiperSlide>
      <img 
        style={{ width: "100%", height: "90%" }}
        src="https://www.puromarketing.com/uploads/img/contents/2023/kiYbDK4qFmjt29zc56C3/upload/20230720122846.webp?rand=20230720122846" alt="Noticia Image" 
      />
    </SwiperSlide>
    <SwiperSlide>
      <img 
        style={{ width: "100%", height: "90%" }}
        src="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production%20Library/13-12-2023-WFP_Sudan.jpg/image1170x530cropped.jpg" alt="Noticia Image" 
      />
    </SwiperSlide>
    <SwiperSlide>
      <img 
        style={{ width: "100%", height: "90%" }}
        src="https://peopleenespanol.com/thmb/rj04toZFcG4q2akqqaYdaRsOa6g=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Juanes-a695de6676944fde874a997737f58864.png" alt="Noticia Image" 
      />
    </SwiperSlide>
    <SwiperSlide>
      <img 
        style={{ width: "100%", height: "90%" }}
        src="https://peopleenespanol.com/thmb/NHbd7cxzOrPvDYoK3whmqcwmGfA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Shakira-10eafb220ef54fb590492cf95bda0d81.jpg" alt="Noticia Image" 
      />
    </SwiperSlide>
  </Swiper>
  )
}
