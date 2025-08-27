import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CVBuilder from "@/components/pages/CVBuilder";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CVBuilder />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ zIndex: 9999 }}
      />
    </>
  );
}

export default App;