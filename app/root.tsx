import { cssBundleHref } from '@remix-run/css-bundle'
import type { LinksFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import style from './globals.css'
import { Separator } from './components/ui/separator'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: style },
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
]

export default function App() {
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex-col flex-1 h-full p-4 space-y-8 md:flex">
          <div className="flex items-center justify-between space-y-2">
            <h1 className="text-2xl font-bold tracking-tight">
              Cek Status Gizi
            </h1>
          </div>

          <Outlet />
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
