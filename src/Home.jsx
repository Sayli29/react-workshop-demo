import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title:'blog1', body:'lorem ipsum....', author:'tom', id:1},
        {title:'blog2', body:'lorem ipsum....', author:'Rom', id:2},
        {title:'blog3', body:'lorem ipsum....', author:'jerry', id:3}])
    return(
        <div className='home'>
            <BlogList blogs={blogs} title= 'All Blogs'/>
        </div>
    );
}

export default Home;