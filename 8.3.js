/*
难度：简 给一个整数数组，找到两个数使得他们的和等于一个给定的数 target。
你需要实现的函数twoSum需要返回这两个数的下标, 并且第一个下标小于第二个下标。
注意这里下标的范围是 1 到 n， 不是以 0 开头。 样例 给出 numbers = [2, 7, 11, 15], target = 9, 返回 [1, 2].
 */

function findIndex(numbers,target) {
    var index=[],pos=0
    for (var i=0;i<numbers.length;i++) {
        for (var j=i+1;j<numbers.length;j++) {
            if (numbers[i]+numbers[j]===target) {
                index[pos]=[i+1,j+1]
                pos++
                break
            }
        }
    }
    console.log(index)
}

var numbers=[1,11,2,3,15,9,7]
var target=10
findIndex(numbers,target)

//OK

/*难度：中等
给定一个罗马数字，将它转为整数（integer）只考虑3999以内的数
罗马数字有如下符号：

基本字符	I	V	X	L	C	D	M
对应阿拉伯数字	1	5	10	50	100	500	1000
计数规则：
相同的数字连写，所表示的数等于这些数字相加得到的数，例如：III = 3
小的数字在大的数字右边，所表示的数等于这些数字相加得到的数，例如：VIII = 8
小的数字，限于（I、X和C）在大的数字左边，所表示的数等于大数减去小数所得的数，例如：IV = 4
正常使用时，连续的数字重复不得超过三次*/
