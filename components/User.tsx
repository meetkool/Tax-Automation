import React from 'react'
import Router from 'next/router'
import ReactMarkdown from 'react-markdown'

export type UserProps = {
  id: number;
  email: String;
  name: String;
}

const User: React.FC<{user: UserProps}> = ({ user }) => {
  const authorName = user.name ? user.name : 'Unknown email'
  return (
    <div>
        <h2>{user.email} , {user.name}</h2>
        <style jsx>{`
          div {
            color: inherit;
            padding: 2rem;
          }
        `}</style>
    </div>
  )
}

export default User
