import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const Loading = () => {
    return (
          <>
      <div className="spacer-double"></div>
      <div className="loadingH">
        <div align='center'>
            <Loader
                type="TailSpin"
                color="rgb(0, 153, 255)"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
       </div> </div></>
    )
}

export default Loading