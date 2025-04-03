import Sidebar from "../../global-components/sidebar"; // Adjust path correctly
import { IconX, IconBell } from "@tabler/icons-react";
import "../../styles/home.scss";
import Card from "../../global-components/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import PieChartComponent from "../../global-components/piechart"; // Import Pie Chart Component

// Sample Data
const data = [
    { name: "JAN", shipments: 110 },
    { name: "FEB", shipments: 80 },
    { name: "MAR", shipments: 105 },
    { name: "APR", shipments: 75 },
    { name: "MAY", shipments: 100 },
    { name: "JUN", shipments: 65 },
    { name: "JUL", shipments: 90 },
    { name: "AUG", shipments: 70 },
    { name: "SEP", shipments: 95 },
    { name: "OCT", shipments: 85 },
    { name: "NOV", shipments: 115 },
    { name: "DEC", shipments: 100 }
];

const Home = () => {
    return (
        <div className="homepage-parent-container">
            <Sidebar />

            {/* Content Wrapper to ensure header and cards are stacked properly */}
            <div className="homepage-content">
                <div className="header-homepage">
                    <span className="title-text-homepage">DASHBOARD</span>
                </div>

                <div className="homepage-card-row">
                    <Card title="Tasks Completed" value={27} percentage={-12} icon={<IconX color="white" />} />
                    <Card title="Tasks Completed" value={27} percentage={-12} icon={<IconX color="white" />} />
                    <Card title="Tasks Completed" value={27} percentage={-12} icon={<IconX color="white" />} />
                </div>

                {/* Pie Chart Section - NOW PLACED BEFORE LINE CHART */}
                <div className="home-piechart-container mt-6">
                    <PieChartComponent />
                </div>

                {/* Chart Section */}
                <div className="chart-container">
                    <div className="chart-header">
                        <div className="chart-icon">
                            <IconBell size={18} color="lightblue" />
                        </div>
                        <div className="chart-title">763,215</div>
                    </div>
                    <div className="chart-axis-container">
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                                <defs>
                                    <filter id="lineShadow" x="-50%" y="-50%" width="200%" height="200%">
                                        <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#4A90E2" floodOpacity="0.5" />
                                    </filter>
                                </defs>
                                <XAxis dataKey="name" stroke="#b0b0b0" tick={{ fill: "#fff" }} />
                                <YAxis stroke="#b0b0b0" tick={{ fill: "#fff" }} />
                                <Tooltip />
                                <Line type="monotone" dataKey="shipments" strokeWidth={2} filter="url(#lineShadow)" />
                                <Line type="monotone" dataKey="shipments" stroke="#4A90E2" strokeWidth={3} dot={{ fill: "#4A90E2", r: 5, strokeWidth: 0 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;
