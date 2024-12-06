import {
  Explore,
  Notifications,
  Message,
  Bookmark,
  List,
  Home,
  AccountBox,
  MoreHoriz,
} from "@mui/icons-material";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  return (
    <div className="w-64 min-w-64 p-5 mt-5 mr-auto mb-0 ml-auto shadow-md shadow-blue-300">
      <h1 className="font-semibold text-2xl m- ml-3">Sidebar</h1>

      <SidebarLink text="Home" Icon={Home} />
      <SidebarLink text="Explore" Icon={Explore} />
      <SidebarLink text="Notifications" Icon={Notifications} />
      <SidebarLink text="Messages" Icon={Message} />
      <SidebarLink text="Bookmarks" Icon={Bookmark} />
      <SidebarLink text="Lists" Icon={List} />
      <SidebarLink text="Profile" Icon={AccountBox} />
      <SidebarLink text="More" Icon={MoreHoriz}/>
    </div>
  );
};

export default Sidebar;
