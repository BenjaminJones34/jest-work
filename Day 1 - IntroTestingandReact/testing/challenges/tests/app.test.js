const { test, expect } = require("@jest/globals");
const app = require("../app");

// describe("should output according to input", () => {
//     test("should return error message", ()=> {
//         expect(app.notNull(null)).toBe("error: is null");
//     }); 
//     test("should return value inputted", ()=> {
//         expect(app.notNull(5)).toBe(5);
//     });
// });

// test("should be truthy", ()=> {
//     expect(app.truthy).toBeTruthy();
// });

// test("should not be false", ()=> {
//     expect(app.notFalsy).not.toBeFalsy();
// });

// describe("object should be correct", ()=> {
//     test("should be Random", ()=> {
//         expect(app.newObject()).toHaveProperty('name', "Random");
//     });
//     test("should be 20", ()=> {
//         expect(app.newObject()).toHaveProperty('age', 20);
//     });
// });

// describe("list returned should only have elements with more than 5 characters", () => {
//     for (let i = 0; i < app.sixCharacters(app.arr).length; i++) {
//         test("should be at least 6 characters", () => {
//             expect(app.sixCharacters(app.arr)[i].length).toBeGreaterThanOrEqual(6);
//         });
//     };
// });

// test("should be string", () => {
//     expect(app.numToString(5)).toBe("5");
// });

// describe("should return appropriate planets", () => {
//     for (let i = 1; i < 10; i++) {
//         test("should return appropriate planet", () => {
//             switch(i) {
//                 case 1:
//                     expect(app.planet(i)).toBe("Mercury");
//                     break;
//                 case 2:
//                     expect(app.planet(i)).toBe("Venus");
//                     break;
//                 case 3:
//                     expect(app.planet(i)).toBe("Earth");
//                     break;
//                 case 4:
//                     expect(app.planet(i)).toBe("Mars");
//                     break;
//                 case 5:
//                     expect(app.planet(i)).toBe("Jupiter");
//                     break;
//                 case 6:
//                     expect(app.planet(i)).toBe("Saturn");
//                     break;
//                 case 7:
//                     expect(app.planet(i)).toBe("Uranus");
//                     break;
//                 case 8:
//                     expect(app.planet(i)).toBe("Neptune");
//                     break;
//                 case 9:
//                     expect(app.planet(i)).toBe("Pluto");
//                     break;
//             };
//         });
//     };
// });

