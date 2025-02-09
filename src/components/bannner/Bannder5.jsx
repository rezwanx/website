import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
SwiperCore.use([Pagination, Autoplay, EffectFade]);
function Bannder5() {
  const slider = useMemo(()=>{
    return {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 3000,
      effect: 'fade',
      autoplay: {
          delay: 2500
      },
      pagination: {
          el: ".swiper-pagination1",
          clickable: true,
      },
      fadeEffect: {
          crossFade: true,
      },
    }
},[])
  return (
    <div className="banner-area-wrapper">
        <div className="company-name">
          <h2>Softconic</h2>
        </div>
        <div className="banner-area">
          <div className="social-area">
            <ul>
              <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
              <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
              <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
              <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
            </ul>
          </div>
          <div className="banner-title">
            <h1>Unlock your <br /> <span>Business</span> website.</h1>
          </div>
          <div className="banner-content">
            <div className="row">
              <div className="col-lg-5">
                <p>Integer purus odio, placerat nec rhoncus in, ullamcorper nec doloroei. aptent taciti sociosqu ad litora torquent per conubia nostra, persento  
                  Donec lacinia placerat felis non aliquam.</p>
                <div className="view-btn">
                  <Link legacyBehavior  href="/service">
                    <a className="primary-btn7">
                    <span className="circle2">
                      <svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                      </svg>
                    </span>
                    <span className="text">VIEW MORE</span>
                    </a>
                  </Link>
                </div>
                <div className="scroll-and-social-area">
                  <div className="scroll-down-area">
                    <a href="#home5-about-area">
                      <span />
                      Scroll Down to explore
                    </a>
                  </div>
                  <div className="swiper-pagination1 two " />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="banner-img-wrap">
                  <Swiper {...slider} className="swiper banner5-slider">
                    <div className="swiper-wrapper">
                      <SwiperSlide className="swiper-slide">
                        <div className="banner-img">
                          <img className="img-fluid" src="assets/img/home-5/h5-banner-img1.png" alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="banner-img">
                          <img className="img-fluid" src="assets/img/home-5/h5-banner-img2.png" alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="banner-img">
                          <img className="img-fluid" src="assets/img/home-5/h5-banner-img3.png" alt="" />
                        </div>
                      </SwiperSlide>
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-text-slider">
          <Marquee>  <h2 className="marquee_text"><img src="assets/img/home-5/star.svg" alt="" />We are Design Agency<img src="assets/img/home-5/star.svg" alt="" />Creative &amp; Clean Design<img src="assets/img/home-5/star.svg" alt="" />We Help To Achieve <img src="assets/img/home-5/star.svg" alt="" />We are Design Agency<img src="assets/img/home-5/star.svg" alt="" />Creative &amp; Clean Design<img src="assets/img/home-5/star.svg" alt="" />We Help To Achieve<img src="assets/img/home-5/star.svg" alt="" />We are Design Agency<img src="assets/img/home-5/star.svg" alt="" />Creative &amp; Clean Design<img src="assets/img/home-5/star.svg" alt="" />We Help To Achieve <img src="assets/img/home-5/star.svg" alt="" />We are Design Agency<img src="assets/img/home-5/star.svg" alt="" />Creative &amp; Clean Design<img src="assets/img/home-5/star.svg" alt="" />We Help To Achieve</h2></Marquee>
          </div>
        </div>
      </div>
  )
}

export default Bannder5
