import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Blog{' '}
          <Link href="/posts/first-post">
            <a>type 4 web</a>
          </Link>
        </h1>

        <p className="description">
          Posts: <code>clik if you want</code>
        </p>

        <div className="grid">

          <a href="https://github.com/marketplace/actions/deploy-to-github-pages" target="_blank" className="card">
            <h3>Cloude &rarr;</h3>
            <p>GitHub Pages Deploy Action 🚀</p>
            <p>2021-04-25</p>
          </a>

          <a href="https://www.cloudflare.com/" target="_blank" className="card">
            <h3>Web &rarr;</h3>
            <p>The Web Performance & Security Company</p>
            <p>2021-04-25</p>
          </a>

          <a href="https://github.com/ClaudePlos" target="_blank" className="card">
            <h3>AWS &rarr;</h3>
            <p>Fast generate code to AWS. (todo)</p>
            <p>2021-04-..</p>
          </a>

          <a href="https://dataworkshop.eu/free-webinar?utm_source=youtube&utm_medium=description&utm_campaign=nlp2&utm_term=channel&utm_content=dataworkshop#joinwebinar" target="_blank" className="card">
            <h3>NLP &rarr;</h3>
            <p>How bulid AI code and develop.</p>
            <p>2021-04-20</p>
          </a>

          <a href="https://github.com/ClaudePlos/pattern_ractive_dev" target="_blank" className="card">
            <h3>Reactive in java &rarr;</h3>
            <p>How write reactive code in java!</p>
            <p>2021-04-19</p>
          </a>

          <a href="https://github.com/ClaudePlos/rusic" target="_blank" className="card">
            <h3>Rust language &rarr;</h3>
            <p>Fast project in RUST language.</p>
            <p>2021-04-15</p>
          </a>

          <a href="https://github.com/ClaudePlos" target="_blank" className="card">
            <h3>My github &rarr;</h3>
            <p>See my project.</p>
            <p>2021-03-19</p>
          </a>

         
        </div>
      </main>

      <footer>
        <a
          href="https://cash.rekeep.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}Klaudiusz Skowronski
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #f38600;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #f38600;
          border-color: #f38600;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: ubuntu,trebuchet ms,Tahoma,Geneva,Verdana
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
