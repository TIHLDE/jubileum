import { ButtonBaseProps } from "@mui/material";

const entries: Array<Entry> = [
    {
        type: 'title',
        title: '1988',
        duration: 10,
    },
    {
        type: 'title',
        title: '1993',
        duration: 10,
    },
    {
        type: 'title',
        title: '2004',
        duration: 10,
    },
        {
        type: 'title',
        title: '2007',
        duration: 10,
    },
]

/* 
    Several different types of content types can be added
    if needed (o゜▽゜)o☆
*/
type Entry = {
    type: 'title' | 'body' | 'titlebody' | 'image' | 'card';
    title?: string;
    body?: string;
    src?: string;
    button?: ButtonBaseProps;
    duration: number;
}

export {entries};