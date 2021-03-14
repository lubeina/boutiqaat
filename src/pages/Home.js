import React, { Component, useEffect } from "react";
import BeautySchool from "../components/beautySchool/BeautySchool";
import BoutiqaatPicks from "../components/boutiqaatPicks/BoutiqaatPicks";
import Celebrities from "../components/celebrities/Celebrities";
import Slider from "../components/slider/slider";
import { connect } from "react-redux";
import { fetchBoutiqaat } from "../redux/actions/action";

class Home extends Component {
  componentDidMount() {
    this.props.fetchBoutiqaat();
  }
  render() {
    if (this.props.new_state.reducer.loading === true) {
      return <p>Loading</p>;
    } else {
      return (
        <React.Fragment>
          <Slider />
          <div className="container">
            <Celebrities />
            <BeautySchool />
            <BoutiqaatPicks />
          </div>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = (state) => {
  const new_state = state;

  return {
    new_state,
  };
};

export default connect(mapStateToProps, { fetchBoutiqaat })(Home);
