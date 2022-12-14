import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header.js'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'


export default function Home(props) {
  console.log(props);
  return (
    <div>
      <Head>
        <title>Movie To Go</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />

      {/* Nav */}
      <Nav />

      {/* Result */}
      <Results />
    </div>
  )
}

export const getServerSideProps =async  (context) => {
  const genre = context.query.genre;
  console.log('url', requests.fetchTrending.url);

  const request = await fetch(`https://api.themoviedb.org/3/${requests[genre]?.url || requests.fetchTrending.url}`)
  .then(res => res.json());   

  return {
    props: {
      results: request.results,
    }
  }
}

