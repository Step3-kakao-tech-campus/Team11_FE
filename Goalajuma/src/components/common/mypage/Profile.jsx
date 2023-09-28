import styled from "styled-components";

const Profile = ({ userName, email, src }) => {
  return (
    <ProfileStyle>
      <div className="userImg">
        <img src={`public/image/${src}`} alt="user_image" />
      </div>
      <div className="userInfo">
        <div className="userName">{userName}</div>
        <div className="email">{email}</div>
      </div>
    </ProfileStyle>
  );
};

const ProfileStyle = styled.div`
  display: flex;
  .userImg {
    width: 95px;
    height: 95px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1000000000px;
    border: 2px solid #000000;
  }
  img {
    width: 100%;
  }
`;

export default Profile;
