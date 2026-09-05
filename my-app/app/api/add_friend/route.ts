//lav en post request til friendships tabellen med en JSON body med bruger id og venne brugernavn ved brug af fetch metoden
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";



const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);


export async function POST(request: Request) {
  const body = await request.json();
  //forbinder de sendte data til body elementet der senere skal bruges til insert
  const { user_id, friend_username } = body;

  //finder vennens id i users tabellen ud fra brugernavnet
  const { data: friendUser, error: friendError } = await supabase
    .from("users")
    .select("id")
    .eq("username", friend_username)
    .single();

  if (friendError) {
    return NextResponse.json({ error: friendError.message }, { status: 400 });
  }

  //indsætter venskabet i friendships tabellen med begge brugeres id
  const { data, error } = await supabase
    .from("friendships")
    .insert([{ user_id1: user_id, user_id2: friendUser?.id }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ data }, { status: 200 });
}