package main

import "fmt"


func countBits(num uint8) uint8 {

	var count uint8 = 0
	for num > 0 {
		if num & 1 > 0 {
			fmt.Printf("num & 1: %08b\n", (num & 1))
			count++
		}
		num = num >> 1
		fmt.Printf("num >> 1: %08b\n", num)
	}
	return count
}

func countBits2(num uint8) uint8 {
	var count uint8 = 0
	fmt.Printf("num: %08b\n", num)
	for num > 0 {
		fmt.Printf("num & (num - 1): %08b\n", (num & (num - 1)))
		num = num & (num - 1)
		count++
	}
	return count
}

func main() {

	num := uint8(10) // Binary: 00001010
	fmt.Printf("Original number: %08b\n", num)
	fmt.Printf("Number of 1's in bits: %d\n", countBits(num))

	fmt.Printf("Number of 1's in bits: %d\n", countBits2(num))

}