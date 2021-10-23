import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import {login} from "../api/apiCalls";
import axios from "axios";
import ButtonWithProgress from "../components/ButtonWithProgress";
import { useApiProgress } from "../shared/ApiProgress";
import { useDispatch } from 'react-redux';
import {loginHandler, loginSuccess} from '../redux/authActions';
import authReducer from "../redux/authReducer";
import { createGlobalStyle } from 'styled-components';
import Footer from '../components/components/footer';
//import {Authentication} from "../shared/AuthenticationContext";

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    
  }
  .box-login p{
    color: #a2a2a2 !important;
  }
  .box-login{
    border-radius: 3px;
    padding: 40px 50px;
  }
`;

const LoginPage = (props) => {
      //static contextType = Authentication;

      // state={
      //       isLoggedIn:true,
      //       mail:null,
      //       password:null,
      //       error:null,
      //       pendingApiCall:false,
      // };

      const [username,setUsername] = useState();
      const [password,setPassword] = useState();
      const [error,setError] = useState();
      const dispatch = useDispatch();

      useEffect(()=> {
            setError(undefined);
      }, [username,password])
      
      // const onChange = event => {
      //       const {name,value} = event.target;
      //       // this.setState({
      //       //       [name]:value,
      //       //       error:null
      //       // });
      // };

      const onClickLogin = async event => {
            event.preventDefault();
            //const {username,password}=this.state;
            const onLoginSuccess = () => {};
            const creds= {
                  username,
                  password
            };
            
            const {history} = props;
            const {push}= history;
            // this.setState({
            //       error:null
            // })

            setError(undefined);

            try{
                await  dispatch(loginHandler(creds))

                  push('/');
            }catch(apiError){
                  setError(apiError.response.data.message);
                  //  this.setState({
                  //        error:apiError.response.data.message
                  //  })
            }
            
      }
      const pendingApiCall = useApiProgress('/auth');

      const buttonEnabled = username && password;
      return(
            <div>
            <GlobalStyles/>
            <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/6.jpg'})`}}>
            <div className='mainbreadcumb'>
              <div className='container'>
                <div className='row align-items-center px-0'>
                  <div className="col-lg-4 offset-lg-4 m-auto px-0">
                    <div className="box-login">
                      <h3 className="mb10">Sign In</h3>
                      <p>Login using an existing account or create a new account <span>here</span>.</p>
                      <form name="contactForm" id='contact_form' className="form-border" action='#'>
        
                          <div className="field-set">
                          <Input name="username" label="Username" onChange={(event)=> setUsername(event.target.value)} />
                          </div>
                        
                         <div className="field-set">
                         <Input name="password" label="Password"   type="password" onChange={(event)=> setPassword(event.target.value)}  />
                         {error && <div className="alert alert-danger" role="alert">
                        {error}
                        </div>}
                          </div>
                        
                        <div className="field-set">
                        <ButtonWithProgress disabled={!buttonEnabled || pendingApiCall} pendingApiCall={pendingApiCall} text="LOGIN" onClick={onClickLogin}>
                   Login
                   </ButtonWithProgress>
                        </div>
                        
                        <div className="clearfix"></div>  
                          <ul className="list s3">
                              <li>Login with:</li>
                              <li><span >Facebook</span></li>
                              <li><span >Google</span></li>
                          </ul>
                          <div className="spacer-half"></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer /></div>
            
            // <div className="container">
            // <div className="container-lg">
            // <div className="circle">
            // <form>
            //       <p className="sign-title">SIGN IN</p>
            //       <p className="sign-text">Login to Your Account</p>
            //       <Input name="username" label="Username" onChange={(event)=> setUsername(event.target.value)} />
                       
                
            //       <Input name="password" label="Password"   type="password" onChange={(event)=> setPassword(event.target.value)}  />
            //       {error && <div className="alert alert-danger" role="alert">
            //       {error}
            //       </div>}
            //       <div className="flex">
            //       <a href="#" >Forget Password?</a>
            //       </div>
                  
            //       <div className="text-center">
            //       <ButtonWithProgress disabled={!buttonEnabled || pendingApiCall} pendingApiCall={pendingApiCall} text="LOGIN" onClick={onClickLogin}>
            //       Login
            //       </ButtonWithProgress>
                  
            //       </div>
            // </form>
            // </div></div>
        
            // </div>
     
      )

     
}


export default LoginPage;