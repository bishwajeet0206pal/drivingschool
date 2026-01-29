import React from 'react';
import { Users, IndianRupee, Bell, ChevronRight, Plus } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const StatCard = ({ title, value, subtext, icon, color }) => (
    <Card className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{title}</span>
            <div style={{ background: `${color}20`, padding: '8px', borderRadius: '50%', color: color }}>
                {icon}
            </div>
        </div>
        <div style={{ fontSize: '1.8rem', fontWeight: '700' }}>{value}</div>
        <div style={{ fontSize: '0.8rem', color: '#10b981' }}>{subtext}</div>
    </Card>
);

const OwnerDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="page-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Dashboard</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Welcome back, Vikram</p>
                </div>
                <Button variant="ghost" style={{ padding: '8px' }} onClick={() => navigate('/')}>Exit</Button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                <StatCard
                    title="Revenue"
                    value="₹1.2L"
                    subtext="+12% from last month"
                    icon={<IndianRupee size={18} />}
                    color="#3b82f6"
                />
                <StatCard
                    title="Pending"
                    value="₹15k"
                    subtext="3 students overdue"
                    icon={<Bell size={18} />}
                    color="#ef4444"
                />
            </div>

            <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: '600' }}>Quick Actions</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <Button variant="primary" onClick={() => { }} style={{ justifyContent: 'center' }}>
                        <Plus size={18} /> New Enquiry
                    </Button>
                    <Button variant="secondary" onClick={() => navigate('/owner/packages')} style={{ justifyContent: 'center' }}>
                        Manage Packages
                    </Button>
                </div>
            </div>

            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: '600' }}>Recent Enquiries</h2>
                    <Button variant="ghost" style={{ fontSize: '0.8rem' }}>View All</Button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                        { name: "Rahul S.", time: "2 hrs ago", status: "New" },
                        { name: "Sneha P.", time: "5 hrs ago", status: "Contacted" },
                        { name: "Amit K.", time: "1 day ago", status: "New" },
                    ].map((lead, i) => (
                        <Card key={i} style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '40px', height: '40px', background: 'var(--bg-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600' }}>{lead.name[0]}</div>
                                <div>
                                    <div style={{ fontWeight: '500' }}>{lead.name}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{lead.time}</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '0.8rem', padding: '4px 8px', background: lead.status === 'New' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(16, 185, 129, 0.2)', color: lead.status === 'New' ? '#60a5fa' : '#34d399', borderRadius: '4px' }}>{lead.status}</span>
                                <ChevronRight size={16} color="var(--text-secondary)" />
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OwnerDashboard;
