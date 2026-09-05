import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
    const cookieStore = await cookies();


    //forbinder cookie kaldt "user" med variablen userId som derefter returneres som json
    //userId varaiblen forbindes med value af cookie objektet 
    //denne value er så mail og password i steng datatype af bruger som er logget ind
    const raw = cookieStore.get("user")?.value;
    console.log("RAW COOKIE VALUE:", JSON.stringify(raw));   

    const userData = raw ? JSON.parse(raw) : null;

    if (!raw) {
        return NextResponse.json(
            { user: null },
            { status: 401 }
        );
    }

    return NextResponse.json({
        mail: userData?.mail,
        password: userData?.password,
        username: userData?.username,
        id: userData?.id
    });
}