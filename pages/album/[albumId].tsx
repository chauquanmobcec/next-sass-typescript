import { useRouter } from 'next/router';
import * as React from 'react';

export interface IDetailCoderProps {
}
export const getStaticPaths = async () => {
  const res = await fetch(" https://jsonplaceholder.typicode.com/users ");
  const data = await res.json();
  const paths = data.map((coder: any) => {
    return {
      params: { id: coder.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  }
};
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  return {
    props: {
      // posts: data
    },
  }
};
export default function DetailPost(props: any) {
  const router = useRouter();
  return (
    <>
      <div className="container">
        <h1>
          Detail Post Page
          <p>Query: {JSON.stringify(router.query)}</p>
        </h1>
      </div>
    </>
  );
}
