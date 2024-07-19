package main

import "fmt"

func setBit(num uint8, pos uint8) uint8 {
	var mark uint8 = 1 << pos
	return num | mark
}

func main() {
	num := uint8(10) // Binary: 00001010
	
	fmt.Printf("Original number: %08b\n", num)
	
	fmt.Printf("Set Bit: %08b\n", setBit(num, 2))
}