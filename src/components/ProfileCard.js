import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import http from "../helpers/http";
import { logout as logoutAction } from "../redux/reducers/authReducers";
import user from "../assets/images/user.png";

const ProfileCard = () => {
  const dispatch = useDispatch();
  const [profile, setProfile] = React.useState({});
  const token = useSelector((state) => state.auth.token);
  const fetchProfile = async () => {
    try {
      const response = await http(token).get("/profile");
      setProfile(response?.data?.results);
    } catch (error) {
      if (error) console.log(error);
    }
  };
  useEffect(() => {
    if (token) {
      fetchProfile();
    }
  }, [token]);

  //UPLOAD PHOTO

  const [errorSize, setErrorSize] = useState(false);
  const [successUpload, setSuccessUpload] = useState(false);

  const [errorPicture, setErrorPicture] = useState(false);
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [file, setFile] = useState(false);
  const handleUploadPhoto = async (e) => {
    try {
      if (file) {
        if (file?.size <= 5024 * 1024) {
          setLoadingUpload("loading...");
          const form = new FormData();
          form.append("picture", file);
          const response = await http(token).patch("/profile/updated", form, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          setLoadingUpload(false);
          setSuccessUpload(response.data.message);
          setFile(false)
          setTimeout(() => {
            setSuccessUpload(false);
            fetchProfile();
          }, 3000);
        } else {
          setErrorSize("Please upload photo less than 5 MB");
          setTimeout(() => {
            setErrorSize(false);
          }, 3000);
        }
      } else {
        setErrorPicture("Please Select photo");
        setTimeout(() => {
          setErrorPicture(false);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="bg-white rounded-lg">
        <div className="p-8">
          <h1>INFO</h1>
          <div className="flex flex-col items-center mt-4 relative gap-5">
            {profile.picture ? (
              <img
                src={profile.picture}
                alt="profile"
                className="w-32 rounded-full aspect-square object-cover"
              />
            ) : (
              <img src={user} alt="profile" className="w-32 rounded-full" />
            )}
            <div className="flex flex-col gap-3">
              <input
                accept="image/png, image/jpeg, image/jpg"
                type="file"
                name="picture"
                id="picture"
                className="hidden"
                onChange={(e) => setFile(e.target.files[0])}
              ></input>
              <label htmlFor="picture" className="btn bg-[#C539B4]">
                Select Picture
              </label>
              {file.name ? `${file.name.slice(0, 15)}...` : null}
              {setFile && (
                <button
                  className="btn bg-[#EF9A53] mt-5"
                  onClick={handleUploadPhoto}
                >
                  Upload
                </button>
              )}
              {errorPicture && (
                <div className="font-bold text-md text-red-500 text-center">
                  {errorPicture}
                </div>
              )}
              {loadingUpload && (
                <div className="font-bold text-md text-blue-500 text-center">
                  {loadingUpload}
                </div>
              )}

              {errorSize && (
                <div className="font-bold text-md text-red-500 text-center">
                  {errorSize}
                </div>
              )}
              {successUpload && (
                <div className="font-bold text-md text-green-500 text-center">
                  {successUpload}
                </div>
              )}
            </div>

            <div>
              <h2
                className="
                font-semibold text-xl leading-8	text-center"
              >
                {profile?.firstName} {profile?.lastName}
              </h2>
              <p className="text-center text-sm">Moviegoers</p>
            </div>
          </div>
        </div>
        <div className="border-2 w-full mb-5 border-[#F2DEBA]" />
        <div className="py-8 px-8">
          <button
            type="button"
            onClick={() => dispatch(logoutAction())}
            className="w-full py-3 rounded-lg text-white btn bg-[#852999] "
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
