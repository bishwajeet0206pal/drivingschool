import React from 'react';
import { CheckCircle, Circle, MapPin, Award, ArrowLeft } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const LearnerRoadmap = () => {
    const navigate = useNavigate();

    const stages = [
        { id: 1, title: "Theory & Basics", status: "completed", date: "Jan 10" },
        { id: 2, title: "Steering Control", status: "completed", date: "Jan 12" },
        { id: 3, title: "Traffic Rules", status: "completed", date: "Jan 15" },
        { id: 4, title: "Parking & Reversing", status: "current", date: "In Progress" },
        { id: 5, title: "City Traffic", status: "upcoming", date: "" },
        { id: 6, title: "Highway Driving", status: "upcoming", date: "" },
        { id: 7, title: "Final Test", status: "locked", date: "" }
    ];

    const progress = Math.round((stages.filter(s => s.status === 'completed').length / stages.length) * 100);

    return (
        <div className="page-container">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Button variant="ghost" style={{ padding: '8px' }} onClick={() => navigate('/')}>
                        <ArrowLeft size={20} />
                    </Button>
                    <div>
                        <h1 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Your Journey</h1>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Upcoming: Parking</p>
                    </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-brand)' }}>{progress}%</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>READY</div>
                </div>
            </div>

            <Card className="glass-panel" style={{ marginBottom: '24px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: `${progress}%`, background: 'var(--brand-gradient)', opacity: 0.1, zIndex: 0 }} />
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '600' }}>Test Readiness</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>You are on track to get your license!</p>
                    </div>
                    <Award size={32} color={progress > 80 ? '#10b981' : '#f59e0b'} />
                </div>
            </Card>

            <div style={{ position: 'relative', paddingLeft: '24px' }}>
                {/* Vertical Line */}
                <div style={{ position: 'absolute', left: '11px', top: '24px', bottom: '24px', width: '2px', background: 'var(--bg-secondary)' }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {stages.map((stage, i) => (
                        <div key={stage.id} style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                            {/* Dot */}
                            <div style={{
                                width: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                background: stage.status === 'completed' ? '#10b981' : stage.status === 'current' ? '#3b82f6' : 'var(--bg-secondary)',
                                border: '4px solid var(--bg-primary)',
                                flexShrink: 0,
                                zIndex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {stage.status === 'completed' && <CheckCircle size={12} color="white" />}
                            </div>

                            {/* Content */}
                            <div style={{ flex: 1, opacity: stage.status === 'upcoming' || stage.status === 'locked' ? 0.5 : 1 }}>
                                <div style={{ background: stage.status === 'current' ? 'var(--bg-secondary)' : 'transparent', padding: stage.status === 'current' ? '12px' : '0', borderRadius: '8px' }}>
                                    <h4 style={{ fontSize: '1rem', fontWeight: '600', color: stage.status === 'current' ? 'var(--text-brand)' : 'var(--text-primary)' }}>{stage.title}</h4>
                                    {stage.date && <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{stage.date}</p>}

                                    {/* Sub-skills for Current Stage (Breaking the Black Box) */}
                                    {stage.status === 'current' && (
                                        <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                                                <CheckCircle size={14} color="#10b981" /> <span>Parallel Parking</span>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-brand)' }}>
                                                <Circle size={14} fill="currentColor" /> <span>Reverse 'S'</span>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', opacity: 0.6 }}>
                                                <Circle size={14} /> <span>Inclined Start</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LearnerRoadmap;
