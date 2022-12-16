import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./BookmarkedPage.js/Page"

function Bookmark(){
    return(
      <div className='bookmarked-videos'>
        <BrowserRouter>
        <div className='bookmarked-video'>
          <Routes>
            <Route 
                path="/"
                element={<Home />}
            />
          </Routes>
        </div>
        </BrowserRouter>
      </div>
    )
}

export default Bookmark