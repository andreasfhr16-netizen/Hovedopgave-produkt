//lav en post request til bruger tabellen med en JSON body med brugernavn kode og mail ved brug af fetch metoden
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";



const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);


export async function POST(request: Request) {
  const body = await request.json();
  const { username, password, mail } = body;
  

  const { data, error } = await supabase
    .from("users")
    .insert([{ username: username, password: password, mail: mail }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ data }, { status: 200 });
}