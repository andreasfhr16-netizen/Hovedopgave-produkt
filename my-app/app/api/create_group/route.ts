//lav en post request til events tabellen med en JSON body med event detaljer ved brug af fetch metoden
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";



const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);


export async function POST(request: Request) {
    const body = await request.json();
    const { Group_name,
        Group_description,
        Group_participants,
        Group_owner,
        } = body;


    const { data, error } = await supabase
        .from("groups")
        .insert([{
            Group_name,
            Group_description,
            Group_participants,
            Group_owner
        }]);

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ data }, { status: 200 });
}