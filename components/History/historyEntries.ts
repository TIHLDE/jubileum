import { ButtonBaseProps } from "@mui/material";

const entries: Array<EntryAggregate> = [
    
    {
        type: 'title',
        title: '1988',
        duration: 10,
        fadeOut: 60,
        fadeIn: 30,
        ignoreFadeIn: true,
        scaleTransition: true,
    },
    {
        type: 'body',
        body: 'TIHLDEs historie startet i 1993, men Drift, grunnleggerene av TIHLDE, ble opprettet i 1988. De ble senere en undergruppe i TIHLDE, og var i lang tid den drivende kraften i linjeforeningen. ',
        duration: 10,
        disableBackgroundAnimations: true,
    },
    {
        type: 'parent',
        duration: 10,
        flowDirection: 'column',
        itemSpacing: '10px',
        children: [
            {
                type: 'body',
                body: 'Drift var en gjeng som ønsket å drifte en studenttjener tilknyttet datidens EDB-avdeling ved Trondheim Ingeniørhøgskole (TIH). I dag består gruppen av 9 medlemmer som har ansvaret for daglige gjøremål tilknyttet TIHLDEs datasystemer.',
                duration: 10,
                disableBackgroundAnimations: true,
            },
            {
                type: 'button',
                label: 'Les mer om drift',
                href: '/wiki/drift',
                duration: 10,
            }
        ]
    },
    {
        type: 'titlebody',
        title: '1993',
        body: 'Tihlde stiftes',
        duration: 10,
    },
    {
        type: 'body',
        body: 'Ronny Hanssen og Arnt Harald Johansen tar initiativ til å starte linjeforeningen. Ragnvald T. Blindheim foreslår navnet TIHLDE - Trondheim IngeniørHoegskoles Linjeforening for Dannede Edbere.',
        duration: 10,
        disableBackgroundAnimations: true,
    },

    {
        type: 'titlebody',
        title: '1995',
        body: 'Tihldes logo',
        duration: 10,
        disableBackgroundAnimations: true,
    },
    {
        type: 'image',
        title: 'Tihldes logo',
        duration: 10,
        fadeIn: 70,
        width: 200,
        src: '/logo_old.png',
    },
  
    {
        type: 'body',
        body: 'Den første versjonen av TIHLDE-logoen opprettes av Torkild Ulvøy Resheim. De fire nodene med koblinger i mellom skulle illustrere nettverk og samhold. Til sist har vi ti(h)lde-tegnet som er velkjent blant UNIX brukere. Dette skulle symbolisere både TIHLDE og “hjem”.',
        duration: 10,
        disableBackgroundAnimations: false,
    },
    {
        type: 'parent',
        duration: 10,
        flowDirection: 'column',
        itemSpacing: '10px',
        children: [
            {
                type: 'body',
                body: '"Arbeidet ble gjort i løpet av en kveld. Først skissert på papir, deretter nøyaktig tegnet med DeLuxe Paint 3 (som var “state of the art” på den tiden) på en Amiga 1200. Alt utført av undertegnede som syntes TIHLDE kunne ha bruk for en logo. Dette var i 1995/96 tror jeg. Dét året jeg satt som leder for linjeforeningen.”',
                duration: 10,
            },
            {
                type: 'quote',
                label: '~Torkild Ulvøy Resheim',
                duration: 10,
            }
        ]
    },
    {
        type: 'timeline',
        duration: 40,
        ignoreFadeIn: false,
        fadeIn: 2,
        ignoreFadeOut: false,
        entries: [
            {
                type: 'body',
                body: 'TIHLDE blir 10 år',
                duration: 1,
                title: '2003',
                textAlign: 'left',
                disableBackgroundAnimations: true,
            },
            {
                type: 'body',
                body: 'TIHLDE blir 15 år',
                duration: 1,
                title: '2008',
                textAlign: 'left',
                disableBackgroundAnimations: true,

            },
            {
                type: 'parent',
                flowDirection: 'column',
                variant: 'left',
                title: '2011',
                children: [
                    {
                        type: 'body',
                        body: 'Kontoret på Kalvskinnet blir pusset opp',
                        duration: 1,
                        fadeOut: 100,
                        textAlign: 'left',
                        disableBackgroundAnimations: true,

                    },
                    {
                        type: 'button',
                        label: 'Les mer om året 2011',
                        duration: 1,
                        href: '/wiki/2011',
                    }
                ],
                duration: 1,
            },
            {
                type: 'body',
                body: 'TIHLDE blir 20 år, og de første daljene produseres',
                duration: 1,
                title: '2013',
                textAlign: 'left',
                disableBackgroundAnimations: true,
            },
            {
                type: 'body',
                body: 'TIHLDE slår seg sammen med NTNU',
                duration: 1,
                title: '2016',
                textAlign: 'left',
                disableBackgroundAnimations: true,

            },
            {
                type: 'parent',
                flowDirection: 'column',
                variant: 'left',
                title: '2017',
                children: [
                    {
                        type: 'body',
                        body: 'TIHLDE går fra HIST til NTNU, og flytter til Akrinn',
                        duration: 1,
                        textAlign: 'left', 
                        disableBackgroundAnimations: true,
                    },
                    {
                        type: 'button',
                        label: 'Les mer om året 2017',
                        duration: 1,
                        href: '/wiki/2017',
                    }
                ],
                duration: 1,
            },
            {
                type: 'body',
                body: 'Thomas Juberg blir slått som TIHLDEs aller første ridder',
                title: 'November 2018',
                duration: 1,
                disableBackgroundAnimations: true,
            }
        ]
    },
    {
        type: 'title',
        duration: 10,
        title: 'Martin Bjerke'
    },
    {
        type: 'body',
        duration: 10,
        body: 'Martin Bjerke foreslås som æresmedlem til generalforsamlingen på bakgrunn av hans hjelp til å ivareta og fremme TIHLDEs interesser i IDI sitt samlokaliseringsprosjekt. Uten Martin Bjerkes innsats ville det vært blitt stor usikkerhet rundt TIHLDEs status under flyttingen til Gløshaugen.',
        disableBackgroundAnimations: true,
    },
    {
        type: 'timeline',
        duration: 40,
        ignoreFadeIn: false,
        fadeIn: 2,
        ignoreFadeOut: false,
        entries: [
            {
                type: 'body',
                title: 'November 2019',
                body: 'Ole Gunnar Dybvik blir slått til ridder',
                duration: 1,
                disableBackgroundAnimations: true,
            },
            {
                type: 'body',
                title: '2019',
                body: 'TIHLDE får ny nettside. Den gamle kan fortsatt besøkes på old.tihlde.org',
                duration: 1,
                disableBackgroundAnimations: true,
            },
            {
                type: 'body',
                title: 'Januar 2020',
                body: 'TIHLDE flytter til Gløshaugen',
                duration: 1,
                disableBackgroundAnimations: true,
            },
            {
                type: 'body',
                title: 'Januar 2020',
                body: 'Innflyttningsfest med Abakus og Online til ære for TIHLDE',
                duration: 1,
                disableBackgroundAnimations: true,
            },
            {
                type: 'parent',
                flowDirection: 'column',
                variant: 'left',
                title: '2020',
                duration: 1,
                children: [
                    {
                        type: 'body',
                        title: '2020',
                        body: 'Det går fra et par bedriftpresentasjoner i semesteret, til et kurs og en bedriftpresentasjon i uken',
                        duration: 1,
                        disableBackgroundAnimations: true,
                    },
                    {
                        type: 'button',
                        label: 'Les mer om året 2020',
                        duration: 1,
                        href: '/wiki/2020',
                    },
                ],
            },
            {
                type: 'body',
                duration: 1,
                title: '2022',
                body: 'Det blir en ny fest med TIHLDE, Abakus og Online i regi av IDI',
                disableBackgroundAnimations: true,
            },
            {
                type: 'body',
                duration: 1,
                title: 'Vårgalla 2022',
                body: 'Markus Lønnemo og Nikoljia Maksic blir slått til riddere',
                disableBackgroundAnimations: true,
            },
            {
                type: 'body',
                duration: 1,
                title: 'Høsten 2022',
                body: 'Drift går fra å være en undergruppe til komité',
                disableBackgroundAnimations: true,
            }
        ]
    },
    {
        type: 'title',
        title: '2023',
        duration: 10,
        scaleTransition: true,
    },
    {
        type: 'title',
        duration: 15,
        fadeIn: 50,
        fadeOut: 90,
        title: 'Tihlde fyller 30 år.',
    }

]

