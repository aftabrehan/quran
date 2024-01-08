import React from "react";

export default async function page({
    params,
}: {
    params: { surahnum: string };
}) {
    // const session = await getServerAuthSession();
    const surahnum = await params.surahnum;


    return (
        <main className="flex w-full max-h-screen items-center justify-center">
            <div className="w-full lg:w-2/3 mx-4 md:mx-7 lg:mx-10 mt-5 mb-5 h-full items-center justify-center">
                <p className="font-uthmanic h-auto text-center font-bold text-4xl">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
            </div>
        </main>
    );
}