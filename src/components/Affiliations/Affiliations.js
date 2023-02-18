import React from 'react'
import MBTCard from '../Affiliations/MBTCard'
import LFBICard from '../Affiliations/LFBICard'
import LFFCard from '../Affiliations/LFFCard'

export default function Affiliations() {
  return (
    <>
        <section className="bg-dark py-5">
          <article className="p-4">
                <h1 className='text-center text-light py-4'>Relevant Affilitations</h1>
          </article>
          <div className="par-block col-md-8 offset-md-2 my-3 p-3 text-center text-light">
            <p>
                We believe all Scripture was given by inspiration of God (2 Timothy 3:16)
                and God has promised to preserve every jot and tittle of what He inspired. (Matthew 5:18)
                We hold to the Authorized Version (King James Bible) as the inerrant standard for English speaking people and
                believe we find within it the certainty of the words of truth. (Proverbs 22:20-21)
            </p>
          </div>
          <div className="row">
            <div className="col-md-4 my-3 p-3">
              <MBTCard />
            </div>
            <div className="col-md-4 my-3 p-3">
              <LFFCard />
            </div>
            <div className="col-md-4 my-3 p-3">
              <LFBICard />
            </div>
          </div>
        </section>
    </>
  )
}