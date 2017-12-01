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

const VideoListItem = ({video, playHandler}) => {
  const imageUrl = video.snippet.thumbnails.medium.url;
  const publicTime = timeDiff(video.snippet.publishedAt);

  let viewCount = '';
  let channekTitle = '';

  if(video.statistics && video.statistics.viewCount){
    let count = video.statistics.viewCount;

    if(Math.floor(count / 100000000)){
      count = `${Math.floor(count / 100000000)}億`;
    }

    if(Math.floor(count / 10000)){
      count = `${Math.floor(count / 10000)}萬`;
    }

    viewCount = <div className='videoInfo'>觀看次數：{count}&nbsp;•&nbsp;{publicTime}</div>;
  }

  if(video.snippet && video.snippet.channelTitle){
    channekTitle = <div className='videoInfo'>{video.snippet.channelTitle}</div>;
  }

  var playVideoFunc = () => {
    playHandler(video);
  };

  return (
    <li className="list-group-item" onClick={playVideoFunc}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" alt='' src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
        {channekTitle}
        {viewCount}
      </div>
    </li>
  );
};

export default VideoListItem;
