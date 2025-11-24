import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { Sales } from './pages/Sales';
import { Resources } from './pages/Resources';
import { Academy } from './pages/Academy';
import { Support } from './pages/Support';
import { Settings } from './pages/Settings';

const Placeholder = ({ title }: { title: string }) => (
  <div className="flex h-96 flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
    <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
    <p className="mt-2 text-gray-500">This section is under construction.</p>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="sales" element={<Sales />} />
        <Route path="resources" element={<Resources />} />
        <Route path="academy" element={<Academy />} />
        <Route path="support" element={<Support />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<Placeholder title="404 Not Found" />} />
      </Route>
    </Routes>
  );
}

export default App;
