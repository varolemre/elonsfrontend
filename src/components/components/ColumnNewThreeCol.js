import React, { Component } from "react";
import Clock from "./Clock";
import { getMarketItemsSortByDate } from "../../api/apiCalls";
import gem from "../../assets/gem.png"
import { createGlobalStyle } from 'styled-components';
import { Link } from "react-router-dom";



export default class Responsive extends Component {

    state= {
        page: {
              content: [],
              size:3,
              number:0
        },
        sorted:undefined,
        market:[]
        }


      componentDidMount(){
        getMarketItemsSortByDate().then(response=> {
              this.setState({
                    market:response.data,
                    sorted:true
              })
        })

   
  }
   

  constructor(props) {
    super(props);
 
    this.onImgLoad = this.onImgLoad.bind(this);
    }

    // loadMore = () => {
    //     let nftState = this.state.nfts
    //     let start = nftState.length
    //     let end = nftState.length+4
    //     this.setState({
    //         nfts: [...nftState, ...(this.dummyData.slice(start, end))]
    //     });
    // }

    onImgLoad({target:img}) {
        let currentHeight = this.state.height;
        if(currentHeight < img.offsetHeight) {
            this.setState({
                height: img.offsetHeight
            })
        }
    }
    

 render() {
    //let { content:nfts } = this.state.page;
    let {market:nfts} = this.state;
  return (
    <div className='row'>
        {nfts.map( (market) => (
            <div key={market.nftName} className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4">
                <Link style={{ textDecoration: 'none' }} to={`/item/${market.marketId}`}>
                    <div className={market.qtype=="Special" ? "nft__item m-0" : market.qtype=="Rare" ? "nft__item2 m-0" : "nft__item2 m-0"}  >

                {market.qtype=="Special" &&  <div className="de_countdown">
                <span style={{ fontSize: 30, color: "#DE7FF3" }}>⋇</span>
                        </div>}

                        <div className="author_list_pp">
                        <span onClick={()=> window.open(market.authorLink, "_self")}>                                    
                            <img className="lazy" src="./img/author/author-6.jpg" alt=""/>
                            <i className="fa fa-check"></i>
                        </span>
                    </div>
                   
                    <div className="nft__item_wrap" style={{height: "`${this.state.height}px`"}}>
                        <span>
                            <img onLoad={this.onImgLoad} src={market.image} height="70px" className="lazy nft__item_preview" alt=""/>
                        </span>
                    </div>
                    <div className="nft__item_info">

                        <span onClick={()=> window.open("#", "_self")}>
                            <h4>{market.nftName}</h4>
                        </span>

                        <div className="nft__item_like">
                        <img src={gem} style={{width: '15px', height: '15px',paddingLeft: '2px'}}  /> <span>{market.amount}</span>
                        </div> 

                        <div className="nft__item_price">
                            {market.qtype} &#8202; #{market.serial}
                        </div>
 
                                                 
                    </div> 
                </div>
                </Link>
            </div>  
        ))}
        {/* { this.state.nfts.length !== this.dummyData.length &&
            <div className='col-lg-12'>
                <div className="spacer-single"></div>
                <span onClick={() => this.loadMore()} className="btn-main lead m-auto">Load More</span>
            </div>
        } */}
    </div>              
    );
}
}


