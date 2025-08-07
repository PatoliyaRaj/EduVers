import React from 'react'
import Layout from './../../components/Layout';
import Poster from '../Home/poster';


function About() {
  return (
    <React.Fragment>
      <Layout>
        <Poster />
        <div>
            this is the about page of this web site 
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default About