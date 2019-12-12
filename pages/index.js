//blog ana sayfası
import React from "react";
import Head from "next/head";
import Me from "../components/me";
import fetch from "isomorphic-unfetch";
import Uparea from "../components/up";
import Blog from "../components/blog";

const Home = ({ posts }) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
      <link
        href='https://fonts.googleapis.com/css?family=Baskervville|Montserrat|Open+Sans&display=swap'
        rel='stylesheet'
      ></link>
      <link
        href='https://fonts.googleapis.com/css?family=Sacramento&display=swap'
        rel='stylesheet'
      ></link>
      <link
        href='https://fonts.googleapis.com/icon?family=Material+Icons'
        rel='stylesheet'
      ></link>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css'
      ></link>

      <script src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'></script>
      <style>{globalStyle}</style>
    </Head>
    <Uparea />
    <div className='hero-container'>
      {posts.map(post => (
        <Blog
          title={post.title}
          content={post.content}
          date={post.date}
          slug={post.slug}
          full={1}
          readtime={post.readtime}
        />
      ))}
      {posts.map(post => (
        <Blog
          title={post.title}
          content={post.content}
          date={post.date}
          slug={post.slug}
          full={1}
          readtime={post.readtime}
        />
      ))}
    </div>
    <Me />
    <style jsx>{`
      .hero-container {
        max-width: 750px;
        with: 100%;
        margin-left: 10%;
        float: left;
      }
      @media (max-width: 500px) {
        .hero-container {
          margin-right: 10%;
        }
      }
    `}</style>
  </div>
);
Home.getInitialProps = async ({ req }) => {
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();

  return { posts: json.posts };
};
const globalStyle = `
body {
  background: #F8F8F8;
}

`;
export default Home;
