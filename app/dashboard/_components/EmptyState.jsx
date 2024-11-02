import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function EmptyState() {
  return (
    <div className="p-5 py-24 flex flex-col items-center mt-10 border-2 border-dashed">
      <h2 className="py-3">You don't have any video created</h2>
      <Link href={"/dashboard/create-new"}>
        <Button>Create new short video</Button>
      </Link>
    </div>
  );
}

export default EmptyState;
