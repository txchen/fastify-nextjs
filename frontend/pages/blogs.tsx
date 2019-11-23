import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import { Blog } from '../../common/blog'
import fetch from 'isomorphic-unfetch'
import { apihost } from '../utils/apihost'

const Blogs = ({ blogs }: { blogs: Blog[] }) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="hero">
      <h1 className="title">Blogs</h1>
      <ul>
      {blogs.map((blog) => (
        <li key={blog.title}>
          <span>{blog.title}</span>--<span>{blog.content}</span>--<span>{blog.author}</span>
        </li>
      ))}
      </ul>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </div>
)

Blogs.getInitialProps = async ({ req }) => {
  const res = await fetch(`${apihost}api/blogs`)
  const json = await res.json()
  return { blogs: json }
}

export default Blogs
