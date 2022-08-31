import { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import contactStyles from "../styles/contact/index.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: contactStyles }];
};

export default function ContactRoute() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}