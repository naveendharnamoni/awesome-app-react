interface MessageProps {
    text: string;
    color?: string;
}
function Message(props: MessageProps){
    console.log("Message", props);
    return (
        <div>
            <h4 style={{color: props.color}}>Message: {props.text}</h4>
            <p>Generated at: {new Date().toLocaleString()}</p>
        </div>
    )
}

export default Message;