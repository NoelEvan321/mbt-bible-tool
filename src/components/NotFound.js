import React from 'react'
import '../components/Home/Index.css'

export default function NotFound() {
  return (
    <>
      <section className='bg-dark text-light'>
        <div className="row">
          <div className='text-center col-md-8 offset-md-2 par-block my-5 p-3'>
            <p> The answer you're looking for can't be found here. Where have you been looking?</p>
          </div>
        </div>
      </section>
    </>
  )
}
