import React from 'react'
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImFire } from "react-icons/im";


const Footer = () => {
  return (
    <div className="p-0 bg-[#191919] w-full">
      <div className="w-full flex bg-[#161616] py-10">
        <div className="flex pr-8 gap-10">
          <div className="flex flex-col gap-4 w-1/2 pl-[105px] pr-2.5 ">
            <h5 className="text-white mb-4 text-lg">Most Popular</h5>
            <div className="flex flex-col gap-4  divide-y divide-gray-600 pr-2.5 ">
              <div className="flex items-center gap-4 w-[380px] h-[75px] pr-2.5 ">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/kamil-s-SuPAbuuK7f4-unsplash-150x100.jpg"
                  alt="Popular Xbox Game"
                  className="w-[97px] h-[74px] object-cover rounded-[10px]"
                />
                <div>
                  <p className="text-white text-sm hover:text-[#3C3FDE] cursor-pointer	 ">
                    Popular New Xbox Game Pass Game Being Review Bombed With “Os”
                  </p>
                  <div className="flex items-center text-gray-400 text-xs ">
                    <p>Jan 14, 2021</p>
                    <span className="flex items-center text-red-600 ml-2">
                      <ImFire className="mr-1" /> 7,792 Views
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 w-[380px] h-[75px] pt-5">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/jonathan-kemper-poSms2EzfNY-unsplash-150x100.jpg"
                  alt="Samsung MicroLED"
                  className="w-[97px] h-[74px] object-cover rounded-[10px]"
                />
                <div>
                  <p className="text-white text-sm hover:text-[#3C3FDE] cursor-pointer	">
                    Samsung is Developing Bright MicroLED on Displays for AR Headsets
                  </p>
                  <div className="flex items-center text-gray-400 text-xs">
                    <p>Jan 14, 2021</p>
                    <span className="flex items-center text-red-600 ml-2">
                      <ImFire className="mr-1" /> 6,914 Views
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 w-[380px] h-[75px] pt-5">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2021/01/0247d91565b69ed9ddba4ec59ac97963-1-150x86.jpg"
                  alt="Mortal Kombat Announcement"
                  className="w-[97px] h-[74px] object-cover rounded-[10px]"
                />
                <div>
                  <p className="text-white text-sm hover:text-[#3C3FDE] cursor-pointer	">
                    Warner Bros. Games Announces Mortal Kombat: Onslaught
                  </p>
                  <div className="flex items-center text-gray-400 text-xs">
                    <p>Jan 14, 2021</p>
                    <span className="flex items-center text-red-600 ml-2">
                      <ImFire className="mr-1" /> 4,418 Views
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-1/2">
            <h5 className="text-white mb-4 text-lg">Our Picks</h5>
            <div className="flex flex-col gap-4 divide-y divide-gray-600">
              <div className="flex items-center gap-4">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/thisisengineering-raeng-a7A9O5htrKs-unsplash-150x100.jpg"
                  alt="Game Development"
                  className="w-[97px] h-[74px] object-cover rounded-[10px]"
                />
                <div>
                  <p className="text-white text-sm hover:text-[#3C3FDE] cursor-pointer	">
                    Game Development This Week: Save On Essential Tools and More
                  </p>
                  <div className="flex items-center text-gray-400 text-xs">
                    <p>Nov 19, 2022</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 w-[380px] h-[75px] pt-5">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_242235046_xl-2015-1-150x85.jpg"
                  alt="Mortal Kombat Announcement"
                  className="w-[97px] h-[74px] object-cover rounded-[10px]"
                />
                <div>
                  <p className="text-white text-sm hover:text-[#3C3FDE] cursor-pointer	">
                    Is the Hyperloop Doomed? What Elon Musk’s Latest Setback Really Means
                  </p>
                  <div className="flex items-center text-gray-400 text-xs">
                    <p>Jan 14, 2021</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 w-[380px] h-[75px] pt-5">
                <img
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/remy_loz-3vVzdb8KKIw-unsplash-150x100.jpg"
                  alt="Mortal Kombat Announcement"
                  className="w-[97px] h-[74px] object-cover rounded-[10px]"
                />
                <div>
                  <p className="text-white text-sm hover:text-[#3C3FDE] cursor-pointer	">
                    The Best Early Black Friday Deals on Gaming Laptops and Accessories
                  </p>
                  <div className="flex items-center text-gray-400 text-xs">
                    <p>Jan 14, 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[369px] h-[349px] bg-[#000] flex flex-col items-center mr-10">
          <h3 className="text-[#ECECEC] text-[24px] pt-[26px]">Subscribe to Updates</h3>
          <p className="text-[#CCC] text-center w-[296px] h-[48px] pt-[10px]">
            Get the latest creative news from FooBar about art, design and business.
          </p>
          <div className="flex flex-col items-center space-y-4 pt-9">
            <input
              className="w-[296px] h-[44px] px-4 rounded-[10px] border border-[#CCC] bg-[#151515] text-[#CCC] text-center focus:outline-none focus:border-[#3C3FDE]"
              type="email"
              name="EMAIL"
              placeholder="Your email address..."
            />
            <input
              className="w-[296px] h-[44px] bg-[#3C3FDE] text-white rounded-[10px] cursor-pointer hover:bg-[#151515] focus:outline-none"
              type="submit"
              value="Subscribe"
            />
            <label className="text-[#CCC] text-xs flex items-center gap-2 text-left">
              <input type="checkbox" className="mt-0" />
              <p className="m-0">By signing up, you agree to our terms and Privacy Policy.</p>
            </label>
          </div>

        </div>
      </div>

      <div className="w-full h-[266px] bg-[#070707] flex flex-col justify-center items-center gap-4">
        <div className="text-white flex gap-6 text-lg">
          <div className="p-3 bg-[#333] rounded-full cursor-pointer hover:text-[#2e32f1]">
            <FaFacebookF />
          </div>
          <div className="p-3 bg-[#333] rounded-full cursor-pointer hover:text-[#2e32f1]">
            <FaXTwitter />
          </div>
          <div className="p-3 bg-[#333] rounded-full cursor-pointer hover:text-[#2e32f1]">
            <FaInstagram />
          </div>
          <div className="p-3 bg-[#333] rounded-full cursor-pointer hover:text-[#2e32f1]">
            <FaPinterestP />
          </div>
        </div>
        <div className="text-white text-sm flex gap-5">
          <p className="cursor-pointer hover:text-gray-400">HOME</p>
          <p className="cursor-pointer hover:text-gray-400">PHONES</p>
          <p className="cursor-pointer hover:text-gray-400">ABOUT</p>
          <p className="cursor-pointer hover:text-gray-400">CONTACT</p>
        </div>
        <p className="text-white text-xs mt-4">© 2024 ThemeSphere. Designed by ThemeSphere.</p>
      </div>
    </div>
  );
};

export default Footer;