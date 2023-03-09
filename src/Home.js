import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const[blogs,setBlogs]= useState([
    {title:'How to learn reactjs',body:'lorem ipsum...', author:'Camio',id:1},
    {title:'React full roadmap',body:'lorem ipsum...', author:'Rijoy',id:2},
    {title:'Best tutorial for learning react',body:'lorem ipsum...', author:'Bijoy',id:3},
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title={"All My Blogs"}/>
    </div>
  );
};
export default Home;
