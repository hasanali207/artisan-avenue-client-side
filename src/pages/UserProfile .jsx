import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const UserProfile = () => {
  const { user, updateUserData } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  const handleUpdateProfile = () => {
    updateUserData(name, photo)
      .then(() => {
        setName('')
        setPhoto('')
        toast.success("User data updated successfully.");
      })
      .catch((error) => {
        
      });
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <label>
          Display Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Photo URL:
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleUpdateProfile}>Update Profile</button>
      {user && (
        <div>
          <h3>Current Profile</h3>
          <p>Display Name: {user.displayName}</p>
          <p>Photo URL: {user.photoURL}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
