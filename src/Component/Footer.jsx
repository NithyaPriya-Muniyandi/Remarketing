const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0E3A] text-white py-4 text-center text-sm">
      © {year}. Texila American University. All Rights Reserved
    </footer>
  );
};

export default Footer;