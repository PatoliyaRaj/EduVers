import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Reusable Line Chart Component
export const PerformanceLineChart = ({ data, title }) => {
  return (
    <div className="soft-card p-8 md:p-10 bg-white dark:bg-sidebar-dark rounded-2xl">
      <div className="mb-6">
        <h4 className="text-lg font-extrabold text-slate-900 dark:text-white">{title}</h4>
        <p className="text-xs text-slate-500 mt-2">Performance metrics over time</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" className="dark:stroke-slate-700" />
          <XAxis dataKey="month" stroke="#94a3b8" className="text-xs" />
          <YAxis stroke="#94a3b8" className="text-xs" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e293b',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="accuracy"
            stroke="#B48B4D"
            strokeWidth={3}
            dot={{ fill: '#B48B4D', r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="completionRate"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ fill: '#3b82f6', r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="engagement"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ fill: '#10b981', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// Reusable Bar Chart Component
export const LearningProgressBarChart = ({ data, title }) => {
  return (
    <div className="soft-card p-8 md:p-10 bg-white dark:bg-sidebar-dark rounded-2xl">
      <div className="mb-6">
        <h4 className="text-lg font-extrabold text-slate-900 dark:text-white">{title}</h4>
        <p className="text-xs text-slate-500 mt-2">Weekly learning activities</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" className="dark:stroke-slate-700" />
          <XAxis dataKey="week" stroke="#94a3b8" className="text-xs" />
          <YAxis stroke="#94a3b8" className="text-xs" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e293b',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
            }}
          />
          <Legend />
          <Bar dataKey="coursesCompleted" fill="#B48B4D" radius={[8, 8, 0, 0]} />
          <Bar dataKey="assignmentsSubmitted" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          <Bar dataKey="quizzesPassed" fill="#10b981" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// Reusable Radar Chart Component for Skills
export const SkillsRadarChart = ({ data, title }) => {
  return (
    <div className="soft-card p-8 md:p-10 bg-white dark:bg-sidebar-dark rounded-2xl">
      <div className="mb-6">
        <h4 className="text-lg font-extrabold text-slate-900 dark:text-white">{title}</h4>
        <p className="text-xs text-slate-500 mt-2">Skill proficiency levels</p>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart data={data}>
          <PolarGrid stroke="#e2e8f0" className="dark:stroke-slate-700" />
          <PolarAngleAxis dataKey="name" stroke="#94a3b8" className="text-xs" />
          <PolarRadiusAxis stroke="#94a3b8" className="text-xs" />
          <Radar
            name="Proficiency %"
            dataKey="value"
            stroke="#B48B4D"
            fill="#B48B4D"
            fillOpacity={0.6}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e293b',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
            }}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

// Reusable Horizontal Bar Chart for Time Distribution
export const TimeDistributionChart = ({ data, title }) => {
  return (
    <div className="soft-card p-8 md:p-10 bg-white dark:bg-sidebar-dark rounded-2xl">
      <div className="mb-6">
        <h4 className="text-lg font-extrabold text-slate-900 dark:text-white">{title}</h4>
        <p className="text-xs text-slate-500 mt-2">Hours spent by activity</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" className="dark:stroke-slate-700" />
          <XAxis type="number" stroke="#94a3b8" className="text-xs" />
          <YAxis dataKey="category" type="category" stroke="#94a3b8" className="text-xs" width={100} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e293b',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
            }}
          />
          <Legend />
          <Bar dataKey="hours" fill="#B48B4D" radius={[0, 8, 8, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
