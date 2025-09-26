import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { createFileRoute } from "@tanstack/react-router";

import data from "@/app/dashboard/data.json";

export const Route = createFileRoute("/_mainLayout/dashboard")({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "Dashboard",
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <>
      <SectionCards />
      <div className="px-4 lg:px-6">
        <ChartAreaInteractive />
      </div>
      <DataTable data={data} />
    </>
  );
}
