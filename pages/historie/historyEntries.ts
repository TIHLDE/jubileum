import { ButtonBaseProps } from "@mui/material";

const entries: Array<EntryAggregate> = [
    {
        type: 'title',
        title: '1988',
        duration: 10,
        ignoreFadeIn: true,
        scaleTransition: true,
    },
    {
        type: 'body',
        body: 'TIHLDEs historie startet i 1993, men Drift, grunnleggerene av TIHLDE, ble opprettet i 1988. Drift ble senere en undergruppe i TIHLDE, og var i lang tid den drivende kraften i linjeforeningen. ',
        duration: 10,
        disableBackgroundAnimations: true,
    },
    {
        type: 'body',
        body: 'Drift var en gjeng som ønsket å drifte en studenttjener tilknyttet datidens EDB-avdeling ved Trondheim Ingeniørhøgskole (TIH). I dag består Drift av 9 medlemmer som har ansvaret for daglige gjøremål tilknyttet TIHLDEs datasystemer. Hovedtjenestene som leveres er medlemskonto på studenttjeneren “Colargol” for studenter og ansatte ved NTNU, organisasjonskontoer på “Balthazar” for organisasjoner tilknyttet NTNU og virtuelle maskiner for TIHLDEs medlemmer på VMware-parken Nerdvana. I tillegg driftes det en rekke støttetjenester.',
        duration: 10,
        disableBackgroundAnimations: true,
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
        duration: 15,
        fadeIn: 70,
        width: 200,
        src: '/../public/logo_old.png',
    },
    {
        type: 'body',
        body: 'Den første versjonen av TIHLDE logoen opprettes av Torkild Ulvøy Resheim. “Tannhjulet gav logoen et tilstrekkelig teknisk preg. De fire nodene med koblinger i mellom skulle illustrere nettverk og samhold. Til sist har vi ti(h)lde-tegnet som er velkjent blant UNIX brukere. Dette skulle symbolisere både TIHLDE og “hjem”.',
        duration: 10,
        disableBackgroundAnimations: false,
    },

    {
        type: 'body',
        body: '"Arbeidet ble gjort i løpet av en kveld. Først skissert på papir, deretter nøyaktig tegnet med DeLuxe Paint 3 (som var “state of the art” på den tiden) på en Amiga 1200. Alt utført av undertegnede som syntes TIHLDE kunne ha bruk for en logo. Dette var i 1995/96 tror jeg. Dét året jeg satt som leder for linjeforeningen.” Torkild Ulvøy Resheim ',
        duration: 10,
    },
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
    disableBackgroundAnimations?: boolean;
    titleTransitionStart?: number;
    titleTransitionDuration?: number;
    textAlign?: 'center' | 'left' | 'right';
    width?: number;
    scaleTransition?: boolean;
}

type DefaultKeys = {
    duration: number;
}

type ButtonEntry = {
    type: 'button';
    label: string;
    href: string;
} & DefaultKeys

type QuoteEntry = {
    type: 'quote';
    label: string;
} & DefaultKeys

type ParentEntry = {
    type: 'parent';
    children: Array<Entry>;
    flowDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    itemSpacing?: string;
} & DefaultKeys



export type EntryAggregate = ParentEntry | QuoteEntry | ButtonEntry | Entry;

export {entries};