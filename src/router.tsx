import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// Layout
import PublicLayout from "./layout/PublicLayout";
// Component
import Home from "./views/LandingPage/index";
import Resume from "./views/Resume";
import TechStack from "./views/TechStack";
import Project from "./views/Project";
import ProjectDetail from "./views/ProjectDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/tech-stacks" element={<TechStack />} />
          <Route path="/projects/" element={<Project />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
