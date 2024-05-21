const Navbar = () => {
  return (
    <nav className="w-full py-4 flex justify-between h-[120px] bg-white">
      <div className="flex items-center space-x-6">
        <div className="relative w-[60px] h-[60px]">
          <img src="/images/logo_wlokno.png" alt="logo" />
        </div>
        <p className="text-2xl font-medium">Wlokno</p>
      </div>
      <div className="flex items-center space-x-6">
        <p className="text-2xl font-medium">About</p>
        <p className="text-2xl font-medium">Contact</p>
      </div>
    </nav>
  );
};

export default Navbar;
