import React, { useEffect, useState } from "react";
import Footer from '../components/components/footer';
import { createGlobalStyle } from 'styled-components';
import { useParams } from 'react-router-dom';
import { getMarketNft, getNftByTitle } from "../api/apiCalls";
import gem from "../assets/gem.png"
import { Link } from "react-router-dom";
import SliderCarousel3 from '../components/components/SliderCarousel3';

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


const CollectionMain = function(props)  {
      const [page, setPage] = useState({
            content: [],
            size: 3,
            number: 0
          });
      const {nftName} = useParams();
      const [nft,setNft] = useState({});
      const [notFound,setNotFound] = useState(false);
      const[height,setHeight] = useState();

      useEffect(()=>{
            window.scrollTo(0, 0);
            const loadNft = async ()=>{
              try{
                const response =  await getNftByTitle(nftName,1)
                setPage(response.data);
                console.log(nft);
              }catch(error){
                setNotFound(true);
              }
           }
            loadNft();

          
          },[nftName])

          const  onImgLoad = ({target:img}) => {
            let currentHeight = height;
            if(currentHeight < img.offsetHeight) {
                this.setState({
                    height: img.offsetHeight
                })
            }
        }

          const { content: market, last, first } = page;

      return(
            <div>
            <GlobalStyles/>
      <section className='container'>
            
            <div className="spacer-double"></div>
            <section className="jumbotron no-bg no-bottom">
                  <div className='container-fluid'>
                  <div className='row'>
                        <div className="col-md-10"><div className="iconu">
               <i class="fas fa-chevron-left"></i><span className="littlep"> BACK</span></div></div>  <div className="col-md-2">    <h2> {nftName}</h2></div>
                       <div className="cizgi"></div>
                       <p className="baslikcenter">Lorem Ipsum is simply dummy text of the printing and typesetting industry..</p>
                  </div>
                  </div>
                  </section>
                  <div className="spacer-double"></div>

      <div className='row'>
            <div className="col-md-3">
           

                  <div className="col-sol">
                        <div className="col-sol-info">
                              
                      <div className="col-sol-bor">  <h5 className="col-sol-h">Collection Information</h5></div>
                        <table className="col-sol-table">
  <tr className="col-sol-tr"><td className="col-sol-td">Name: </td> <td className="col-sol-td2">  {nftName}  </td></tr>
  <tr className="col-sol-tr"><td className="col-sol-td">Category: </td> <td className="col-sol-td2">  Art  </td></tr>
  <tr className="col-sol-tr"><td className="col-sol-td">T.O. Edition: </td> <td className="col-sol-td2">  2.000  </td></tr>
  <tr className="col-sol-tr"><td className="col-sol-td">Volume: </td> <td className="col-sol-td2">  42K Gems  </td></tr>
  <tr className="col-sol-tr"><td className="col-sol-td">Licence: </td> <td className="col-sol-td2">  Armor W.  </td></tr>
  <tr className="col-sol-tr"><td className="col-sol-td">Year: </td> <td className="col-sol-td2">  2013  </td></tr>
  <tr className="col-sol-tr"><td className="col-sol-td">List Price: </td> <td className="col-sol-td2">  7 Gems  </td></tr>
  <tr className="col-sol-tr"><td className="col-sol-td">Todays Sale: </td> <td className="col-sol-td2">  86  </td></tr>
  <tr className="col-sol-tr"><td className="col-sol-td">Drop Date: </td> <td className="col-sol-td2"> 10 Oct 2021  </td></tr>

</table>
</div>
                        </div>
            </div>
            <div className="col-md-9">
                  <div className="row">
        {market?.map( (nfts) => (
            <div key={nfts.nftName} className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4">
                <Link style={{ textDecoration: 'none' }} to={`/item/${nfts.nftsId}`}>
                    <div className={nfts.qtype=="Special" ? "nft__item m-0" : nfts.qtype=="Rare" ? "nft__item2 m-0" : "nft__item2 m-0"}  >

                {nfts.qtype=="Special" &&  <div className="de_countdown">
                <span style={{ fontSize: 30, color: "#DE7FF3" }}>⋇</span>
                        </div>}

                        <div className="author_list_pp">
                        <span onClick={()=> window.open(nfts.authorLink, "_self")}>                                    
                            <img className="lazy" src="./img/author/author-6.jpg" alt=""/>
                            <i className="fa fa-check"></i>
                        </span>
                    </div>
                   
                    <div className="nft__item_wrap" style={{height: "`${this.state.height}px`"}}>
                        <span>
                            <img onLoad={onImgLoad} src={nfts.image} height="70px" className="lazy nft__item_preview" alt=""/>
                        </span>
                    </div>
                    <div className="nft__item_info">

                        <span onClick={()=> window.open("#", "_self")}>
                            <h4>{nfts.nftName}</h4>
                        </span>

                        <div className="nft__item_like">
                        <img src={gem} style={{width: '15px', height: '15px',paddingLeft: '2px'}}  /> <span>{nfts.amount}</span>
                        </div> 

                        <div className="nft__item_price">
                            {nfts.qtype} &#8202; #{nfts.serial}
                        </div>
 
                                                 
                    </div> 
                </div>
                </Link>
            </div> 
        ))}</div> </div>
        {/* { this.state.nfts.length !== this.dummyData.length &&
            <div className='col-lg-12'>
                <div className="spacer-single"></div>
                <span onClick={() => this.loadMore()} className="btn-main lead m-auto">Load More</span>
            </div>
        } */}
    </div>  
      

        </section>

<Footer />
      </div>
      )

}
      

export default CollectionMain;