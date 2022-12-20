const VideoInfo = ({item}) => {
  if (!item){
    return <h1>Their are no bookmarked videos</h1>
  }

  const removeVideo1 = async () => {
    const response = await fetch("/db/bookmarked/" + item._id, {
      method: "DELETE"
    })
    const json = await response.json()

    if(response.ok){
      console.log("Video removed")
    }
  }

    return (
      <div className='bookmarked-videos'>
        <p>{item.title}</p>
        <img src={item.imgUrl} />
        <br />
        <button onClick={removeVideo1}>Remove</button>
      </div>
    )
}

export default VideoInfo