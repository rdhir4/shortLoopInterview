export interface IComment {
    id: string;
    value: string;
    reply: IComment | null;
}



export const CommentList: IComment[] = [
    {
        id: '1',
        value: 'Hi I am Raghav',
        reply: {
            id: '1_rep',
            value: 'Hi level 1',
            reply: {
                    id: '1_1_rep',
                    value: 'Hi level2',
                    reply: null,
            }
        }
    
    },
    {
        id: '2',
        value: 'Hi I am abc',
        reply: {
            id: '2_rep',
            value: 'Hi Nice To Meet you',
            reply: null,
        }
    },
    {
        id: '3',
        value: 'Hi I am xyz',
        reply: {
            id: '3_rep',
            value: 'Hi Nice To Meet you',
            reply: null,
        }
    },
    {
        id: '4',
        value: 'Hi I am ghj',
        reply: {
            id: '4_rep',
            value: 'Hi Nice To Meet you',
            reply: null,
        }
    }
]