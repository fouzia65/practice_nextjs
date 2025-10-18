import Navigation from "@/component/navigation";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navigation></Navigation>
        <h1>this is home layout</h1>
        {children}
      </body>
    </html>
  )
}
