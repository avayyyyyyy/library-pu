const Hero = () => {
  return (
    <div
      className="relative h-[400px] bg-cover bg-center flex items-center justify-start pl-20 text-white"
      style={{
        backgroundImage: 'url("./src/assets/about-cover-ZHMEPILR.webp")',
      }}
    >
      <h3 className="text-6xl font-bold text-white z-10 fontMain">
        Central Library
      </h3>
      <div className="absolute inset-0 bg-primary/80 z-0"></div>
    </div>
  );
};

export default Hero;
