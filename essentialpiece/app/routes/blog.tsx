import { Outlet } from "@remix-run/react";

export default function BlogRoute() {
  return (
    <div>
      <h1>Blog</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}