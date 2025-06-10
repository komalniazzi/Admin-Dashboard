 "use client";

import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Card } from "@heroui/react";

const heartRateData = [
  { weekday: "Mon", Low: 65, High: 85 },
  { weekday: "Tue", Low: 62, High: 82 },
  { weekday: "Wed", Low: 68, High: 88 },
  { weekday: "Thu", Low: 64, High: 84 },
  { weekday: "Fri", Low: 66, High: 86 },
  { weekday: "Sat", Low: 63, High: 83 },
  { weekday: "Sun", Low: 67, High: 87 },
];

function formatWeekday(weekday) {
  const day = {
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
    Sun: 0,
  }[weekday] ?? 0;

  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    new Date(2024, 0, day)
  );
}

export default function HeartRateChart() {
  const categories = ["Low", "High"];
  const color = "success";

  return (
    <Card className="max-w-md w-full p-4 bg-black text-white">

      <ResponsiveContainer height={280}>
        <BarChart
          data={heartRateData}
          margin={{ top: 20, right: 14, left: -8, bottom: 5 }}
        >
          <XAxis dataKey="weekday" tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip
            cursor={false}
            content={({ label, payload }) => (
              <div className="bg-background p-2 rounded text-sm shadow">
                <div className="font-semibold">{formatWeekday(label)}</div>
                {payload?.map((p, index) => (
                  <div key={index} className="flex justify-between gap-2">
                    <span className="capitalize text-default-500">{p.name}</span>
                    <span className="font-mono">{p.value}</span>
                  </div>
                ))}
              </div>
            )}
          />
          {categories.map((category, index) => (
            <Bar
              key={category}
              dataKey={category}
              stackId="a"
              barSize={24}
              radius={index === categories.length - 1 ? [4, 4, 0, 0] : 0}
              fill={`hsl(var(--heroui-${color}-${(index + 1) * 200}))`}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>

      <div className="flex justify-center gap-4 pt-4 text-xs text-default-500">
        {categories.map((cat, idx) => (
          <div key={cat} className="flex items-center gap-1">
            <span
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: `hsl(var(--heroui-${color}-${(idx + 1) * 200}))`,
              }}
            />
            <span>{cat}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
