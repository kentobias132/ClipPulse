"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

function SelectTopic({ onUserSelect }) {
  const promptOption = [
    "Custom Prompt",
    "Random AI Promt",
    "Historical Fact",
    "Country Story",
    "Motivational",
    "Bed Time Story",
    "Scary Story",
  ];

  const [selectedPrompt, setSelectedPrompt] = useState();

  return (
    <div>
      <h2 className="text-xl font-bold text-primary">Content</h2>
      <p className="text-gray-500 ">What is the topic of your video?</p>
      <Select
        onValueChange={(value) => {
          setSelectedPrompt(value);
          value != "Custom Prompt" && onUserSelect("topic", value);
        }}
      >
        <SelectTrigger className="mt-4 p-4 w-2/5">
          <SelectValue placeholder="Select Prompt" />
        </SelectTrigger>
        <SelectContent>
          {promptOption.map((item, index) => (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectedPrompt == "Custom Prompt" && (
        <Textarea
          onChange={(e) => onUserSelect("topic", e.target.value)}
          placeholder="Write you video prompt"
          className="mt-4"
        />
      )}
    </div>
  );
}

export default SelectTopic;
