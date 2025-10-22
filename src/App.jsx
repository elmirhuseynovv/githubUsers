import { Header, Main } from "./components/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserByUsername } from "./redux/slices/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUserByUsername("elmirhuseynovv"));
  }, [dispatch]);

  useEffect(() => {
    if (status === "failed") {
      toast.error(error || "Failed to fetch user data");
    }
  }, [status, error]);

  return (
    <div className="container">
      <Header />
      <Main />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default App;
