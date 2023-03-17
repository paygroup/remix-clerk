import { SignedOut, SignedIn, SignIn } from '@clerk/remix';

export default function Index() {
  return (
    <>
    <SignedIn>
      <h1>welcome</h1>
    </SignedIn>
    <SignedOut>
      <SignIn />
    </SignedOut>
    </>
  );
}
