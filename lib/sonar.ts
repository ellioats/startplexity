// api helper function, called from backend 

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const query = body.query;

  try {

    const res = await fetch('pplx api link', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.PERPLEXITY_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'sonar-small-chat',
        messages: [
          { role: 'system', content: 'starter query' },
          { role: 'user', content: query }
        ],
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "error occured..." }, { status: res.status })
    }

    const data = await res.json();
    return NextResponse.json({ response: data });

  } catch (error) {
    console.error("API ERROR: ", error);
    return NextResponse.json({ error: 'internal api error' }, { status: 500 })
  }
}
