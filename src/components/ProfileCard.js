import React, { useContext, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {Authentication} from '../shared/AuthenticationContext';
import {useSelector} from 'react-redux';
import ColumnNew from '../components/components/ColumnNew';
import Input from './Input';
import { updateUser,getUserFollowerN, followUser, followCheck,getUserFollowinN ,getUserNfts,getUserNftsOnSale} from '../api/apiCalls';
import gem from "../assets/gem.png"
import { Spinner } from 'react-bootstrap';
import Loading from './components/Loading';

const ProfileCard = props => {
            const [updatedDisplayName,setUpdatedDisplayName]=useState();
            const [inEditMode,setInEditMode] = useState(false);
            const {username: loggedInUsername} = useSelector((store) => ({username:store.username}));
            const routeParams = useParams();
            const [follows,setFollows] = useState();
            const [followings,setFollowings] = useState();
            const [checkFollow,setCheckFollow]=useState();
            const [user,setUser] = useState({});
            const [userNfts,setUserNfts] = useState([]);
            const[height,setHeight] = useState();
            const[userOnsaleNfts,setUserOnSaleNfts]=useState([]);
            const[loading,setLoading]= useState(false);

          

            useEffect(()=>{
              setUser(props.user);
              setLoading(true)
            },[props.user])

           useEffect(()=>{
                
                  const responseCheck = followCheck(pathUsername).then((response) => {
                    console.log('Ben emre');
                        setCheckFollow(response.data);
                      });
                  setCheckFollow(responseCheck.data);

                  const responseFollow = getUserFollowerN(pathUsername).then((response) => {
                    console.log('Ben ali');
                        setFollows(response.data);
                  });
                  setFollows(responseFollow.data);

                  const responseFollowingN = getUserFollowinN().then((response) => {
                        setFollowings(response.data);
                  });
                  setFollowings(responseFollowingN.data);

                  const userNfts =  getUserNfts().then((response)=>{
                    setLoading(false);
                  setUserNfts(response.data);
                  })
                 setUserNfts(userNfts.data);

                 const userOnSaleNfts =  getUserNftsOnSale().then((response)=>{
                setUserOnSaleNfts(response.data);
                })
               setUserOnSaleNfts(userOnSaleNfts.data);
                 
               console.log('bende kemal');

           }, [])

          

            //const {user} = props;
            const {username,mail,wallet,image,displayName,balance} = user;
            useEffect(()=>{
                  if(!inEditMode){setUpdatedDisplayName(undefined);}
                  else {
                        setUpdatedDisplayName(displayName);
                  }
            
            },[inEditMode,displayName])

            const onClickSave = async ()=>{
                  const body ={
                        displayName:updatedDisplayName
                  };
                try{
               const response =   await  updateUser(username,body);
                  setInEditMode(false);
                  setUser(response.data);
                }catch(error){

                }
            }

            const pathUsername = routeParams.username;
            let message = "You Can not edit";
            if(pathUsername === loggedInUsername){
                  message = " You can edit"
            }

            const editable = pathUsername === loggedInUsername;
            const userC =pathUsername === loggedInUsername;

      const [openMenu, setOpenMenu] = React.useState(true);
      const [openMenu1, setOpenMenu1] = React.useState(false);
      const [openMenu2, setOpenMenu2] = React.useState(false);
      const handleBtnClick = (): void => {
        setOpenMenu(!openMenu);
        setOpenMenu1(false);
        setOpenMenu2(false);
        document.getElementById("Mainbtn").classList.add("active");
        document.getElementById("Mainbtn1").classList.remove("active");
        document.getElementById("Mainbtn2").classList.remove("active");
      };
      const handleBtnClick1 = (): void => {
        setOpenMenu1(!openMenu1);
        setOpenMenu2(false);
        setOpenMenu(false);
        document.getElementById("Mainbtn1").classList.add("active");
        document.getElementById("Mainbtn").classList.remove("active");
        document.getElementById("Mainbtn2").classList.remove("active");
      };
      const handleBtnClick2 = (): void => {
        setOpenMenu2(!openMenu2);
        setOpenMenu(false);
        setOpenMenu1(false);
        document.getElementById("Mainbtn2").classList.add("active");
        document.getElementById("Mainbtn").classList.remove("active");
        document.getElementById("Mainbtn1").classList.remove("active");
      };

    const  onImgLoad = ({target:img}) => {
        let currentHeight = height;
        if(currentHeight < img.offsetHeight) {
            this.setState({
                height: img.offsetHeight
            })
        }
    }

    const filtered = userNfts?.filter(a => a.sellStatus==true);
    const nftSize = userNfts?.length;
    const nftSizeOnSale = userOnsaleNfts?.length;
    //let {userNfts:nfts} = this.state;
            return (
              
                 <div>
                       <section className='container no-bottom'>
                <div className='row'>
                  <div className='spacer-double'></div>
                  <div className="col-md-12">
                     <div className="d_profile de-flex">
                          <div className="de-flex-col">
                          
                              <div className="profile_avatar">
                                  <img src="./img/author_single/author_thumbnail.jpg" alt=""/>
                                  <i className="fa fa-check"></i>
                                  <div className="profile_name">
                                      <h4>
                                          {!inEditMode && 
                                          (<>{displayName ? displayName : <Spinner animation="border" variant="info" size="sm" animation="border" role="status">
                                          <span className="visually-hidden">Loading...</span>
                                        </Spinner>} &#8196; 
                                          {editable && <button id="btn_copy" onClick={()=>setInEditMode(true)} style={{marginTop: '4px'}} title="Copy Text">Edit</button>} </>)     } 
                                          {inEditMode && (
                                               <>
                                                <input defaultValue={displayName} onChange={(event)=>{setUpdatedDisplayName(event.target.value)}}   label="Change Display Name" />
                                                <div>
                                                <button className="btn_copy-2" title="Copy Text" onClick={()=>{setInEditMode(false)}}>Cancel</button>&#8196; 
                                                <button  className="btn_copy-2" onClick={onClickSave} title="Copy Text">Save</button>
                                                      </div>
                                              </>
                                          )}                              
                                          <span className="profile_username">{username ? username : <Spinner animation="border" variant="info" size="sm" animation="border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </Spinner> }</span> 
                                          <span id="wallet" className="profile_wallet">{wallet}</span>
                                          <button id="btn_copy" title="Copy Text">Copy</button>
                                          
                                      </h4>
                                  </div>
                              </div>
                          </div>
                          <div className="profile_follow de-flex">
                              <div className="de-flex-col">
                                  <div className="profile_follower">{follows ? follows : <Spinner animation="border" variant="info" size="sm" animation="border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </Spinner>} followers</div>
                              </div>
                             {!userC && 
                             <>
                             <div className="de-flex-col">
                                  {checkFollow && <span className="btn-main" onClick={followUser(username)}>Follow</span>}
                              </div>
                              <div className="de-flex-col">
                                  {!checkFollow && <span className="btn-main-follow" onClick={followUser(username)}>Followed</span>}
                              </div></>}
                              {userC && <div className="de-flex-col">
                                  <div className="profile_follower">{followings ? followings :<Spinner animation="border" variant="info" size="sm" animation="border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </Spinner> } following</div>
                              </div>}
                          </div>
            
                      </div>
                  </div>
                </div>
              </section>
            
              <section className='container no-top'>
                    <div className='row'>
                      <div className='col-lg-12'>
                          <div className="items_filter">
                            <ul className="de_nav text-left">
                                <li id='Mainbtn' className="active"><span onClick={handleBtnClick}>Your Nft's ({nftSize})</span></li>
                                <li id='Mainbtn1' className=""><span onClick={handleBtnClick1}>On Sale ({nftSizeOnSale})</span></li>
                                <li id='Mainbtn2' className=""><span onClick={handleBtnClick2}>Showroom</span></li>
                            </ul>
                        </div>
                      </div>
                    </div>
                  {openMenu && editable && (  
                    <div id='zero1' className='onStep fadeIn'>


                      <div className='row'>
        {userNfts?.map( (nft) => (
            <div key={nft.id} className="d-item col-lg-2 col-md-6 col-sm-6 col-xs-12 mb-4">
              { <div className={nft.qtype=="Special" ? "nft__item m-0" : nft.qtype=="Rare" ? "nft__item2 m-0" : "nft__item3 m-0"}  >
                
                   
                    <div className="nft__item_wrap" style={{height: "`${this.state.height}px`"}}>
                        <span>
                            <img onLoad={onImgLoad} src={nft.image} height="70px" className="lazy nft__item_preview" alt=""/>
                        </span>
                    </div>
                    <div className="nft__item_info">

                        <span onClick={()=> window.open("#", "_self")}>
                            <h4>{nft.name}</h4>
                        </span>

                        <div className="nft__item_like">
                        <span>{nft.amount}</span>
                        </div> 

                        <div className="nft__item_price">
                            {nft.qtype} &#8202; #{nft.serial}
                        </div>
 
                                                 
                    </div> 
                </div>}
            </div>  
        ))}
      
    </div>  

                     
                    </div>
                  )}
                  {openMenu1 && ( 
                    <div id='zero2' className='onStep fadeIn'>
                          <div className='row'>
        {userOnsaleNfts?.map( (nft) => (
            <div key={nft.id} className="d-item col-lg-2 col-md-6 col-sm-6 col-xs-12 mb-4">
                <div className={nft.nft.qtype=="Special" ? "nft__item m-0" : nft.qtype=="Rare" ? "nft__item2 m-0" : "nft__item3 m-0"}  >
                
                   
                    <div className="nft__item_wrap" style={{height: "`${this.state.height}px`"}}>
                        <span>
                            <img onLoad={onImgLoad} src={nft.nft.image} height="70px" className="lazy nft__item_preview" alt=""/>
                        </span>
                    </div>
                    <div className="nft__item_info">

                        <span onClick={()=> window.open("#", "_self")}>
                            <h4>{nft.nft.name}</h4>
                        </span>

                        <div className="nft__item_like">
                        <img src={gem} style={{width: '15px', height: '15px',paddingLeft: '2px'}}  /> <span>{nft.amount}</span>
                        </div> 

                        <div className="nft__item_price">
                            {nft.nft.qtype} &#8202; #{nft.serial}
                        </div>
 
                                                 
                    </div> 
                </div>
            </div>  
        ))}
      
    </div>  

                    </div>
                  )}
                  {openMenu2 && ( 
                    <div id='zero3' className='onStep fadeIn'>
                     <ColumnNew/>
                    </div>
                  )}
                  </section>
                 </div>
            
            )
            
           
                                  
};




export default ProfileCard;
