import MovieSelected from "./MovieSelected";
import ChooseYourSeat from "./ChooseYourSeat";
import OrderInfo from "./OrderInfo";

const OrderPageComponent = () => {
  return (
    <div className="bg-[#F2DEBA] px-20 py-20">
      <div className="flex">
        <div className="w-2/3">
          <MovieSelected />
          <ChooseYourSeat />
        </div>
        <div className="w-1/3">
          <OrderInfo />
        </div>
      </div>
    </div>
  );
};

export default OrderPageComponent;
