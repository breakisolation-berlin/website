import React, { Component } from 'react';
import jQuery from 'jquery/dist/jquery.js';
import Slider from './Slider/Slider';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import 'slick-carousel/slick/slick.js';

export default class Blog extends Component {

  componentDidMount() {
    jQuery(this.refs.carousel).slick({
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2500,
    });
  }

  render() {
    return (
        <div className="blog">
          <Slider />
          <div className="row">
            <div className="col-md-8">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Panel title</h3>
                </div>
                <div className="panel-body">
                  Panel content
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Panel title</h3>
                </div>
                <div className="panel-body">
                  Panel content
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Panel title</h3>
                </div>
                <div className="panel-body">
                  Panel content
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
