import cinemas from "../../assets/images/img-footer3.png";
const OrderInfo = () => {
  return (
    <>
      <div className="ml-4">
        <h1 className="text-xl font-bold mb-6 ml">Order Info</h1>
        <div className="bg-white rounded-md p-5">
          <div className="flex flex-col items-center">
            <div className="p-3">
              <img src={cinemas} alt="" />
            </div>
            <h3 className="text-2xl">Hiflix Cinema</h3>
          </div>
          <div className="py-5 flex-col flex gap-3">
            <div className="flex justify-between">
              <div className="text-[#3A8891]">Movie Selected</div>
              <div className="font-semibold">Spider-Man: Homecoming</div>
            </div>
            <div className="flex justify-between">
              <div className="text-[#3A8891]">Tuesday, 07 July 2020</div>
              <div className="font-semibold">02:00</div>
            </div>
            <div className="flex justify-between">
              <div className="text-[#3A8891]">One ticket Price</div>
              <div className="font-semibold">$10</div>
            </div>
            <div className="flex justify-between">
              <div className="text-[#3A8891]">Seat Choosed</div>
              <div className="font-semibold">C4, C5, C6</div>
            </div>
          </div>
          <div className="border border-b-[#FFEFD6] mt-3"></div>
          <div className="flex justify-center mt-7">
            <div className="text-lg font-bold flex-1">Total Payment</div>
            <div className="text-2xl font-bold">$30</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderInfo;
