import React, { Children } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRouter } from "./router";
import Layouts from "./components/layouts/layouts";
import "./App.scss";

function App() {
  return (
    <div className="Wraper-app">
      <Router>
        <Layouts>
          <Routes>
            {publicRouter.map((router) => {
              const Page = router.component;
              return (
                <Route key={router.id} path={router.path} element={<Page />}>
                  {router.children &&
                    router.children.map((item) => {
                      const PageChildren = item.component;
                      return (
                        <Route
                          key={item.id}
                          path={item.path}
                          element={<PageChildren />}
                        />
                      );
                    })}
                </Route>
              );
            })}
          </Routes>
        </Layouts>
      </Router>
    </div>
  );
}

export default App;
