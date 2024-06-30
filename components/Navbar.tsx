const Navbar = () => {
  return (
    <nav className="px-6 sm:px-10 2xl:px-0 w-full py-4 flex items-center justify-between h-[120px] bg-white">
      <div className="sm:flex items-center sm:space-x-6">
        <div className="ml-2 sm:ml-0 relative w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]">
          <img src="/images/logo_wlokno.png" alt="logo" />
        </div>
        <a href="/" className="xl:text-2xl sm:text-xl font-medium">
          Wlokno
        </a>
      </div>
      <div className="flex items-center space-x-6">
        <a href="#about" className="xl:text-2xl sm:text-xl font-medium">
          Über uns
        </a>
        <a href="#contact" className="xl:text-2xl sm:text-xl font-medium">
          Kontact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
