import { AssemblyAI } from "assemblyai";
import { NextResponse } from "next/server";

export async function POST(reqs) {
  try {
    const { audioScriptUrl } = await reqs.json();

    const client = new AssemblyAI({
      apiKey: process.env.TRANSCRIBE_API,
    });

    const audioUrl = audioScriptUrl;

    const config = {
      audio_url: audioUrl,
    };

    const transcript = await client.transcripts.transcribe(config);

    return NextResponse.json({ result: transcript.words });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: e });
  }
}
