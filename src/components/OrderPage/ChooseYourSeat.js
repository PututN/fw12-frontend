import { Link } from "react-router-dom";

const ChooseYourSeat = () => {
  return (
    <>
      <div>
        <h1 className="text-xl font-bold py-6">Choose Your Seat</h1>
        <div className="rounded-md p-15 bg-white p-10">
          <div className="flex flex-col mb-5 justify-center items-center gap-3">
            <h3 className="font-semibold">Screen</h3>

            <div className="border-4 border-black w-full rounded-mb"></div>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-8">
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer flex justify-center items-center">
                A
              </div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md   flex justify-center items-center">
                B
              </div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md   flex justify-center items-center">
                C
              </div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#0E5E6F] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#0E5E6F] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#0E5E6F] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md   flex justify-center items-center">
                D
              </div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md   flex justify-center items-center">
                E
              </div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md  flex justify-center items-center">
                F
              </div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md  flex justify-center items-center">
                G
              </div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer  flex justify-center items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md  flex  items-center justify-center">
                1
              </div>
              <div className="w-7 h-7 m-1 rounded-md flex justify-center  items-center">2</div>
              <div className="w-7 h-7 m-1 rounded-md flex  items-center justify-center">3</div>
              <div className="w-7 h-7 m-1 rounded-md flex  items-center justify-center">4</div>
              <div className="w-7 h-7 m-1 rounded-md flex  items-center justify-center">5</div>
              <div className="w-7 h-7 m-1 rounded-md flex  items-center justify-center">6</div>
              <div className="w-7 h-7 m-1 rounded-md flex  items-center justify-center">7</div>
            </div>
            <div className="grid grid-cols-7 ml-3">
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer bg-[#FFEFD6] flex  items-center"></div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer flex  items-center justify-center">
                8
              </div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer flex  items-center justify-center">
                9
              </div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer flex  items-center justify-center">
                10
              </div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer flex  items-center justify-center">
                11
              </div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer flex  items-center justify-center">
                12
              </div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer flex  items-center justify-center">
                13
              </div>
              <div className="w-7 h-7 m-1 rounded-md cursor-pointer flex  items-center justify-center">
                14
              </div>
            </div>
          </div>
          <div className="mt-7">
            <h3 className="text-lg font-semibold">Seating Key</h3>
            <div className="flex gap-7">
              <div className="flex mt-3">
                <div className="w-8 h-8 m-1 items-center bg-[#FFEFD6] rounded-md flex items-center"></div>
                <div className="flex items-center ml-3">Available</div>
              </div>
              <div className="flex mt-3">
                <div className="w-8 h-8 m-1 items-center bg-[#0E5E6F] rounded-md flex items-center"></div>
                <div className="flex items-center ml-3">Selected</div>
              </div>
              <div className="flex mt-3">
                <div className="w-8 h-8 m-1 items-center bg-black rounded-md flex items-center"></div>
                <div className="flex items-center ml-3">Sold</div>
              </div>
            </div>
          </div>
        </div>
          <div className="flex justify-between mt-10">
            <Link to='/ViewAll' className="p-3 text-center w-1/3 border-2 border-black rounded-lg text-white font-bold bg-[#665A48] hover:bg-[#3A8891]">Change your Movie</Link>
            <Link to='/ViewAll' className="p-3 text-center w-1/3 border-2 border-black rounded-lg font-bold bg-[#0E5E6F] hover:bg-[#3A8891] text-white">Checkout Now</Link>
          </div>
      </div>
    </>
  );
};

export default ChooseYourSeat;
