import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

type LoaderData = {
  analyticsURI: string | undefined;
};

// Load the GA tracking id from the .env
export const loader: LoaderFunction = async () => {
  return json<LoaderData>({ analyticsURI: process.env.PLAUSIBLE_URI });
};

export default function App() {
  const { analyticsURI } = useLoaderData<LoaderData>();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <script defer data-domain={analyticsURI} src="https://plausible.io/js/plausible.js"></script>
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
