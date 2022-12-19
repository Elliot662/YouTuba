const VideoInfo = ({item}) => {
  if (!item){
    return <h1>error</h1>
  }

    return (
      <div className='bookmarked-videos'>
        <p>{item.title}</p>
        <img src={item.imgUrl} />
        {/* <button onClick={removeHandler}>Remove</button> */}
      </div>
    )
}

export default VideoInfo