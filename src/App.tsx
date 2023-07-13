import "./index.css";
import { SerenityProvider } from "./shared/contexts/SerenityProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import AppRouter from "./shared/routes/AppRouter";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: 5 * 60 * 1000,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SerenityProvider>
          <AppRouter />
        </SerenityProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
