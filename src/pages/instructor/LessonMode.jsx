import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, Navigation, Play, Pause, AlertCircle } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { useNavigate, useParams } from 'react-router-dom';

const LessonMode = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [started, setStarted] = useState(false);
    const [completed, setCompleted] = useState(false);

    // Mock data based on id
    const lessonData = {
        student: "Anjali M.",
        task: "Parallel Parking",
        notes: "Focus on mirror usage and spatial awareness."
    };

    if (completed) {
        return (
            <div className="page-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh', textAlign: 'center' }}>
                <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '24px', borderRadius: '50%', marginBottom: '24px', color: '#10b981' }}>
                    <CheckCircle size={48} />
                </div>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Lesson Complete!</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Progress updated for {lessonData.student}</p>
                <Button onClick={() => navigate('/instructor/schedule')} fullWidth>Back to Schedule</Button>
            </div>
        );
    }

    return (
        <div className="page-container" style={{ display: 'flex', flexDirection: 'column', height: '100vh', paddingBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                <Button variant="ghost" style={{ padding: '8px' }} onClick={() => navigate(-1)}>
                    <ArrowLeft size={20} />
                </Button>
                <h1 style={{ fontSize: '1.2rem', fontWeight: '700' }}>Active Lesson</h1>
            </div>

            <Card style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px' }}>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: '800' }}>{lessonData.student}</h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-brand)', marginTop: '8px', fontSize: '1.1rem' }}>
                        <Navigation size={20} />
                        <span>{lessonData.task}</span>
                    </div>
                </div>

                <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '12px', color: 'var(--text-brand)' }}>Today's Focus</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {["Mirror checks before reverse", "Steering lock positions", "Observation while reversing"].map((item, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '20px', height: '20px', border: '2px solid var(--text-brand)', borderRadius: '4px' }}></div>
                                <span style={{ fontSize: '0.95rem' }}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {!started ? (
                        <Button
                            variant="primary"
                            style={{ padding: '20px', fontSize: '1.2rem', background: 'var(--brand-gradient)' }}
                            onClick={() => setStarted(true)}
                            fullWidth
                        >
                            <Play size={24} fill="currentColor" /> Start Lesson
                        </Button>
                    ) : (
                        <>
                            <div style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700', fontVariantNumeric: 'tabular-nums' }}>
                                42:15
                            </div>
                            <Button
                                variant="primary"
                                style={{ padding: '20px', fontSize: '1.2rem', background: 'var(--success-gradient)' }}
                                onClick={() => setCompleted(true)}
                                fullWidth
                            >
                                <CheckCircle size={24} /> Mark Complete
                            </Button>
                        </>
                    )}
                </div>
            </Card>
        </div>
    );
};

export default LessonMode;
