const LeftContent = () => {
  return (
    <div className="sm:w-[70%] flex flex-col gap-6">
      <img
        src="/News-homepage/image-web-3-mobile.jpg"
        width={1000}
        className="w-full h-[20rem] flex md:hidden"
        alt="logo"
      />
      <img
        src="/News-homepage/image-web-3-desktop.jpg"
        width={1000}
        className="w-full h-[15rem] hidden md:flex"
        alt="logo"
      />
      <div className="w-full flex flex-col sm:flex-row items-center gap-5 pr-5">
        <div className="sm:w-1/2">
          <h1 className="font-[InterExtraBold] text-[hsl(240,100%,5%)] text-4xl">
            The Bright Future of Web 3.0?
          </h1>
        </div>
        <div className="sm:w-1/2 flex flex-col gap-5">
          <p className="font-[InterBold] text-sm text-[hsl(236,13%,42%)]">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="w-[60%] sm:w-[80%] md:w-[60%] font-[InterBold] text-[hsl(240,100%,5%)] tracking-[0.25rem] text-xs bg-[hsl(5,85%,63%)] py-3 hover:bg-[hsl(240,100%,5%)] hover:text-[hsl(36,100%,99%)] transition-all duration-300 ease-in-out">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
