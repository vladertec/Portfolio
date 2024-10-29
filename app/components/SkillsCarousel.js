import { Swiper, SwiperSlide } from "swiper/react"

const SkillsCarousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      loop={true}
      autoplay={{ delay: 2000 }}
    >
      <SwiperSlide>
        <img src="/img/personal_photo.jpg" alt="Adobe" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/personal_photo.jpg" alt="Figma" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/personal_photo.jpg" alt="Blender" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/personal_photo.jpg" alt="Blender" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/personal_photo.jpg" alt="Blender" />
      </SwiperSlide>
    </Swiper>
  )
}

export default SkillsCarousel
