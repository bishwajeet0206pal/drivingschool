import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, User, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const Home = () => {
    const navigate = useNavigate();

    const personas = [
        {
            id: 'owner',
            title: 'Owner',
            icon: <Shield size={24} />,
            desc: 'Manage leads & pricing',
            path: '/owner/dashboard',
            color: '#3b82f6'
        },
        {
            id: 'instructor',
            title: 'Instructor',
            icon: <User size={24} />,
            desc: 'Daily schedule & lessons',
            path: '/instructor/schedule',
            color: '#8b5cf6'
        },
        {
            id: 'learner',
            title: 'Learner',
            icon: <Users size={24} />,
            desc: 'Track progress',
            path: '/learner/roadmap',
            color: '#10b981'
        }
    ];

    return (
        <div className="page-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
                <h1 className="text-gradient" style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '0.5rem' }}>DriveFlow</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Premium Driving Management</p>
            </div>

            <div style={{ display: 'grid', gap: '1rem' }}>
                {personas.map((persona) => (
                    <Card
                        key={persona.id}
                        onClick={() => navigate(persona.path)} // We will build these routes next
                        style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
                        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
                        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                background: `rgba(${parseInt(persona.color.slice(1, 3), 16)}, ${parseInt(persona.color.slice(3, 5), 16)}, ${parseInt(persona.color.slice(5, 7), 16)}, 0.2)`,
                                padding: '12px',
                                borderRadius: '50%',
                                color: persona.color
                            }}>
                                {persona.icon}
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600' }}>{persona.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{persona.desc}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '2rem' }}>
                Select a persona to view the prototype
            </p>
        </div>
    );
};

export default Home;
