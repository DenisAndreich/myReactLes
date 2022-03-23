import './App.css';
import { AUTHORS } from './constants/common';
import { useEffect, useState } from 'react';

function App(props) {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState('');

  useEffect(()=>{

  }, [])

  const handleInput = (event) => {
    setValue(event.target.value);
  }

  const handleButton = () => {

    if (value !== ''){
      setMessageList([...messageList, {
        text: value,
        author: AUTHORS.me
      }])
      setValue('');
    }
  }

  useEffect( () => {
    let timer;

    if (messageList.length > 0 && messageList[messageList.length - 1]?.author === AUTHORS.me){
      timer = setInterval(() => setMessageList([
        ...messageList,
        {
          text: 'Привет Я Бот',
          author:AUTHORS.bot
        }
      ]),1500)
    }

    return () => {
      clearTimeout(timer);
    }

  }, [messageList])

  return (
  <header
    className = 'App-header'>
      My Lesson 02 React JS!
      <h3>MeName: {props.myName}</h3>
      
      <>Наш массив:
        <ul className='messanger'>
          {messageList.map((item, index) => (
            <li className='messageBox'>
              <div className = 'message'>
                {item.text}
              </div>
              <div className='author'>
                {item.author}  
              </div>
              
            </li>
          ))}
        </ul>
      </>
      <div className='handleBlock'>
      <input type={'text'} value={value} className='handleInput' onChange = {handleInput} />
      <button type = {'button'} className = 'handleButton handleButton__secondary' onClick={handleButton}>Send</button>
      </div>
  </header>
  );
} 

export default App;
