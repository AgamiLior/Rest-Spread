describe("#filterOutOdds", function () {
    it("returns filtered aray of even values", function () {
        expect(filterOutOdds(1, 2, 3, 4, 5)).toEqual([2, 4]);
    });
});

describe("#findMin", function () {
    it("returns the lowest number", function () {
        expect(findMin(1, 4, 12, -3)).toEqual(-3);
    });
});

describe("#mergeObjects", function () {
    it("returns merged objects into one object", function () {
        expect(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 })).toEqual({ a: 1, b: 2, c: 3, d: 4 });
    });
});

describe("#doubleAndReturnArgs", function () {
    it("returns new array with the values doubled", function () {
        expect(doubleAndReturnArgs([1, 2, 3], 4, 4)).toEqual([1, 2, 3, 8, 8]);
    });
});

describe("#removeRandom", function () {
    it("returns array without the random number", function () {
        expect(removeRandom([1, 2, 3, 4, 5, 6, 7]).length).toEqual(6);
    });
});

describe("#extend", function () {
    it("returns extneded array of two arrays", function () {
        expect(extend([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });
});

describe("#addKeyVal", function () {
    it("return object with a new key and value", function () {
        expect(addKeyVal({ firstName: 'John', lastName: 'Smith' }, 'middleName', 'Due' )).toEqual({ firstName: 'John', lastName: 'Smith', middleName: 'Due' })
    })
})

describe("#removeKey", function () {
    it("return object without the key", function () {
        expect(removeKey({ firstName: 'John', lastName: 'Smith' }, 'lastName')).toEqual({ firstName: 'John'})
    })
})

describe("#combine", function () {
    it("returns merged objects into one object", function () {
        expect(combine({ a: 1, b: 2 }, { c: 3, d: 4 })).toEqual({ a: 1, b: 2, c: 3, d: 4 });
    });
});

describe("#update", function () {
    it("return object with a new key and value", function () {
        expect(update({ firstName: 'John', lastName: 'Smith' }, 'lastName', 'Due')).toEqual({ firstName: 'John', lastName: 'Due' })
    })
})

