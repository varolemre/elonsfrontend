import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div {...props}></div>
    );

      
  }
}

export default class Responsive extends Component {

  render() {
    var settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "10px",
      slidesToShow: 1,
      speed: 500,
      rows: 2,
      slidesPerRow: 2,
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    };

    return (
          <Slider {...settings}>
            <CustomSlide className='itm' index={1}>
              <div className="nft_pic">                            
                  <span>
                      <span className="nft_pic_info">
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img src="./img/carousel/crs-5.jpg" className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={2}>
             <div className="nft_pic">                            
                  <span >
                      <span className="nft_pic_info">
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img src="./img/carousel/crs-5.jpg" className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>



            <CustomSlide className='itm' index={2}>
             <div className="nft_pic">                            
                  <span >
                      <span className="nft_pic_info">
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img src="./img/carousel/crs-5.jpg" className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>


            <CustomSlide className='itm' index={2}>
             <div className="nft_pic">                            
                  <span >
                      <span className="nft_pic_info">
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img src="./img/carousel/crs-2.jpg" className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={2}>
             <div className="nft_pic">                            
                  <span >
                      <span className="nft_pic_info">
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img src="./img/carousel/crs-4.jpg" className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={3}>
              <div className="nft_pic">                            
                  <span >
                      <span className="nft_pic_info">
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img src="./img/carousel/crs-3.jpg" className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={4}>
              <div className="nft_pic">                            
                  <span >
                      <span className="nft_pic_info">
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img src="./img/carousel/crs-4.jpg" className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={5}>
              <div className="nft_pic">                            
                  <span >
                      <span className="nft_pic_info">
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img src="./img/carousel/crs-5.jpg" className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={6}>
              <div className="nft_pic">                            
                  <span >
                      <span className="nft_pic_info">
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img src="./img/carousel/crs-4.jpg" className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={7}>
              <div className="nft_pic">                            
                  <span >
                      <span className="nft_pic_info">
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img src="./img/carousel/crs-4.jpg" className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={8}>
              <div className="nft_pic">                            
                  <span >
                      <span className="nft_pic_info">
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img src="./img/carousel/crs-4.jpg" className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={9}>
              <div className="nft_pic">                            
                  <span >
                      <span className="nft_pic_info">
                      </span>
                  </span>
                  <div className="nft_pic_wrap">
                      <img src="./img/carousel/crs-4.jpg" className="lazy img-fluid" alt=""/>
                  </div>
              </div>
            </CustomSlide>

          </Slider>
    );
  }
}
