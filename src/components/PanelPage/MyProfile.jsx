import React from "react";
import { useSelector } from "react-redux";

function MyProfile() {
  const user = useSelector((state) => {
    return state.client.user;
  });

  return (
    <div>
      {" "}
      <aside className="flex-1 p-6 pt-2 ">
        <h1 className="text-black text-base mb-4 pl-4 md:pl-5">My Profile</h1>
        <div className="bg-white p-4 shadow-md rounded-lg border border-orange-500">
          <aside className="p-4 md:p-5">
            <div className="flex gap-10 mb-4">
              <div className="flex flex-col gap-4 text-nowrap">
                <p className=" text-sm font-medium text-gray-900">
                  Name & Surname :
                </p>
                <p className=" text-sm font-medium text-gray-900">E-mail :</p>
                <p className=" text-sm font-medium text-gray-900">Phone :</p>
              </div>
              <div className="w-full flex flex-col gap-4 text-nowrap">
                <p className=" text-sm font-medium text-gray-900">
                  {user?.name}
                </p>
                <p className=" text-sm font-medium text-gray-900">
                  {user?.email}
                </p>
                <p className=" text-sm font-medium text-gray-900">
                  {user?.phone ? user.phone : "+90 500 50 50"}
                </p>
              </div>
              <img src="/images/profile.jpg" alt="" className="w-32 h-32" />
            </div>
          </aside>
        </div>
      </aside>
    </div>
  );
}

export default MyProfile;
