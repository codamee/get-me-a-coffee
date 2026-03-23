import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define exactly which routes are private
const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
    if (isProtectedRoute(req)) {
        // This line is the magic. It forces a check on every single request.
        await auth.protect();
    }
});

export const config = {
    matcher: [
        // This skips internal Next.js files and static assets (images, etc.)
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
    ],
};