//api rute der henter alle grupper fra supabase "groups" tabellen
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET(request: Request) {


  const { data, error } = await supabase
    .from("groups")
    .select("*")  
    
    
  
if (error){
return NextResponse.json({ error: error.message }, { status: 400 });


}

    console.log("Data hentet:", data);
    const event_data = data;
    return NextResponse.json(event_data);

}