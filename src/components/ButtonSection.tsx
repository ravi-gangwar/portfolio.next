import React from 'react'
import ButtonOutline from './ButtonOutline'
import ButtonConnect from './Button'

const ButtonSection = () => {
  return (
    <div className='flex justify-center items-center gap-10 mt-5'>
        <ButtonConnect title='Connect'/>
        <ButtonOutline />
    </div>
  )
}

export default ButtonSection