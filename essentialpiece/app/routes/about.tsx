import { Outlet } from "@remix-run/react";

export default function AboutRoute() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}