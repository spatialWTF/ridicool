import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ridicool nfts!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="ridicool nfts!" />
        <p className="description">
         coming up soon 
        </p>
      </main>

      <Footer />
    </div>
  )
}
