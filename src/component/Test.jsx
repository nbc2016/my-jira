import Logo from 'assets/logo.svg'
import React, { useEffect, useState } from 'react'
import {UseDebounce} from '../utils/utils'
console.log(process.env);
export default function Test(props) {
  const [value,setValue] = useState('1')

  const change = (e)  => {
    setValue(e.target.value)
  }
  const dbValue = UseDebounce(value,1000)
  useEffect(() => {
    console.log(dbValue);
  },[dbValue])
  return (
    <>
      <p>test{value}</p>
      <img src={Logo} alt=""   style={{width: '100px'}}/>
        <input type="text"  onChange={change} value={value}/>
    </>
  )
}