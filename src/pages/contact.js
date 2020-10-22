import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <div>
            <Layout>
            <Head title="Contact" />
                <h1>Contact</h1>
                <p>I live in Belgrade, Serbia</p>
                <a href='https://www.linkedin.com/' target='_blank'>See my LinkedIn</a>
            </Layout>
        </div>
        
    )
}

export default ContactPage