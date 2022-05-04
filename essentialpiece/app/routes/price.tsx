import { Outlet } from "@remix-run/react";

export default function PriceRoute() {
  return (
    <div>
      <h1>Price</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}