"use client";

import {
  Grid,
  Calendar,
  User,
  List,
  Letter,
  Table,
  Page,
  Envelope,
  Inbox,
  Invoice,
  Chart,
  Layout,
  Enter,
} from "@/icons";

export const list = [
  {
    title: "Menu",
    items: [
      {
        icon: Grid,
        title: "Dashboard",
        link: null,
        free: true,
        list: [
          {
            title: "eCommerce",
            link: "/ecommerce",
            free: false,
          },
          {
            title: "Analytics",
            link: "/analytics",
            free: true,
          },

          {
            title: "Marketing",
            link: "/marketing",
            free: false,
          },
          {
            title: "CRM",
            link: "/crm",
            free: false,
          },
        ],
      },
      {
        icon: Calendar,
        title: "Dashboard",
        link: "/dashboard",
        free: true,
      },
      {
        icon: User,
        title: "Profile",
        link: "/profile",
        free: true,
      },
      {
        icon: List,
        title: "Task",
        link: "",
        free: true,
        list: [
          {
            title: "List",
            free: false,
            link: "/list",
          },
          {
            title: "Kanban",
            free: true,
            link: "/kanban",
          },
        ],
      },
      {
        icon: Letter,
        title: "Forms",
        link: "",
        free: true,
        list: [
          {
            title: "Form Elements",
            link: "/form-elements",
            free: true,
          },
          {
            title: "Form Layout",
            link: "/form-layout",
            free: true,
          },
          {
            title: "Form Validation",
            link: "/form-validation",
            free: false,
          },
        ],
      },
      {
        icon: Table,
        title: "Tables",
        link: "/tables",
        free: true,
      },
      {
        icon: Page,
        title: "Pages",
        link: "",
        free: true,
        list: [
          {
            title: "Settings",
            free: true,
            link: "/settings",
          },
          {
            title: "File Manager",
            free: false,
            link: "/file-manager",
          },
          {
            title: "Data Tables",
            free: false,
            link: "/data-tables",
          },
          {
            title: "Pricing Tables",
            free: true,
            link: "/pricing-tables",
          },
          {
            title: "Error Page",
            free: false,
            link: "/error-page",
          },
          {
            title: "Mail Success",
            free: false,
            link: "/mail-success",
          },
        ],
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        icon: Envelope,
        title: "Messages",
        free: true,
        count: 3,
        link: "/messages",
      },
      {
        icon: Inbox,
        title: "Inbox",
        free: false,
        link: "/inbox",
      },
      {
        icon: Invoice,
        title: "Invoice",
        free: false,
        link: "/invoice",
      },
    ],
  },
  {
    title: "others",
    items: [
      {
        icon: Chart,
        title: "Chart",
        free: true,
        link: "/chart",
      },
      {
        icon: Layout,
        title: "UI Elements",
        link: "",
        free: true,
        list: [
          {
            title: "Alearts",
            free: true,
            link: "/alearts",
          },
          {
            title: "Buttons",
            free: true,
            link: "/buttons",
          },
          {
            title: "Buttons Group",
            free: false,
            link: "/buttons-groups",
          },
          {
            title: "Badge",
            free: false,
            link: "/badge",
          },
          {
            title: "Breadcrumb",
            free: false,
            link: "/breadcrumbs",
          },
          {
            title: "Cards",
            free: false,
            link: "/cards",
          },
          {
            title: "Dropdowns",
            free: false,
            link: "/dropdowns",
          },
          {
            title: "Modals",
            free: false,
            link: "/modals",
          },
          {
            title: "Tabs",
            free: false,
            link: "/tabs",
          },
          {
            title: "Tooltips",
            free: false,
            link: "/tooltips",
          },
          {
            title: "Popovers",
            free: false,
            link: "/popovers",
          },
          {
            title: "Accordion",
            free: false,
            link: "/accordions",
          },
          {
            title: "Notifications",
            free: false,
            link: "/notifications",
          },
          {
            title: "Pagination",
            free: false,
            link: "/pagination",
          },
          {
            title: "Progress",
            free: false,
            link: "/progress",
          },
          {
            title: "Carousel",
            free: false,
            link: "/carousel",
          },
          {
            title: "Images",
            free: false,
            link: "/images",
          },
          {
            title: "Videos",
            free: false,
            link: "/videos",
          },
        ],
      },
      {
        icon: Enter,
        title: "Authentication",
        link: "",
        free: true,
        list: [
          {
            title: "Sign In",
            free: true,
            link: "/sign-in",
          },
          {
            title: "Sign Up",
            free: true,
            link: "/sign-up",
          },
          {
            title: "Reset Password",
            free: false,
            link: "/reset-password",
          },
        ],
      },
    ],
  },
];
