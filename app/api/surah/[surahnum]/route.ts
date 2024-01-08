import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  params: { params: { surahnum: string } }
) {
  const surahnum = params.params.surahnum;
  const res = await fetch(`https://api.alquran.cloud/v1/surah/${surahnum}`);
  const data = await res.json();
  return NextResponse.json(data);
}
