import React, { useEffect, useState } from "react";
import axios from "axios";
import {signup} from '../api/apiCalls';
import Input from "../components/Input";
import ButtonWithProgress from "../components/ButtonWithProgress";
import { useApiProgress } from "../shared/ApiProgress";
import {useDispatch} from "react-redux";
import Footer from '../components/components/footer';

const UserSignUpPage = (props) => {

      // state= {
      //       username: null,
      //       agreedClicked:false,
      //       mail:null,
      //       password:null,
      //       passwordRepeat:null,
      //       pendingApiCall:false,
      //       errors:{}
      // }

      const [username,setUsername] = useState();
      const [mail,setMail] = useState();
      const [password,setPassword] = useState();
      const [passwordRepeat,setPasswordRepeat] = useState();
      const [agreedClicked,setAgreedClicked] = useState();
      const [errors,setErrors] = useState({});

      const dispatch = useDispatch();

      useEffect(()=> {
            setAgreedClicked(true);
      }, [username,password])

      const onChange = (event) => {

            const {name,value} = event.target;
            const errorsCopy = {...errors};
            errorsCopy[name] = undefined;
            if(name === 'password' || name === 'passwordRepeat'){
                  if(name==='password' && value !== passwordRepeat){
                        errorsCopy.passwordRepeat = 'Password Mismatch';
                  }else if(name === 'passwordRepeat' && value !== password){
                        errorsCopy.passwordRepeat = 'Password Mismatch';
                  }else{
                        errorsCopy.passwordRepeat= undefined;
                  }
            }
            setErrors(errorsCopy);
            if(name === 'username'){
                  setUsername(value);
            }else if (name === 'mail'){
                  setMail(value);
            }else if(name==='password'){
                  setPassword(value);
            }else if(name==='passwordRepeat'){
                  setPasswordRepeat(value);
            }
            // this.setState({
            //       [name] : value,
            //       errors
            // })
      };

      const onChangeAgree = event => {
            // this.setState({
            //       agreedClicked:event.target.checked
            // })
      };

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
            if (error?.response?.data?.message) {
                  setErrors(error?.response?.data?.message);
                }
            
          }
          
      }

      //
      const pendingApiCall = useApiProgress('/users');
      //const {errors} = this.state;

      

      const {username:usernameError,mail:mailError,password:passwordError,passwordRepeat:passwordRepeatError} = errors;
      return(
            
            <section className='container'>
                  <div style={{height: '50px', width: '100%', clear: 'both'}} />
    <div className="row">
    <div className='spacer-double'></div>
    <div className="col-md-8 offset-md-2">
      <h3>Don't have an account? Register now.</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

      <div className="spacer-10"></div>

      <form name="contactForm" id='contact_form' className="form-border" action='#'>

                        <div className="row">

                            <div className="col-md-6">
                                <div className="field-set">
                                    <label>Username:</label>
                                    <Input name="username" label="Username" error={usernameError} onChange={onChange} />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="field-set">
                                    <label>Email Address:</label>
                                    <Input name="mail" label="Mail" error={mailError} onChange={onChange} />
                                </div>
                            </div>

                         

                            <div className="col-md-6">
                                <div className="field-set">
                                    <label>Password:</label>
                                    <Input name="password" label="Password" error={passwordError} onChange={onChange} type="password" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="field-set">
                                    <label>Re-enter Password:</label>
                                    <Input name="passwordRepeat" label="Password Repeat" error={passwordRepeatError} onChange={onChange} type="password" />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div id='submit' className="pull-left">
                                <ButtonWithProgress onClick={onClickSignup} text="Sign Up" pendingApiCall={pendingApiCall} disabled={!agreedClicked || pendingApiCall || passwordRepeatError !== undefined}>Sign Up
                        //       {pendingApiCall && <span className="spinner-border spinner-border-sm"/> }
                        //       </ButtonWithProgress>
                                </div>
                                
                                <div className="clearfix"></div>
                            </div>

                        </div>
                    </form>
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
export default UserSignUpPage;