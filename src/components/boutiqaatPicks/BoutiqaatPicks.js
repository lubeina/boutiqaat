import React, { Component } from "react";
import "./boutiqaatPicks.css";
import Slider from "react-slick";
import { connect } from "react-redux";

class BoutiqaatPicks extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: false,
          },
        },
      ],
    };
    return (
      <section className="boutiqaat-picks product-slider-blocks pb-3">
        <div className="row">
          <div className="widget-title col-md-12 p-l-0 pr-0">
            <h3>BOUTIQAAT PICKS</h3>

            <div className="slick-nav">
              <a className="view-link">View All</a>
              <button className="slick-prev" onClick={this.previous}>
                <span>Previous</span>
              </button>
              <button className="slick-next" onClick={this.next}>
                <span>Next</span>
              </button>
            </div>
          </div>
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {this.props.boutiqaatPicks[0].banners.map((banner) => (
              <div
                className="slick-slide slick-active slick-current"
                aria-hidden="false"
                style={{ outline: "none", width: "244px" }}
                key={banner.position}
              >
                <div>
                  <div className="product-item-details slider-item">
                    <div className="product-image-wrapper">
                      <a className="product-image">
                        <img
                          src={banner.imageUrl}
                          alt="Intelligent Visual Blackhead Remover - Pink"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="product-name">
                      <span className="brand-name">
                        <strong>{banner.brandName}</strong>
                      </span>
                      <h2 title="Intelligent Visual Blackhead Remover - Pink">
                        <a>{banner.label}</a>
                      </h2>
                    </div>

                    {banner.discountPercent > 0 ? (
                      <div className="price-box discount">
                        <span className="special-price">
                          KWD{banner.specialPrice}
                        </span>
                        <span className="regular-price">KWD{banner.mrp}</span>
                        <span className="discountpercent tag">
                          {banner.discountPercent}%
                        </span>
                      </div>
                    ) : (
                      <div className="price-box">
                        <span className="regular-price">KWD{banner.mrp}</span>
                      </div>
                    )}
                    <div className="product-item-actions">
                      <button className="action tocart primary">
                        Add to Cart
                      </button>
                      <a
                        className="action towishlist"
                        data-clicked="0"
                        title="Wish List"
                      >
                        <span>
                          <i className="fa fa-heart-o" aria-hidden="true"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  const { boutiqaatPicks } = state.reducer;

  return {
    boutiqaatPicks,
  };
};
export default connect(mapStateToProps)(BoutiqaatPicks);
