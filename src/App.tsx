import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/routes";
import "./styles/global.scss"; // Import global SCSS here

const App: React.FC = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
