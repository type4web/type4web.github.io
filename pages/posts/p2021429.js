import Link from 'next/link'

export default function P2021429() {
    return (
        <>
        <div className="container">
          <h1>AWS</h1>
          <p>
          Today I show you example of fast write lamda functions in AWS.
          <br></br>First od all you have to heve acount on AWS Cloud.
          </p> 
          <h2>
            <Link href="/">
              <a>Back to main page</a>
            </Link>
          </h2>
          <style jsx>{`
            .container {
              min-height: 100vh;
              padding: 0 0.5rem;
              display: flex;
              flex-direction: column;
              justify-content: left;
              align-items: left;
            }
        `}</style>
        <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: ubuntu, trebuchet ms, Tahoma, Geneva, Verdana, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
        </div>  
        </>
      )
  }