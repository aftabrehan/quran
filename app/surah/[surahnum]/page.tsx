import React from "react";

export default async function page({
  params,
}: {
  params: { surahnum: string };
}) {
  // const session = await getServerAuthSession();
  const surahnum = await params.surahnum;
  

  return (
    <div>
        <h1>Surah {surahnum}</h1>
    </div>
  );
}