import React from 'react'
import { Container } from 'react-bootstrap'
import Img from '../../imgs/reading-bible.jpg'
// import axios from 'axios'

export default function BibleSearch() {
  // //Blue Letter Bible plug in
  // const [blb, setBlb] = useState();
  // //Axios Get
  // const getBlb = () => {
  //   axios.get('https://www.blueletterbible.org/search/search.cfm?Criteria={searchText}&t=KJV#s=s_primary_0_1').then(response => {
  //       console.log(response)
  //       setBlb(response.data)
  //   })}

  // //uef
  // useEffect(() => {
  //   getBlb()
  // }, []);
  return (
      <>
      <section className="bg-dark text-light text-center">
        <article className="p-4">
              <h1 className='text-center py-4'>Blue Letter PlugIn</h1>
        </article>
        <section className='text-center bg-dark py-3'>
          <img src={Img} alt='person reading the Bible' className='vph-max'/>
        </section>
        <div className="row">
          <div className='col-md-8 offset-md-2 p-3 my-3 par-block'>
            <p>
              Here we bring in the Blue Letter Bible tools for searching words and phrases. Phase two will focus
              on recreating this functionality.
            </p>
          </div>
        </div>
        <article className="p-4">
          <h2 className='text-center'>Blue Letter Search</h2>
        </article>
        <div className="row">
          <div className='col-md-8 offset-md-2 p-3 my-3 par-block'>
            <p>
              The below search feature is temporary. Phase two will explore ways to render results directly on this page.
              The code for the below feature can be found at the 
              <a href='https://www.blueletterbible.org/webtools/BLB_websearch.cfm' target='_blank' rel='noreferrer'> BLB Web Search </a>
               resource page.
            </p>
            <form action="https://www.blueletterbible.org/search/preSearch.cfm" method="get" target="_new">
              <input className='bg-dark text-light' type="text" name="Criteria" />
              <input type="hidden" name="t" value="KJV" />
              <input className='bg-dark text-light m-1' type="submit" />
              {/* TODO: add call to axios get request on click of submit button */}
            </form>
            {/* 
              will need a hook for the text input.
              will need to format each feature in the call result.
              will need to design container for results.
              will need to create new collection for each result that's generated based on element number.
                -- will need to work out logic for to iterated through.
             */}
          </div>
          {/*<Container>
            <div className="row">
              <div className="col-md-10 offset-md-2 search-result">
                <p><strong>{/*blb.map get verse ref here</strong>: {/*get verse text here<p></p>
              </div>
            </div>
          </Container>*/}
        </div>
      </section>
      </>
  )
}
