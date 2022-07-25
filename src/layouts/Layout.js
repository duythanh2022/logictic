import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "@/layouts/components/Header";
import Children from '@/routes/routes'
const Layout = () => {
  return (
    <>
      <Router>
        <Routes>
        <Route
          render={(props) => (
            <>
              <Header {...props} />
              <div className="container">
                    <div className="main">
                        <Children />
                    </div>
              </div>
            </>
          )}
        ></Route>
        </Routes>
      </Router>
    </>
  );
};
export default Layout;
