const SidebarLink = ({ text, Icon }) => {
  return (
    <div className="flex justify-start cursor-pointer rounded-3xl hover:bg-sky-100 hover:text-blue-600 hover:transition-colors ease-out duration-300">
      {Icon && <Icon />}
      <h2 className="font-bold text-xl my-4 ml-3">{text}</h2>
    </div>
  );
};

export default SidebarLink;
