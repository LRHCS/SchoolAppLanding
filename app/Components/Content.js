import Cursor from "@/app/cursor";
import Navbar from "@/app/Components/Navbar";
import { Hero } from "@/app/Components/Hero";
import { Main } from "@/app/Components/Main";
import { Ending } from "@/app/Components/Ending";
import { Background } from "@/app/Components/Model/3DBackground";

export const Content = () => {
  return (
    <div className=" bg-emerald-950">
      <Cursor />
      <Background />
      <Hero />
      <Navbar />
      <Main />
      <Ending />
    </div>
  );
};
