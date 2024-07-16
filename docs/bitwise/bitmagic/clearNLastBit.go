package main

import "fmt"

// Clear the last `n` bits of the number
func clearNLastBit(num uint8, n uint8) uint8 {
	mask := ^(uint8(1<<n) - 1)
	fmt.Printf("Mask : (1<<n): %08b\n", uint8(1<<n))
	fmt.Printf("Mask : (1<<n) -1: %08b\n", uint8(1<<n) -1)
	fmt.Printf("Mask : (^(1<<n) -1): %08b\n", ^(uint8(1<<n) -1))
	fmt.Print("Search Binaray Arithmetic, If you don't understand. \n")
	return num & mask
}

func main() {
	num := uint8(10) // Binary: 00001010
	fmt.Printf("Original number: %08b\n", num)
	fmt.Printf("Cleared Last %d Bits: %08b\n", 3, clearNLastBit(num, 3))
}
