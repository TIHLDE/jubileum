// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Event = {
    id: number;
    title: string;
    description: string;
    image: string;
    list_count: number;
    waiting_list_count: number;
    limit: number
}

type Data = {
    events: any[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const urlsUnfiltered = await fetch(
        "https://api.tihlde.org/events/?&organizer=jubkom"
    )
        .then((resp) => resp.json())
        .then((data) => data.results.map((event: { id: any }) => event.id));

    //removing url element "489" for some reason?
    const urls = urlsUnfiltered.filter((url: any) => url !== 489);

    const events: Event[] = await Promise.all(
        urls.map((url: any) =>
            fetch(`https://api.tihlde.org/events/${url}/`).then((resp) => resp.json())
        )
    );
    res
        .status(200)
        .setHeader(
            "cache-control",
            "public, s-maxage=1200, stale-while-revalidate=600"
        )
        .setHeader("content-type", "application/json")
        .json({ events: events });
}
