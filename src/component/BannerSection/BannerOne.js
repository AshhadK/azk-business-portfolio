import { bannerOne } from "../../data/bannerSection";
import React, { useRef } from "react";
import SlideItemOne from "./SlideItemOne";
import "tiny-slider/dist/tiny-slider.css";
import TinySlider from "../TinySlider/TinySlider";

const settings = {
  container: ".my-slider-11",
  loop: true,
  lazyload: true,
  nav: false,
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: true,
  controlsContainer: ".tns-controls",
  gutter: 0,
  speed: 600, // Smooth transition
  rewind: false,
  startIndex: 0, // Start with the first slide
  edgePadding: 0,
  swipeAngle: false,
  preventScrollOnTouch: true,
  autoplayButton: false,
  autoplayButtonOutput: false,
  slideBy: "page", // Ensure one slide transition at a time
};


const { dayRange, timeRange, socials, banners } = bannerOne;

const BannerOne = () => {
  const listRef = useRef(null);

  return (
    <section className="banner-section banner-one">
      <div className="left-based-text">
        <div className="base-inner">
          <div className="hours">
            <ul className="clearfix">
              <li>
                <span>{dayRange}</span>
              </li>
              <li>
                <span>{timeRange}</span>
              </li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
              {socials.map(({ id, href, title }) => (
                <li key={id}>
                  <a href={href}>
                    <span>{title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="banner-carousel">

        <TinySlider options={settings} ref={listRef}>
          {banners.map((slide) => (
            <SlideItemOne key={slide.id} slide={slide} />
          ))}
        </TinySlider>
        <div className="tns-controls">
          <button className="tns-prev">
            <span className="icon fa fa-angle-left"></span>
          </button>
          <button className="tns-next">
            <span className="icon fa fa-angle-right"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerOne;
