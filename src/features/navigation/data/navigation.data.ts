import { NavigationItemType } from "../types/navigation.types";

export const navigationItems: NavigationItemType[] = [
  {
    title: "Features",
    href: "/features",
  },
  {
    title: "Resources",
    href: "/resources",
    inner: [
      {
        title: "Documentation",
        href: "/documentation",
      },
      {
        title: "API",
        href: "/api",
      },
      {
        title: "Examples",
        href: "/examples",
      },
      {
        title: "Tutorials",
        href: "/tutorials",
      },
      {
        title: "Community Assets",
        href: "/community-assets",
      },
      {
        title: "Integrations",
        href: "/integrations",
      },
    ],
  },
  {
    title: "Community",
    href: "/community",
  },
  {
    title: "Business",
    href: "/business",
    inner: [
      {
        title: "3D Workflow",
        href: "/workflow",
      },
      {
        title: "Use Cases",
        href: "/use-cases",
      },
      {
        title: "Case Studies",
        href: "/case-studies",
      },
      {
        title: "Customer Care",
        href: "/customer-care",
      },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
];
