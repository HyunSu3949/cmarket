import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "src/lib/react-query/queryClient";
import { ToastContainer } from "react-toastify";
import Router from "src/pages/Router/Router";
import "react-toastify/dist/ReactToastify.css";
import ModalProvider from "./components/modal/ModalProvider";
import Modals from "src/components/modal/Modals";
import AuthProvider from "src/lib/auth/AuthProvider/AuthProvider";
import GlobalStyles from "src/components/common/GlobalStyle/GlobalStyle";
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
