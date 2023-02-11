import React from 'react'
import MBTCard from '../Affiliations/MBTCard'
import LFBICard from '../Affiliations/LFBICard'
import LFFCard from '../Affiliations/LFFCard'

export default function Affiliations() {
  return (
    <>
        <p>
            We believe all Scripture was given by inspiration of God (2 Timothy 3:16) 
            and God has promised to preserve every jot and tittle of what He inspired. (Matthew 5:18)
            We hold to the Authorized Version (King James Bible) as the inerrant standard for English speaking people and 
            believe we find within it the certainty of the words of truth. (Proverbs 22:20-21)
        </p>
        <MBTCard />
        <LFFCard />
        <LFBICard />
    </>
  )
}