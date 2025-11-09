import React from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import {
  FaBehance,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function ProfileCard({ theme }) {
  const URL = "/image/portfolio/Sushant_khadka_cv.pdf";

  const socials = [
    {
      icon: <FaGithub />,
      link: "https://github.com/sushaantkhadka"
    },
    {
      icon: <FaTwitter />,
      link: "https://x.com/khadka_sushaant  "
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/khadka_sushaant/"
    },
    {
      icon: <FaBehance />,
      link: "https://www.behance.net/sushaantkhadka"
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/khadka-sushant/"
    },
  ]

  const downloadFile = (url) => {
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", "Sushant_Khadka_Resume");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.01 }}
        onHoverStart={e => { }}
        onHoverEnd={e => { }}
      >
        <div
          className={`flex items-center justify-center h-[100vh] ${theme && "text-white font-kode"
            }`}
        >
          <div
            className={`glassmorf flex items-center justify-center flex-col text-center gap-2 p-8 rounded-3xl`}
          >
            <div className="m-4 flex justify-center items-center flex-col">
              <div className={theme ? "profile-card-dark" : "profile-card"}>
                <Image
                  src="/image/sushantprofile.png"
                  alt="sushant's profile picture"
                  width={500}
                  height={500}
                  priority
                  className={`rounded-full border-3 ${theme ? "border-green-500" : "border-orange-500"
                    } hover:shadow-profile-hover cursor-pointer transition duration-300 ease-in-out`}
                />
              </div>

              <div className="flex flex-col items-center text-center mt-4">
                <h2 className="font-bold text-2xl">Sushant Khadka</h2>
                <p
                  className={`font-medium ${theme ? "text-green-500" : "text-orange-500"
                    }`}
                >
                  {theme ? "Frontend Dev" : "UiUx Designer"}
                </p>
              </div>

              <div className="my-3 flex ">
                {socials.map((social, index) => (
                  <Link
                    className={`text-sm p-3 ${theme ? "hover:text-green-500" : "hover:text-orange-500"
                      }  transition duration-300 ease-in-out`}
                    href={social.link}
                    target="_blank"
                    key={index}
                  >
                    {social.icon}
                  </Link>
                ))}

              </div>
            </div>

            <div className={`grid grid-cols-3 gap-8`}>
              <div>
                <p className={`font-black`}>{theme ? "10k" : "100k"}</p>
                <p className="font-medium">{theme ? "Bugs" : "Ideas"}</p>
              </div>
              <div>
                <p className="font-black">1k</p>
                <p className="font-medium">{theme ? "Found" : "Noted"}</p>
              </div>
              <div>
                <p className="font-black">{theme ? "0" : "9"}</p>
                <p className="font-medium">{theme ? "Solved" : "Executed"}</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                onClick={() => {
                  downloadFile(URL);
                }}
                className={`py-3 px-8  text-md rounded-2xl cursor-pointer border-2 border-transparent transition duration-400 ease-in-out ${theme ? "bg-green-500 resume-dark" : "bg-orange-500 resume"
                  } shadow-sm border-global-color text-global-color`}
              >
                Resume
              </button>

              <Link href={"https://wa.me/9741864357"} target="_blank">
                <button
                  className={`py-3 px-6 text-md rounded-2xl cursor-pointer border-2 border-solid ${theme
                    ? "border-green-500 text-green-500"
                    : "border-orange-500 text-orange-500"
                    } bg-transparent  shadow-lg`}
                >
                  Message
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
