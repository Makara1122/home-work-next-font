import React from 'react'
import {ConfirmIcon} from '@/app/Icons/fontawesome/ConfirmIcon'
import style from './style.module.css'
import Button from './[key]/components/Button'




export default function page() {
  return (
    <div className={style.container}>
      <ConfirmIcon/>
      <h1  >Confirm Successfully</h1>
      <p  >Welcome to our site to learning the front end</p>
      <p className='m-1'>សូមជំរាបសូរលោកគ្រូ🙏🙏🙏</p>
      <Button/>
    </div>
  )
}
