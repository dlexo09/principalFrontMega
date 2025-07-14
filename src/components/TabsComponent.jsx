import { Link, useLocation } from "react-router-dom";
import './TabsComponent.css';

const TabsComponent = ({ tabs, basePath }) => {
  const location = useLocation();
  // console.log("Location:", location);

  return (
    <div className="tabs-container tabs-general">
      {/* Navegación de las tabs */}
      <div className="nav nav-tabs justify-content-xl-center">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            to={`${basePath}/${tab.id}`} // Genera URLs dinámicas
            className={`nav-link ${location.pathname === `${basePath}/${tab.id}` ? "active" : ""}`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TabsComponent;