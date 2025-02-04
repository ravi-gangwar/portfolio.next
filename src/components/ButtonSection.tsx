import React from 'react'
import Button from './Button'
import ButtonOutline from './ButtonOutline'

const ButtonSection = () => {
    const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/919876543210?text=Hello%20Ravi,%20I%20want%20to%20connect%20with%20you!",
      "_blank"
    );
  };
  return (
    <div className='flex justify-center items-center gap-10 mt-5'>
        <Button onClick={handleWhatsAppClick} title='Connect'/>
        <ButtonOutline />
    </div>
  )
}

export default ButtonSection