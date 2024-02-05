import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import MainPage from "./pages/MainPage";
import Matches from "./pages/Matches";
import Root from "./pages/Root";
import { Context } from "./context/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./context/PrivateRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <Context>
        <Routes>
          <Route index element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/mainpage" element={<Root />}>
              <Route index element={<MainPage />} />
            </Route>
            <Route path="/matches" element={<Matches />} />
          </Route>
        </Routes>
      </Context>
    </BrowserRouter>
  );
}
