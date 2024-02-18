import Grid from "@/public/images/grid.svg";
import Calendar from "@/public/images/calendar.svg";
import User from "@/public/images/user.svg";
import List from "@/public/images/list.svg";
import Letter from "@/public/images/letter.svg";
import Table from "@/public/images/table.svg";
import Page from "@/public/images/page.svg";
import Envelope from "@/public/images/envelope.svg";
import Inbox from "@/public/images/inbox.svg";
import Invoice from "@/public/images/invoice.svg";
import Chart from "@/public/images/chart.svg";
import Layout from "@/public/images/layout.svg";
import Enter from "@/public/images/enter.svg";

export const list = [
  {
    title: "Menu",
    items: [
      {
        icon: Grid,
        title: "Dashboard",
        list: [
          {
            title: "eCommerce",
            free: false,
          },
          {
            title: "Analytics",
            free: true,
          },

          {
            title: "Marketing",
            free: false,
          },
          {
            title: "CRM",
            free: false,
          },
        ],
      },
      {
        icon: Calendar,
        title: "Dashboard",
      },
      {
        icon: User,
        title: "Profile",
      },
      {
        icon: List,
        title: "Task",
        list: [
          {
            title: "List",
            free: false,
          },
          {
            title: "Kanban",
            free: true,
          },
        ],
      },
      {
        icon: Letter,
        title: "Forms",
        list: [
          {
            title: "Form Elements",
            free: true,
          },
          {
            title: "Form Layout",
            free: true,
          },
          {
            title: "Form Validation",
            free: false,
          },
        ],
      },
      {
        icon: Table,
        title: "Tables",
      },
      {
        icon: Page,
        title: "Pages",
        list: [
          {
            title: "Settings",
            free: true,
          },
          {
            title: "File Manager",
            free: false,
          },
          {
            title: "Data Tables",
            free: false,
          },
          {
            title: "Pricing Tables",
            free: true,
          },
          {
            title: "Error Page",
            free: false,
          },
          {
            title: "Mail Success",
            free: false,
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
      },
      {
        icon: Inbox,
        title: "Inbox",
        free: false,
      },
      {
        icon: Invoice,
        title: "Invoice",
        free: false,
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
      },
      {
        icon: Layout,
        title: "UI Elements",
        list: [
          {
            title: "Alearts",
            free: true,
          },
          {
            title: "Buttons",
            free: true,
          },
          {
            title: "Buttons Group",
            free: false,
          },
          {
            title: "Badge",
            free: false,
          },
          {
            title: "Breadcrumb",
            free: false,
          },
          {
            title: "Cards",
            free: false,
          },
          {
            title: "Dropdowns",
            free: false,
          },
          {
            title: "Modals",
            free: false,
          },
          {
            title: "Tabs",
            free: false,
          },
          {
            title: "Tooltips",
            free: false,
          },
          {
            title: "Popovers",
            free: false,
          },
          {
            title: "Accordion",
            free: false,
          },
          {
            title: "Notifications",
            free: false,
          },
          {
            title: "Pagination",
            free: false,
          },
          {
            title: "Progress",
            free: false,
          },
          {
            title: "Carousel",
            free: false,
          },
          {
            title: "Images",
            free: false,
          },
          {
            title: "Videos",
            free: false,
          },
        ],
      },
      {
        icon: Enter,
        title: "Authentication",
        list: [
          {
            title: "Sign In",
            free: true,
          },
          {
            title: "Sign Up",
            free: true,
          },
          {
            title: "Reset Password",
            free: false,
          },
        ],
      },
    ],
  },
];
