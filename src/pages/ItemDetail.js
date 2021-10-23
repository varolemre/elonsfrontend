import React, { useEffect, useState } from "react";
import Footer from '../components/components/footer';
import { createGlobalStyle } from 'styled-components';
import { useParams } from 'react-router-dom';
import { getMarketNft, getChangedValue } from "../api/apiCalls";
import gem from "../assets/gem.png"
import {
      FacebookShareButton,FacebookIcon,TwitterIcon,RedditIcon,TelegramIcon,
      RedditShareButton,
      TelegramShareButton,PocketShareButton,PocketIcon,
      TumblrShareButton,
      TwitterShareButton,
      WhatsappShareButton,
    } from "react-share";
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
`;


const Colection= function(props) {
      const {marketId} = useParams();
      const [nft,setNft] = useState({});
      const [notFound,setNotFound] = useState(false);
      const [nftCount,setNftCount] = useState();
      const [changed,setChanged] = useState(0);
      useEffect(()=>{
            window.scrollTo(0, 0);
            const loadNft = async ()=>{
              try{
                const response =  await getMarketNft(marketId)
                setNft(response.data);
                console.log(nft);
              }catch(error){
                setNotFound(true);
              }
           }
            loadNft();

          
          },[marketId])

          useEffect(()=>{
            const loadChanged = async ()=>{
              try{
                const responseC =  await getChangedValue(marketId)
                setChanged(responseC.data);
                console.log(responseC);
              }catch(error){
                setNotFound(true);
              }
           }
            loadChanged();

          
          },[marketId])

    



      const [openMenu, setOpenMenu] = React.useState(true);
      const [openMenu1, setOpenMenu1] = React.useState(false);
      const handleBtnClick = (): void => {
      setOpenMenu(!openMenu);
      setOpenMenu1(false);
      document.getElementById("Mainbtn").classList.add("active");
      document.getElementById("Mainbtn1").classList.remove("active");
      };
      const handleBtnClick1 = (): void => {
      setOpenMenu1(!openMenu1);
      setOpenMenu(false);
      document.getElementById("Mainbtn1").classList.add("active");
      document.getElementById("Mainbtn").classList.remove("active");
      };

      const faceShare = (
           <FacebookShareButton 
                url={"http://www.camperstribe.com"}
                quote={"CampersTribe - World is yours to explore"}
                hashtag="#camperstribe"
                className="social">
                 <FacebookIcon size={36} />
              </FacebookShareButton>
            )
      const twitShare = (
            <TwitterShareButton  url={"http://www.camperstribe.com"}
            quote={"CampersTribe - World is yours to explore"}
            hashtag="#camperstribe"
            className="social"><TwitterIcon size={36} /></TwitterShareButton>
      )
      const redditShare = (
            <RedditShareButton  url={"http://www.camperstribe.com"}
            quote={"CampersTribe - World is yours to explore"}
            hashtag="#camperstribe"
            className="social"><RedditIcon size={36} /></RedditShareButton>
      )
      const telShare = (
            <TelegramShareButton  url={"http://www.camperstribe.com"}
            quote={"CampersTribe - World is yours to explore"}
            hashtag="#camperstribe"
            className="social"><TelegramIcon size={36} /></TelegramShareButton>
      )
      const pokShare = (
            <PocketShareButton  url={"http://www.camperstribe.com"}
            quote={"CampersTribe - World is yours to explore"}
            hashtag="#camperstribe"
            className="social"><PocketIcon size={36} /></PocketShareButton>
      )

     

      return (
      <div>
      <GlobalStyles/>

  <section className='container'>
    <div className='row mt-md-5 pt-md-4'>
            <div className="spacer-double"></div>
    <div className="col-md-6 text-center">
                           <img src={nft.image} className="img-fluid2 img-rounded mb-sm-30" alt=""/>
                        <div className="row mt-3 no-gutters">  
                        <div className="col pl-0"> </div>
                        <div className="col pl-0">  </div>
                        <div className="col pl-0"> {faceShare} </div>
                        <div className="col pl-0"> {redditShare} </div>
                        <div className="col pl-0"> {telShare} </div>
                       <div className="col pl-0"> {pokShare} </div>
                       <div className="col m-0"> {twitShare} </div>
                       <div className="col ml-0">  </div>
                       <div className="col ml-0">  </div>
              
              </div>
                        </div>
                        <div className="col-md-6">
                            <div className="item_info">
                              
                                <h2>{nft.nftName}</h2>
                                <div className="item_info_counts">
                                    <div className="item_info_type"><i className="fa fa-image"></i>Art</div>
                                    <div className="item_info_views"><i className="fa fa-eye"></i>250</div>
                                    <div className="item_info_like"><i className="fa fa-heart"></i>18</div>
                                </div>
                                <p className="iteminfop">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                
                                <div className="spacer-10"></div>
                                <table class="table table-hover">
                              <thead>
                              <tr>
                                    <th scope="col">Variant</th>
                                    <th scope="col">Edition</th>
                                    <th scope="col">Total Circulation</th>
                                    <th scope="col">Floor Price</th>
                                    <th scope="col">3H Change</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                    <th scope="row">{nft.qtype}</th>
                                    <td>#{nft.serial}</td>
                                    <td>{nft.qtype} | {nft.totalEdition}</td>
                                    <td>{nft.floorPrice}</td>
                                   {changed>0 ? <td className="greentd">+%{changed}</td> : changed==0 ? <td>--%{changed}</td> :  <td className="redtd">-%{changed}</td> }
                              </tr>
                              </tbody>
                              </table>
                              <ul className="de_nav">
                                    
                              <li id='Mainbtn' className="active"><span onClick={handleBtnClick}>Price: {nft.amount}  <img src={gem} style={{width: '15px', height: '15px',paddingLeft: '2px',marginTop:'-2px'}}  /></span></li>
                                    <li id='Mainbtn' className="active"><span onClick={handleBtnClick}>BUY NOW</span></li>
                                </ul>
                                <div className="row">
                                <div className="col">
                               <button className="btn-main">
                                <span className="boldSpan">    {nft.totalNftSale} </span>for sale in the Market <i class="fa fa-shopping-cart"></i>
                              </button>
                              </div>
                              <div className="col">
                                <div className="item_author">                                    
                                    <div className="author_list_pp">
                                        <span>
                                            <img className="lazy" src="./img/author/author-1.jpg" alt=""/>
                                            <i className="fa fa-check"></i>
                                        </span>
                                    </div>                                    
                                    <div className="author_list_info">
                                        <span>@{nft.owner}</span>
                                    </div>
                                </div>
                              </div>
                              </div>
                              <div className="spacer-30"></div>
                              <div className="col">
                                    <div className="itemdetails">
                                          <div className="row mr-0 g-0">
                                          <div className="col-md-3 col-sm-6 col-6">
                                           <div className="infon">     <p className="vercent">Name</p></div>
                                           <div className="infon">     <p className="vercent">Edition</p></div>
                                           <div className="infon">     <p className="vercent">Rarity</p></div>
                                           <div className="infon">     <p className="vercent">List Price</p></div>
                                           <div className="infon">     <p className="vercent">Drop Date</p></div>
                                           <div className="infon">     <p className="vercent">Blockchain</p></div>
                                           <div className="infon">     <p className="vercent">Licence</p></div>
                                           <div className="infon">     <p className="vercent">Editions</p></div>
                                           
                                          </div>
                                         <div className="col-md-9 col-sm-6 col-6">
                                         <div className="infon-2">     <p className="vercent">{nft.nftName}</p></div>
                                         <div className="infon">     <p className="vercent">{nft.serial}</p></div>
                                         <div className="infon">     <p className="vercent">{nft.qtype}</p></div>
                                         <div className="infon">     <p className="vercent">{nft.listPrice} Gems</p></div>
                                         <div className="infon">     <p className="vercent">{nft.dropDate}</p></div>
                                         <div className="infon">     <p className="vercent">ERC-1155</p></div>
                                         <div className="infon">     <p className="vercent">{nft.licence}</p></div>
                                         <div className="infon">     <p className="vercent">2000</p></div>
                                                </div>
                                         
                                          </div>    
                                          </div>
                              </div>


                                <div className="spacer-40"></div>

                                <div className="de_tab">
    
                             
                                
   
                                
                            </div>
                                
                            </div>
                        </div>

    </div>
  </section>

  <Footer />
</div>
);
}
export default Colection;