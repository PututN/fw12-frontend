import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import http from "../../helpers/http";
import { logout as logoutAction } from "../../redux/reducers/authReducers";
import user from "../../assets/images/user.png";
import { Edit2 } from "react-feather";

const ProfileCard = () => {
  const [toggle, setToggle] = React.useState(false);

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

  // const [picture, setPicture] = useState([]);
  // console.log(picture.target.files[0]);
  const [errorSizeUpload, setErrorSizeUpload] = useState(false);
  const [errorTypeUpload, setErrorTypeUpload] = useState(false);

  const uploadPicture = async (e) => {
    try {
      e.preventDefault();
      console.log(e)
      console.log(e.target.files[0])
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("picture", file);
      if (file) {
        if (file.size <= 50000) {
          if (file.type === "image / png" || "image / jpg" || "image / jpeg") {
            const { data } = await http(token).patch(
              "/profile/updated",
              formData,
              {
                headers: {
                  "Content-type": "multipart/form-data",
                },
              }
            );
          } else {
            setErrorTypeUpload(
              "Please choose photo with format JPG, JPEG, PNG"
            );
            setTimeout(() => {
              setErrorTypeUpload(false);
            }, 3000);
          }
        } else {
          setErrorSizeUpload("Please choose photo less than 5 MB");
          setTimeout(() => {
            setErrorSizeUpload(false);
          }, 3000);
        }
      } else {
        alert("Please choose image first");
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
                className="w-32 rounded-full"
              />
            ) : (
              <img src={user} alt="profile" className="w-32 rounded-full" />
            )}
            <Edit2
              onClick={() => setToggle(!toggle)}
              className="absolute top-[100px] right-4"
            />
            <form
              onSubmit={uploadPicture}
              className=""
            >
              <input
                type="file"
                name="picture"
                // onChange={(file) => setPicture(file)}
              ></input>
              <button type="submit" className="">
                Upload Image
              </button>
            </form>

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
            className="w-full py-3 rounded-lg text-white bg-[#0E5E6F] hover:bg-[#3A8891] "
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
