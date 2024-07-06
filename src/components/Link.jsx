/* eslint-disable react/prop-types */
const Link = ({ name, to }) => {
  return (
    <a
      href={to}
      className="font-[InterRegular] text-[hsl(240,100%,5%)] hover:text-[hsl(5,85%,63%)] transition-all duration-300 ease-in-out sm:text-sm"
    >
      {name}
    </a>
  );
};

export default Link;
