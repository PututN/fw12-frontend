import HomepageBanner from "../../assets/images/img-homepage.png";

const SectionOne = () => {
  return (
    <div className="flex flex-row justify-between items-center px-20">
      <div className="flex-1 text-center">
        <div className="text-5xl font-semibold leading-relaxed text-[#FAAB78]">
          Find out now!
        </div>
        <div className="text-2xl font-extralight">
          Watch and Happy your favorite movie with your Family and Friends
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img src={HomepageBanner} alt="banner" title="Banner" />
      </div>
    </div>
  );
};

export default SectionOne;
