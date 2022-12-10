import React from 'react'
import { GetServerSideProps } from 'next'
import Layout from '../components/Layout'
import User, { UserProps } from '../components/User'
import { makeSerializable } from '../lib/util'
import prisma from '../lib/prisma'

type Props = {
  feed: PostProps[]
}

const Blog: React.FC<Props> = props => {
  return (
    <Layout>
      <div className="page">
        <h1>Users</h1>
        <main>
          {props.users.map(user => (
            <div key={user.email} className="user">
              <User user={user} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .user {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .user:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .user + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await prisma.user.findMany({
    select: {
      email: true,
      name: true,
    },
  })
  return {
    props: { users: makeSerializable(users) },
  }
}

export default Blog
