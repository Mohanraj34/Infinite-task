import { FaSearch } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";
import "./index.css";

const Header = () => (
  <div className="header-con">
    <h2>Dashboard</h2>
    <div className="right-header-con">
      <div className="search-con">
        <FaSearch className="search-icon" />
        <input type="search" placeholder="Search..." />
      </div>
      <MdNotificationsNone className="noti-con" />
    </div>
  </div>
);

export default Header;
