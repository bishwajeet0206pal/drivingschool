# Product Requirements Document (PRD) - DriveFlow

**Version 1.0**
**Scope:** Mobile-First Web Application (MVP)

---

## 1. Executive Summary

**Problem:** Government-authorised driving schools in Hyderabad struggle with manual operations, price argumentation, and lack of visible progress for learners. Behaviours are driven by anxiety ("Survival" mode) rather than excellence.

**Solution:** A mobile-first management platform that makes training progress visible, proving value over hours, and reducing coordination friction.

**Core Value Prop:** Sell outcomes (ready for test), not just hours.

---

## 2. Target Audience & Mental Models

### Learner
*   **Mental Model:** "Driving school is a black box. I pay, I obey, I hope I pass."
*   **Key Friction:** Uncertainty about progress ("Am I ready?").
*   **Desired Outcome:** Visible roadmap, granular skill tracking, test readiness.

### Instructor
*   **Mental Model:** "Experience matters more than systems. Admin is a burden."
*   **Key Friction:** Memory load (tracking 10+ students), repetitive feedback.
*   **Desired Outcome:** Simple checklists, no typing, reduced coordination.

### Owner
*   **Mental Model:** "Survival depends on cash flow and reputation."
*   **Key Friction:** Price wars, instructor utilization, overdue payments.
*   **Desired Outcome:** Predictable revenue, automated alerts (e.g., Pending Payments).

---

## 3. User Journey & Features

### Phase 1: MVP (Completed)

#### A. Shared Entry
*   **Persona Select**: Unified login/entry point for testing flows.

#### B. Owner Persona
*   **Dashboard**: High-level stats (Revenue, Active Students).
*   **Pending Payments Alert**: Red indicator for cash flow visibility.
*   **Packages**: Standardized pricing cards to reduce negotiation.
*   **Leads**: (Placeholder) Capture and track enquiry status.

#### C. Instructor Persona
*   **Daily Schedule**: Chronological list of today's classes.
*   **Lesson Mode**: "Start" -> "Task Checklist" -> "Complete" workflow.
*   **Checklist**: Concrete tasks (e.g., "Mirror check", "Parallel Park") to reduce memory load.

#### D. Learner Persona
*   **Roadmap**: Visual timeline from Theory to License.
*   **Granular Skills**: Breakdown of current stage (e.g., "Parking" -> "Reverse S", "Inclined Start").
*   **Test Readiness**: Clear progress circle.

---

## 4. Information Architecture (IA)

**Design Principle:** Max 3 taps for core actions. No typing-heavy screens.

*   **Global Navigation**: Persistent Bottom Tab Bar custom to each persona.
    *   **Owner**: Dashboard | Leads | Learners | Instructors
    *   **Instructor**: Today | Learners | Progress | Profile
    *   **Learner**: Home | Progress | Classes | Help

---

## 5. Technology Stack

*   **Frontend**: React (Vite)
*   **Styling**: Vanilla CSS (Mobile-first, Glassmorphism, CSS Variables)
*   **Icons**: Lucide React
*   **Routing**: React Router (Nested Layouts)
*   **Deployment**: Vercel (Ready)

---

## 6. Success Metrics

*   **Learner Trust**: Reduced questions about "When am I ready?".
*   **Instructor Efficiency**: Zero admin time after class (1-tap completion).
*   **Owner Peace of Mind**: Reduced overdue payments (via dashboard visibility).
