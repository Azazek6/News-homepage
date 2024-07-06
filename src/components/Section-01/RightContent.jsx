import { Separator } from "../ui/separator";

const RightContent = () => {
  return (
    <div className="sm:w-[30%] flex flex-col bg-[hsl(240,100%,5%)] p-4 gap-4">
      <h1 className="font-[InterExtraBold] text-[hsl(35,77%,62%)] text-2xl">
        New
      </h1>
      <div className="flex flex-col gap-2">
        <h3 className="font-[InterBold] text-[hsl(36,100%,99%)] text-sm cursor-pointer hover:text-[hsl(35,77%,62%)] transition-all duration-300 ease-in-out">
          Hydrogen VS Electric Cars
        </h3>
        <p className="font-[InterRegular] text-[hsl(233,8%,79%)] text-xs">
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
      </div>
      <Separator className="my-2 bg-[hsl(233,8%,79%)]" />
      <div className="flex flex-col gap-2">
        <h3 className="font-[InterBold] text-[hsl(36,100%,99%)] text-sm cursor-pointer hover:text-[hsl(35,77%,62%)] transition-all duration-300 ease-in-out">
          The Downsides of AI Artistry
        </h3>
        <p className="font-[InterRegular] text-[hsl(233,8%,79%)] text-xs">
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <Separator className="my-2 bg-[hsl(233,8%,79%)]" />
      <div className="flex flex-col gap-2">
        <h3 className="font-[InterBold] text-[hsl(36,100%,99%)] text-sm cursor-pointer hover:text-[hsl(35,77%,62%)] transition-all duration-300 ease-in-out">
          Is VC Funding Drying Up?
        </h3>
        <p className="font-[InterRegular] text-[hsl(233,8%,79%)] text-xs">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </div>
  );
};

export default RightContent;
