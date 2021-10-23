import React, { useEffect, useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import ColumnNew from '../components/components/ColumnNew';
import { createGlobalStyle } from 'styled-components';
import banner from '../assets/banner.png'
import { getUser } from '../api/apiCalls';
import { useParams } from 'react-router-dom';
import { useApiProgress } from '../shared/ApiProgress';
import Footer from '../components/components/footer';
import Loading from '../components/components/Loading';

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

  section{
        padding:50px;
  }

  navbar{
      background-image: url("../assets/banner.png'");
  }
`;

const UserPage = (props) => {
      const[user,setUser] = useState({}); 
      const[notFound,setNotFound] = useState(false);
      const {username} = useParams();
      const [isLoading, setIsLoading] = useState(true);
      const pendingApiCall = useApiProgress('/users/get'+username);

      useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      })

      useEffect(() => {
        setNotFound(false);
      }, [user]);

      useEffect(()=>{
        const loadUser = async ()=>{
          try{
            const response =  await getUser(username)
            setUser(response.data);
          }catch(error){
            setNotFound(true);
          }
       }
        loadUser();
      },[username])

     

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

      if(pendingApiCall){
        return (
          <div className="d-flex justify-content-center">
          <div className="spinner-border text-black-50">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        )
      }

      if (notFound) {
        return (
          <div className="container">
            <div className="alert alert-danger text-center">
              <div>
                <i className="material-icons" style={{ fontSize: '48px' }}>
                  error
                </i>
              </div>
            User Not Fount
            </div>
          </div>
        );
      }

      return (
            <div>
            <GlobalStyles/>
              
              {isLoading ? <Loading /> :<> <ProfileCard user={user} />
                  <Footer /></>}
            </div>
            
      );
};

export default UserPage;