// // import type { NextRequest, NextResponse } from 'next/server';
// // import { NextResponse as serverRes } from 'next/server';
// // import { authMiddleware } from '@clerk/nextjs';

// // const isTestEnvironment = process.env.NODE_ENV === 'test';

// // export function middleware(req: NextRequest) {
// //   if (isTestEnvironment) {
// //     // Bypass Clerk's middleware logic in test environment
// //     return serverRes.next();
// //   }

// //   // Invoke Clerk's middleware for non-test environments
// //   // Adjust the implementation based on how Clerk's middleware integrates with Next.js Middleware
// //   return authMiddleware({});
// // }

// // export const config = {
// //   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// // };

// import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
// import { NextResponse } from 'next/server';

// // See https://clerk.com/docs/references/nextjs/auth-middleware
// export default authMiddleware({
//   afterAuth(auth, req, evt) {
//     // Handle users who aren't authenticated
//     if (!auth.userId && !auth.isPublicRoute) {
//       return redirectToSignIn({ returnBackUrl: req.url });
//     }
//     if (auth.userId && !auth.isPublicRoute) {
//       return NextResponse.next();
//     }
//     // Allow users visiting public routes to access them
//     return NextResponse.next();
//   },
// });

// export const config = {
//   matcher: [
//     // Exclude files with a "." followed by an extension, which are typically static files.
//     // Exclude files in the _next directory, which are Next.js internals.
//     '/((?!.+\\.[\\w]+$|_next).*)',
//     // Re-include any files in the api or trpc folders that might have an extension
//     '/(api|trpc)(.*)',
//   ],
// };

import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({});

export const config = {
  matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
