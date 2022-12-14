import Image from "next/image";
import Memoji from "../Images/profile.png";

const Profile = () => {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-xl sm:h-64 md:w-[28.5rem] xl:w-[25rem] ">
      <div className="bg-blue-500 p-6 pb-14 portrait:bg-indigo-500 landscape:bg-teal-500 ">
        <span className="text-2xl text-white">Profile</span>
      </div>
      <div className="relative -top-5 rounded-3xl bg-white p-6 ">
        <div className="relative -top-16 flex items-end justify-between ">
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-500">Previous Orders</span>
            {/* <span className="font-medium">{isLoggedin ? "Login" : 340}</span> */}
            <span className="font-medium">340</span>
          </div>
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-300 transition-colors group-hover:bg-red-300">
            <Image
              src={Memoji}
              alt="profile"
              layout="fill"
              placeholder="blur"
              className=" object-contain "
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-500">Your Total Spent</span>
            <span className="font-medium">$2,310</span>
          </div>
        </div>
        <div className="relative -mt-10 -mb-5 flex flex-col items-center">
          <span className="text-lg font-medium">Chae Yeongmin</span>
          <span className="text-sm text-gray-500">Seoul , S.Korea </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
