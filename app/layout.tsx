import { Header } from "@/components/ui/header";
import "./globals.css";
import { Footer } from "@/components/ui/footer";

interface RootLayoutProps {
  children: React.ReactNode;
  hideHeader?: boolean;
}

export default function RootLayout({
  children,
  hideHeader = false,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {!hideHeader && <Header />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
