import React from 'react';
import { Card } from '../components/ui/Card';

const Placeholder = ({ title }) => (
    <div className="page-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh', textAlign: 'center' }}>
        <Card className="glass-panel" style={{ padding: '32px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '8px' }}>{title}</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Coming Soon</p>
        </Card>
    </div>
);

// Owner Pages
export const Leads = () => <Placeholder title="Leads Management" />;
export const LearnersList = () => <Placeholder title="All Learners" />; // Owner & Instructor
export const InstructorsList = () => <Placeholder title="Instructor Load" />;

// Instructor Pages
export const InstructorProfile = () => <Placeholder title="My Profile" />;
export const InstructorProgress = () => <Placeholder title="Progress Updates" />;

// Learner Pages
export const LearnerHome = () => <Placeholder title="Learner Home" />; // Merged with roadmap? Or distinct?
export const LearnerClasses = () => <Placeholder title="My Classes" />;
export const LearnerHelp = () => <Placeholder title="Help & Support" />;
