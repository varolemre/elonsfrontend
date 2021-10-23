import React from 'react';

const ButtonWithProgress = (props) => {
      const {onClick,pendingApiCall,disabled,text} = props;
      return (
            <button  className="pull-left" onClick={onClick} disabled={disabled}>{text}
            {pendingApiCall && <span className="spinner-border spinner-border-sm"/> }
            </button>
      );
};

export default ButtonWithProgress;