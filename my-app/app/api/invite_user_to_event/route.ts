//lav en post request til users og event_participants tabellen med en JSON body med bruger id og venne brugernavn 
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";



const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);


export async function POST(request: Request) {
  const body = await request.json();
  //forbinder de sendte data til body elementet der senere skal bruges til insert
  const { invite_user_id, selected_event } = body;

  //finder vennens id i users tabellen ud fra brugernavnet
  const { data: friendUser, error: invitefrienderror } = await supabase
    .from("users")
    .select("id")
    .eq("username", invite_user_id)
    .single();

  

  //indsætter den inviterede brugers id i event_participants tabellen 
  const { data, error } = await supabase
    .from("event_participants")
    .insert([{ participant_id: friendUser?.id, event_id: selected_event }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ data }, { status: 200 });
}