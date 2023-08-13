import {useState} from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title:'blog1', body:'lorem ipsum....', author:'tom', id:1},
        {title:'blog2', body:'lorem ipsum....', author:'Rom', id:2},
        {title:'blog3', body:'lorem ipsum....', author:'jerry', id:3}])
    return(
        <div className='home'>
            {blogs.map(blog=>(
                <div className='blog-preview' key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;