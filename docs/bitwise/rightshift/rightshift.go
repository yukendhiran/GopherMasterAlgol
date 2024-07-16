package main

import "fmt"

func main() {
    var a int = 8
    fmt.Println(a >> 1)  // 4
    fmt.Println(a >> 2)  // 2
    fmt.Println(a >> 3)  // 1
    
    var b int = -8
    fmt.Println(b >> 1)  // -4
    fmt.Println(b >> 2)  // -2
    fmt.Println(b >> 3)  // -1
}
