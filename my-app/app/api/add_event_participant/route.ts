//lav en post request til event_particpants tabellen med en JSON body med bruger id og event id 
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";



const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);


export async function POST(request: Request) {
  const body = await request.json();
  const { user_id, selected_event} = body;
  

  const { data, error } = await supabase
    .from("event_participants")
    .insert([{ event_id: selected_event, participant_id: user_id }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ data }, { status: 200 });
}

