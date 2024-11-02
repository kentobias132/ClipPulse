"use client";
import React, { useState } from "react";
import SelectTopic from "./_components/SelectTopic";
import SelectStyle from "./_components/SelectStyle";
import SelectDuration from "./_components/SelectDuration";
import { Button } from "@/components/ui/button";
import axios from "axios";
import CustomLoading from "./_components/CustomLoading";

function CreateNew() {
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [script, setScript] = useState(null);
  const [audioSrc, setAudioSrc] = useState("");
  const [error, setError] = useState(null);

  const handleInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue);
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
    console.log(formData);
  };

  const handleSubmit = () => {
    getVideoScript();
  };

  const getVideoScript = async () => {
    setLoading(true);
    const prompt =
      "write a script to generate " +
      formData.duration +
      " video on topic: " +
      formData.topic +
      " along with AI image prompt in " +
      formData.imageStyle +
      " format for each scene and give me result in JSON format with imagePrompt and contentText as field";

    console.log(prompt);
    const result = await axios
      .post("/api/get-video-script", { prompt: prompt })
      .then((resp) => {
        console.log(resp.data.result);
        setScript(resp.data.result);
      });
    setLoading(false);
  };

  const generateAudio = async (videoScriptData) => {
    try {
      const response = await fetch("/api/text-to-speech", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className=" md:px-20">
        <h2 className="font-bold text-3xl text-center text-primary">
          Create New Video
        </h2>
        <div className="mt-10 p-10 shadow-md">
          {/* Select topic */}
          <SelectTopic onUserSelect={handleInputChange} />

          {/* Select style */}
          <SelectStyle onUserSelect={handleInputChange} />
          {/* Duration */}
          <SelectDuration onUserSelect={handleInputChange} />
          {/* Generate Button */}
          <div className="flex justify-center mt-16 ">
            <Button onClick={handleSubmit} className="w-2/5">
              Generate video
            </Button>
          </div>
          <CustomLoading loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default CreateNew;
