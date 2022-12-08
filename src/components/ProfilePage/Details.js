const Details = () => {
  return (
    <>
      <div className="mt-5 bg-white rounded-md p-7">
        <h1 className="font-semibold text-[#14142B]">Details Information</h1>
        <div className="border border-3 my-5"></div>
        <div className="flex gap-4">
          <div className="flex flex-col w-1/2">
            <form for="">
              <div className="mb-2.5">First Name</div>
              <input
                type="text"
                className="p-3 border border-2 rounded-md bg-[#FEFCF3] w-full"
                placeholder="Jonas"
              ></input>
              <div className="my-2.5">E-mail</div>
              <input
                type="email"
                className="p-3 border border-2 rounded-md bg-[#FEFCF3] w-full"
                placeholder="jonasrodri123@gmail.com"
              ></input>
            </form>
          </div>
          <div className="flex flex-col w-1/2">
            <form for="">
              <div className="mb-2.5">Last Name</div>
              <input
                type="text"
                className="p-3 border border-2 rounded-md bg-[#FEFCF3] w-full"
                placeholder="El Rodriguez"
              ></input>
              <div className="my-2.5">Phone Number</div>
              <div className="flex">
                <input
                  type="text"
                  placeholder="+62"
                  className="p-3 border border-2 rounded-md bg-[#FEFCF3] w-1/5"
                ></input>
                <input
                  type="number"
                  placeholder="81445687121"
                  className="p-3 border border-2 rounded-md bg-[#FEFCF3] w-full"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
      <button className="w-1/4 mt-5 p-4 rounded-lg text-white bg-[#0E5E6F] hover:bg-[#3A8891]">
        Update Changes
      </button>
    </>
  );
};

export default Details;
