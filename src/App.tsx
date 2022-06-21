import { Toaster } from 'react-hot-toast';
import AppRouter from './router/Routes';

export default function App() {
  return (
    <div>
      <AppRouter />

      <div id="taost-wrapper">
        <Toaster position="top-center" />
      </div>
    </div>
  );
}