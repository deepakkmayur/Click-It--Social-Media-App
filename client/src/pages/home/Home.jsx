import React from "react";
import ProfileSide from "../../components/profileSide/ProfileSide";
import PostSide from "../../components/PostSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  );
}

export default Home;
