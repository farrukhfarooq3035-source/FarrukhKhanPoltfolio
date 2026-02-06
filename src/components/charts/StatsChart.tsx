'use client';

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

interface StatsChartProps {
  data: { name: string; value: number }[];
}

export function StatsChart({ data }: StatsChartProps) {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ left: -10, right: 10, top: 10 }}>
          <defs>
            <linearGradient id="statsFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00d9ff" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#00d9ff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }} />
          <YAxis hide />
          <Tooltip
            cursor={{ stroke: '#0066ff', strokeWidth: 1 }}
            contentStyle={{
              background: '#121212',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff'
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#00d9ff"
            strokeWidth={2}
            fill="url(#statsFill)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
