import React from "react";
import "./Card.scss"; // Import styles

interface CardProps {
    title: string;
    value: number;
    percentage: number;
    icon: React.ReactNode;
    bgColor?: string; // Optional background color prop
}

const Card: React.FC<CardProps> = ({ title, value, percentage, icon, bgColor }) => {
    return (
        <div 
            className="card" 
            style={{ background: bgColor || "linear-gradient(135deg, #1c1f2b, #303648)" }}> {/* Default gradient */}
            
            {/* Header section: icon + title */}
            <div className="card-header">
                <div className="card-icon">{icon}</div>
                <span className="card-title">{title}</span>
            </div>

            {/* Content: value + percentage at bottom right */}
            <div className="card-content">
                <h2 className="card-value">{value}</h2>
                <span className={`card-percentage ${percentage < 0 ? "negative" : "positive"}`}>
                    {percentage}%
                </span>
            </div>
        </div>
    );
};

export default Card;