/* 
    Several different types of content types can be added
    if needed (o゜▽゜)o☆
*/
type Entry = {
    type: 'title' | 'body' | 'titlebody' | 'image' | 'card' | 'pause';
    title?: string;
    body?: string;
    src?: string;
    button?: ButtonBaseProps;
    duration: number;
    fadeIn?: number;
    fadeOut?: number;
    ignoreFadeIn?: boolean;
    ignoreFadeOut?: boolean;
    disableBackgroundAnimations?: boolean;
    titleTransitionStart?: number;
    titleTransitionDuration?: number;
    textAlign?: 'center' | 'left' | 'right';
    width?: number;
    scaleTransition?: boolean;
    key?: number;
}

type DefaultKeys = {
    duration: number;
    fontSize?: string;
    ignoreFadeIn?: boolean;
    ignoreFadeOut?: boolean;
    key?: number;
}

type ButtonEntry = {
    type: 'button';
    label: string;
    href: string;
    onClick?: () => void;
    disabled?: boolean;
} & DefaultKeys

type QuoteEntry = {
    type: 'quote';
    label: string;
} & DefaultKeys

type ParentEntry = {
    type: 'parent';
    children: Array<EntryAggregate>;
    flowDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    itemSpacing?: string;
    variant?: 'left' | 'center' | 'right';
} & DefaultKeys

type TimelineEntry = {
    type: 'timeline';
    entries: Array<TimelineEntryItem>;
    flowDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    fadeIn?: number;
    fadeOut?: number;
} & DefaultKeys;

export type TimelineEntryItem = EntryAggregate & {title: string;};
export type EntryAggregate = Entry | ParentEntry | QuoteEntry | ButtonEntry | TimelineEntry;

export { entries };