import * as React from "react";
import { ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import type { AppData } from "@/schema/navigation.schema";
import { Link, useLocation } from "@tanstack/react-router";

// This is sample data.
const data: AppData = {
  versions: ["v1.0.0", "v1.1.0", "v2.0.0"],
  navMain: [
    {
      title: "Menu",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
          isActive: true,
        },
      ],
    },

    {
      title: "Sales",
      url: "#",
      items: [
        {
          title: "Orders",
          url: "/orders",
        },
        {
          title: "Order Details",
          url: "/order_details",
        },
        {
          title: "Customers",
          url: "/customers",
        },
        {
          title: "Shippers",
          url: "/shippers",
        },
      ],
    },

    {
      title: "Products",
      url: "#",
      items: [
        {
          title: "Products",
          url: "/products",
        },
        {
          title: "Categories",
          url: "/categories",
        },
        {
          title: "Suppliers",
          url: "/suppliers",
        },
      ],
    },

    {
      title: "Employees",
      url: "#",
      items: [
        {
          title: "Employees",
          url: "/employees",
        },
        {
          title: "Territories",
          url: "/territories",
        },
        {
          title: "Regions",
          url: "/regions",
        },
      ],
    },

    {
      title: "Analytics",
      url: "#",
      items: [
        {
          title: "Top Customers",
          url: "/reports/top-customers",
        },
        {
          title: "Sales by Category",
          url: "/reports/sales-by-category",
        },
        {
          title: "Sales by Region",
          url: "/reports/sales-by-region",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation();
  return (
    <Sidebar {...props}>
      <SidebarContent className="gap-0">
        {/* We create a collapsible SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
              >
                <CollapsibleTrigger>
                  {item.title}{" "}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map((child) => (
                      <SidebarMenuItem key={child.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={location.pathname === child.url} // ✅ Match current path
                        >
                          <Link to={child.url} preload={false}>
                            {child.title}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
