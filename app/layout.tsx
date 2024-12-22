import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-purple-100 p-10"
      >
        {children}
      </body>
    </html>
  );
}
