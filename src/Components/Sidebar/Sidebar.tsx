import "./sidebar.css";
import {
  MenuOutlined,
  HomeOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-icons">
        <span className="sidebarIcon">
          <MenuOutlined />
        </span>
        <span className="sidebarIcon">
          <HomeOutlined />
        </span>
        <span className="sidebarIcon">
          <SolutionOutlined />
        </span>
      </div>
    </div>
  );
}
