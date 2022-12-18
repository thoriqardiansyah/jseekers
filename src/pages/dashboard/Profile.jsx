import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (user === null) {
      setUser(JSON.parse(Cookies.get("user")));
    }
  }, [user, setUser]);
  return (
    <div className="bg-white rounded-md shadow-md p-4 h-[60%]">
      <div className="flex flex-col justify-center items-center h-full text-medium font-bold">
        <img
          src={user?.image_url ?? "undefined"}
          alt=""
          width={300}
          height="300"
          className="rounded-lg mb-6"
        />
        <h3 className="my-6">Nama : {user?.name ?? "undefined"}</h3>
        <h3>Email : {user?.email ?? "undefined"}</h3>
      </div>
    </div>
  );
};

export default Profile;
