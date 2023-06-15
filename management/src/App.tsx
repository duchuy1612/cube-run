import { Suspense } from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-blue-300">
      <div className="flex h-full w-11/12 flex-col gap-4 transition-all lg:h-4/5 lg:w-4/5">
        <NavBar />
        <Suspense
          fallback={
            <div className="content_window window flex flex-col items-center justify-center gap-6 lg:flex-row">
              <h1 className="text-center">Authenticating</h1>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
