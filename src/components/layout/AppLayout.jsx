import React from 'react';
import { Outlet } from 'react-router-dom';
import {
    LayoutDashboard, UserPlus, Users, UserCog,
    Calendar, CheckSquare, User,
    Home, BarChart, Clock, HelpCircle
} from 'lucide-react';
import BottomNav from './BottomNav';

export const OwnerLayout = () => {
    const navItems = [
        { label: 'Dashboard', path: '/owner/dashboard', icon: <LayoutDashboard /> },
        { label: 'Leads', path: '/owner/leads', icon: <UserPlus /> },
        { label: 'Learners', path: '/owner/learners', icon: <Users /> },
        { label: 'Instructors', path: '/owner/instructors', icon: <UserCog /> },
    ];

    return (
        <>
            <Outlet />
            <BottomNav items={navItems} />
        </>
    );
};

export const InstructorLayout = () => {
    const navItems = [
        { label: 'Today', path: '/instructor/schedule', icon: <Calendar /> },
        { label: 'Learners', path: '/instructor/learners', icon: <Users /> },
        { label: 'Progress', path: '/instructor/progress', icon: <CheckSquare /> },
        { label: 'Profile', path: '/instructor/profile', icon: <User /> },
    ];

    return (
        <>
            <Outlet />
            <BottomNav items={navItems} />
        </>
    );
};

export const LearnerLayout = () => {
    const navItems = [
        { label: 'Home', path: '/learner/home', icon: <Home /> },
        { label: 'Progress', path: '/learner/roadmap', icon: <BarChart /> },
        { label: 'Classes', path: '/learner/classes', icon: <Clock /> },
        { label: 'Help', path: '/learner/help', icon: <HelpCircle /> },
    ];

    return (
        <>
            <Outlet />
            <BottomNav items={navItems} />
        </>
    );
};
