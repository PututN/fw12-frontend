import Warning from "../../assets/images/vektor-warning.png";

const PersonalInfo = () => {
  return (
    <>
      <div className="ml-3">
        <h1 className="text-xl font-bold mb-6">Personal Info</h1>
        <div className="bg-white rounded-md p-5">
          <div>
            <form for="Full Name">
              <div className="text-base	leading-5 mb-3">Full Name</div>
              <input
                type="text"
                className="w-full border-black p-3 mt-2 mb-5 rounded-md focus:outline-none border"
                placeholder="Jonas El Rodiguez"
              ></input>
              <div className="text-base	leading-5 mb-3">Email</div>
              <input
                type="email"
                className="w-full border-black p-3 mt-2 mb-5 rounded-md focus:outline-none border"
                placeholder="jonasrodri123@gmail.com"
              ></input>
              <div className="text-base	leading-5 mb-3">Phone Number</div>
              <div className="flex w-full border-black p-3 mt-2 mb-5 rounded-md focus:outline-none border">
                <input type="text" placeholder="+62" className="w-2/12"></input>
                <input
                  type="number"
                  placeholder="81445687121"
                  className="w-full"
                ></input>
              </div>
            </form>
            <div className="flex gap-5 bg-[#F4B7404D] p-4 items-center mt-7">
              <div>
                <img src={Warning} alt="" />
              </div>
              <span className="text-[#4E4B66]">Fill your data correctly.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
