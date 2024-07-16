package main

import "fmt"

func main() {
    var a int = 5
    var b int = 8
    
    fmt.Println("Check if numbers are odd or even using bitwise AND:")
    fmt.Printf("%d & 1 = %d -> %d is %s\n", a, a & 1, a, checkOddEven(a))
    fmt.Printf("%d & 1 = %d -> %d is %s\n", b, b & 1, b, checkOddEven(b))
}

func checkOddEven(num int) string {
    if num & 1 == 0 {
        return "even"
    }
    return "odd"
}