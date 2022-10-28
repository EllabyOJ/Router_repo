import "./App.css";
//import ProfileImage from "./ProfileImage";
//import ProfileName from "./ProfileName";
//import Bio from "./Bio";
import React, { useContext, useState, createContext } from "react";

const AuthContext = createContext({
  user: {
    username: "EllabyOJ",
    name: "Oloko Kausarat",
    email: "Olokojoke@gmail.com",
  },
  verified: false,
});

function AuthProvider(props) {
  const [user, setUser] = useState({
    username: "EllabyOJ",
    name: "Oloko Kausarat",
    email: "olokojoke@gmail.com",
    bio: "Barack Obama is the current and 44th president of the United States of America",
  });

  return (
    <AuthContext.Provider
      value={{
        user: user,
        verified: true,
        setUser: setUser,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}

function UserBio() {
  const { user, setUser } = useContext(AuthContext);

  const handleBioUpdate = (event) => {
    event.preventDefault();
    setUser((prev) => {
      return {
        ...prev,
        bio: "Barack Obama was born in Honolulu and is the 44th president of United States of America",
      };
    });
  };

  return (
    <div>
      <h1>User Bio</h1>
      <div>{user.bio}</div>
      <button onClick={handleBioUpdate}>Update</button>
    </div>
  );
}

function UserProfile() {
  const { user, verified } = useContext(AuthContext);

  return (
    <div>
      <h1>User Profile</h1>
      <div>Username: {user.username}</div>
      <div>Name: {user.name} </div>
      <div>Email: {user.email} </div>
      <div>Verified: {verified ? "Yes" : "No"} </div>
      <UserBio />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <section className="main-page">
        <UserProfile />
      </section>
    </AuthProvider>
  );
}

export default App;
