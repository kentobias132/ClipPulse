const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "write a script to generate 30 seconds video on topic: benefit of drinking  water along with AI image prompt in realistic format for each scene and give me result in JSON format with imagePrompt and contentText as field \n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "imagePrompt": "A glass of sparkling water with ice cubes on a table in a sunny garden",\n    "contentText": "Feeling thirsty? We all do. That\'s a sign your body needs water.  It\'s the most important beverage for a healthy life."\n  },\n  {\n    "imagePrompt": "Close-up of a person\'s face, smiling, with a drop of water on their cheek",\n    "contentText": "Water keeps you hydrated, which means it helps your body function at its best."\n  },\n  {\n    "imagePrompt": "A person exercising outdoors, sweating, with a water bottle in hand",\n    "contentText": "  It\'s crucial for exercise, helping to regulate your temperature and prevent dehydration."\n  },\n  {\n    "imagePrompt": "A photo of fresh fruits and vegetables, with a glass of water next to them",\n    "contentText": "Water helps your body absorb nutrients from food, making your meals more effective."\n  },\n  {\n    "imagePrompt": "A person with clear skin, smiling",\n    "contentText": "Drinking enough water can help you have clearer skin and keep your body functioning properly."\n  },\n  {\n    "imagePrompt": "A person drinking water from a glass, looking refreshed",\n    "contentText": "It\'s easy to make sure you\'re drinking enough. Just keep a water bottle with you throughout the day."\n  },\n  {\n    "imagePrompt": "A person holding a glass of water with a sunrise in the background",\n    "contentText": "Start your day with a big glass of water. It\'s a great way to jumpstart your metabolism."\n  },\n  {\n    "imagePrompt": "A collection of different water bottles, such as stainless steel, glass, and plastic",\n    "contentText": "Whether you prefer still or sparkling, there\'s a water bottle for everyone. Find your favorite and stay hydrated!"\n  }\n]\n```\n\n**Notes:**\n\n* This JSON array provides 8 scenes, which is more than enough for a 30-second video. You can adjust the number of scenes and content as needed.\n* The image prompts are designed to be realistic and easy for an AI image generator to understand. You can modify them to be more specific to your needs.\n* Each scene should have a brief content text that explains the benefit of drinking water in a concise and engaging way.\n* You can add music, sound effects, or other visuals to enhance the video. \n* Consider using a tool like **Pictory** to easily transform this script into a video. \n',
        },
      ],
    },
  ],
});
