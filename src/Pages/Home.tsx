import HeroSection from "../Components/HeroSection";

const Home = () => {
  return (
    <div>
      <div
        className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr
       from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10 opacity-50"
      ></div>
      <HeroSection />
    </div>
  );
};

export default Home;
