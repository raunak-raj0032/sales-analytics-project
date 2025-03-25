import { Routes, Route } from "react-router-dom";
import Home from "../pages/home-page/Home";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
