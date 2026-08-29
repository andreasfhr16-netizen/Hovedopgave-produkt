import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);


export async function POST(request: Request) {
    const { mail, password } = await request.json();

    const { data, error } = await supabase
        .from("users")
        .select("password, mail")
        .eq("mail", mail)
        .eq("password", password)
        .single();

    console.log("MAIL:", JSON.stringify(mail));
    console.log("PASSWORD:", JSON.stringify(password));
    console.log("SUPABASE ERROR:", error);
    console.log("SUPABASE DATA:", data);

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }


    return NextResponse.json(data);
}