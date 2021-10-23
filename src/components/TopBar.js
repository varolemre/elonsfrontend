import React, { Component, useEffect , useState} from 'react';
import {Link} from 'react-router-dom';
//import {Authentication} from '../shared/AuthenticationContext';
 import {useDispatch, useSelector} from 'react-redux';
 import {logoutSuccess} from '../redux/authActions';
 import Breakpoint, { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
import logo from '../assets/4shoot4.png';
import {getUser} from '../api/apiCalls';
import useOnclickOutside from "react-cool-onclickoutside";
import ScrollToTopBtn from '../components/components/ScrollToTop';
setDefaultBreakpoints([
      { xs: 0 },
      { l: 1199 },
      { xl: 1200 }
    ]);

    const ScrollTop = ({ children, location }) => {
      React.useEffect(() => window.scrollTo(0,0), [location])
      return children
    }

const TopBar = (props) => {
      const [openMenu, setOpenMenu] = React.useState(false);
    const [openMenu1, setOpenMenu1] = React.useState(false);
    const [openMenu2, setOpenMenu2] = React.useState(false);
    const [openMenu3, setOpenMenu3] = React.useState(false);
    const handleBtnClick = (): void => {
      setOpenMenu(!openMenu);
    };
    const handleBtnClick1 = (): void => {
      setOpenMenu1(!openMenu1);
    };
    const handleBtnClick2 = (): void => {
      setOpenMenu2(!openMenu2);
    };
    const handleBtnClick3 = (): void => {
      setOpenMenu3(!openMenu3);
    };
    const closeMenu = (): void => {
      setOpenMenu(false);
    };
    const closeMenu1 = (): void => {
      setOpenMenu1(false);
    };
    const closeMenu2 = (): void => {
      setOpenMenu2(false);
    };
    const closeMenu3 = (): void => {
      setOpenMenu3(false);
    };
    const ref = useOnclickOutside(() => {
      closeMenu();
    });
    const ref1 = useOnclickOutside(() => {
      closeMenu1();
    });
    const ref2 = useOnclickOutside(() => {
      closeMenu2();
    });
    const ref3 = useOnclickOutside(() => {
      closeMenu3();
    });

    const [showmenu, btn_icon] = useState(false);
    useEffect(() => {
      const header = document.getElementById("myHeader");
      const totop = document.getElementById("scroll-to-top");
      const sticky = header.offsetTop;
      const scrollCallBack = window.addEventListener("scroll", () => {
          btn_icon(false);
          if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
            totop.classList.add("show");
            
          } else {
            header.classList.remove("sticky");
            totop.classList.remove("show");
          } if (window.pageYOffset > sticky) {
            closeMenu();
          }
        });
        return () => {
          window.removeEventListener("scroll", scrollCallBack);
        };
      }, []);

      const {username, balance, isLoggedIn} = useSelector((store)=>{
            return {
                  isLoggedIn : store.isLoggedIn,
                  username:store.username,
                  balance:store.balance
            };
      });

      const dispatch = useDispatch();
      const onLogoutSuccess = () => {
            dispatch(logoutSuccess())
      }

      let links2 = (
        <div className='mainside'>
                <Link to="/wallet" className="btn-main">Sign Up</Link>
              </div>
      )
            
      let links = (
        <div className='menu'>
        <div className='navbar-item'>
            <div ref={ref}>
              <div className="dropdown-custom dropdown-toggle btn" 
                 onMouseEnter={handleBtnClick} onMouseLeave={closeMenu}>
                HOME
                <span className='lines'></span>
                {openMenu && (
                <div className='item-dropdown'>
                  <div className="dropdown" onClick={closeMenu}>
                    <Link to="/">Homepage</Link>
                    <Link to="/home1">Homepage 1</Link>
                    <Link to="/home2">Homepage 2</Link>
                  </div>
                </div>
              )}
              </div>
              
            </div>
        </div>
        <div className='navbar-item'>
        <Link to="/activity">
          Market
          <span className='lines'></span>
          </Link>
        </div>
        <div className='navbar-item'>
          <div ref={ref2}>
              <div className="dropdown-custom dropdown-toggle btn" 
                 onMouseEnter={handleBtnClick2} onMouseLeave={closeMenu2}>
                Pages
                <span className='lines'></span>
                {openMenu2 && (
                <div className='item-dropdown'>
                  <div className="dropdown" onClick={closeMenu2}>
                  <Link to="/Author">Author</Link>
              
                  <Link to="/loginTwo">login 2</Link>
                 
                  </div>
                </div>
              )}
              </div>
            </div>
        </div>
        <div className='navbar-item'>
          <Link to="/activity">
          PACKS
          <span className='lines'></span>
          </Link>
        </div>
        <div className='navbar-item'>
        <Link to="/login">
          LOGIN
          <span className='lines'></span>
          </Link>
        </div>
      </div>
      );

      if(isLoggedIn){
            links = (
                  <div className='menu'>
        <div className='navbar-item'>
        <Link to="/">
          HOME
          <span className='lines'></span>
          </Link>
        </div>
        <div className='navbar-item'>
        <Link to="/marketplace">
          MARKETPLACE
          <span className='lines'></span>
          </Link>
        </div>
        <div className='navbar-item'>
          <div ref={ref2}>
              <div className="dropdown-custom dropdown-toggle btn" 
                 onMouseEnter={handleBtnClick2} onMouseLeave={closeMenu2}>
                EXPLORE
                <span className='lines'></span>
                {openMenu2 && (
                <div className='item-dropdown'>
                  <div className="dropdown" onClick={closeMenu2}>
                  <Link to="/Author">Author</Link>
              
                  <Link to="/loginTwo">login 2</Link>
                 
                  </div>
                </div>
              )}
              </div>
            </div>
        </div>
        <div className='navbar-item'>
          <Link to="/activity">
          PACKS
          <span className='lines'></span>
          </Link>
        </div>

        <div className='navbar-item'>
          <div ref={ref3}>
              <div className="dropdown-custom dropdown-toggle btn" 
                 onMouseEnter={handleBtnClick3} onMouseLeave={closeMenu3}>
                PROFILE
                <span className='lines'></span>
                {openMenu3 && (
                <div className='item-dropdown'>
                  <div className="dropdown" onClick={closeMenu3}>
                  <Link to={`/user/${username}`}>Account</Link>
                  <Link to={`/wallet/${username}`}>Wallet</Link>
                  <Link to={"/"} onClick={onLogoutSuccess}>Logout</Link>
                 
                  </div>
                </div>
              )}
              </div>
            </div>
        </div>
       
     

       

        

      </div>
            );
            links2 = (
              <div className='mainside-2'>
              <Link to="/signup" className="btn-main-2"> WALLET</Link>
            </div>
            )
      }

      return (
            <header id="myHeader" className='navbar white'>
             
     <div className='container'>
     <button className="hohoho">Join Grand Collector's Club Now!</button>
       <div className='row w-100-nav'>
          <div className='logo px-0'>
              <div className='navbar-title navbar-item'>
                <Link to="/">
                {/* <img
                    src="./img/elons3.png"
                    className="img-fluid d-block"
                    alt="#"
                  />
                  <img
                    src="./img/elons3.png"
                    className="img-fluid d-3"
                    alt="#"
                  /> */}
                 <h2 style={{paddingTop: '5px'}}>elons</h2>
                </Link>
              </div>
          </div>

          <div className='search'>
            <input id="quick_search" className="xs-hide" name="quick_search" placeholder="Collection, item or drops" type="text" />
          </div>
                  
              <BreakpointProvider>
                <Breakpoint l down>
                  {showmenu && 
                  <div className='menu'>
                    <div className='navbar-item'>
                      <div ref={ref}>
                        <div className="dropdown-custom dropdown-toggle btn" 
                          onClick={handleBtnClick}
                          >
                          Home
                        </div>
                        {openMenu && (
                          <div className='item-dropdown'>
                            <div className="dropdown" onClick={closeMenu}>
                              <Link to="/" onClick={() => btn_icon(!showmenu)}>Homepage</Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='navbar-item'>
                      <div ref={ref1}>
                        <div className="dropdown-custom dropdown-toggle btn" 
                          onClick={handleBtnClick1}
                          >
                          Explore
                        </div>
                        {openMenu1 && (
                          <div className='item-dropdown'>
                            <div className="dropdown" onClick={closeMenu1}>
                              <Link to="/explore" onClick={() => btn_icon(!showmenu)}>Explore</Link>
                              <Link to="/explore2" onClick={() => btn_icon(!showmenu)}>Explore 2</Link>
                              <Link to="/rangking" onClick={() => btn_icon(!showmenu)}>Rangking</Link>
                              <Link to="/colection" onClick={() => btn_icon(!showmenu)}>Collection</Link>
                              <Link to="/ItemDetail" onClick={() => btn_icon(!showmenu)}>Items Details</Link>
                              <Link to="/Auction" onClick={() => btn_icon(!showmenu)}>Live Auction</Link>
                              <Link to="/helpcenter" onClick={() => btn_icon(!showmenu)}>Help Center</Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='navbar-item'>
                      <div ref={ref2}>
                        <div className="dropdown-custom dropdown-toggle btn" 
                          onClick={handleBtnClick2}
                          >
                          Pages
                        </div>
                        {openMenu2 && (
                          <div className='item-dropdown'>
                            <div className="dropdown" onClick={closeMenu2}>
          
                              <Link className="nav-link" to="/signup">  SIGN UP </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='navbar-item'>
                      <Link to="/activity" onClick={() => btn_icon(!showmenu)}>
                        Activity
                      </Link>
                    </div>
            
                  </div>
                  }
                </Breakpoint>

                <Breakpoint xl>
                  {links}
                </Breakpoint>
              </BreakpointProvider>

                  
      </div>

        <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
          <div className="menu-line white"></div>
          <div className="menu-line1 white"></div>
          <div className="menu-line2 white"></div>
        </button>

      </div>     
    </header>
      );
}

// const mapStateToProps = (store) => {
//       return {
//             isLoggedIn : store.isLoggedIn,
//             username:store.username
//       }
// };

// const mapDispatchToProps = dispatch => {
//       return {
//             onLogoutSuccess: () => {
//                   return dispatch(logoutSuccess());
//             }
//       }
// }

export default TopBar;

