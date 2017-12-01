import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({ videos = [], playHandler }) => {
  if(!(videos instanceof Array)){
    videos = videos.data.items;
  }

  const videoItems = videos.map((video) => {
    return (
      <VideoListItem
        playHandler={playHandler}
        key={video.etag}
        video={video} />
    );
  });
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
