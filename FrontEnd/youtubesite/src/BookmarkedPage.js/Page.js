import {useEffect, useState} from "react"
import VideoInfo from "../components/videoInfo"

const Home = () => {
    const [videos, setVideos] = useState(null)

    useEffect(() => {
        const videoToBookmarked = async () => {
            const addVideo = await fetch("/db/bookmarked")
            const json = await addVideo.json()

            if(addVideo.ok){
                setVideos(json)
            }
        }

        videoToBookmarked()
    }, [])

    return(
        <div className="home">
            <div className="videos">
                {videos && videos.map((item) => (
                    <VideoInfo key={item._id} item={item}/>
                ))}
            </div>
        </div>
    )
}

export default Home