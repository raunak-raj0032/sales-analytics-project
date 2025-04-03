"use client";

import React, { useState } from "react";
import Select from "react-select";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./piechart.scss"; // Import styles

// Data structure explicitly defined
const dataOptions: Record<string, { name: string; value: number }[]> = {
  tasksCompleted: [
    { name: "Completed", value: 400 },
    { name: "Pending", value: 300 },
    { name: "In Progress", value: 300 },
  ],
  monthlyPerformance: [
    { name: "Excellent", value: 500 },
    { name: "Good", value: 200 },
    { name: "Average", value: 150 },
    { name: "Poor", value: 50 },
  ],
};

// Color scheme for pie chart segments
const colorMap = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieChartComponent: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<keyof typeof dataOptions>("tasksCompleted");
  const chartData = dataOptions[selectedOption];

  return (
    <div className="piechart-container">
      {/* Header containing dropdown */}
      <div className="piechart-header">
        <Select
          options={[
            { value: "tasksCompleted", label: "Tasks Completed" },
            { value: "monthlyPerformance", label: "Monthly Performance" },
          ]}
          defaultValue={{ value: "tasksCompleted", label: "Tasks Completed" }}
          onChange={(selected) => setSelectedOption((selected?.value as keyof typeof dataOptions) || "tasksCompleted")}
          className="piechart-dropdown"
        />
      </div>

      {/* Pie Chart */}
      <div className="piechart-content">
        <PieChart width={300} height={300} className="piechart-graph">
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={({ name }) => name}
          >
            {chartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={colorMap[index % colorMap.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend className="piechart-legend"
  layout="vertical" 
  verticalAlign="middle" 
  align="right" 
/>
          </PieChart>
      </div>
    </div>
  );
};

export default PieChartComponent;