import React from 'react'
import {Card, Button} from 'react-bootstrap'
import Word from '../Discovery/Studies/Word'

export default function WORDCard() {
  return (
    // <div>
    //     <div>Word Study</div>
    //     <p>A word study is... link to another page goes here</p>
    //   </div>
    <Card border='warning' className='text-center'>
      {/* <Card.Img variant='top' src={Img} /> */}
      <Card.Body>
        <Card.Title>Word Study</Card.Title>
        <Card.Text>
            A word study is... link to another page goes here
        </Card.Text>
        <Button variant='primary' href={Word} target='_blank'>How it works</Button>
      </Card.Body>
    </Card>
  )
}
