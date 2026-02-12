import { BrowserRouter, Route, Routes } from "react-router-dom";
// Layout
import PublicLayout from "./layout/PublicLayout";
// Component
import Home from "./views/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
