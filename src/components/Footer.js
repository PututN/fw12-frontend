import { Link } from "react-router-dom";
import Logo from "../assets/images/logo-cinemnar.jpg";
import Sponsor1 from "../assets/images/img-footer1.png";
import Sponsor2 from "../assets/images/img-footer2.png";
import Sponsor3 from "../assets/images/img-footer3.png";
import SosmedFb from "../assets/images/logo-fb.png";
import SosmedIg from "../assets/images/logo-ig.png";
import SosmedTwit from "../assets/images/logo-twitter.png";
import SosmedYt from "../assets/images/logo-yt.png";

const Footer = () => {
  return (
    <div className="flex px-[80px] py-[30px] items-center justify-center">
      <div className="flex flex-col w-full">
        <div className="flex">
          <div className="flex-1 mr-8">
            <div>
              <Link to="/">
                <img src={Logo} alt="Cinemnar" className="h-20 w-auto"></img>
              </Link>
            </div>
            <div>
              <p className="text-[16px] font-light text-[#6E7191] mt-2.5">
                Stop waiting in line. Buy tickets conveniently, watch movies
                quietly.
              </p>
            </div>
          </div>
          <div className="flex-1 mr-8">
            <div>
              <h4 className="mb-8 font-bold text-[16px]">Explore</h4>
            </div>
            <div>
              <ul>
                <li>
                  <Link
                    to="/"
                    className="text-[#4E4B66] font-medium text-[14px]"
                  >
                    Home
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link
                    to="/"
                    className="text-[#4E4B66] font-medium text-[14px]"
                  >
                    List Movie
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 mr-8">
            <div>
              <h4 className="mb-8 font-bold text-[16px]">Our Sponsor</h4>
            </div>
            <div>
              <ul>
                <li className="mb-[25px]">
                  <img src={Sponsor1} alt="sponsor1" />
                </li>
                <li className="mb-[25px]">
                  <img src={Sponsor2} alt="sponsor2" />
                </li>
                <li className="mb-[25px]">
                  <img src={Sponsor3} alt="sponsor3" />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <div>
              <h4 className="mb-8 font-bold text-[16px]">Follow Us</h4>
            </div>
            <div>
              <ul>
                <li className="flex mb-2.5">
                  <img src={SosmedFb} alt="Facebook" className="mr-[15px]" />
                  <div> Cinemnar id</div>
                </li>
                <li className="flex mb-2.5">
                  <img src={SosmedIg} alt="Instagram" className="mr-[15px]" />
                  <div> Cinemnar id</div>
                </li>
                <li className="flex mb-2.5">
                  <img src={SosmedTwit} alt="Twitter" className="mr-[15px]" />
                  <div> Cinemnar id</div>
                </li>
                <li className="flex mb-2.5">
                  <img src={SosmedYt} alt="Youtube" className="mr-[15px]" />
                  <div> Cinemnar id</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center	font-thin mt-2.5">© 2022 Cinemnar. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
