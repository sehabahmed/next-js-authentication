// import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard"],
};

// import { withAuth } from "next-auth/middleware";

// export default withAuth(
//   function middleware(req) {
//     // Add any additional middleware logic here if needed
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => !!token,
//     },
//   }
// );

// export const config = {
//   matcher: ["/dashboard/:path*"]
// };
