import React, { useEffect, useState } from 'react'
import styles from "../styles/HomePage.module.scss";
import Image from 'next/image';
import img from "../public/img/download.jpg"
import Link from 'next/link';

type Props = {}
export interface PhotoProps {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await res.json();
  console.log(data)
  return {
    props: {data: data},
  };
};

const HomePage = ({data}: any) => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/photos")
  //     .then((res) => res.json())
  //     .then(data => {
  //       console.log("data", data);
  //       setData(data);
  //     })
  // }, [])
  return (
    <>
      <main className='main' role="main">
        <section className={`jumbotron text-center ${styles.jumbotron}`} >
          <div className="container">
            <h1 className="jumbotron-heading">Album example</h1>
            <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don&apos;t simply skip over it entirely.</p>
            <p>
              <a href="#" className="btn btn-primary my-2 mx-1">Main call to action</a>
              <a href="#" className="btn btn-secondary my-2 mx-1">Secondary action</a>
            </p>
          </div>
        </section>
        <section className={`jumbotron text-center ${styles.jumbotron}`} >
          <div className="container">
            <h1 className="jumbotron-heading">Album example</h1>
            <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don&apos;t simply skip over it entirely.</p>
            <p>
              <a href="#" className="btn btn-primary my-2 mx-1">Main call to action</a>
              <a href="#" className="btn btn-secondary my-2 mx-1">Secondary action</a>
            </p>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {data?.slice(0, 9).map((data: any) => (
                <div className="col-md-4" key={data.id}>
                  <div className="card mb-4 box-shadow"  >
                    <Image
                      className="card-img-top"
                      src={data.url}
                      alt='User profile picture'
                      objectFit='cover'
                      priority
                      width={300}
                      height={268}
                    />
                    <div className="card-body">
                      <p className={`card-text ${styles.ellipsis}`}>{data.title}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <Link href="/posts"><button type="button" className="btn btn-sm btn-outline-secondary">View</button></Link>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">{data.id}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default HomePage