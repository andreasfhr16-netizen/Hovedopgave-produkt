
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";



const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);


export async function POST(request: Request) {
    const body = await request.json();
    const { user_id, newpassword } = body;


    const { data, error } = await supabase
        .from("users")
        .update({ password: newpassword })
        .eq("id", user_id)
        .select("mail, username, id")
        .single();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }

     const cookieStore = await cookies();

  cookieStore.set({
    name: "user",
    value: JSON.stringify({
      mail: data.mail,
      username: data.username,
      id: data.id,
    }),
    httpOnly: true,
    path: "/",
  });

    return NextResponse.json({ data }, { status: 200 });
}