// pages/_app.tsx
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import NavigationMenuComponent from "@/components/NavigationMenuComponent";
import { useRouter } from "next/router"; // Import useRouter
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link"; // Import next/link

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  const generateBreadcrumbs = () => {
    const pathSegments = router.asPath
      .split("/")
      .filter((segment) => segment !== "");

    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild={true} href="/">
              <a>Home</a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {pathSegments.map((segment, index) => {
            const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
            const isLast = index === pathSegments.length - 1;
            const segmentTitle =
              segment.charAt(0).toUpperCase() + segment.slice(1);
            return (
              <BreadcrumbItem key={path}>
                {isLast ? (
                  <span className="text-foreground">{segmentTitle}</span>
                ) : (
                  <BreadcrumbLink asChild={true} href={path}>
                    <a>{segmentTitle}</a>
                  </BreadcrumbLink>
                )}
                {/* Don't show separator on the last item */}
                {index < pathSegments.length - 1 && <BreadcrumbSeparator />}
              </BreadcrumbItem>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    );
  };

  return (
    <main className={inter.className}>
      <NavigationMenuComponent />
      {!isHomePage && generateBreadcrumbs()}
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
