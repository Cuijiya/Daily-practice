// 难度：简单 输入两个字符串片段，计算里面的每个单词出现的次数
// Example chunk1: "Google Bye GoodBye Hadoop code"
// chunk2: "lintcode code Bye"
// result: Bye: 2 GoodBye: 1 Google: 1 Hadoop: 1 code: 2 lintcode: 1

function countWord(chunk1,chunk2) {
    var arr1=chunk1.split(' ')
    var arr2 = chunk2.split(' ')
    for (var i of arr2) {
        arr1.push(i)
    }
    var result=new Map()
    var count=1
    for (var i=0;i<arr1.length;i++) {
        if (result.has(arr1[i])) {
            result.set(arr1[i],result.get(arr1[i])+1)
        }else{
            result.set(arr1[i],count)
        }
    }
    console.log(result)
}

var chunk1='Google Bye GoodBye Hadoop code'
var chunk2='lintcode code Bye'
countWord(chunk1,chunk2)