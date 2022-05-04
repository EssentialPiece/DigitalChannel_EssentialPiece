import { Outlet } from "@remix-run/react";

export default function ContactRoute() {
  return (
    <div>
      <h1>Contact</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}