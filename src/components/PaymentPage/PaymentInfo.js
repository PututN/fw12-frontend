const PaymentInfo = () => {
  return (
    <>
      <div>
        <h1 className="text-xl font-bold mb-6">Payment Info</h1>
        <div className="bg-white p-5 rounded-md">
          <div className="flex">
            <div className="flex items-center flex-1 text-xl leading-6">
              Date & time
            </div>
            <div>
              <div className="p-3 text-xl leading-6">
                Tuesday, 07 July 2020 at 02:00{" "}
              </div>
            </div>
          </div>
          <div className="border border-[#E6E6E6] w-full my-4"></div>
          <div className="flex">
            <div className="flex items-center flex-1 text-xl leading-6">
              Movie title
            </div>
            <div>
              <div className="p-3 text-xl leading-6">
                Spider-Man: Homecoming{" "}
              </div>
            </div>
          </div>
          <div className="border border-[#E6E6E6] w-full my-4"></div>
          <div className="flex">
            <div className="flex items-center flex-1 text-xl leading-6">
              Cinema name
            </div>
            <div>
              <div className="p-3 text-xl leading-6">Hiflix Cinema </div>
            </div>
          </div>
          <div className="border border-[#E6E6E6] w-full my-4"></div>
          <div className="flex">
            <div className="flex items-center flex-1 text-xl leading-6">
              Date & time
            </div>
            <div>
              <div className="p-3 text-xl leading-6">
                Tuesday, 07 July 2020 at 02:00{" "}
              </div>
            </div>
          </div>
          <div className="border border-[#E6E6E6] w-full my-4"></div>
          <div className="flex">
            <div className="flex items-center flex-1 text-xl leading-6">
              Number of tickets
            </div>
            <div>
              <div className="p-3 text-xl leading-6">3 pieces </div>
            </div>
          </div>
          <div className="border border-[#E6E6E6] w-full my-4"></div>
          <div className="flex">
            <div className="flex items-center flex-1 text-xl leading-6">
            Total payment
            </div>
            <div>
              <div className="p-3 leading-6 text-2xl font-bold">$30</div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default PaymentInfo;
