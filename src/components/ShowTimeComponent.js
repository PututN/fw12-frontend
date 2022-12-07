import Cinema1 from "../assets/images/img-footer1.png";
import Cinema2 from "../assets/images/img-footer2.png";
import Cinema3 from "../assets/images/img-footer3.png";

const ShowTimeComponent = () => {
  return (
    <>
      <div className="bg-[#F2DEBA] flex flex-col items-center py-20 gap-10">
        <div className="font-bold text-2xl">Showtimes and Tickets</div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input className="p-3 rounded-md w-[220px]" type="date" />
          </div>
          <div>
            <select
              className="p-3 rounded-md w-[220px]"
              name="location"
              id="location"
            >
              <option value="">Purwokerto</option>
              <option value="">Yogyakarta</option>
              <option value="">Solo</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 w-full h-full px-20">
          <div className="bg-white rounded-lg p-10">
            <div className="grid grid-cols-2 mb-5">
              <div className="flex flex-wrap justify-center w-full h-full content-center">
                <img src={Cinema1} alt="" />
              </div>
              <div>
                <div className="font-semibold text-2xl">ebv.id</div>
                <div className="font-light text-sm">
                  Whatever street No.12, South Purwokerto
                </div>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-4 mt-5 mb-5 text-center gap-2">
              <div>08:30am</div>
              <div>10:30am</div>
              <div>12:00pm</div>
              <div>02:00pm</div>
              <div>04:30pm</div>
              <div>07:00pm</div>
              <div>08:30pm</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="">Price</div>
              <div className="text-right font-semibold">$10.00/seat</div>
            </div>
            <div className="w-full bg-[#3A8891] hover:bg-[#0E5E6F] text-white cursor-pointer text-base font-bold text-center rounded-md mt-5 py-2">
              Book Now
            </div>
          </div>
          <div className="bg-white rounded-lg p-10">
            <div className="grid grid-cols-2 mb-5">
              <div className="flex flex-wrap justify-center w-full h-full content-center">
                <img src={Cinema2} alt="" />
              </div>
              <div>
                <div className="font-semibold text-2xl">CineOne21</div>
                <div className="font-light text-sm">
                  Downcare street No. 21, East Purwokerto
                </div>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-4 mt-5 mb-5 text-center gap-2">
              <div>08:30am</div>
              <div>10:30am</div>
              <div>12:00pm</div>
              <div>02:00pm</div>
              <div>04:30pm</div>
              <div>07:00pm</div>
              <div>08:30pm</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="">Price</div>
              <div className="text-right font-semibold">$10.00/seat</div>
            </div>
            <div className="w-full bg-[#3A8891] hover:bg-[#0E5E6F] text-white cursor-pointer text-base font-bold text-center rounded-md mt-5 py-2">
              Book Now
            </div>
          </div>
          <div className="bg-white rounded-lg p-10">
            <div className="grid grid-cols-2 mb-5">
              <div className="flex flex-wrap justify-center w-full h-full content-center">
                <img src={Cinema3} alt="" />
              </div>
              <div>
                <div className="font-semibold text-2xl">hiflix Cinema</div>
                <div className="font-light text-sm">
                  Colonel street No. 2, East Purwokerto
                </div>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-4 mt-5 mb-5 text-center gap-2">
              <div>08:30am</div>
              <div>10:30am</div>
              <div>12:00pm</div>
              <div>02:00pm</div>
              <div>04:30pm</div>
              <div>07:00pm</div>
              <div>08:30pm</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="">Price</div>
              <div className="text-right font-semibold">$10.00/seat</div>
            </div>
            <div className="w-full bg-[#3A8891] hover:bg-[#0E5E6F] text-white cursor-pointer text-base font-bold text-center rounded-md mt-5 py-2">
              Book Now
            </div>
          </div>
          <div className="bg-white rounded-lg p-10">
            <div className="grid grid-cols-2 mb-5">
              <div className="flex flex-wrap justify-center w-full h-full content-center">
                <img src={Cinema1} alt="" />
              </div>
              <div>
                <div className="font-semibold text-2xl">ebv.id</div>
                <div className="font-light text-sm">
                  Whatever street No.12, South Purwokerto
                </div>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-4 mt-5 mb-5 text-center gap-2">
              <div>08:30am</div>
              <div>10:30am</div>
              <div>12:00pm</div>
              <div>02:00pm</div>
              <div>04:30pm</div>
              <div>07:00pm</div>
              <div>08:30pm</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="">Price</div>
              <div className="text-right font-semibold">$10.00/seat</div>
            </div>
            <div className="w-full bg-[#3A8891] hover:bg-[#0E5E6F] text-white cursor-pointer text-base font-bold text-center rounded-md mt-5 py-2">
              Book Now
            </div>
          </div>
          <div className="bg-white rounded-lg p-10">
            <div className="grid grid-cols-2 mb-5">
              <div className="flex flex-wrap justify-center w-full h-full content-center">
                <img src={Cinema2} alt="" />
              </div>
              <div>
                <div className="font-semibold text-2xl">CineOne21</div>
                <div className="font-light text-sm">
                  Downcare street No. 21, East Purwokerto
                </div>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-4 mt-5 mb-5 text-center gap-2">
              <div>08:30am</div>
              <div>10:30am</div>
              <div>12:00pm</div>
              <div>02:00pm</div>
              <div>04:30pm</div>
              <div>07:00pm</div>
              <div>08:30pm</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="">Price</div>
              <div className="text-right font-semibold">$10.00/seat</div>
            </div>
            <div className="w-full bg-[#3A8891] hover:bg-[#0E5E6F] text-white cursor-pointer text-base font-bold text-center rounded-md mt-5 py-2">
              Book Now
            </div>
          </div>
          <div className="bg-white rounded-lg p-10">
            <div className="grid grid-cols-2 mb-5">
              <div className="flex flex-wrap justify-center w-full h-full content-center">
                <img src={Cinema3} alt="" />
              </div>
              <div>
                <div className="font-semibold text-2xl">hiflix Cinema</div>
                <div className="font-light text-sm">
                  Colonel street No. 2, East Purwokerto
                </div>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-4 mt-5 mb-5 text-center gap-2">
              <div>08:30am</div>
              <div>10:30am</div>
              <div>12:00pm</div>
              <div>02:00pm</div>
              <div>04:30pm</div>
              <div>07:00pm</div>
              <div>08:30pm</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="">Price</div>
              <div className="text-right font-semibold">$10.00/seat</div>
            </div>
            <div className="w-full bg-[#3A8891] hover:bg-[#0E5E6F] text-white cursor-pointer text-base font-bold text-center rounded-md mt-5 py-2">
              Book Now
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowTimeComponent;
