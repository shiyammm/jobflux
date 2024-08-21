import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react';

const Header = () => {
  return (
    <nav className="flex pt-9 justify-between items-center w-full">
      <Link to="/" className="xl:text-3xl text-xl font-semibold">
        JobFlux
      </Link>
      {/* <Button variant="outline">Login</Button> */}
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};

export default Header;
