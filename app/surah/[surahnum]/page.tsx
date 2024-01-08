"use client"

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Aayat from "@/components/aayah";
import { Separator } from "@radix-ui/react-dropdown-menu";

export default function Surah({
    params,
}: {
    params: { surahnum: string };
}) {
    const { toast } = useToast();
    const surahnum = params.surahnum;
    const [arSurah, setArSurah] = useState<any[]>([]);
    const [surah, setSurah] = useState<any>([]);

    useEffect(() => {
        fetchArSurah()
        fetchSurah()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchArSurah = async () => {
        try {
            axios
                .get(`https://quranenc.com/api/v1/translation/sura/english_saheeh/${surahnum}`)
                .then((res) => {
                    setArSurah(res.data.result);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (err: any) {
            console.log(err);
        }
    };

    const fetchSurah = async () => {
        try {
            axios
                .get(`https://api.quran.gading.dev/surah/${surahnum}`)
                .then((res) => {
                    console.log(res.data.data);
                    setSurah(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (err: any) {
            console.log(err);
        }
    };

    return (
        <main className="flex w-full max-h-screen items-center justify-center">
            <div className="w-full md:w-2/4 lg:w-2/4 mx-4 md:mx-7 lg:mx-10 mt-5 mb-7 h-full items-center justify-center">
                <p className="font-uthmanic h-auto text-center font-bold text-4xl">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
                <Tabs defaultValue="ar" className="w-full mt-5 mb-5">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="ar">Arabic</TabsTrigger>
                        <TabsTrigger value="tr">Translated</TabsTrigger>
                    </TabsList>
                    <TabsContent value="ar">
                        <div className="border p-3 text-center flex flex-col rounded-md break-all overflow-hidden">
                            <p className="text-4xl mb-4 mt-4 font-uthmanic">{surah?.name?.long}</p>
                            <div className="quran gap-5 break-words font-uthmanic flex flex-wrap">
                                {
                                    arSurah.map((item: any, index: any) => (
                                        <Aayat key={index} data={item} />
                                    ))
                                }
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="tr">
                        <Card>
                            <CardHeader>
                                <CardTitle>Password</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="current">Current password</Label>
                                    <Input id="current" type="password" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="new">New password</Label>
                                    <Input id="new" type="password" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Save password</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    );
}