import { FaRegBookmark } from "react-icons/fa6";
import PropTypes from 'prop-types'

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { title, cover, author_img, author, reading_time, posted_date, hashtags } = blog
    return (
        <div className='p-6 mb-14'>
            <img className='rounded-lg w-full' src={cover} alt={`Cover Picture of the title: ${title}`} />
            <div className='flex justify-between my-8'>
                <div className='flex gap-5 items-center'>
                    <img className='rounded-full w-16 h-16' src={author_img} alt="" />
                    <div>
                        <h3 className="text-2xl font-bold">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className='text-lg'>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)}><FaRegBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p className='mt-4 text-[#11111199]'>
                {
                    hashtags.map((hash, idx) => <span key={idx} className='text-lg mr-4'><a href="">#{hash}</a></span>)
                }
            </p>

            <button onClick={() => handleMarkAsRead(blog.reading_time)} className='text-lg underline mt-4 text-[#6047EC]' href="">Mark as read</button>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;