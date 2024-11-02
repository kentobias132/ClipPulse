import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h2>Subscribe for more content</h2>
      <Button variant="outline">Button</Button>
      <UserButton />
    </div>
  );
}
