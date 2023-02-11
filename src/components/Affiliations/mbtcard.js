import React from 'react'
import Img from '../../imgs/mbtLogo.png'

export default function MBTCard() {
  return (
    <>
        <img src={Img} alt='MBT Logo' />
        <div className='title'>Midtown Baptist Temple</div>
        <p>
            We are a church devoted to furthering the gospel in our community and around the world.
        </p>
        <a classname='btn btn-primary' href='mbtkc.org' target='_blank'>Visit MBT</a>
    </>
  )
}
