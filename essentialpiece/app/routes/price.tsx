import { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import priceStyles from "../styles/price/index.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: priceStyles }];
};

export default function PriceRoute() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}