import React from 'react'
import {Container} from 'react-bootstrap'
import MBTCard from './mbtcard'
import LFFCard from './lffcard'
import LFBICard from './lfbicard'

export default function Affiliations() {
  return (
    <section>
        <p>
            We believe all Scripture was given by inspiration of God (2 Timothy 3:16) 
            and God has promised to preserve every jot and tittle of what He inspired. (Matthew 5:18)
            We hold to the Authorized Version (King James Bible) as the inerrant standard for English speaking people and 
            believe we find within it the certainty of the words of truth. (Proverbs 22:20-21)
        </p>
        <Container classname='row'>
            <div>
                <MBTCard />
            </div>
            <div>
                <LFFCard />
            </div>
            <div>
                <LFBICard />
            </div>
        </Container>
    </section>
  )
}