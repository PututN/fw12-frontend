import { Link } from "react-router-dom";

const MovieSelected = () => {
  return (
    <>
      <div>
        <h1 className="text-xl font-bold mb-6">Movie Selected</h1>
        <div className="bg-white flex p-5 rounded-md">
          <div className="text-xl font-bold flex-1">Spider-Man: Homecoming</div>
          <div>
            <Link to='/ViewAll' className="p-3 rounded-lg text-white font-semibold bg-[#665A48] hover:bg-[#3A8891]">Change movie</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieSelected;
