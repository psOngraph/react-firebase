import React from 'react'

function FormInput(props) {
  return (
    <div className="row">
      <label>{props.description}</label>
      <input onChange={props.onChange} value={props.value} name={props.name} type={props.type} placeholder={props.placeholder}/>
    </div>
  )
}

export default FormInput
