import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const PagesToRead = () => {
  const data = [
    {
      bookName: "The Great Gatsby",
      totalPages: 180,
    },
    {
      bookName: "To Kill a Mockingbird",
      totalPages: 324,
    },
    {
      bookName: "1984",
      totalPages: 328,
    },
    {
      bookName: "Pride and Prejudice",
      totalPages: 279,
    },
    {
      bookName: "The Catcher in the Rye",
      totalPages: 224,
    },
    {
      bookName: "The Lord of the Rings",
      totalPages: 1178,
    },
  ];

  // Custom shape for Bar
  const CustomShapeBar = ({ x, y, width, height }) => {
    return (
      <g>
        <rect x={x} y={y} width={width} height={height} fill="#8884d8" />
        <text
          x={x + width / 2}
          y={y + height / 2}
          fill="#fff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {height > 20 ? height : ""}
        </text>
      </g>
    );
  };

  return (
    <div>
      <h2 className="text-center text-3xl font-semibold">Pages to Read</h2>
      <div style={{ width: "80%", margin: "auto" }}>
        <BarChart
          width={800}
          height={400}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="totalPages" fill="#8884d8" shape={<CustomShapeBar />} />
        </BarChart>
      </div>
    </div>
  );
};

export default PagesToRead;
