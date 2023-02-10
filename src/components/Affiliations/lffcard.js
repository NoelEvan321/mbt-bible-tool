import React from 'react'
import {Card} from 'react-bootstrap'
import Img from '../../imgs/lffLogo.png'

export default function mbtcard() {
  return (
    <Card>
        <Card.Image variant="top" src={Img} />
        <Card.Body>
            <Card.Title>Living Faith Fellowship</Card.Title>
            <Card.Text>
                The Living Faith Fellowship is a peer network of like-minded churches 
                united under a single biblical authority and one common mission.
            </Card.Text>
            <Card.Button variant='primary' href='lfbi.org' target='_blank'>Visit LFF</Card.Button>
        </Card.Body>
    </Card>
  )
}