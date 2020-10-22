import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const HomePage = () => {
  return(
    <Layout>
    <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I am a web developer from Belgrade</h2>
      <p>Need a developer? <Link to='/contact'> Contact me.</Link></p>
    </Layout>
  )
}

export default HomePage
