import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "src/lib/react-query/queryClient";
import { ToastContainer } from "react-toastify";
import Router from "src/pages/Router/Router";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <ToastContainer />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
