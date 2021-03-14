import React from "react";
import Slider from "react-slick";
import { connect } from "react-redux";

function slider(props) {
  let settings = {
    dots: true,
    infinite: true,
    autoPlaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => <ul style={{ bottom: 20 }}>{dots}</ul>,
  };

  if (slider) {
    return (
      <Slider {...settings}>
        {props.slider[0].banners.map((banner) => (
          <img key={banner.position} src={banner.imageUrl} alt={banner.label} />
        ))}
      </Slider>
    );
  }
}
const mapStateToProps = (state) => {
  const { slider } = state.reducer;

  return {
    slider,
  };
};

export default connect(mapStateToProps)(slider);
