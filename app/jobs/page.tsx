"use client";
import Jobs from "@/components/jobs/jobs";
import { Suspense } from "react";

export default function JobsPage() {
  return (
    <Suspense fallback={<div>Loading Jobs...</div>}>
      <Jobs />
    </Suspense>
  );
}
