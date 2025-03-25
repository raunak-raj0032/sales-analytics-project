import Sidebar from "../../global-components/sidebar"; // Adjust path correctly
import { IconX } from "@tabler/icons-react";
import "../../styles/home.scss";
import Card from "../../global-components/card";

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
                    <Card 
    title="Tasks Completed" 
    value={27} 
    percentage={-12} 
    icon={<IconX color="white" />} 
    bgColor="linear-gradient(135deg,rgb(118, 129, 59),rgb(48, 129, 110))" // Apply the gradient background
/>


                </div>
            </div>
        </div>
    );
}

export default Home;
