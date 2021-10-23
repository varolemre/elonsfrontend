import React from 'react';
import {HashRouter as Router ,Route,Redirect,Switch} from 'react-router-dom'
import {useSelector} from 'react-redux';
import HomePage from '../pages/HomePage';
import UserSignupPage from '../pages/UserSignUpPage';
import LoginPage from '../pages/LoginPage';
import TopBar from '../components/TopBar';
import UserPage from '../pages/UserPage';
import './App.css';
import ScrollToTopBtn from '../components/components/ScrollToTop';
import WalletPage from '../pages/WalletPage';
import MarketPlace from '../pages/MarketPlace';
import Colection from '../pages/ItemDetail';
import CollectionMain from '../pages/CollectionMain';
// const PosedRouter = ({ children }) => (
//   <Location>
//     {({ location }) => (
//       <div id='routerhang'>
//         <div key={location.key}>
//           <Router location={location}>
//             {children}
//           </Router>
//         </div>
//       </div>
//     )}
//   </Location>
// );

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0,0), [location])
  return children
}

const App = ()=> {
  
  const { isLoggedIn } = useSelector(store => ({
    isLoggedIn: store.isLoggedIn
  }));
  //static contextType = Authentication;

  return (
    <div>
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          {!isLoggedIn && <Route path="/login" component={LoginPage} />}
          <Route path="/signup" component={UserSignupPage} />
          <Route path="/user/:username" component={UserPage} />
          <Route path="/wallet/:username" component={WalletPage} />
          <Route path="/marketplace" component={MarketPlace} />
          <Route path="/item/:marketId" component={Colection} />
          <Route path="/collection/:nftName" component={CollectionMain} />
          <Redirect to="/" />
        </Switch>
      </Router>
      <ScrollToTopBtn />
    </div>
  );
};

export default App;