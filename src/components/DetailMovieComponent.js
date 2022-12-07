import { Link } from "react-router-dom";
import picture from "../assets/images/img-icon1.png";

const DetailMovie = () => {
  return (
    <>
      <div className="px-[80px] py-[30px] flex">
        <div className="border-2 border-black rounded-xl h-[284px]">
          <div className="p-[20px]">
            <img src={picture} alt="Images" />
          </div>
        </div>
        <div className="ml-[50px] flex-1">
          <div className="mb-5">
            <div className="font-bold text-xl">Spider-Man:Homecoming</div>
            <div className="font-normal mt-1 mb-5 text-lg">
              Adventure, Action, Sci-Fi
            </div>
            <div className="flex text-xs font-normal">
              <div className="block mr-[50px]">
                <div className="mb-4">
                  <div className="font-normal	text-sm leading-6	text-[#0E5E6F]">Release date</div>
                  <div>June 28, 2017</div>
                </div>
                <div>
                  <div className="font-normal	text-sm leading-6	text-[#0E5E6F]">Duration</div>
                  <div>2 Hour 13 Minutes</div>
                </div>
              </div>
              <div className="block">
                <div className="mb-4">
                  <div className="font-normal	text-sm leading-6	text-[#0E5E6F]">Directed by</div>
                  <div>Jon Watss</div>
                </div>
                <div>
                  <div className="font-normal	text-sm leading-6	text-[#0E5E6F]">Casts</div>
                  <div>Tom Holland, Michael Keaton, Robert Downey Jr., ...</div>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-1 border-[#DEDEDE]"></hr>
          <div className="font-semibold mt-3 mb-1	text-xl	leading-8	">Synopsis</div>
          <p className="font-normal	text-base	leading-8	text-[#4E4B66]">Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.</p>
        </div>
      </div>
    </>
  );
};

export default DetailMovie;
