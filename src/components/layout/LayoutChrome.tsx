"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SocialSidebar from "@/components/ui/SocialSidebar";

export default function LayoutChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isProjectViewer = pathname.startsWith("/projects/");

  if (isProjectViewer) {
    return <>{children}</>;
  }

  return (
    <>
      <SocialSidebar />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}