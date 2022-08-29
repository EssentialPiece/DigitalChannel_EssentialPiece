import type { LoaderFunction, MetaFunction, LinksFunction } from "@remix-run/node";
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
import Header from "~/components/header";
import Footer from "~/components/footer";
import rootStyle from '~/styles/site.css';

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Essential Piece Fitness",
  description: "Essential Piece Fitness LLC Personal Training",
  viewport: "width=device-width,initial-scale=1",
  keywords: "fitness,personal,training",
});

export const links: LinksFunction = () => {
  return [{
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
    integrity: "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: rootStyle
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png"
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png"
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png"
  },
  {
    rel: "manifest",
    href: "/site.webmanifest"
  }];
};

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
      <body className="d-flex flex-column min-vh-100">
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Footer />
      </body>
    </html>
  );
}
