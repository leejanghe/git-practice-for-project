// TODO : useState를 react로 부터 import 합니다.
import React, { useState } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';
import dummyTweets from '../static/dummyData';

const Tweets = () => {
  // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState를 적절히 활용하세요.
  const [name, setName] = useState("parkhacker");
  const [message, setMessage] = useState("");
  const [inputs , setInputs]  = useState (dummyTweets);


  const handleButtonClick = (event) => {
    const tweet = { 
      id: inputs.length+1,
      username: name,
      content: message, 
      picture: `https://randomuser.me/api/portraits/men/98.jpg`,
      createdAt: new Date().toLocaleDateString('ko-kr')
    };
    // TODO : Tweet button 엘리먼트 클릭시 작동하는 함수를 완성하세요.
    // 트윗 전송이 가능하게 작성해야 합니다.
    
    setInputs([tweet,...inputs]);
  };

  const handleChangeUser = (event) => {
    // TODO : Tweet input 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setName(event.target.value);
  };

  const handleChangeMsg = (event) => {
    // TODO : Tweet textarea 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setMessage(event.target.value);
  };



  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  type="text"
                  defaultValue="parkhacker"
                  placeholder="your username here.."
                  className="tweetForm__input--username"
                  onChange = {handleChangeUser}
                  ></input>
                <textarea className='tweetForm__input--message'
                onChange = {handleChangeMsg}></textarea>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요. */}
                  {'total: '+ inputs.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              <button className='tweetForm__submitButton' 
              onClick = {handleButtonClick}>Tweet</button>
              {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
              
            </div>
          </div>
        </div>
      </div>
      <div className="tweet__selectUser"></div>
      <ul className="tweets" onChange = {handleChangeMsg}>
        {/* TODO : 하나의 트윗이 아니라, 주어진 트윗 목록(inputs) 갯수에 맞게 보여줘야 합니다. */}
        {inputs.map((el) => (
          <Tweet key = {el.id} tweet={el} />
        ))}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;