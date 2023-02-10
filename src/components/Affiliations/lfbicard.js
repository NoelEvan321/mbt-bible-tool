import React from 'react'
import {Card} from 'react-bootstrap'
import Img from '../../imgs/lfbiLogo.png'

export default function mbtcard() {
  return (
    <Card>
        <Card.Image variant="top" src={Img} />
        <Card.Body>
            <Card.Title>Living Faith Bible Institute</Card.Title>
            <Card.Text>
                LFBI is for members of the Living Faith Fellowship and designed to further educate disciples of Jesus Christ.
            </Card.Text>
            <Card.Button variant='primary' href='lfbi.org' target='_blank'>Visit LFBI</Card.Button>
        </Card.Body>
    </Card>
  )
}