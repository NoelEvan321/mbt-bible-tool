import React from 'react'
import Img from '../../imgs/lfbiLogo.png'
import {Button, Card} from 'react-bootstrap'

export default function LFBICard() {
  return (
    // <>
    //     <img src={Img} alt='MBT Logo' />
    //     <div className='title'>Living Faith Fellowship</div>
    //     <p>
    //         LFBI is for members of the Living Faith Fellowship and designed to further educate disciples of Jesus Christ.
    //     </p>
    //     <a classname='btn btn-primary' href='mbtkc.org' target='_blank'>Visit LFF</a>
    // </>
    <Card border='warning' className='text-center'>
      <Card.Img variant='top' src={Img} className='card-img' />
      <Card.Body>
        <Card.Title>Living Faith Bible Institute</Card.Title>
        <Card.Text>LFBI is for members of the Living Faith Fellowship and designed to further educate disciples of Jesus Christ.
        </Card.Text>
        <Button variant='primary' href='https://www.lfbi.org/' target='_blank'>Visit LFBI</Button>
      </Card.Body>
    </Card>
  )
}
