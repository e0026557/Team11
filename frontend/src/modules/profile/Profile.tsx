import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Profile: React.FC = () => {
  const [userData, setUserData] = useState({
    id: 0,
    name: "",
    username: "",
    email: "",
  });

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const userId: string | null = sessionStorage.getItem("userId");
      if (userId !== null) {
        const userIdNumber: number = parseInt(userId, 10);
        try {
          const response = await axios.post(
            `https://pjwui6c4nj.execute-api.ap-southeast-1.amazonaws.com/dev/userapi/user/GetUserProfile?userId=${userIdNumber}`
          );
          setUserData(response.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.log("userId is null");
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleUpdateClick = async () => {
    try {
      await axios.post(
        "https://rvdq38ozu8.execute-api.ap-southeast-1.amazonaws.com/dev/userapi/user/UpdateUser",
        userData
      );
      setEditMode(false);
      toast.success("Profile details updated successfully!");
    } catch (error) {
      console.error("Error updating user data:", error);
      toast.error("Failed to update profile details");
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">My Profile</h1>
      <div className="mb-4 flex flex-col">
        <div className="flex items-center mb-2">
          <label className="text-gray-600 font-bold mr-2">Name:</label>
          {editMode ? (
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              className="border p-2"
            />
          ) : (
            <span>{userData.name}</span>
          )}
        </div>
        <div className="flex items-center mb-2">
          <label className="text-gray-600 font-bold mr-2">Username:</label>
          {editMode ? (
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              className="border p-2"
            />
          ) : (
            <span>{userData.username}</span>
          )}
        </div>
        <div className="flex items-center mb-2">
          <label className="text-gray-600 font-bold mr-2">Email:</label>
          {editMode ? (
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="border p-2"
            />
          ) : (
            <span>{userData.email}</span>
          )}
        </div>
      </div>
      {editMode ? (
        <button
          onClick={handleUpdateClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update
        </button>
      ) : (
        <button
          onClick={() => setEditMode(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Edit Details
        </button>
      )}
    </div>
  );
};

export default Profile;
