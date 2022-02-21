function Message(props) {
  console.log(props)
  return (
    <div className="message">
      <div className="body">
        <p className="message">{props.message}</p>
      </div>
    </div>
  )
}

export default Message
