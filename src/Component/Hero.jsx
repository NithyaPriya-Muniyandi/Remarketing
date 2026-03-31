import bannerBG from "../assets/bannerBG.webp";
import insideBannerImg from "../assets/insideBannerImg.webp";
import blueArrow from "../assets/blueArrow.webp";
import logo from "../assets/gyLogo.webp";
import bacLogo from "../assets/bacLogo.webp";
export default function Hero() {
  return (
    <section
      className="relative bg-[#0B1454] overflow-hidden"
      style={{
        backgroundImage: `url(${bannerBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-0 md:px-12 pt-8 relative z-10">

        {/* Logo */}
        <div className="mb-10">
          <img
            src={logo}
            alt="TAU Logo"
            className="h-14"
          />
        </div>

        <div className="flex flex-row justify-between items-start md:items-center gap-4 md:gap-8">

          {/* Left Text */}
          <div className="max-w-3xl pl-6 md:pl-0 md:px-12">
            <h1 className="text-white text-xl md:text-[2.5rem] font-semibold !leading-[1.3]">
              EARN YOUR MASTER’S IN <br />
              PUBLIC HEALTH – {" "}
              <span className="text-[#FAEF6F] text-xl md:text-[2rem]">
                INVEST IN A HEALTHIER TOMORROW
              </span>
            </h1>
          </div>

          {/* Right BAC Logo */}
          <div className="flex-shrink-0">
            <img
              src={bacLogo}
              alt="BAC Accredited"
              className="h-28 md:h-40 object-contain"
            />
          </div>

        </div>

        {/* Banner Card */}
       <div className="mt-12 relative rounded-2xl overflow-hidden shadow-2xl">

  {/* Background Image */}
  <img
    src={insideBannerImg}
    alt="Doctor"
    className="w-full h-[400px] md:h-[500px] object-cover"
  />

  {/* Dark Overlay (for readability) */}
  <div className="absolute inset-0"></div>

  {/* Text Content On Image */}
  <div className="absolute inset-0 flex">
    <div className="px-4 md:px-12 max-w-xl text-white">

      <h3 className="text-xl md:text-2xl mt-12 leading-relaxed">
        <span className="text-[#FAEF6F] font-semibold">
          Take 30 Seconds
        </span>{" "}
        – to Get a Personalized Recommendation & Scholarship Info.
      </h3>
<a href="#quiz">
     <button className="group relative mt-6 px-6 py-4 rounded-xl 
                   font-semibold text-white flex items-center gap-3
                   bg-[#FFF8A9]
                   bg-[length:300%_300%]
                   animate-gradientMove
                   shadow-[0_0_25px_rgba(255,140,0,0.6)]
                   hover:scale-110 transition-all duration-300
                   overflow-hidden">

  {/* Animated Glow Border */}
  <span className="absolute inset-0 rounded-xl border-2 border-white/30 
                   animate-borderPulse"></span>

  {/* Shine Sweep */}
  <span className="absolute inset-0 bg-gradient-to-r 
                   from-transparent via-white/40 to-transparent
                   -translate-x-full group-hover:translate-x-full
                   transition-transform duration-700"></span>

  <span className="relative z-10 flex items-center tracking-wide text-base md:text-xl text-black gap-2">
    Start the Quiz
    <img
      src={blueArrow}
      alt="Arrow"
      className="h-8 w-8 transition-transform duration-300 group-hover:translate-x-2"
    />
  </span>
</button></a>

    </div>
  </div>

</div>
      </div>
    </section>

    
  );
}