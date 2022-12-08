const Details = () => {
  return (
    <>
      <div className="mt-5 bg-white rounded-md p-7">
        <h1 className="font-semibold text-[#14142B]">Details Information</h1>
        <div className="border border-3 my-5"></div>
        <div className="flex gap-4">
          <div className="flex flex-col w-1/2">
            <form for="">
              <div className="mb-2.5">New Password</div>
              <input
                type="password"
                className="p-3 border border-2 rounded-md bg-[#FEFCF3] w-full"
                placeholder="Write your password"
              ></input>
            </form>
          </div>
          <div className="flex flex-col w-1/2">
            <form for="">
              <div className="mb-2.5">Confirm Password</div>
              <input
                type="password"
                className="p-3 border border-2 rounded-md bg-[#FEFCF3] w-full"
                placeholder="Write your password"
              ></input>
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
