import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./celebrities.css";
import { connect } from "react-redux";

function Celebrities(props) {
  const n = 2;
  const celebrityList = [[], []]; //we create it, then we'll fill it

  const celebritiesPerLine = Math.ceil(props.celebrity[0].banners.length / 3);

  for (let line = 0; line < n; line++) {
    for (let i = 0; i < celebritiesPerLine; i++) {
      const value = props.celebrity[0].banners[i + line * celebritiesPerLine];
      console.log(line);
      celebrityList[line].push(value);
    }
  }

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="celebrityslider pb-3">
      <div className="row">
        <div className="widget-title col-md-12 p-l-0">
          <h3>CELEBRITIES</h3>
        </div>
      </div>
      <div className="row slider-row">
        <div className="col-md-9 col-sm-12 col-xs-12 pr-md-0 pl-md-0 celeb-column">
          {celebrityList.map((line) => {
            return (
              <Slider {...settings}>
                {line.map((banner) => (
                  <div className="slider-item" key={banner.position}>
                    <Link
                      to={{
                        pathname: `/celebrities/${banner.id}`,
                        state: banner,
                      }}
                    >
                      <a>
                        <img src={banner.imageUrl} alt={banner.label} />
                        <strong>{banner.label}</strong>
                      </a>
                    </Link>
                  </div>
                ))}
              </Slider>
            );
          })}
        </div>
      </div>
    </section>
  );
}
const mapStateToProps = (state) => {
  const { celebrity } = state.reducer;

  return {
    celebrity,
  };
};
export default connect(mapStateToProps)(Celebrities);
