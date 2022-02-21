function Timestamp(props) {
  console.log(props)
  return (
    <div className="top">
      <span className="timestamp">{props.time}</span>
    </div>
  )
}

export default Timestamp
