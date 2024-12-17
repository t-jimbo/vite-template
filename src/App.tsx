import React from "react";
import { Route } from "wouter";

const Index = React.lazy(() => import("./pages/index"));

const App = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Route path="/" component={Index} />
      <Route path="/hoge">hogehoge</Route>
    </React.Suspense>
  );
};

export default App;
