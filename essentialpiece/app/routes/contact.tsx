import { Outlet } from "@remix-run/react";

export default function ContactRoute() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}