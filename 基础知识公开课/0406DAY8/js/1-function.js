function fn(n, m) {//=>形参:入口
    //=>函数体
    var total = 0;
    total = n + m;
    console.log(total);
}

fn(10, 20);//=>实参:给形参传递的具体值
/*
var a = 12;
fn(a, 1 === 1 ? 10 : 0);//=>实参一定是值,即使我们写的是变量或者表达式,也是把变量或者表达式计算的结果作为值传递给形参变量
*/
