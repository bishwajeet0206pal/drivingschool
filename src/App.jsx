import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';

// Layouts
import { OwnerLayout, InstructorLayout, LearnerLayout } from './components/layout/AppLayout';

// Owner Pages
import OwnerDashboard from './pages/owner/Dashboard';
import OwnerPackages from './pages/owner/Packages'; // Not in main nav but accessible
import { Leads, LearnersList, InstructorsList } from './pages/Placeholders';

// Instructor Pages
import InstructorSchedule from './pages/instructor/Schedule';
import InstructorLesson from './pages/instructor/LessonMode';
import { InstructorProfile, InstructorProgress } from './pages/Placeholders';

// Learner Pages
import LearnerRoadmap from './pages/learner/Roadmap';
import { LearnerHome, LearnerClasses, LearnerHelp } from './pages/Placeholders';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Owner Routes */}
        <Route path="/owner" element={<OwnerLayout />}>
          <Route path="dashboard" element={<OwnerDashboard />} />
          <Route path="leads" element={<Leads />} />
          <Route path="learners" element={<LearnersList />} />
          <Route path="instructors" element={<InstructorsList />} />
          <Route path="packages" element={<OwnerPackages />} />
        </Route>

        {/* Instructor Routes */}
        <Route path="/instructor" element={<InstructorLayout />}>
          <Route path="schedule" element={<InstructorSchedule />} />
          <Route path="learners" element={<LearnersList />} />
          <Route path="progress" element={<InstructorProgress />} />
          <Route path="profile" element={<InstructorProfile />} />
        </Route>
        {/* Lesson Mode is full screen, outside layout? Or inside? 
            Usually simplified view for focus. Let's keep it outside for now or Inside?
            "During Class" is Stage 2. 
            Let's keep lesson mode OUTSIDE the bottom nav to prevent accidental exit.
        */}
        <Route path="/instructor/lesson/:id" element={<InstructorLesson />} />

        {/* Learner Routes */}
        <Route path="/learner" element={<LearnerLayout />}>
          <Route path="home" element={<Navigate to="/learner/roadmap" replace />} /> {/* Redirecting Home to Roadmap for now as it's the main view */}
          <Route path="roadmap" element={<LearnerRoadmap />} />
          <Route path="classes" element={<LearnerClasses />} />
          <Route path="help" element={<LearnerHelp />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
