import React from 'react'
import Img from '../../imgs/mbtLogo.png'
import { Button, Card } from 'react-bootstrap'

export default function MBTCard() {
  return (
    // <>
    //     <img src={Img} alt='MBT Logo' />
    //     <div className='title'>Midtown Baptist Temple</div>
    //     <p>
    //         We are a church devoted to furthering the gospel in our community and around the world.
    //     </p>
    //     <a classname='btn btn-primary' href='mbtkc.org' target='_blank'>Visit MBT</a>
    // </>
    <Card border='warning' className='text-center'>
      <Card.Img variant='top' src={Img} />
      <Card.Body>
        <Card.Title>Midtown Baptist Temple</Card.Title>
        <Card.Text>
          We are a church devoted to furthering the gospel in our community and around the world.
        </Card.Text>
        <Button variant='primary' href='https://mbtkc.org/' target='_blank'>Visit MBT</Button>
      </Card.Body>
    </Card>
  )
}
