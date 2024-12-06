const SidebarLink = ({ text, Icon }) => {
  return (
    <div className="flex my-0.5 items-center cursor-pointer rounded-3xl hover:bg-sky-100 hover:text-blue-600 hover:transition-colors ease-out duration-300">
      {Icon && <Icon className="ml-3" />}
      <h2 className="font-bold text-xl my-4 ml-2">{text}</h2>
    </div>
  );
};

export default SidebarLink;
