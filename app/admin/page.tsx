'use client';

import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Users, Calendar, CheckCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import api from '@/lib/api';
import toast from 'react-hot-toast';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { name: 'Mon', appointments: 12 },
  { name: 'Tue', appointments: 19 },
  { name: 'Wed', appointments: 15 },
  { name: 'Thu', appointments: 22 },
  { name: 'Fri', appointments: 28 },
  { name: 'Sat', appointments: 10 },
  { name: 'Sun', appointments: 5 },
];

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    confirmed: 0,
    completed: 0,
    cancelled: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await api.get('/appointments/stats');
        if (data.success) {
          setStats(data.stats);
        }
      } catch (error) {
        toast.error('Failed to load dashboard stats');
      }
    };
    fetchStats();
  }, []);

  const statCards = [
    { title: 'Total Appointments', value: stats.total, icon: Calendar, color: 'text-blue-500', bg: 'bg-blue-100' },
    { title: 'Pending', value: stats.pending, icon: Clock, color: 'text-amber-500', bg: 'bg-amber-100' },
    { title: 'Confirmed', value: stats.confirmed, icon: CheckCircle, color: 'text-green-500', bg: 'bg-green-100' },
    { title: 'Completed', value: stats.completed, icon: Users, color: 'text-purple-500', bg: 'bg-purple-100' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[var(--color-on-surface)]">Dashboard Overview</h1>
        <p className="text-[var(--color-on-surface-variant)] mt-1">Welcome back. Here is what's happening at the clinic today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                  <Icon size={28} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-on-surface-variant)]">{stat.title}</p>
                  <h3 className="text-3xl font-bold text-[var(--color-on-surface)] mt-1">{stat.value}</h3>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Chart Section */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-[var(--color-on-surface)] mb-6">Weekly Appointments</h2>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorAppts" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--color-on-surface-variant)' }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--color-on-surface-variant)' }} dx={-10} />
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-outline-variant)" />
              <Tooltip 
                contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: 'var(--shadow-card)', backgroundColor: 'var(--color-surface-lowest)' }}
                itemStyle={{ color: 'var(--color-primary)', fontWeight: 'bold' }}
              />
              <Area type="monotone" dataKey="appointments" stroke="var(--color-primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorAppts)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Empty states for pending items */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 min-h-[300px]">
          <h2 className="text-xl font-bold text-[var(--color-on-surface)] mb-4">Pending Appointments</h2>
          <div className="flex flex-col items-center justify-center h-48 text-[var(--color-on-surface-variant)]">
            <Calendar size={48} className="mb-4 opacity-20" />
            <p>No pending appointments right now.</p>
          </div>
        </Card>
        <Card className="p-6 min-h-[300px]">
          <h2 className="text-xl font-bold text-[var(--color-on-surface)] mb-4">Recent Reviews</h2>
          <div className="flex flex-col items-center justify-center h-48 text-[var(--color-on-surface-variant)]">
            <CheckCircle size={48} className="mb-4 opacity-20" />
            <p>No new reviews to moderate.</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
