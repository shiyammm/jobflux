import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from './ui/button';
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
  useUser,
} from '@clerk/clerk-react';
import { BriefcaseBusiness, Heart, PenBox } from 'lucide-react';
import { AvatarIcon } from '@radix-ui/react-icons';

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();
  const { user } = useUser();

  const handleCloseSignIn = (e) => {
    if (e.target == e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };

  useEffect(() => {
    if (search.get('sign-in')) {
      setShowSignIn(true);
    }
  }, [search]);

  return (
    <nav className="flex items-center justify-between w-full pt-9">
      <Link to="/" className="text-xl font-semibold xl:text-3xl">
        JobFlux
      </Link>
      <div className="flex items-start gap-5">
        <SignedOut>
          <Button variant="outline" onClick={() => setShowSignIn(true)}>
            Login
          </Button>
        </SignedOut>
        <SignedIn>
          {user?.unsafeMetadata?.role === 'recruiter' && (
            <Link to="post-job">
              <Button variant="destructive">
                <PenBox size={20} className="mr-2" /> Post Job
              </Button>
            </Link>
          )}
          <UserButton
            appearance={{
              elements: {
                avatarBox: 'w-9 h-9',
              },
            }}
          >
            <UserButton.MenuItems>
              <UserButton.Link
                label="My Jobs"
                href="/my-jobs"
                labelIcon={<BriefcaseBusiness size={20} />}
              />
              <UserButton.Link
                label="Saved Jobs"
                href="/saved-jobs"
                labelIcon={<Heart size={20} />}
              />
            </UserButton.MenuItems>
          </UserButton>
        </SignedIn>
      </div>
      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseSignIn}
        >
          <SignIn
            signUpForceRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
          />
        </div>
      )}
    </nav>
  );
};

export default Header;
