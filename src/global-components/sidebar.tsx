import { useState } from "react";
import {
    IconChartPie,
    IconMenu2,
    IconX
} from "@tabler/icons-react";
import "./sidebar.scss"; 

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
            {/* Toggle Button */}
            <button className="toggle-btn" onClick={() => setIsCollapsed(!isCollapsed)}>
                {isCollapsed ? <IconMenu2 size={24} /> : <IconX size={24} />}
            </button>

            {/* Sidebar Header */}
            {!isCollapsed && <h2 className="sidebar-title">MENU</h2>}

            {/* Sidebar Menu */}
            <ul className="menu">
                <li className="active">
                    <IconChartPie size={20} />
                    {!isCollapsed && <span>Dashboard</span>}
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
