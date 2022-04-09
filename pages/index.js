import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Body from '../components/body'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook - log in our Account</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/facebook.ico" />
      </Head>

      <main>

        <Body/>
        <Footer/>

      </main>
      
    </div>
  )
}