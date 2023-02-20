import React from 'react'
import Img from '../../imgs/john-work.jpg'
import CHAPTERCard from './CHAPTERCard'
import VERSECard from './VERSECard'
import WORDCard from './WORDCard'

export default function DiscoveryMethod() {
  return (
    <>
      <section className="bg-dark text-light text-center">
        <article className="p-4" style={{backgroundImage: `url(${Img})`}}>
              <h1 className='text-center pb-4'>Discovery Bible Method</h1>
              <img src={Img} alt='person reading the Bible' className='vph-max'/>
        </article>
        <div className="row">
          <div className='col-md-8 offset-md-2 p-3 my-3 par-block'>
            <p>
              This is where we discuss what the DBM is 
            </p>
          </div>
        </div>
        <article className="p-4">
              <h2 className='text-center sub-sect'>Materials for Discovery</h2>
        </article>
        <div className='col-md-8 offset-md-2 p-3 my-3'>
          <div className='row offset-md-1'>
            <div className='col-md-2 par-block m-1'>KJV Bible</div>
          </div>
        </div>
        <article className="p-4">
              <h2 className='text-center sub-sect'>Steps for Discovery</h2>
        </article>
        <div className='col-md-8 offset-md-2 p-3 my-3'>
          <div className='row offset-md-1'>
            <div className='col-md-2 par-block m-1'>Context</div>
            <div className='col-md-2 par-block m-1'>Rule of Most Mention</div>
            <div className='col-md-2 par-block m-1'>Word Study</div>
            <div className='col-md-2 par-block m-1'>Verse Study</div>
            <div className='col-md-2 par-block m-1'>Chapter Study</div>
          </div>
        </div>
        <article className="p-4">
              <h2 className='text-center'>How We Study</h2>
        </article>
        <div className="row">
          <div className="col-md-4 my-3 p-3 text-dark">
            <WORDCard />
          </div>
          <div className="col-md-4 my-3 p-3 text-dark">
            <VERSECard />
          </div>
          <div className="col-md-4 my-3 p-3 text-dark">
            <CHAPTERCard />
          </div>
        </div>
      </section>
    </>
  )
}
