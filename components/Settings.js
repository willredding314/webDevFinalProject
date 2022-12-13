import {CurrentUserContext} from "@/components/CurrentUserProvider";
import {useContext} from "react";

const Settings = ({user}) => {

  const { currentUser } = useContext(CurrentUserContext);

  const updateProfile = () => {
    alert(document.getElementById("email").value)
  }

  return (
      (currentUser !== null && currentUser !== undefined && user._id === currentUser[0]._id) ?
          <form>
            <div>
              <label for="email">Email</label>
              <br/>
              <input type="email" id="email" defaultValue={user.email}/>
              <br/>
              <br/>
              <label for="userPass">Password</label>
              <br/>
              <input type="userPass" id="userPass" defaultValue={user.password}/>
              <br/>
              <br/>
              <label for="bio">Bio</label>
              <br/>
              <textarea type="bio" id="bio" defaultValue={user.bio}/>
              <br/>
              <button onClick={updateProfile}>Submit</button>
            </div>
          </form>
          :
          <div>
            <p>{user.bio}</p>
            <p>{user.username}</p>
            <p>{user.university}</p>
            <p>{user.major}</p>
          </div>
  );
}

export default Settings;