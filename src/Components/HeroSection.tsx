const HeroSection = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-12">
      <div className="w-full md:w-1/2 space-y-8">
        <div className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors group cursor-pointer">
          <span className="group-hover:scale-110 transition-transform">⭐</span>
          <span className="text-sm font-medium">Jump start your shopping</span>
        </div>
        <h1>We Boost the groth for starttup to fortune 500 companies ⏰</h1>
      </div>
      <div className="w-full md:w-1/2">right</div>
    </div>
  );
};

export default HeroSection;
