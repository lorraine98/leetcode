/**
 * @param {string[]} strs
 * @return {string[][]}
 */

function primeFactorHash(string) {
    const primeMap = { a: 2, b: 3, c: 5, d: 7, e: 11, f: 13, g: 17, h: 19, i: 23, j: 29, k: 31, l: 37, m: 41, n: 43, o: 47, p: 53, q: 59, r: 61, s: 67, t: 71, u: 73, v: 79, w: 83, x: 89, y: 97, z: 101 };
    let product = 1;
    for (let i = 0; i < string.length; i++) {
        product *= primeMap[string[i]];
    }
    return product;
}


var groupAnagrams = function (strs) {
    const map = new Map();

    for (const str of strs) {
        const total = primeFactorHash(str);

        if (map.has(total)) {
            map.set(total, [...map.get(total), str]);
        } else {
            map.set(total, [str]);
        }
    }

    return Array.from(map.values());
};