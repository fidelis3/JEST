const sum=require("./sum");
const fetchData=require("./sum");
const fetchPromise=require("./sum");

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });




// test("object assignment", () => {
//     const data = { one: 1 };
//     data["two"] = 2;
//     expect(data).toEqual({ one: 1, two: 2 });
// });


// test("null is falsy", () => {
//     const n = null;
//     expect(n).toBeFalsy();
// });
//n can be 0,null,undefined,false,"",NaN

//testing async fucntion
// test("the data is peanut BButter", (done) => {
//     function callback(data) {
//         try{
//             expect(data).toBe("peanut Butter");
//             done();
//         }
//         catch(error){
//             done(error);
//         }
//     };
//     fetchData(callback);
// });

test("the data is peanut Butter", () => {
    return expect(fetchPromise()).resolves.toBe("peanut Butter");
});

test("mock implementation of a basic function", () => {
    const mock = jest.fn(x => 42 + x);
    expect(mock(0)).toBe(42);
    expect(mock(1)).toBe(43);
    
});

//spy
test("spying on a method",() =>{
    const video={
        play(){
            return true;

        },
    };
    const spy=jest.spyOn(video,'play');
    video.play();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
});







