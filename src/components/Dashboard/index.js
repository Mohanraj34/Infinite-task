import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
import {
  RiSettings4Line,
  RiHistoryLine,
  RiUserFollowLine,
  RiUser2Line,
  RiTokenSwapLine,
  RiBarChartGroupedLine,
} from "react-icons/ri";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { FaChartLine, FaArrowRightArrowLeft, FaSearch } from "react-icons/fa6";
import Header from "../Header";
import Sidebar from "../Sidebar";
import "./index.css";

const Dashboard = () => (
  <div className="home-con">
    <Sidebar />
    <div>
      <Header />
      <div className="body-con">
        <div className="left-con">
          <div className="link-con">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <div>
                  <FiArrowDownLeft className="icon" />
                </div>
                <p>Deposit</p>
              </li>
              <li>
                <FiArrowUpRight className="icon" />
                <p>Withdraw</p>
              </li>
              <li>
                <RiSettings4Line className="icon" />
                <p>Settings</p>
              </li>
              <li>
                <RiUserFollowLine className="icon" />
                <p>Verification</p>
              </li>
              <li>
                <IoMdStarOutline className="icon" />
                <p>Bonuses</p>
              </li>
              <li>
                <FaChartLine className="icon" />
                <p>MT5</p>
              </li>
              <li>
                <FaArrowRightArrowLeft className="icon" />
                <p>Transfer</p>
              </li>
              <li>
                <RiHistoryLine className="icon" />
                <p>History</p>
              </li>
              <li>
                <RiUser2Line className="icon" />
                <p>Partner</p>
              </li>
              <li>
                <RiTokenSwapLine className="icon" />
                <p>Exchange</p>
              </li>
              <li>
                <RiBarChartGroupedLine className="icon" />
                <p>Analytics</p>
              </li>
            </ul>
          </div>
          <div className="chart-con">
            <div className="chart-head-1">
              <h3>Overview</h3>
              <h3>
                <MdOutlineFileDownload className="download-icon" />
                Download Report
              </h3>
            </div>
            <div className="chart-head-2">
              <h2>Monthly</h2>
              <h2>Yearly</h2>
            </div>
            <img src="https://i.postimg.cc/cCF7Skz7/Frame-1000001443.png" />
          </div>
        </div>
        <div className="right-con">
          <div className="trade-con">
            <h3>Trading Accounts</h3>
            <div className="account-con">
              <p className="acc-head">Master Account</p>
              <p className="acc-para">
                <span>CTrader</span> #273728
              </p>
              <div className="acc-val">
                <h1>
                  0.00 <span>USD</span>
                </h1>
              </div>
            </div>
            <div className="account-con">
              <p className="acc-head">Master Account</p>
              <p className="acc-para">
                <span>CTrader</span> <span>#273728</span>
              </p>
              <div className="acc-val">
                <h1>
                  0.00 <span>USD</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="open-con">
            <h3>Open Trades</h3>
            <div className="open-sub-con">
              <div className="open-sub-con1">
                <p>
                  GBPUSD
                  <span>Long</span>
                </p>
                <p>0.12</p>
              </div>
              <p className="open-sub-con2">
                <span className="green-val">+56.00</span>USD
              </p>
            </div>
            <div className="open-sub-con">
              <div className="open-sub-con1">
                <p>
                  USDJPY
                  <span>Long</span>
                </p>
                <p>0.52</p>
              </div>
              <p className="open-sub-con2">
                <span>-0.09</span>USD
              </p>
            </div>
            <div className="open-sub-con">
              <div className="open-sub-con1">
                <p>
                  EURUSD
                  <span>Short</span>
                </p>
                <p>0.34</p>
              </div>
              <p className="open-sub-con2">
                <span>-1.09</span>USD
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
