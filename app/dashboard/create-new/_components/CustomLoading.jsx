import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

function CustomLoading({ loading }) {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent>
        <div className=" flex flex-col my-10 jus items-center">
          <Image src={"/loading2.gif"} width={100} height={100} />

          <h2>Generating your video... Do not refresh</h2>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default CustomLoading;
