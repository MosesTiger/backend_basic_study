var figlet = require("figlet");

figlet("God with us!!", function(err, data) {
    //익명의 함수를 쓰는 이유는 이 함수를 다른 데 쓸 일이 없기 때문이다.
    //figlet 만든 사람이,매개변수를 함수로 받기로 했기 때문이다. 
    //첫번째 매개변수로 문자열을 받아서,
    // 아스키 아트를 먼저 만듬
    // 그 이후 두번째 매개변수 function 함수를 실행한다 = 콜백
    if (err){
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});