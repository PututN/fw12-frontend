import profile from "../../assets/images/profile.png";

const ProfileCard = () => {
  return (
    <>
      <div className="bg-white rounded-lg">
        <div className="p-8">
          <h1>INFO</h1>
          <div className="flex flex-col items-center mt-4">
            <img src={profile} alt="profile" />
            <div>
              <h2
                className="
                font-semibold text-xl leading-8	text-center"
              >
                Jonas El Rodriguez
              </h2>
              <p className="text-center text-sm">Moviegoers</p>
            </div>
          </div>
        </div>
        <div className="border border-2 w-full mb-5 border-[#F2DEBA]" />
        <div className="py-8 px-8">
          <button className="w-full py-3 rounded-lg text-white bg-[#0E5E6F] hover:bg-[#3A8891] ">Logout</button>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
