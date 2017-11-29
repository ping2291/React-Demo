import React from 'react';

const timeDiff = (before) => {
  var beforeDate = new Date(before);
  var timeBefore = beforeDate.getTime() + beforeDate.getTimezoneOffset() * 60 * 1000;
  var today = Date.now();

  var timeDiff = today - timeBefore;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = month * 12;

  if(Math.floor(timeDiff / year)){
    return Math.floor(timeDiff / year) + '年前';
  }
  if(Math.floor(timeDiff / month)){
    return Math.floor(timeDiff / month) + '月前';
  }
  if(Math.floor(timeDiff / week)){
    return Math.floor(timeDiff / week) + '周前';
  }
  if(Math.floor(timeDiff / day)){
    return Math.floor(timeDiff / day) + '天前';
  }
  if(Math.floor(timeDiff / hour)){
    return Math.floor(timeDiff / hour) + '小時前';
  }
  if(Math.floor(timeDiff / minute)){
    return Math.floor(timeDiff / minute) + '分鐘前';
  }
  if(Math.floor(timeDiff / second)){
    return Math.floor(timeDiff / second) + '秒前';
  }
};

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.medium.url;

  const publicTime = timeDiff(video.snippet.publishedAt);

  let viewCount = '';
  if(video.statistics && video.statistics.viewCount){
    viewCount = <div><div>觀看次數：{video.statistics.viewCount}•{publicTime}</div></div>;
  }

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
        <div>
          <div>{video.snippet.channelTitle}</div>
        </div>
        {viewCount}
      </div>
    </li>
  );
};

export default VideoListItem;
