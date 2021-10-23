import React, { Component } from 'react';
import {getNfts} from '../api/apiCalls';
import {getUser} from '../api/apiCalls';
import NftListItem from './NftListItem';
import {getMarketItems} from '../api/apiCalls';
import { getMarketItemsSortByDate } from "../api/apiCalls";

class NftList extends Component {

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

      // componentDidMount(){
      //       getMarketItems().then(response=> {
      //             this.setState({
      //                   page:response.data
      //             })
      //       })

       
      // }

      onClickNext = () => {
            getMarketItemsSortByDate().then(response=> {
                  this.setState({
                        market:response.data,
                        sorted:true
                  })
            })
      }

      render() {
            let { content:nfts } = this.state.page;
            let {market:nfts2} = this.state;
            const {sorted} = this.state;
            if(sorted==true){
                  nfts=nfts2;
            }
            return (
                  
              <div className="container">
                <h3 className="last-list">LAST LISTING</h3>
                <div className="flex">
                  {nfts.map(market => (
                    <NftListItem market={market} key={market.nftName+market.serial}>
                      {market.nftName}
                    </NftListItem>
                  ))}
              </div></div>
            );
          }
        }


export default NftList;
