"use client"

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast"

export default function Surah({
    params,
}: {
    params: { surahnum: string };
}) {
    const surahnum = params.surahnum;
    const [surah, setSurah] = useState([]);

    useEffect(() => {
        fetchSurah()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchSurah = async () => {
        try {
            axios
                .get(`https://api.quran.gading.dev/surah/${surahnum}`)
                .then((res) => {
                    setSurah(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (err: any) {
            console.log(err);
        }
    };
    console.log(surah);

    return (
        <main className="flex w-full max-h-screen items-center justify-center">
            <div className="w-full lg:w-2/3 mx-4 md:mx-7 lg:mx-10 mt-5 mb-5 h-full items-center justify-center">
                <p className="font-uthmanic h-auto text-center font-bold text-4xl">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
            </div>
        </main>
    );
}