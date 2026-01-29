import React from 'react';
import { ArrowLeft, CheckCircle, Plus } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const OwnerPackages = () => {
    const navigate = useNavigate();

    const packages = [
        {
            id: 1,
            name: "Beginner Course",
            price: "₹5,000",
            duration: "15 Days",
            features: ["15 Practical Sessions", "Theory Classes", "RTO Assistance", "Pick & Drop"]
        },
        {
            id: 2,
            name: "Refresher Course",
            price: "₹3,500",
            duration: "7 Days",
            features: ["7 Practical Sessions", "Highway Driving", "Traffic Management"]
        },
        {
            id: 3,
            name: "License Only",
            price: "₹1,500",
            duration: "N/A",
            features: ["LL Application", "DL Test Slot", "Vehicle for Test"]
        }
    ];

    return (
        <div className="page-container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <Button variant="ghost" style={{ padding: '8px' }} onClick={() => navigate(-1)}>
                    <ArrowLeft size={20} />
                </Button>
                <h1 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Packages</h1>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {packages.map((pkg) => (
                    <Card key={pkg.id} style={{ padding: '0', overflow: 'hidden' }}>
                        <div style={{ padding: '20px', background: 'linear-gradient(to right, rgba(59, 130, 246, 0.1), transparent)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '700' }}>{pkg.name}</h3>
                                <span style={{ background: 'var(--brand-gradient)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '600' }}>{pkg.price}</span>
                            </div>
                            <div style={{ color: 'var(--text-brand)', fontSize: '0.9rem', fontWeight: '500' }}>{pkg.duration}</div>
                        </div>
                        <div style={{ padding: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {pkg.features.map((feat, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                        <CheckCircle size={14} color="#10b981" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                                <Button variant="ghost" style={{ fontSize: '0.9rem', padding: '8px 16px' }}>Edit</Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <Button
                variant="primary"
                style={{ position: 'fixed', bottom: '24px', right: '24px', borderRadius: '50%', width: '56px', height: '56px', padding: 0 }}
            >
                <Plus size={24} />
            </Button>
        </div>
    );
};

export default OwnerPackages;
