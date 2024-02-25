"use client";
import "./main.css";
import Image from "next/image";
import Grade from "@/public/Pics/Grade.png";
import DetailGrade from "@/public/Pics/DetailGrade.png";
import Theme from "@/public/Pics/Theme.png";
import Login from "@/public/Pics/Login.png";

export const Main = () => {
  return (
    <div className="text-white w-screen z-30 relative">
      <h1 className="line1 text-5xl panel">What Do We Do ??</h1>
      <div className="line2 panel">
        <div className="text">This App helps You To Calculate your Grades</div>
        <div className="text">
          <Image src={Grade} alt="grade" className="img lg:mr-10" />
        </div>
      </div>
      <div className="line2 panel">
        <div className="text">
          <Image src={DetailGrade} alt="DetailGrade" className="img lg:ml-10" />
        </div>
        <div className="text">Also with Detail Analytics</div>
      </div>
      <h1 className="line3 text-5xl panel">Why Choose Us ??</h1>
      <div className="line4 panel">
        <div className="text">Modern Design</div>
        <div className="text">
          <Image src={Grade} alt="grade" className="img lg:mr-10" />
        </div>
      </div>
      <div className="line5 panel">
        <div className="text">
          <Image src={Theme} alt="Theme" className="img lg:ml-10" />
        </div>
        <div className="text">Customizable Theme</div>
      </div>
      <div className="line6 panel">
        <div className="text">Instant & Easy Login</div>
        <div className="text ">
          <Image src={Login} alt="Login" className="img lg:mr-10" />
        </div>
      </div>
    </div>
  );
};
