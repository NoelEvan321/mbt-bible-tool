import React from 'react'
import Img from '../../imgs/lffLogo.png'

export default function LFFCard() {
  return (
    <>
        <img src={Img} alt='MBT Logo' />
        <div className='title'>Living Faith Fellowship</div>
        <p>
            LFBI is for members of the Living Faith Fellowship and designed to further educate disciples of Jesus Christ.
        </p>
        <p>
            The Living Faith Fellowship is a peer network of like-minded churches united under a single biblical authority and one common mission.
        </p>
        <a classname='btn btn-primary' href='mbtkc.org' target='_blank'>Visit LFF</a>
    </>
  )
}
