// src/stories/Header.stories.tsx
import Header from '../components/header';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Components/Header',
  component: Header,
};

export const Default = () => (
  <MemoryRouter initialEntries={['/']}>
    <Header />
  </MemoryRouter>
);
