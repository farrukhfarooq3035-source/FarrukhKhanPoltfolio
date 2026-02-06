'use client';

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

interface SkillChartProps {
  data: { name: string; level: number }[];
}

export function SkillChart({ data }: SkillChartProps) {
  return (
    <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ left: 12, right: 12 }}>
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis
            type="category"
            dataKey="name"
            width={90}
            tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }}
          />
          <Tooltip
            cursor={{ fill: 'rgba(0,102,255,0.15)' }}
            contentStyle={{
              background: '#121212',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff'
            }}
          />
          <Bar dataKey="level" fill="#0066ff" radius={[6, 6, 6, 6]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
