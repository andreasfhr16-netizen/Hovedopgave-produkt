//api rute der henter alle specificerede events fra supabase "events" tabellen
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
const { Event_entry_price} = await request.json();

  const { data, error } = await supabase
    .from("events")
    .select("*") 
    .eq("Event_entry_price", Event_entry_price)

    
    
  
if (error){
return NextResponse.json({ error: error.message }, { status: 400 });


}

    console.log("Data hentet:", data);
    const event_data = data;
    return NextResponse.json(event_data);

}