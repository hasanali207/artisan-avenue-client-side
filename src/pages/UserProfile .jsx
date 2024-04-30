import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { Fade } from "react-awesome-reveal";

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
       <div className='w-full py-10 bg-slate-200 rounded-2xl my-3 text-center'>
            <Fade><h1 className='text-3xl text-center my-5'>Update Your Profile</h1>
            </Fade>
            <span>Email: {user?.email}

            </span>
            </div >
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
      <button onClick={handleUpdateProfile} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 my-3" type="submit">
  Update User
</button>
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
