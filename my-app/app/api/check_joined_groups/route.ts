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

    //kigger i group_participants tabellen og udtrækker de 3 kolonner participant_id group_owner og group_id  hvor user_id eller group_owner id er lig med brugerens eget id
    //variablen data navngives til groups_joined og variablen error navngives tl joinError
    const { data: groups_joined, error: joinError } = await supabase
        .from("group_participants")
        //returnerer kun id af gruppe oprettede af brugen eller deltaget i, ifølge group_participants tabellen
        .select("Participant_id, Group_owner, Group_id")
        .or(`Participant_id.eq.${user_id}, Group_owner.eq.${user_id}`)


    if (joinError) {
        return NextResponse.json({ error: joinError.message }, { status: 400 });
    }

  
    return NextResponse.json({ data: groups_joined }, { status: 200 });

}