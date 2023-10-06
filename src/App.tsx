import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Suspense } from "react";

const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default App;
