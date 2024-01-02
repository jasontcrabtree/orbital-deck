import { authMiddleware } from '@clerk/nextjs';

// Protects all routes
export default authMiddleware({});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
