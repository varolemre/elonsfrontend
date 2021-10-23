import React from 'react';
import NftList from '../components/NftList';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
import Particle from '../components/components/Particle';
import SliderMainParticle from '../components/components/SliderMainParticle';
import ColumnNew from '../components/components/ColumnNew';
import SliderCarousel from '../components/components/SliderCarousel';
import CarouselCollection from '../components/components/CarouselCollection';
import { createGlobalStyle } from 'styled-components';
import Footer from '../components/components/footer';
import Authorlist from '../components/components/AuthorList';
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    backdrop-filter: blur(20px);
    transform: translateZ(0px);
    background-color:transparent;
    background: rgba(255, 255, 255, 0.7);
    border-bottom: 0;
    box-shadow: 0 4px 20px 0 rgba(10,10,10, .8);
  }
  header#myHeader.navbar .search #quick_search{
    color: #000;
    background: rgba(4, 4, 5, 0.07);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #000;
  }
  header#myHeader .dropdown-toggle::after{
    color: #000;
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: none !important;
  }
  header#myHeader .logo .d-3{
    display: block !important;
  }
  .jumbotron.no-bg{
    background: center bottom;
    background-size: cover;
    height: 70vh;
    padding: 90px 25px 1px 25px !important;
  }
  footer.footer-light .subfooter span img.d-1{
    display: none !important;
  }
  footer.footer-light .subfooter span img.d-3{
    display: inline-block !important;
  }
  .de_countdown{
    right: 10px;
    color: #fff;
  }
  .author_list_pp{
    margin-left:0;
  }
  footer.footer-light .subfooter{
    border-top: 1px solid rgba(255,255,255,.1);
  }
 
`;


const HomePage = () => {
      return (
            <div>
                  <GlobalStyles />
                  <section className="jumbotron no-bg" >
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
                <div className="spacer-single"></div>
                <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
                <h6 className=""><span className="text-uppercase color">LIMITED. FOREVER.</span></h6>
                </Reveal>
                <div className="spacer-10"></div>
                <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
                <h1 className="">Sell or collect limited digital items.</h1>
                </Reveal>
                <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={600} triggerOnce>
                <p className=" lead">
                Unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable
                </p>
                </Reveal>
                <div className="spacer-10"></div>
                <Reveal className='onStep' keyframes={fadeInUp} delay={800} duration={900} triggerOnce>
                <span onClick={()=> window.open("/#", "_self")} className="btn-main lead">Explore</span>
                <div className="mb-sm-30"></div>
                </Reveal>
                <div className="spacer-double"></div>
            </div>
             <div className='col-lg-6 px-0'>
               
               <SliderCarousel/>
             </div>
          </div>
        </div>
      </section>

      <section className="container" style={{marginTop: '-55px'}}>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className="cuthome">
              <h2 className='style-2'>New Items<span> 🔥
</span></h2>
              <h6 class="floatLeft">View In MarketPlace</h6>
              </div>
          </div>
        </div>
       <ColumnNew/>
      </div>
      </section>


      <section className='container no-top'>
        <div className='row'>
          <div className='col-lg-12'>
          <div className="cuthome">
              <h2 className='style-2'>COMING DROPS<span> &#8987;
</span></h2>
              <h6 class="floatLeft">EXPLORE DROPS</h6>
              </div>
          </div>
        </div>
        <div className='container no-top'>
          <div className='row'>
            <div className='col-lg-12 px-0'>
              <CarouselCollection/>
            </div>
          </div>
        </div>
      </section>
      <div className="spacer-double"></div>

      <section className='container'>
        <div className='row'>
          <div className='col-lg-12'>

          <div className="cuthome">
              <h2 className='style-2'>Top Collections<span> &#127895;
</span></h2>
              <h6 class="floatLeft">Explore Collections</h6>
              </div>

            <table className="table de-table table-rank">
              <thead>
                <tr>
                  <th scope="col">Collection</th>
                  <th scope="col">Volume</th>
                  <th scope="col">24h %</th>
                  <th scope="col">7d %</th>
                  <th scope="col">Floor Price</th>
                  <th scope="col">Owners</th>
                  <th scope="col">Assets</th>
                </tr>
                <tr></tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                  <div className="coll_list_pp">
                    <img className="lazy" src="./img/author/author-1.jpg" alt=""/>
                    <i className="fa fa-check"></i>
                  </div>  
                <p className="blackp">  Abstraction</p></th>
                  <td>15,225.87</td>
                  <td className="d-plus">+87.54%</td>
                  <td className="d-plus">+309.49%</td>
                  <td>5.9</td>
                  <td>2.8k</td>
                  <td>58.5k</td>
                </tr>
                <tr>
                  <th scope="row">
                  <div className="coll_list_pp">
                    <img className="lazy" src="./img/author/author-2.jpg" alt=""/>
                    <i className="fa fa-check"></i>
                  </div>  
                  <p className="blackp">  Sketchify</p></th>
                  <td>14,304.78</td>
                  <td className="d-plus">+35.11%</td>
                  <td className="d-plus">+239.83%</td>
                  <td>2.9</td>
                  <td>2.3k</td>
                  <td>28.4k</td>
                </tr>
                <tr>
                  <th scope="row">
                  <div className="coll_list_pp">
                    <img className="lazy" src="./img/author/author-3.jpg" alt=""/>
                    <i className="fa fa-check"></i>
                  </div>  
                  <p className="blackp">  Sketchify</p></th>
                  <td>13,705.58</td>
                  <td className="d-min">-33.56%</td>
                  <td className="d-plus">+307.97%</td>
                  <td>4.5</td>
                  <td>2.2k</td>
                  <td>48.8k</td>
                </tr>
               
             
              
        
              </tbody>
            </table>

           

          </div>
        </div>
      </section>
      <div className="spacer-double"></div>
      <section className='container no-top'>
        <div className='row'>
          <div className='col-lg-12'>
          <div className="cuthome">
              <h2 className='style-2'>Top Sellers<span> &#127894;
</span></h2>
              <h6 class="floatLeft">Sell Your Collections</h6>
              </div>
          </div>
          <div className="spacer-double"></div>
          <div className='col-lg-12'>
            <Authorlist/>
          </div>
        </div>
      </section>

      <Footer />
            </div>
      );
};

export default HomePage;