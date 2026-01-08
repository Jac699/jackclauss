import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MobileMenu from "@/components/MobileMenu";

export const metadata = {
  title: "Jack Clauss",
  description: "Selected work and contact",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
      <div className="shell">
  <Sidebar />
  <main className="main">
    <MobileMenu />
    {children}
  </main>
</div>
      </body>
    </html>
  );
}
