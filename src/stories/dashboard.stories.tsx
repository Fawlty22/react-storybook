// src/stories/Dashboard.stories.tsx
import Dashboard from '../pages/dashboard';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Components/Dashboard',
  component: Dashboard,
};

export const Default = () => (
  <MemoryRouter initialEntries={['/']}>
    <Dashboard />
  </MemoryRouter>
);
