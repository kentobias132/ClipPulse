import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SelectDuration({ onUserSelect }) {
  return (
    <div className=" mt-10">
      <h2 className="text-xl font-bold text-primary">Duration</h2>
      <p className="text-gray-500 ">How long do you want your video</p>
      <Select
        onValueChange={(value) => {
          onUserSelect("duration", value);
        }}
      >
        <SelectTrigger className="mt-4 p-4 w-2/5">
          <SelectValue placeholder="Select Duration" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="30 seconds">30 Seconds</SelectItem>
          <SelectItem value="60 seconds">60 Seconds</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectDuration;
