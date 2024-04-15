// import type { NextRequest, NextResponse } from 'next/server';
// import { NextResponse as res } from 'next/server';
// import { authMiddleware } from '@clerk/nextjs';

// const isTestEnvironment = process.env.TEST_ENVIRONMENT === 'true';

// const myAuthMiddleware = async () => {
//   if (isTestEnvironment) {
//     // Bypass Clerk's middleware logic
//     return res.next();
//   }

//   // Invoke Clerk's middleware for non-test environments
//   return authMiddleware({
//     //   publicRoutes: ['/', '/about'],
//   });
// };

// export default myAuthMiddleware;

// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// };

import type { NextRequest, NextResponse } from 'next/server';
import { NextResponse as serverRes } from 'next/server';
import { authMiddleware } from '@clerk/nextjs';

const isTestEnvironment = process.env.NODE_ENV === 'test';

export function middleware(req: NextRequest) {
  if (isTestEnvironment) {
    // Bypass Clerk's middleware logic in test environment
    return serverRes.next();
  }

  // Invoke Clerk's middleware for non-test environments
  // Adjust the implementation based on how Clerk's middleware integrates with Next.js Middleware
  return authMiddleware({});
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
