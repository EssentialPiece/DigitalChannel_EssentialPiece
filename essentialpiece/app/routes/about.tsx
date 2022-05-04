import { Outlet } from "@remix-run/react";

export default function AboutRoute() {
  return (
    <div>
      <h1>About</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}