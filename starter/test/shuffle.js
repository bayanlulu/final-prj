import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";
import { describe, it } from "mocha";

describe("shuffle", () => {
    it("should shuffle the indexes of an array", () => {
        const arr = [1, 2, 3, 4, 5];
        const shuffled = shuffle([...arr]);

        // here where shouldn't be in the same order
        expect(shuffled).to.not.deep.equal(arr);

        // and here where should contain the same elements
        expect(shuffled.slice().sort()).to.deep.equal(arr.slice().sort());
    });
});