import Header from "@/components/Header";
import "./globals.css";
import { AuthProvider } from "@/providers/auth";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-blue-300/5 antialiased relative pt-20">
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
