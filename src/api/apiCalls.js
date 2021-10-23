import axios from "axios";

export const signup = (body) => {
      return  axios.post('/api/users', body);
};

export const login = creds => {
      return axios.post('/auth', {}, {auth:creds, withCredentials:true});
};

export const logout = () => {
      return axios.post('/logout');
    }
    
    export const sendGem = body => {
      return axios.post('/api/send', body);
};


export const getNfts = (page= 0,size= 3) => {
      return axios.get(`/api/nft?page=${page}&size=${size}`);
}

export const getUserNfts = () => {
      return axios.get("/api/users/nft");
}

export const getNftByTitle = (nftName,page) => {
      if(page==null){
            page=0;
      }
      return axios.get(`/api/market/list/${nftName}?page=${page}`)
}

export const getMarketNft = (marketId)=> {
      return axios.get(`/api/market/details/${marketId}`)
}

export const getChangedValue = (marketId) => {
      return axios.get(`/api/market/${marketId}/changes`)
}

export const getUserNftsOnSale = () => {
      return axios.get("/api/users/onsale");
}

export const getMarketItems = () => {
      return axios.get("/api/market");
}

export const getMarketItemsSortByDate = () => {
      return axios.get("/api/market/last", {}, {withCredentials:true});
}

export const countNft = (nftName) => {
      return axios.get(`/api/market/totalsale/${nftName}`)
}


export const getUser = (username) => {
      return axios.get(`/api/users/username/${username}`);
}

export const getUserFollowerN = (username) => {
      return axios.get(`/api/users/${username}/follow`);
}

export const getUserFollowinN = (username) => {
      return axios.get(`/api/users/fn`);
}

export const followUser = (username) => {
      return axios.post(`/api/users/follow/${username}`);
}

export const followCheck = (username) => {
      return axios.get(`/api/users/${username}/fc`);
}

export const updateUser = (username,body) => {
      return axios.put(`/api/users/edit/${username}`,body);
}

export const setAuthorizationHeader = ({ username, password, isLoggedIn }) => {
      if (isLoggedIn) {
            console.log("isLOGGED");
        const authorizationHeaderValue = `Basic ${btoa(username + ':' + password)}`;
        axios.defaults.headers['Authorization'] = authorizationHeaderValue;
        console.log("authorizationHeaderValue:: BU");
        console.log(authorizationHeaderValue);
      } else {
            console.log("isLOGGED DEĞİL AMK");
        delete axios.defaults.headers['Authorization'];
      }
    };

