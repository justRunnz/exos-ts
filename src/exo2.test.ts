import { randomInt, randomBytes } from "crypto";

interface Subject {
    id: number;
    name?: string;
    created_at?: string | Date;
}

interface Obj {
    [key: string]: Subject;
}

const generateTestObj = (n: number) => {
    const testObj: Obj = {};
    for (let i = 0; i < n; i++) {
        const isoTime = new Date(
            randomInt(1691102965811, 1696102965811)
        ).toISOString();
        testObj[isoTime] = {
            id: i,
            name: randomBytes(5).toString("hex"),
        };
    }
    return testObj;
};

describe("sortByDate", () => {
    it("should throw an error if the user is not found", async () => {
        const testObj = generateTestObj(10);
        expect(testObj.length).toBe(10);
    });
});
