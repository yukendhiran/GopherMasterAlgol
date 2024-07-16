package main

import "fmt"

func clearRangeBit(num uint8, start uint8, end uint8) uint8 {
	mask1 := uint8(^((1 << start) - 1))
	mask2 := uint8((1 << end) -1)
	mask := ^(mask1 & mask2)
	fmt.Printf("Mask1: %08b\n", mask1)
	fmt.Printf("Mask2: %08b\n", mask2)
	fmt.Printf("Mask: %08b\n", mask)
	return num & mask

}

func main(){
	num := uint8(10)

	fmt.Printf("Original number: %08b\n", num)
	fmt.Printf("Cleared Range: %08b\n", clearRangeBit(num, 3, 7))
}