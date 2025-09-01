function sum(a, b) {
  return a + b;
}
module.exports = sum;


//Testing async code
function fetchData(callback){
    setTimeout(()=>{
        callback("peanut Butter");
    }, 1000);
}

module.exports=fetchData;



//function that returns a promise

function fetchPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("peanut Butter");
        }, 1000);
    });
}

module.exports=fetchPromise;

//mock functions-created using fn

const mockCallBack=jest.fn(x=>42+x);
mockCallBack(0);//the zero is the value of x
mockCallBack(1);//the one is the value of x
