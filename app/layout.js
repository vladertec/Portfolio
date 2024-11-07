import "./globals.scss"

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio created with Next.js",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
