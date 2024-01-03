import { authMiddleware } from '@clerk/nextjs';

const isTestEnvironment = process.env.TEST_ENVIRONMENT === 'true';

const myAuthMiddleware = async () => {
  if (isTestEnvironment) {
    // Bypass Clerk's middleware logic
    return;
  }

  // Invoke Clerk's middleware for non-test environments
  return authMiddleware({
    //   publicRoutes: ['/', '/about'],
  });
};

export default myAuthMiddleware;

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
