/** @format */

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./work-page.css";

function WorkPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="wripper">
      <header>
        <div className="header">
          <div className="line-first"></div>
          <span className="name">ZXC CURSED</span>
          <div className="line-second"></div>
        </div>
        <span className="discription">Строительсво домов и бань</span>
      </header>
      <main>
        <section className="slider">
          <div>
            <Slider {...settings}>
              <div>
                <img src="/images/1.jpg" alt="" />
              </div>
              <div>
                <img src="/images/2.jpg" alt="" />
              </div>
              <div>
                <img src="/images/3.jpg" alt="" />
              </div>
              <div>
                <img src="/images/4.jpg" alt="" />
              </div>
              <div>
                <img src="/images/5.jpg" alt="" />
              </div>
              <div>
                <img src="/images/6.jpg" alt="" />
              </div>
              <div>
                <img src="/images/7.jpg" alt="" />
              </div>
              <div>
                <img src="/images/8.jpg" alt="" />
              </div>
              <div>
                <img src="/images/9.jpg" alt="" />
              </div>
              <div>
                <img src="/images/10.jpg" alt="" />
              </div>
              <div>
                <img src="/images/11.jpg" alt="" />
              </div>
              <div>
                <img src="/images/12.jpg" alt="" />
              </div>
              <div>
                <img src="/images/13.jpg" alt="" />
              </div>
              <div>
                <img src="/images/14.jpg" alt="" />
              </div>
              <div>
                <img src="/images/15.jpg" alt="" />
              </div>
              <div>
                <img src="/images/16.jpg" alt="" />
              </div>
              <div>
                <img src="/images/17.jpg" alt="" />
              </div>
              <div>
                <img src="/images/18.jpg" alt="" />
              </div>
              <div>
                <img src="/images/19.jpg" alt="" />
              </div>
              <div>
                <img src="/images/20.jpg" alt="" />
              </div>
              <div>
                <img src="/images/21.jpg" alt="" />
              </div>
              <div>
                <img src="/images/22.jpg" alt="" />
              </div>
              <div>
                <img src="/images/23.jpg" alt="" />
              </div>
            </Slider>
          </div>
        </section>
        <section className="services">
          <div>
            <span>Наши услуги</span>
          </div>
          <div>
            <ul>
              <li>Строительсво каркасных домов и бань</li>
              <li>Строительство брусовых домов и бань</li>
              <li>Строительсво под ключ домов и бань</li>
            </ul>
          </div>
        </section>
      </main>
      <footer>
        <a href="tel:+79999999999">+79999999999</a>
      </footer>
    </div>
  );
}
export default WorkPage;
