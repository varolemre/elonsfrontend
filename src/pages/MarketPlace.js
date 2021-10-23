import React from 'react';
import ColumnNewThreeCol from '../components/components/ColumnNewThreeCol';
import Footer from '../components/components/footer';
import { createGlobalStyle } from 'styled-components';
import SliderCarousel from '../components/components/SliderCarousel';
import SliderCarousel2 from '../components/components/SliderCarousel2';
import Select from 'react-select'

const GlobalStyles = createGlobalStyle`
  .navbar {
    border-bottom: solid 1px rgba(255, 255, 255, .1) !important;
  }
  .spacer-double {
    width: 100%;
    height: 90px !important;
    display: block;
    clear: both;
}
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
`;

const customStyles = {
    option: (base, state) => ({
      ...base,
      background: "#fff",
      color: "#000",
      borderRadius: state.isFocused ? "0" : 0,
      "&:hover": {
        background: "#fff",
      },
    }),
    menu: base => ({
      ...base,
      background: "#fff !important",
      borderRadius: 0,
      color:'#000',
      marginTop: 0
    }),
    menuList: base => ({
      ...base,
      padding: 0,
      color:"#000",
    }),
    control: (base, state) => ({
        ...base,
        color:"#000",
        background: "#fff",
        // match with the menu
        borderRadius: state.isFocused ? "1px 1px 0 0" : 0,
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "#089FBA" : "#089FBA",
        // Removes weird border around container
        boxShadow: state.isFocused ? null : null,
        "&:hover": {
          // Overwrittes the different states of border
          borderColor: state.isFocused ? "#089FBA" : "#089FBA"
        }
      }),
  };

const options = [
    { value: 'All categories', label: 'All categories' },
    { value: 'Art', label: 'Art' },
    { value: 'Music', label: 'Music' },
    { value: 'Domain Names', label: 'Domain Names' }
  ]
  const options1 = [
    { value: 'Rarity', label: 'Rarity'  },
    { value: 'On Auction', label: 'On Auction' },
    { value: 'Has Offers', label: 'Has Offers' }
  ]
  const options2 = [
    { value: 'Sort By', label: 'Sort By' },
    { value: 'Single Items', label: 'Single Items' },
    { value: 'Bundles', label: 'Bundles' }
  ]
  


const explore= () => (
<div>
<GlobalStyles/>
  <section className='container'>
  <div className="spacer-double"></div>
  <section className="jumbotron no-bg no-bottom">
        <div className='container-fluid'>
          <div className='row'>
             <SliderCarousel2/>
          </div>
        </div>
      </section>
      <div className="row">
      <div className="col-md-3"></div>
        <div className="col-md-9">
      <div className='row'>
          <div className='col-lg-12'>
              <div className="items_filter">
          <h5 className="recentlyy">    Recently Added </h5><p  className="recentlyy2">(Showing 32 of 1692)</p>
                <div className='dropdownSelect two'><Select  className='select1' styles={customStyles} defaultValue={options1[0]} options={options1} /></div>
                <div className='dropdownSelect three'><Select  className='select1' styles={customStyles} defaultValue={options2[0]} options={options2} /></div>
           
            </div>
          </div>
        </div>
        </div>
        </div>

        <div className='row'>
        
          <div className='col-md-3'>

          <div className="item_filter_group">
              <h4>Select Categories</h4>
              <div className="de_form">
                  <div className="de_checkbox">
                      <input id="check_cat_1" name="check_cat_1" type="checkbox" value="check_cat_1"/>
                      <label htmlFor="check_cat_1">Art</label>
                  </div>

                  <div className="de_checkbox">
                      <input id="check_cat_2" name="check_cat_2" type="checkbox" value="check_cat_2"/>
                      <label htmlFor="check_cat_2">Music</label>
                  </div>

                  <div className="de_checkbox">
                      <input id="check_cat_3" name="check_cat_3" type="checkbox" value="check_cat_3"/>
                      <label htmlFor="check_cat_3">Domain Names</label>
                  </div>

                  <div className="de_checkbox">
                      <input id="check_cat_4" name="check_cat_4" type="checkbox" value="check_cat_4"/>
                      <label htmlFor="check_cat_4">Virtual World</label>
                  </div>

                  <div className="de_checkbox">
                      <input id="check_cat_5" name="check_cat_5" type="checkbox" value="check_cat_5"/>
                      <label htmlFor="check_cat_5">Trading Cards</label>
                  </div>

                  <div className="de_checkbox">
                      <input id="check_cat_6" name="check_cat_6" type="checkbox" value="check_cat_6"/>
                      <label htmlFor="check_cat_6">Collectibles</label>
                  </div>

                  <div className="de_checkbox">
                      <input id="check_cat_7" name="check_cat_7" type="checkbox" value="check_cat_7"/>
                      <label htmlFor="check_cat_7">Sports</label>
                  </div>

                  <div className="de_checkbox">
                      <input id="check_cat_8" name="check_cat_8" type="checkbox" value="check_cat_8"/>
                      <label htmlFor="check_cat_8">Utility</label>
                  </div>

              </div>
          </div>

          <div className="item_filter_group">
              <h4>Status</h4>
              <div className="de_form">
                  <div className="de_checkbox">
                      <input id="buy" name="buy" type="checkbox" value="buy"/>
                      <label htmlFor="buy">Buy Now</label>
                  </div>

                  <div className="de_checkbox">
                      <input id="onauction" name="onauction" type="checkbox" value="onauction"/>
                      <label htmlFor="onauction">On Auction</label>
                  </div>

                  <div className="de_checkbox">
                      <input id="offers" name="offers" type="checkbox" value="offers"/>
                      <label htmlFor="offers">has Offers</label>
                  </div>

              </div>
          </div>

          <div className="item_filter_group">
              <h4>Items Type</h4>
              <div className="de_form">
                  <div className="de_checkbox">
                      <input id="sitems" name="sitems" type="checkbox" value="sitems"/>
                      <label htmlFor="sitems">Single Items</label>
                  </div>

                  <div className="de_checkbox">
                      <input id="bundles" name="bundles" type="checkbox" value="bundles"/>
                      <label htmlFor="bundles">Bundles</label>
                  </div>

              </div>
          </div>

          <div className="item_filter_group">
              <h4>Collections</h4>
              <div className="de_form">
                  <div className="de_checkbox">
                      <input id="abstract" name="abstract" type="checkbox" value="abstract"/>
                      <label htmlFor="abstract">Abstraction</label>
                  </div>

                  <div className="de_checkbox">
                      <input id="paterns" name="paterns" type="checkbox" value="paterns"/>
                      <label htmlFor="paterns">Patternlicious</label>
                  </div>

                  <div className="de_checkbox">
                      <input id="skecth" name="skecth" type="checkbox" value="skecth"/>
                      <label htmlFor="skecth">Skecthify</label>
                  </div>

                  <div className="de_checkbox">
                      <input id="cartoon" name="cartoon" type="checkbox" value="cartoon"/>
                      <label htmlFor="cartoon">Cartoonism</label>
                  </div>

                  <div className="de_checkbox">
                      <input id="virtualand" name="virtualand" type="checkbox" value="virtualand"/>
                      <label htmlFor="virtualand">Virtuland</label>
                  </div>

                  <div className="de_checkbox">
                      <input id="pappercut" name="pappercut" type="checkbox" value="pappercut"/>
                      <label htmlFor="pappercut">Papercut</label>
                  </div>

              </div>
          </div>

          </div>

          <div className="col-md-9">
            <ColumnNewThreeCol/>
          </div>
        </div>
      </section>


  <Footer />
</div>

);
export default explore;