import React from 'react'

const Posts = ({posts, loading}) => {
  console.log({ posts })
  
  if (loading) { 
    return <h2 style={{ marginTop: "200px", color: "pink" }}>Loading...</h2>
  }

  return (
    <div>      
      {/* {JSON.stringify(posts)} */}
      {posts.map((post) => (
        <div key={post.id} className='panel'>
          <h3>{post.title.slice(0, 15)}</h3>
          <span>{post.title.slice(0, 60)}</span>
        </div>
      ))}
    </div>
  )
}

export default Posts