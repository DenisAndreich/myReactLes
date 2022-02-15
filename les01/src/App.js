import './App.css';
import Message from './Message';


function App(props) {
  const {showRed, myName} = props;
  const topPosition = '50px';
  console.log({showRed});

  return (
  <header
    className = {` App-header ${props.showRed ? 'header-red' : 'header-blue'}`}
    style={{top: topPosition}}
    >
      My Lesson React SJ!
      <h3>MeName: {props.myName}</h3>
      <Message />
  </header>
  );
}

export default App;
