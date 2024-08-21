import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  AppLayout,
  LandingPage,
  JobPage,
  SavedJobs,
  MyJobs,
  OnboardingPage,
  JobListing,
  PostJob,
} from '../src/index';
import '../src/App.css';
import { ThemeProvider } from './components/theme-provider';

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <LandingPage />,
        },
        {
          path: '/onboarding',
          element: <OnboardingPage />,
        },
        {
          path: '/jobs',
          element: <JobListing />,
        },
        {
          path: '/post-job',
          element: <PostJob />,
        },
        {
          path: '/jobs/:id',
          element: <JobPage />,
        },
        {
          path: '/saved-jobs',
          element: <SavedJobs />,
        },
        {
          path: '/my-jobs',
          element: <MyJobs />,
        },
      ],
    },
  ]);

  return (
    <ThemeProvider defaultTheme="dark">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
