import React from 'react'
import {Card} from 'react-bootstrap'
import Img from '../../imgs/mbtLogo.png'

export default function mbtcard() {
  return (
    <Card>
        <Card.Image variant="top" src={Img} />
        <Card.Body>
            <Card.Title>Midtown Baptist Temple</Card.Title>
            <Card.Text>
                We are a church devoted to furthering the gospel in our community and around the world.
            </Card.Text>
            <Card.Button variant='primary' href='mbtkc.org' target='_blank'>Visit MBT</Card.Button>
        </Card.Body>
    </Card>
  )
}
