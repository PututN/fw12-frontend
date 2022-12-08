import MenuHistory from './MenuHistory';
import ProfileCard from '../ProfilePage/ProfileCard';
import TicketActive from "./TicketActive"
import TicketUsed from "./TicketUsed"
import TicketExpired from "./TicketExpired"

const HistoryComponent = () => {
  return (
    <div className="bg-[#F2DEBA] px-20 py-20">
      <div className="flex">
        <div className="w-1/4">
          <ProfileCard />
        </div>
        <div className="w-3/4 ml-7">
          <MenuHistory />
          <TicketActive />
          <TicketUsed />
          <TicketExpired />
        </div>
      </div>
    </div>
  );
};

export default HistoryComponent;
