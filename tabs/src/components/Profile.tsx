import { useState, type ChangeEvent } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState("https://placehold.co/1500x400");

  const [profileUrl, setProfileUrl] = useState("https://placehold.co/100");

  const handleBannerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);

    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);

    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative w-[94%] ml-20">
      <div className="relative">
        <img
          src={bannerUrl}
          alt="Banner"
          className="w-full h-60 object-cover"
        />
        <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            className="hidden"
            onChange={handleBannerChange}
          />
        </button>
      </div>
      <div className="flex items-center ml-4 mt-8">
        <img
          src={profileUrl}
          alt="Profile logo"
          className="w-40 h-40 object-cover rounded-full border-white relative"
        />
        <button className="absolute ml-[3.6rem] mt-24 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            className="hidden"
            onChange={handleProfileChange}
          />
        </button>
        <div className="ml-4 mt-4">
          <h1 className="text-2xl font-bold">Lorem ipsum</h1>
          <div className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non expedita mollitia molestiae esse quaerat quam sit molestias quo, nemo ad saepe porro? Nam dolor nemo sint omnis error ab! Iusto.</div>
        </div>
      </div>
      <Tabs />
    </div>
  );
};

export default Profile;
