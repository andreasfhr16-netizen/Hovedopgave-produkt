//lav en post request til events tabellen med en JSON body med event detaljer ved brug af fetch metoden
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";



const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);


export async function POST(request: Request) {
    const body = await request.json();
    const { Event_heading,
        Event_description,
        Event_location,
        Event_lat,
        Event_lng,
        Event_start_date,
        Event_end_date,
        Event_timezone,
        Event_attend_price,
        Event_participants } = body;


    const { data, error } = await supabase
        .from("events")
        .insert([{
            Event_heading,
            Event_description,
            Event_location,
            Event_lat,
            Event_lng,
            Event_start_date,
            Event_end_date,
            Event_timezone,
            Event_attend_price,
            Event_participants
        }]);

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ data }, { status: 200 });
}