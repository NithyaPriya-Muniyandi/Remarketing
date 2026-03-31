const ExcellenceSection = () => {
  return (
    <section className="bg-[#0D0E3A] py-10 px-6 text-center">

      {/* Top Line */}
      <div className="max-w-2xl h-[2px] bg-gradient-to-r from-transparent via-[#F8E71D] to-transparent mx-auto mb-6"></div>

      <h2 className="text-white text-2xl md:text-3xl font-semibold tracking-wide">
        Your information is secure and confidential
      </h2>

      <p className="text-gray-300 mt-3 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
        Get personalized admission guidance instantly.
      </p>

      {/* Bottom Line */}
      <div className="max-w-2xl h-[2px] bg-gradient-to-r from-transparent via-[#F8E71D] to-transparent mx-auto mt-6"></div>

    </section>
    
  );
};

export default ExcellenceSection;