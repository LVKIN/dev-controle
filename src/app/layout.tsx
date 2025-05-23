import Header from "@/components/Header";
import "./globals.css";
import { AuthProvider } from "@/providers/auth";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-blue-300/5 antialiased relative pt-20">
        <Toaster />
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
