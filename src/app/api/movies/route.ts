import seedData from "@/app/database/seeders/movieSeeder";
import { NextResponse } from "next/server";

export async function GET(res : NextResponse) {
    await seedData()
    return NextResponse.json({success : 'success'})
}