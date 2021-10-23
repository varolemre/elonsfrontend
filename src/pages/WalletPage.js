import React, { useEffect, useState } from "react";
import axios from "axios";
import {signup , sendGem} from '../api/apiCalls';
import Input from "../components/Input";
import ButtonWithProgress from "../components/ButtonWithProgress";
import { useApiProgress } from "../shared/ApiProgress";
import {useDispatch} from "react-redux";
import Footer from '../components/components/footer';
import { getUser } from '../api/apiCalls';
import { useParams } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
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

const WalletPage = (props) => {

      const[user,setUser] = useState({}); 
      const[balance,setBalance] = useState();
      const[notFound,setNotFound] = useState(false);
      const[walletId,setWalletId] = useState();
      const[sendOk,setSendOk] = useState(false);
      const[amount,setAmount] = useState();
      const {username} = useParams();

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
            setBalance(user.balance)
          },[username]);

      const [mail,setMail] = useState();
      const [password,setPassword] = useState();
      const [passwordRepeat,setPasswordRepeat] = useState();
      const [agreedClicked,setAgreedClicked] = useState();
      const [errors,setErrors] = useState();

      const dispatch = useDispatch();

      useEffect(()=> {
            setAgreedClicked(true);
      }, [username,password])



      const onClickSendGem = async event => {
        event.preventDefault();
        //const {username, mail, password} = this.state;

        const body = {
              walletId,
              amount,
        };
        

      try {
        await sendGem(body);
        setSendOk(true);
        const loadUser = async ()=>{
          try{
            const response =  await getUser(username)
            setUser(response.data);
          }catch(error){
            setNotFound(true);
          }
       }
        loadUser();
        setBalance(user.balance)
       
      } catch (error){
        console.log("adasd")
        if (error?.response?.data?.message) {
              setErrors(error?.response?.data?.message);
              console.log(error?.response?.data?.message);
              console.log("adasd")
            }
        
      }
      
  }

  

      const onClickSignup = async event => {
            event.preventDefault();
            const {history} = props;
            const {push} = history;
            //const {username, mail, password} = this.state;

            const body = {
                  username,
                  mail,
                  password
            };
            

          try {
            await signup(body);
            push('/login');
          } catch (error){
            if (error?.response?.data?.validationErrors) {
                  setErrors(error?.response?.data?.validationErrors);
                }
            
          }
          
      }

      //
      const pendingApiCall = useApiProgress('/users');
      //const {errors} = this.state;
      const onChange = (event) => {
        const {name,value} = event.target;
        if(name==='walletId'){
          setWalletId(value);
        }else if(name==='amount'){
          setAmount(value);
        }
        
        setSendOk(undefined);
        setErrors(undefined);
    };
      

      return(
            
            <section className='container'>
                <GlobalStyles/>
                  <div style={{height: '50px', width: '100%', clear: 'both'}} />
          <div className="row">
          <div className='spacer-double'></div>
          <div className="col-md-8 offset-md-2">
            <h2>WALLET</h2>
            <h3>Your Gem Balance : {user.balance}</h3>
                    
            <div className="walletDiv">
            <p>Send Gem</p>
            <Input name="walletId" onChange={onChange} label="To: Wallet Id"  />
            <Input name="amount" onChange={onChange} label="0"   />
            <button className="btn-main lead" onClick={onClickSendGem}>SEND</button>
            <br></br>
            {sendOk && <div class="alert alert-success" role="alert">
            Gem Sent Successfully!
          </div>}
            {errors && <div class="alert alert-danger" role="alert">
            {errors}
          </div>}
            </div>
            <br></br>
            <div className="walletDiv">
            <p>Receive Gem</p>
            <Input name="username" value={user.wallet}>{user.wallet}</Input>
            <button className="btn-main lead">COPY</button>
            </div>
      <div className="spacer-double"></div>
      <table className="table de-table table-rank">
              <thead>
                <tr>
                  <th scope="col">Operation</th>
                  <th scope="col">Amount</th>
                  <th scope="col">GEM</th>
                 
                  <th scope="col">Wallet Or Item</th>
                </tr>
                <tr></tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">
                  
                <p className="blackp">  Market Purchase</p></td>
                  <td>15,225.87</td>
                  <td className="d-plus">+87.54%</td>
                 
                  <td>58.5k</td>
                </tr>
                <tr>
                  <td scope="row">
                
                  <p className="blackp">  Sent Gem</p></td>
                  <td>15</td>
                  <td className="d-plus">+35.11%</td>
                 
                  <td>a140f728-bf1d-449e-b473-9cc0e9345c7c</td>
                </tr>
                <tr>
                  <td scope="row">
                 
                  <p className="blackp">  Sketchify</p></td>
                  <td>13,705.58</td>
                  <td className="d-min">-33.56%</td>
                 
                  <td>48.8k</td>
                </tr>
               
             
              
        
              </tbody>
            </table>
      </div>

    </div>
    <Footer />
  </section>
            // <div className="container">
            //        <div className="container-lg">
            // <div className="circle">
            // <form>
            //       <h1 className="text-center">Sign Up</h1>

            //       <Input name="username" label="Username" error={usernameError} onChange={onChange} />
            //       <Input name="mail" label="Mail" error={mailError} onChange={onChange} />
            //       <Input name="password" label="Password" error={passwordError} onChange={onChange} type="password" />
            //       <Input name="passwordRepeat" label="Password Repeat" error={passwordRepeatError} onChange={onChange} type="password" />
                

            //       <input type="checkbox" onChange={onChangeAgree}/>Agreed
            //       <div className="text-center">
            //       <ButtonWithProgress onClick={onClickSignup} text="Sign Up" pendingApiCall={pendingApiCall} disabled={!agreedClicked || pendingApiCall || passwordRepeatError !== undefined}>Sign Up
            //       {pendingApiCall && <span className="spinner-border spinner-border-sm"/> }
            //       </ButtonWithProgress>
                  
            //       </div>
            // </form>
            // </div></div></div>
          
            
      );
            ///
     
}
export default WalletPage;