interface Subject {
    id: number;
    name?: string;
    created_at?: string | Date;
}

interface Obj {
    [key: string]: Subject;
}

const obj: Obj = {
    1: {
        id: 1,
        name: "test 1",
        created_at: "2021-08-01T00:00:00.000Z",
    },
    2: {
        id: 2,
        name: "test 2",
        created_at: "2021-08-02T00:00:00.000Z",
    },
    3: {
        id: 3,
        name: "test 3",
        created_at: "2021-08-03T00:00:00.000Z",
    },
    4: {
        id: 4,
        name: "test 4",
        created_at: "2021-08-04T00:00:00.000Z",
    },
};

export function sortByDate(obj: Obj, desc = false): Subject[] {
    const sorted = Object.values(obj).sort((a, b) => {
        const dateA = new Date(a.created_at as string);
        const dateB = new Date(b.created_at as string);
        return dateA.getTime() - dateB.getTime();
    });

    return desc ? sorted.reverse() : sorted;
}

console.log(sortByDate(obj, false));
