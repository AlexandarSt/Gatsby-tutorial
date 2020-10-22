import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <div>
            <Layout>
            <Head title="About" />
                <h1>About</h1>
                <p>I am web developer from Serbia, living in Belgrade</p>
                <Link to='/contact'>Contact me.</Link>
            </Layout>
        </div>
    )
}

export default AboutPage