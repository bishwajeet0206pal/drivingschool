import React from 'react';

export const Card = ({ children, className = '', glass = true, ...props }) => {
    const style = {
        background: glass ? 'var(--bg-glass)' : 'var(--bg-secondary)',
        backdropFilter: glass ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: glass ? 'blur(12px)' : 'none',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: 'var(--radius-lg)',
        padding: '20px',
        boxShadow: glass ? 'var(--shadow-glass)' : 'var(--shadow-sm)',
        ...props.style
    };

    return (
        <div className={`card ${className}`} style={style} {...props}>
            {children}
        </div>
    );
};
