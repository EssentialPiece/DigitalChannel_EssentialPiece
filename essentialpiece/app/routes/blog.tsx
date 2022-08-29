import { Outlet } from "@remix-run/react";

export default function BlogRoute() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}