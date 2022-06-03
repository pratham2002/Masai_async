function solution(num1,num2){
    
    var intersect  = num1.filter(x=>num2.includes(x))
    return( intersect.join(" "))

    /*iiterate throught each in one hich is big
    filter if avalave in second
    */

}

num2 = [9,4,9,8,1]
num1= [4,9,5]
solution(num1,num2)