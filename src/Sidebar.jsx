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
import { Button } from "@mui/material";
import { useState } from "react";

const Sidebar = () => {
  // const [spin, setSpin] = useState('')
  return (
    <div className="w-fit min-w-64 pt-5 pr-3 pl-3 pb-3 mt-5 mr-auto mb-0 ml-auto shadow-md shadow-blue-300">
      <h1 className="font-semibold text-2xl m- ml-3">Sidebar</h1>

      <SidebarLink text="Home" Icon={Home} />
      <SidebarLink text="Explore" Icon={Explore} />
      <SidebarLink text="Notifications" Icon={Notifications} />
      <SidebarLink text="Messages" Icon={Message} />
      <SidebarLink text="Bookmarks" Icon={Bookmark} />
      <SidebarLink text="Lists" Icon={List} />
      <SidebarLink text="Profile" Icon={AccountBox} />
      <SidebarLink text="More" Icon={MoreHoriz}/>
      <Button className="w-full h-12" variant="contained" sx={{"borderRadius": "20px", "fontWeight": "700", "backgroundColor": "blue", "marginTop": "5px"}} onClick={()=> alert("Sending Post!")} >post</Button>
    </div>
  );
};

export default Sidebar;
