import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks , setBookmarks] = useState([])
  const handleAddToBookmark=(blog)=>{
    // console.log(blog.author)
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const [timeSpend, setTimeSpend] = useState(0)
  const handleMarkAsRead =(id,time)=>{
    // console.log(time)
    const newTimeSpend = timeSpend + time;
    setTimeSpend(newTimeSpend)
    // console.log('remove bookmark', id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)
  }

  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className='flex p-5 gap-[30px]'>
        <Blogs 
        handleAddToBookmark={handleAddToBookmark}
        handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks 
        bookmarks={bookmarks}
        timeSpend={timeSpend}
        ></Bookmarks>
      </div>
    </div>


  )
}

export default App
