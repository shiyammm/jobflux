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
import ProtectedRoute from './components/ProtectedRoute';

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
          element: (
            <ProtectedRoute>
              <OnboardingPage />
            </ProtectedRoute>
          ),
        },
        {
          path: '/jobs',
          element: (
            <ProtectedRoute>
              <JobListing />
            </ProtectedRoute>
          ),
        },
        {
          path: '/post-job',
          element: (
            <ProtectedRoute>
              <PostJob />
            </ProtectedRoute>
          ),
        },
        {
          path: '/jobs/:id',
          element: (
            <ProtectedRoute>
              <JobPage />
            </ProtectedRoute>
          ),
        },
        {
          path: '/saved-jobs',
          element: (
            <ProtectedRoute>
              <SavedJobs />
            </ProtectedRoute>
          ),
        },
        {
          path: '/my-jobs',
          element: (
            <ProtectedRoute>
              <MyJobs />
            </ProtectedRoute>
          ),
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
