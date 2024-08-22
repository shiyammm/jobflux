import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/clerk-react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarLoader } from 'react-spinners';

const OnboardingPage = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  const handleUserRole = async (role) => {
    await user
      .update({
        unsafeMetadata: { role },
      })
      .then(() => {
        navigate(role === 'recruiter' ? '/post-job' : '/jobs');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (user?.unsafeMetadata?.role) {
      navigate(
        user?.unsafeMetadata?.role === 'recruiter' ? '/post-job' : '/jobs',
      );
    }
  }, [user]);

  if (!isLoaded) {
    return <BarLoader className="mt-4" width={'100%'} color="#36d7b7" />;
  }

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center justify-center space-y-5 text-center">
        <h1 className="text-6xl font-semibold text-white">I am a...</h1>
        <div className="flex gap-4">
          <Button onClick={() => handleUserRole('candidate')} variant="blue">
            Candidate
          </Button>
          <Button
            onClick={() => handleUserRole('recruiter')}
            variant="destructive"
          >
            Recruiter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
