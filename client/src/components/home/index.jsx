import React from "react";
import { useAuth } from "../../contexts/authContext";
import QRCode from "react-qr-code";

const Home = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <div className="flex flex-row items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="text-2xl font-bold pt-14">
            Name:{" "}
            <span className="text-gray-700">
              {currentUser.displayName || "Not available"}
            </span>
          </div>
          <div className="text-2xl font-bold pt-14">
            Email: <span className="text-gray-700">{currentUser.email}</span>
          </div>
          <div className="text-2xl font-bold pt-14">
            Phone:{" "}
            <span className="text-gray-700">
              {currentUser.phone || "Not available"}
            </span>
          </div>
          <div className="text-2xl font-bold pt-14">
            Profile Photo:{" "}
            <span className="text-gray-700">
              {currentUser.photo || "Not available"}
            </span>
          </div>
        </div>
        <div  className="ml-14">
          <QRCode value={currentUser.displayName || currentUser.email} size={230} />
        </div>
      </div>
    </>
  );
};

export default Home;
