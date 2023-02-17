import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function CHAPTERCard() {
  return (
    <Card border='warning' className='text-center'>
      {/* <Card.Img variant='top' src={Img} /> */}
      <Card.Body>
        <Card.Title>Chapter Study</Card.Title>
        <Card.Text>
            A chapter study is... link to another page goes here
        </Card.Text>
        <Button variant='primary' href='#' target='_blank'>How it works</Button>
      </Card.Body>
    </Card>
  )
}
