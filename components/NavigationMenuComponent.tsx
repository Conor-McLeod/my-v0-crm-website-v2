// components/NavigationMenuComponent.tsx
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link

export default function NavigationMenuComponent() {
  return (
    <NavigationMenu className="border-b">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <NavigationMenuList className="flex-1">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] md:grid-cols-2 lg:grid-cols-2">
                {/*  Use next/link for internal links */}
                <Link href="#" passHref legacyBehavior>
                  <NavigationMenuLink>
                    <div className="p-4 rounded-lg shadow-md border">
                      <h3 className="text-lg font-semibold">
                        Hassle-free Migration
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Seamless data migration to modern CRM systems.
                      </p>
                    </div>
                  </NavigationMenuLink>
                </Link>

                <Link href="#" passHref legacyBehavior>
                  <NavigationMenuLink>
                    <div className="p-4 rounded-lg shadow-md border">
                      <h3 className="text-lg font-semibold">Team Onboarding</h3>
                      <p className="text-sm text-muted-foreground">
                        Consistently and effectively use CRM, gaining team
                        visibility.
                      </p>
                    </div>
                  </NavigationMenuLink>
                </Link>

                <Link href="#" passHref legacyBehavior>
                  <NavigationMenuLink>
                    <div className="p-4 rounded-lg shadow-md border">
                      <h3 className="text-lg font-semibold">Automation</h3>
                      <p className="text-sm text-muted-foreground">
                        Streamline and automate your processes to boost
                        efficiency.
                      </p>
                    </div>
                  </NavigationMenuLink>
                </Link>
                <Link href="#" passHref legacyBehavior>
                  <NavigationMenuLink>
                    <div className="p-4 rounded-lg shadow-md border">
                      <h3 className="text-lg font-semibold">Customisation</h3>
                      <p className="text-sm text-muted-foreground">
                        Implementing customized CRM dashboards for real-time
                        visibility.
                      </p>
                    </div>
                  </NavigationMenuLink>
                </Link>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {/*  Use next/link for internal links. */}
                <Link href="/about" passHref legacyBehavior>
                  <NavigationMenuLink>
                    <div className="p-4 rounded-lg shadow-md border">
                      <h3 className="text-lg font-semibold">About Us</h3>
                      <p className="text-sm text-muted-foreground">
                        Learn more about our company and mission.
                      </p>
                    </div>
                  </NavigationMenuLink>
                </Link>
                <Link href="#" passHref legacyBehavior>
                  <NavigationMenuLink>
                    <div className="p-4 rounded-lg shadow-md border">
                      <h3 className="text-lg font-semibold">Our Team</h3>
                      <p className="text-sm text-muted-foreground">
                        Meet the experts behind our services.
                      </p>
                    </div>
                  </NavigationMenuLink>
                </Link>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            {/*  Use next/link for internal links. */}
            <Link href="/contact" passHref legacyBehavior>
              <NavigationMenuLink>Contact</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>

        {/* Company Name and Logo */}
        <div className="flex items-center">
          <span className="font-bold text-lg mr-4">Your Company</span>
          <Image
            src="/placeholder-logo.svg"
            alt="Company Logo"
            width={150}
            height={48}
            className="h-auto"
          />
        </div>
      </div>
    </NavigationMenu>
  );
}
