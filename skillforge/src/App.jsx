import AppRoutes from './routes/AppRoutes.jsx';
import { Toaster } from 'sonner';
import useAuthListener from './hooks/useAuthListener';

function App() {
  // Initialize the auth listener
  useAuthListener();

  return (
    <>
      <AppRoutes />
      <Toaster position="top-right" richColors />
    </>
  );
}

export default App;