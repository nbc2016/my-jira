import Logo from 'assets/logo.svg'
import React, { useState } from 'react'

console.log(process.env);
export default function Test(props) {
  const [user,setUser] = useState(['1','2'])
  const change = () => {
    setUser(['3',...user])
  }

  return (
    <>
      <p>test</p>
      <img src={Logo} alt=""  onClick={change} style={{width: '100px'}}/>
      {user.map((item,index) => (<React.Fragment key={item}>
        <p>{item}</p>
        <input type="text"/>
      </React.Fragment>))}
    </>
  )
}