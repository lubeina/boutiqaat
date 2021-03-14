import React from "react";
import Slider from "react-slick";
import "./beautySchool.css";
import { connect } from "react-redux";

function BeautySchool(props) {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div>
      <section className="featured-banners pb-3">
        <div className="row">
          <div className="widget-title col-md-12 pl-0 pr-0">
            <h3>BOUTIQAAT BEAUTY SCHOOL</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 pl-md-0 pr-md-0 block4">
            <Slider {...settings}>
              {props.boutiqaatBeautySchool[0].banners.map((banner) => (
                <img
                  key={banner.position}
                  src={banner.imageUrl}
                  alt={banner.label}
                />
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { boutiqaatBeautySchool } = state.reducer;

  return {
    boutiqaatBeautySchool,
  };
};

export default connect(mapStateToProps)(BeautySchool);
