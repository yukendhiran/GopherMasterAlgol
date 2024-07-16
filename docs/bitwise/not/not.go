package main

import "fmt"

func main() {
    var num uint8 = 42 // 00101010 in binary
    fmt.Printf("%08b\n", num) // prints 00101010

    var complemented = ^num
    fmt.Printf("%08b\n", complemented)
	 // prints 11010101

	 var a int = 0
	 var b uint8 = 0
	 fmt.Println(^a)
	 fmt.Println(^b)
}