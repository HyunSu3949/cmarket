import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "lib/react-query/queryClient";
import { ToastContainer } from "react-toastify";
import Router from "pages/Router/Router";
import "react-toastify/dist/ReactToastify.css";
import ModalProvider from "./components/modal/ModalProvider";
import Modals from "components/modal/Modals";
import AuthProvider from "lib/auth/AuthProvider/AuthProvider";
import GlobalStyles from "style/GlobalStyle/GlobalStyle";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ModalProvider>
          <GlobalStyles />
          <Router />
          <Modals />
        </ModalProvider>
      </AuthProvider>
      <ToastContainer />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
