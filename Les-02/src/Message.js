import './Message.css';

function Message(props) {
    return <div
    className='message'
    >
        {props.textMessage}</div>
}

export default Message;