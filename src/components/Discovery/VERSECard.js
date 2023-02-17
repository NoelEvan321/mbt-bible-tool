import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Verse from '../Discovery/Studies/Verse'

export default function VERSECard() {
  return (
    <Card border='warning' className='text-center'>
      {/* <Card.Img variant='top' src={Img} /> */}
      <Card.Body>
        <Card.Title>Verse Study</Card.Title>
        <Card.Text>
            A verse study is... link to another page goes here
        </Card.Text>
        <Button variant='primary' href={Verse} target='_blank'>How it works</Button>
      </Card.Body>
    </Card>
  )
}
