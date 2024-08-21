import { MdOutlineDashboard } from "react-icons/md";
import {
  RiCopilotLine,
  RiBox3Line,
  RiSwapBoxLine,
  RiPieChart2Line,
  RiMoneyDollarCircleLine,
  RiHistoryLine,
  RiNotification4Line,
  RiSettings4Line,
  RiHeadphoneLine,
  RiLogoutBoxLine,
  RiUser3Line,
} from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import "./index.css";

const Sidebar = () => (
  <div className="sidebar-con">
    <div className="top-nav-links-con">
      <img src="https://i.postimg.cc/Sx6hHS0p/Vector.png" />
      <div className="nav-links">
        <p>
          <MdOutlineDashboard className="side-icon" />
          Dashboard
        </p>
        <p>
          <RiCopilotLine className="side-icon" />
          CRM
        </p>
        <p>
          <RiBox3Line className="side-icon" />
          MAM
        </p>
        <p>
          <RiPieChart2Line className="side-icon" />
          PAMM
        </p>
        <p>
          <RiSwapBoxLine className="side-icon" />
          Trade
        </p>
        <p>
          <IoWalletOutline className="side-icon" />
          Wallet
        </p>
        <p>
          <RiMoneyDollarCircleLine className="side-icon" />
          Accounts
        </p>
        <p>
          <RiHistoryLine className="side-icon" />
          History
        </p>
      </div>
    </div>
    <div className="bottom-nav-links-con">
      <p>
        <RiNotification4Line className="side-icon" />
        Notifications
      </p>
      <p>
        <RiSettings4Line className="side-icon" />
        Settings
      </p>
      <p>
        <RiHeadphoneLine className="side-icon" />
        Help & Support
      </p>
      <p>
        <RiLogoutBoxLine className="side-icon" />
        Log Out
      </p>
      <hr />
      <div className="profile-con">
        <div className="profile-con-1">
          <RiUser3Line className="user-icon" />
        </div>
        <div className="profile-con-2">
          <p>Shyam Shakur</p>
          <p>shyam01.shankur@mail.com</p>
        </div>
      </div>
    </div>
  </div>
);

export default Sidebar;
