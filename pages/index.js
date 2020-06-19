import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Just a couple thoughts and musings from your local (online) developer.</p>
        <p>Hi, I'm Colin. I'm a software engineer and creative. You can contact me on Twitter.</p>
      </section>
    </Layout>
  )
}