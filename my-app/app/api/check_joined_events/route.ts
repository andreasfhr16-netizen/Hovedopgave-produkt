//lav en post request til supabase
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";



const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);


export async function POST(request: Request) {
    const body = await request.json();
    //sender id af bruger logget ind
    const { user_id } = body;

    //kigger i event_participants tabellen og udtrækker de 3 kolonner participant_id created_by_id og event_id  hvor user_id eller created_by_id er lig med brugerens eget id
    //variablen data navngives til events_joined og variablen error navngives tl joinError
    const { data: events_joined, error: joinError } = await supabase
        .from("event_participants")
        //returnerer kun id af event oprettede af brugen eller deltaget i, ifølge event_participants tabellen
        .select("participant_id, created_by_id, event_id")
        .or(`participant_id.eq.${user_id}, created_by_id.eq.${user_id}`)

        
    console.log("Event deltagelse fundet:", events_joined);

    if (joinError) {
        return NextResponse.json({ error: joinError.message }, { status: 400 });
    }
   

    return NextResponse.json({ data: events_joined }, { status: 200 });

    //dermed returneres kun de events oprettet eller deltaget i af brugeren der er logget ind

//hver række fra tabel hvor bruger er deltaget er 1 objekt i events_joined arrayet fx 

//[
// {participant_id: "58b08fa6-6fe2-49de-9dda-24fcf7603cd2", created_by: "null", event_id: "c680b6cb-2571-409e-9959-6744ddf5885c"}
// {participant_id: "58b08fa6-6fe2-49de-9dda-24fcf7603cd2", created_by: "null", event_id: "c680b6cb-2571-409e-9959-6744ddf5885c"}
// {participant_id: "58b08fa6-6fe2-49de-9dda-24fcf7603cd2", created_by: "null", event_id: "c680b6cb-2571-409e-9959-6744ddf5885c"}
//]
}