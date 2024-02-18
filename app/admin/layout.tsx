export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      ADMIN PANEL
      <div className="container">{children}</div>
    </div>
  );
}
