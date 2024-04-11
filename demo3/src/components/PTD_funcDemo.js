import React from 'react'

export default function PTD_funcDemo(props) {
  return (
    <div>
        <hr/>
        <h2>Function component Demo</h2>
        <h3> Su dung thuoc tinh props </h3>
        <p>UserName: {props.useName}</p>
        <p>fullName: {props.fullName}</p>
        <p></p>
    </div>
  )
}
