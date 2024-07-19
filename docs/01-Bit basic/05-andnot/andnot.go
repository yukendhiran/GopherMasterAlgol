package main

import "fmt"

func main() {
    // Example of using bit clear operator
    var a uint8 = 0b10101010 // Binary literal for 170 in decimal
    var b uint8 = 0b11001100 // Binary literal for 204 in decimal
    
    // Clear the bits in 'a' where 'b' has bits set to 1
    result := a &^ b
    
    fmt.Printf("Result: %08b\n", result) // Prints: 00100010 (binary) or 34 (decimal)
}
