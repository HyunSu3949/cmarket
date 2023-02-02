import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "src/lib/react-query/queryClient";
import { ToastContainer } from "react-toastify";
import Router from "src/pages/Router/Router";
import "react-toastify/dist/ReactToastify.css";
import ModalProvider from "./components/modal/ModalProvider";
import Modals from "src/components/modal/Modals";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <Router />
        <ToastContainer />
        <Modals />
        <ReactQueryDevtools />
      </ModalProvider>
    </QueryClientProvider>
  );
}

export default App;
