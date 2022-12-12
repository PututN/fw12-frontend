const MovieGoers = () => {
  return (
    <>
      <div className="px-20 py-20">
        <div className="shadow-lg text-center w-full rounded-md py-10">
          <div>
            <p>Be the vanguard of the</p>
            <p className="font-bold text-4xl leading-relaxed text-[#FAAB78]">
              Moviegoers
            </p>
          </div>
          <div>
            <form>
              <input
                type="text"
                placeholder="Type your Email"
                classname="input"
              ></input>
              <button className="py-3 px-6 rounded-md ml-3 bg-[#E3CAA5] font-bold hover:bg-[#3A8891] hover:text-white text-black">
                Join Now
              </button>
            </form>
          </div>
          <div className="mt-10 text-sm	leading-6">
            <p>By Joining you as a Cinemnar member,</p>
            <p>we will always send you the latest updates via email.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieGoers;
