import React from 'react'
import Img from '../../imgs/lffLogo.png'
import { Button, Card } from 'react-bootstrap'

export default function LFFCard() {
  return (
    // <>
    //     <img src={Img} alt='MBT Logo' />
    //     <div className='title'>Living Faith Fellowship</div>
    //     <p>
    //         LFBI is for members of the Living Faith Fellowship and designed to further educate disciples of Jesus Christ.
    //     </p>
    //     <p>
    //         The Living Faith Fellowship is a peer network of like-minded churches united under a single biblical authority and one common mission.
    //     </p>
    //     <a classname='btn btn-primary' href='mbtkc.org' target='_blank'>Visit LFF</a>
    // </>
    <Card border='warning' className='text-center'>
      <Card.Img variant='top' src={Img} className='card-img' />
      <Card.Body>
        <Card.Title>Living Faith Fellowship</Card.Title>
        <Card.Text>
          The Living Faith Fellowship is a peer network of like-minded churches united under a single biblical authority and one common mission.
          LFBI is for members of the Living Faith Fellowship and designed to further educate disciples of Jesus Christ.
        </Card.Text>
        <Button variant='primary' href='https://www.lffellowship.com/' target='_blank'>Visit LFF</Button>
      </Card.Body>
    </Card>
  )
}
