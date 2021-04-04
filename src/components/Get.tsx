import { FC, useState } from 'react';
import axios from 'axios';

type Video = {
  bitrate: number;
  contentType: string;
  url: string;
  thumbnail: string;
};

/* eslint-disable */
const Get: FC = () => {
  const [video, setVideo] = useState<Video>({} as Video);
  const [tweetUlr, setTweetUrl] = useState('');

  const hundleSubmit = async () => {
    await axios
      .get('http://localhost:3001/api/v1/video', {
        params: {
          id: '1378143683476811780',
        },
      })
      .then((res) => {
        setVideo(res.data);
      });
  };

  return (
    <div>
      <h1>保存ページ</h1>
      <input
        type="text"
        onChange={(e) => {
          setTweetUrl(e.target.value);
        }}
      />
      <button
        className="w-full bg-green-500 text-white text-bold raund-md py-2 px-3 rounded-md hover:bg-green-400"
        onClick={() => hundleSubmit()}
        type="button"
      >
        書き出し
      </button>
      {video && (
        <a href={video.url}>
          <img src={video.thumbnail} />
        </a>
      )}
    </div>
  );
};

export default Get;
