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

    //kigger i friendship tabellen og udtrækker de 2 kolonner user_id1 og user_id2 hvor user_id1 er lig med brugerens eget id
    //variablen data navngives til friendshoips og variablen error navngives tl friendshipError
    const { data: friendships, error: friendshipError } = await supabase
        .from("friendships")
        .select("user_id2")
        .eq("user_id1", user_id);

    //returner kun de rækker med user_id2 hvor user id af loggede imnd bruger fremgår
    console.log("FRIENDSHIPS FUNDET:", friendships);

    if (friendshipError) {
        return NextResponse.json({ error: friendshipError.message }, { status: 400 });
    }
    //et array af rækker hvor brugeren har et venne id som de er venner med returneres 
    //derefter forbindes hver id af venner varaiblen friendsIds så hvert id er 1 string værdi

    const friendsIds = friendships.map((f) => f.user_id2)

    const { data: friends, error: friendsError } = await supabase
        .from("users")
        .select("id, username")
        .in("id", friendsIds);

        //data varaiblen som normalt returneres er givet navnet friends
    console.log("FRIENDS FUNDET:", friends);

    if (friendsError) {
        return NextResponse.json({ error: friendsError.message }, { status: 400 });
    }

    return NextResponse.json({ data: friends }, { status: 200 });


}