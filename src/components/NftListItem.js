import React from 'react';
import {Link} from 'react-router-dom';
import gem from '../assets/gem.png';
const NftListItem = (props) => {
      const {market} = props;
      return (
            <div className="nft__item m-0">
           
          
            <div className="nft__item_wrap" style={{height: "50px"}}>
                <span>
                    <img src={market.image} className="lazy nft__item_preview" alt=""/>
                </span>
            </div>
            <div className="nft__item_info">
                <span onClick={()=> window.open("#", "_self")}>
                    <h4>{market.nftName}</h4>
                </span>
                <div className="nft__item_price">
                    {market.amount}<span>"BUY"</span>
                </div>
                <div className="nft__item_action">
                    <span onClick={()=> window.open("#", "_self")}>BUY</span>
                </div>
                                      
            </div> 
        </div>
            // <div className="card2">
            //       <img className="img-nft" alt={"pic"} src={market.image} />
            //       <div className="card-content">
            //             <div className="card-text">
            //                  <span className="leftp"> {market.nftName}</span>
            //                   <span className="rightp"> {market.amount}<span>&#8239;</span><span className="span-icon" ></span> </span>
            //                   </div>
                        
            //       </div>
            //       <span className="centerp">{market.qtype} #{market.serial}</span>
            // </div>
            
      );
};

export default NftListItem;

{/* <Link to={`/nft/${market.nftName}`} >
                        <img  alt={"pic"} src={market.image} />
                        {market.nftName}
                        </Link> */}