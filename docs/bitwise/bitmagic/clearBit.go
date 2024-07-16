// clearbit/clearbit.go

package main

import "fmt"


func clearBitWithRightShift(num uint8, pos uint8) uint8 {
    var mask uint8 = ^(1 << pos)
    return num & mask
}

func main() {
    num := uint8(10) // Binary: 00001010

    // Clear the bit at position 3 (counting from 0)
    fmt.Printf("Original number: %08b\n", num)


    clearedWithRightShift := clearBitWithRightShift(num, 3)
    fmt.Printf("Cleared with right shift: %08b\n", clearedWithRightShift)

}
