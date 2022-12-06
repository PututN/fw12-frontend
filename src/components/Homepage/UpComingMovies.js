import { Link } from "react-router-dom";

const UpComingMovies = () => {
  const month = [
    "September",
    "October",
    "November",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
  ];

  const MoviesUpComing = [
    {
      id: 1,
      title: "Black Widow",
      picture: require("../../assets/images/img-icon4.png"),
      genre: "Action, Adventure, Sci-fi",
    },
    {
      id: 2,
      title: "The Witches",
      picture: require("../../assets/images/img-icon5.png"),
      genre: "Adventure, Comedy, Family",
    },
    {
      id: 3,
      title: "Tenet",
      picture: require("../../assets/images/img-icon6.png"),
      genre: "Action, Sci-fi, Thriller",
    },

    {
      id: 4,
      title: "Black Widow",
      picture: require("../../assets/images/img-icon4.png"),
      genre: "Action, Adventure, Sci-fi",
    },

    {
      id: 5,
      title: "The Witches",
      picture: require("../../assets/images/img-icon5.png"),
      genre: "Adventure, Comedy, Family",
    },
  ];
  return (
    <>
      <div className="px-20 pt-20">
        {/* TITLE UPCOMINGMOVIE */}
        <dic className="container mx-auto">
          <div className="items-center justify-between flex-row flex">
            <div className="text-2xl font-bold">Up Coming</div>
            <div className="text-medium font-semibold">
              <Link to="/">View All</Link>
            </div>
          </div>
          {/* MONTH */}
          <div className="flex flex-row gap-5 mt-10 overflow-x-auto">
            {month.map((item, index) => (
              <button
                key={`month-${index}`}
                className="border-2 w-[100px] border-[#FAAB78] rounded-md flex justify-center items-center p-2 hover:bg-[#FFDCA9] text-[#FFDCA9] hover:text-white font-bold hover:shadow-lg"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex gap-8 mt-8 px-8 overflow-x-auto">
            {MoviesUpComing.map((item) => (
              <div className="relative" key={item.id}>
                <div className="flex flex-col p-8 border-2 items-center border-[#FAAB78] rounded-lg text-center hover:bg-white w-full h-full">
                  <img
                    src={item.picture}
                    alt={item.title}
                    title={item.title}
                  ></img>
                  <div className="flex flex-col gap-2 h-full justify-end">
                    <div className="text-2xl font-semibold w-[100px] mt-2">
                      {item.title}
                    </div>
                    <div className="flex flex-row">
                      <div className="text-sm w-[100px]">{item.genre}</div>
                    </div>
                    <button className="bg-[#FFDCA9] hover:bg-[#FCF9BE] py-2 px-4 text-medium text-white rounded-md font-medium w-[100px]">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </dic>
      </div>
    </>
  );
};

export default UpComingMovies;
