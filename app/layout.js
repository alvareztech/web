import "../styles/globals.css"

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
      </head>
      <body className="bg-white dark:bg-black">{children}</body>
    </html>
  )
}
