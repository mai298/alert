import "./App.css";
import Root from "./Pages/Root";
import AlertPage from "./Pages/AlertPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<AlertPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
