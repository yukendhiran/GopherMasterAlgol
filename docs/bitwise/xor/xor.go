package main

import "fmt"

func main() {
    var a uint8 = 12  // 1100 in binary
    var b uint8 = 10  // 1010 in binary
    fmt.Printf("a ^ b = %d\n", a ^ b)  // 0110 in binary, which is 6
}