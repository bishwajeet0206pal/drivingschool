import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyle = {
        padding: '12px 24px',
        borderRadius: 'var(--radius-md)',
        border: 'none',
        fontWeight: '600',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        width: props.fullWidth ? '100%' : 'auto',
    };

    const variants = {
        primary: {
            background: 'var(--brand-gradient)',
            color: 'white',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
        },
        secondary: {
            background: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        outline: {
            background: 'transparent',
            border: '2px solid var(--text-brand)',
            color: 'var(--text-brand)',
        },
        ghost: {
            background: 'transparent',
            color: 'var(--text-secondary)',
        }
    };

    return (
        <button
            className={`btn-${variant} ${className}`}
            style={{ ...baseStyle, ...variants[variant] }}
            {...props}
        >
            {children}
        </button>
    );
};
