/**
 * This code was generated by Builder.io.
 */
import React from "react";
import StatisticItem from "./StatisticItem";

const statisticsData = [
  { value: "14.9M", label: "Impressions generated" },
  { value: "100k", label: "Happy clients" },
  { value: "$60.3M", label: "revenue generated" },
  { value: "30", label: "years of experience" },
];

const StatisticsSection: React.FC = () => (
  <section className="grid grid-cols-2 md:flex mdLflex-wrap gap-10 md:justify-between md:items-center px-32 py-16 text-white bg-black max-md:px-5 mt-10">
    {statisticsData.map((item, index) => (
      <StatisticItem key={index} value={item.value} label={item.label} />
    ))}
  </section>
);

export default StatisticsSection;
