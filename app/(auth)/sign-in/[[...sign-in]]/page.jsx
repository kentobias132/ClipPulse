import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <Image
          src={"/signin.png"}
          alt="Login image"
          width={500}
          height={500}
          className="w-full object-contain h-screen"
        />
      </div>
      <div className="flex justify-center items-center h-screen">
        <SignIn />
      </div>
    </div>
  );
}
