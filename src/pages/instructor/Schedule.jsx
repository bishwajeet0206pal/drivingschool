import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const Schedule = () => {
    const navigate = useNavigate();

    const classes = [
        { id: 1, student: "Anjali M.", time: "07:00 AM", type: "Parking", location: "KBR Park", status: "Upcoming" },
        { id: 2, student: "Rohan D.", time: "08:30 AM", type: "City Drive", location: "Jubilee Hills", status: "Upcoming" },
        { id: 3, student: "Karthik R.", time: "10:00 AM", type: "Highway", location: "ORR Service Rd", status: "Upcoming" },
        { id: 4, student: "Priya S.", time: "04:00 PM", type: "Reverse", location: "Ground", status: "Pending" },
    ];

    return (
        <div className="page-container">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Button variant="ghost" style={{ padding: '8px' }} onClick={() => navigate('/')}>
                        <ArrowLeft size={20} />
                    </Button>
                    <div>
                        <h1 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Schedule</h1>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Today, 26 Jan</p>
                    </div>
                </div>
                <Button variant="ghost" style={{ padding: '8px' }}><Calendar size={20} /></Button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {classes.map((cls) => (
                    <Card
                        key={cls.id}
                        onClick={() => navigate(`/instructor/lesson/${cls.id}`)}
                        style={{ cursor: 'pointer', borderLeft: '4px solid var(--text-brand)' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '600' }}>{cls.student}</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '4px' }}>
                                    <Clock size={14} />
                                    <span>{cls.time}</span>
                                    <span style={{ margin: '0 4px', opacity: 0.3 }}>|</span>
                                    <span style={{ color: 'var(--text-brand)', fontWeight: '500' }}>{cls.type}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '4px' }}>
                                    <MapPin size={14} />
                                    <span>{cls.location}</span>
                                </div>
                            </div>
                            <div style={{ background: 'var(--bg-primary)', padding: '10px', borderRadius: '50%' }}>
                                <ArrowRight size={20} color="var(--text-brand)" />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Schedule;
