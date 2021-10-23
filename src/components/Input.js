import React from "react";

const Input = (props) => {
      const {label,error,name,onChange,type,value} = props
      const className = error ? "form-control is-invalid": "form-control ";
      return(
            <div className="form-group centered">
            <input className={className} autocomplete="off" value={value} placeholder={label} name={name} onChange={onChange} type={type} />
            <div className="invalid-feedback">
                  {error}
            </div>
      </div>
      )
}
export default Input;