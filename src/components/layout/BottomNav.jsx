import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const BottomNav = ({ items }) => {
    const location = useLocation();

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'var(--bg-secondary)',
            borderTop: '1px solid rgba(0,0,0,0.05)',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: '8px 16px',
            paddingBottom: '24px', // Safe area for iPhone home bar
            boxShadow: '0 -4px 12px rgba(0,0,0,0.05)',
            zIndex: 50
        }}>
            {items.map((item) => {
                const isActive = location.pathname.startsWith(item.path);

                return (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textDecoration: 'none',
                            gap: '4px',
                            padding: '8px',
                            flex: 1,
                            color: isActive ? 'var(--text-brand)' : 'var(--text-secondary)',
                            transition: 'all 0.2s ease',
                            transform: isActive ? 'translateY(-2px)' : 'none'
                        }}
                    >
                        {React.cloneElement(item.icon, {
                            size: 24,
                            strokeWidth: isActive ? 2.5 : 2
                        })}
                        <span style={{
                            fontSize: '0.7rem',
                            fontWeight: isActive ? '600' : '500'
                        }}>
                            {item.label}
                        </span>
                    </NavLink>
                );
            })}
        </div>
    );
};

export default BottomNav;
