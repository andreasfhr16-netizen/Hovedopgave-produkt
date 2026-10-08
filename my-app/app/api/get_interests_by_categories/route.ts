import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  const body = await request.json();
  //forbinder de sendte data til body elementet, categories er et array af kategorinavne fx ["Brætspil"]
  const { categories } = body;

  if (!Array.isArray(categories) || categories.length === 0) {
    return NextResponse.json([], { status: 200 });
  }

  //finder kategoriernes id i categories tabellen ud fra kategorinavnene
  const { data: categoryRows, error: categoryError } = await supabase
    .from("categories")
    .select("category_id")
    .in("category_name", categories);

  if (categoryError) {
    return NextResponse.json({ error: categoryError.message }, { status: 400 });
  }

  const categoryIds = categoryRows?.map((c) => c.category_id) ?? [];

  //hvis ingen kategorier blev fundet stop her
  if (categoryIds.length === 0) {
    return NextResponse.json([], { status: 200 });
  }

  //henter alle interesser i interests tabellen hvor category_id matcher de fundne kategori id'er
  const { data, error } = await supabase
    .from("interests")
    .select("interest_id, interest_name, category_id")
    .in("category_id", categoryIds);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json(data, { status: 200 });
}