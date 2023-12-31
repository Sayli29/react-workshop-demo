import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title:'blog1', body:'lorem ipsum....', author:'tom', id:1},
        {title:'blog2', body:'lorem ipsum....', author:'Rom', id:2},
        {title:'blog3', body:'lorem ipsum....', author:'jerry', id:3}])

        const handleDelete = (id) =>{
            const newBlogs = blogs.filter(blog => blog.id !== id);
            setBlogs(newBlogs)
        }
        
        useEffect(()=>{
            console.log("useEffect ran")
        })

    return(
        <div className='home'>
            <BlogList blogs={blogs} title= 'All Blogs' handleDelete={handleDelete}/>
        </div>
    );
}

export default Home;