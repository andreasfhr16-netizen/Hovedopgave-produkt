'use server'
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { cookies } from 'next/headers'



const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);


export async function POST(request: Request) {
    const { mail, password } = await request.json();

    const { data, error } = await supabase
        .from("users")
        .select("password, mail, username, id")
        .eq("mail", mail)
        .eq("password", password)
        .single();

    console.log("MAIL:", JSON.stringify(mail));
    console.log("PASSWORD:", JSON.stringify(password));
    console.log("USERNAME:", JSON.stringify(data?.username));
    console.log("ID:", JSON.stringify(data?.id));
    console.log("SUPABASE ERROR:", error);
    console.log("SUPABASE DATA:", data);


    if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }


    const cookieStore = await cookies()

    cookieStore.set({
        name: 'user',
        value: JSON.stringify({ mail, password, username: data?.username, id: data?.id }),
        httpOnly: true,
        path: '/',
    })


    
    return NextResponse.json(data);

}