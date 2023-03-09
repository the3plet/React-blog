import { useState } from "react";

const Home = () => {
  const[blogs,setBlogs]= useState([
    {title:'How to learn reactjs',body:'lorem ipsum...', author:'Camio',id:1},
    {title:'React full roadmap',body:'lorem ipsum...', author:'Rijoy',id:2},
    {title:'Best tutorial for learning react',body:'lorem ipsum...', author:'Bijoy',id:3},
  ]);
  return (
    <div className="home">
      {blogs.map((blog) =>(
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
          </div>
      ))}
    </div>
  );
};
export default Home;
