import React from 'react'
import Img from '../../imgs/lfbiLogo.png'

export default function LFBICard() {
  return (
    <>
        <img src={Img} alt='MBT Logo' />
        <div className='title'>Living Faith Fellowship</div>
        <p>
            LFBI is for members of the Living Faith Fellowship and designed to further educate disciples of Jesus Christ.
        </p>
        <a classname='btn btn-primary' href='mbtkc.org' target='_blank'>Visit LFF</a>
    </>
  )
}
