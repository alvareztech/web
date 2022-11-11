import "../styles/globals.css"

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Daniel Alvarez</title>
      </head>
      <body className="bg-white dark:bg-black">{children}</body>
    </html>
  )
}
