const SecondContent = () => {
  return (
    <div className="w-[95%] sm:w-[85%] flex flex-col md:flex-row gap-4 md:gap-0">
      <div className="md:w-1/3 flex gap-5">
        <div className="w-[30%]">
          <img
            src="/image-retro-pcs.jpg"
            alt="pc-retro"
            width={1000}
            height={1000}
            className="w-[100%] bg-cover bg-no-repeat"
          />
        </div>

        <div className="w-[70%] flex flex-col gap-2">
          <span className="font-[InterExtraBold] text-[hsl(5,85%,63%)] text-3xl sm:text-lg">
            01
          </span>
          <h3 className="font-[InterBold] text-lg sm:text-base cursor-pointer hover:text-[hsl(5,85%,63%)] transition-all duration-300 ease-in-out">
            Reviving Retro PCs
          </h3>
          <p className="font-[InterRegular] text-[hsl(236,13%,42%)] text-sm">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="md:w-1/3 flex gap-5">
        <div className="w-[30%]">
          <img
            src="/image-top-laptops.jpg"
            width={1000}
            height={1000}
            alt="pc-retro"
            className="bg-cover bg-no-repeat"
          />
        </div>

        <div className="w-[70%] flex flex-col gap-2">
          <span className="font-[InterExtraBold] text-[hsl(5,85%,63%)] text-3xl sm:text-lg">
            02
          </span>
          <h3 className="font-[InterBold] text-lg sm:text-base cursor-pointer hover:text-[hsl(5,85%,63%)] transition-all duration-300 ease-in-out">
            Top 10 Laptops of 2022
          </h3>
          <p className="font-[InterRegular] text-[hsl(236,13%,42%)] text-sm">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className="md:w-1/3 flex gap-5">
        <div className="w-[30%]">
          <img
            src="/image-gaming-growth.jpg"
            alt="pc-retro"
            width={1000}
            height={1000}
            className="bg-cover bg-no-repeat"
          />
        </div>

        <div className="w-[70%] flex flex-col gap-2">
          <span className="font-[InterExtraBold] text-[hsl(5,85%,63%)] text-3xl">
            03
          </span>
          <h3 className="font-[InterBold] text-lg cursor-pointer hover:text-[hsl(5,85%,63%)] transition-all duration-300 ease-in-out">
            The Growth of Gaming
          </h3>
          <p className="font-[InterRegular] text-[hsl(236,13%,42%)] text-sm">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondContent;
