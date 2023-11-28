import { useRef, useState } from 'react';
import './App.css';
import { Tweet } from './Tweet';
import { TweetForm } from './TweetForm';
import { TweetList } from './TweetList';

const DEFAULT_TWEET = [
  {
    id: 0,
    name:"Melvyn", 
    content: "Je vais bien", 
    like:100,
  },

  {
    id: 1,
    name:"Didier", 
    content: "XOOCOLL", 
    like:20,
  },

  {
    id: 2,
    name:"Luca", 
    content: "SUPPER", 
    like:0,
  },
  {
    id: 3,
    name:"Jean", 
    content: "FUNNN", 
    like:12,
  },
];

const useTweets = () => {
  const [tweets, setTweets] = useState(DEFAULT_TWEET);

  const addTweet = (tweet) => {
    
    setTweets((curr) => {

      const newTweet = {
        id: curr[curr.length - 1]?.id + 1 ?? 0,      
        name: tweet.name, 
        content: tweet.content,
        like: 0,
      };

      return [...tweets, newTweet];
    });
  }

  const onDelete = (tweetId) => {
    setTweets((curr) => curr.filter((tweet) => tweet.id !== tweetId));
  };

  const onLike = (tweetId) => {
    setTweets((curr) => {
      const copyTweet = [...curr];

      const likedTweek = copyTweet.find((tweet) => tweet.id === tweetId);
      likedTweek.like += 1;

      return copyTweet;
    })
  }; 
  
  return { onLike, onDelete, addTweet, tweets}
}

function App() {
  const {onLike, onDelete, addTweet, tweets} = useTweets();

  return (
    <div className="App p-1">
      <TweetForm onSubmit={addTweet} />
      <TweetList tweets={tweets} onDelete={onDelete} onLike={onLike} />
    </div>
  );
}

export default App;
