import React from 'react'
import {Container} from 'react-bootstrap'

export default function DiscoveryMethod() {
  return (
    <>
    <div>Discovery Bible Method</div>
    <div>Materials for Discovery</div>
    <ul>
      <li>King James Version Bible</li>
    </ul>
    <div>Steps for Discovery</div>
    <ol>
      <li>Context</li>
      <li>Rule of Most Mention</li>
      <li>Word Study</li>
      <li>Verse Study</li>
      <li>Chapter Study</li>
    </ol>
    <Container>
      <div>
        <div>Word Study</div>
        <p>A word study is... link to another page goes here</p>
      </div>
      <div>
        <div>Verse Study</div>
        <p>A vers study is... link to another page goes here</p>
      </div>
      <div>
        <div>Chapter Study</div>
        <p>A chapter study is... link to another page goes here</p>
      </div>
    </Container>
    </>
  )
}
