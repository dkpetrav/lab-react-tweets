function ProfileImage(props) {
  console.log(props)
  return (
    <div className="profileimage">
      <img src={props.image} className="profile" alt="profile" />
    </div>
  )
}

export default ProfileImage
