import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// Layout
import PublicLayout from "./layout/PublicLayout";
// Component
import Home from "./views/index";
import Resume from "./views/Resume";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
