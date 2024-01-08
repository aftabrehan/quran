import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  params: { params: { surahnum: string } }
) {
  const surahnum = params.params.surahnum;
  const res = await fetch(`https://quranenc.com/api/v1/translation/sura/english_saheeh/${surahnum}`);
  const data = await res.json();

  if (!data.result) {
    return NextResponse.json({ error: `Surah Number ${surahnum} is not present` }, { status: 404 });
  }
  return NextResponse.json(data.result);
  
}
