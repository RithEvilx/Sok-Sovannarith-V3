import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// Layout
import PublicLayout from "./layout/PublicLayout";
// Component
import Loading from "./components/common/Loading/Loading";
// Routes
const Home = lazy(() => import("./views/LandingPage/index"));
const Resume = lazy(() => import("./views/Resume"));
const TechStack = lazy(() => import("./views/TechStack"));
const Project = lazy(() => import("./views/Project"));
const ProjectDetail = lazy(() => import("./views/ProjectDetail"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
