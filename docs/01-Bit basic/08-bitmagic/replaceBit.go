package main

import "fmt"

func clearRangeBit(num uint8, start uint8, end uint8) uint8 {
	mask1 := uint8(^((1 << start) - 1))
	mask2 := uint8((1 << end) -1)
	mask := ^(mask1 & mask2)
	
	return num & mask
}

func replaceBits(num uint8, start uint8, end uint8, value uint8) uint8 {

	mask := clearRangeBit(num, start, end)
	fmt.Printf("Mask: %08b\n", mask)
	fmt.Printf("Value: %08b\n", value << start)
	return (num & mask) | (value << start)
}

func main() {

	num := uint8(15) // Binary: 00001111
	fmt.Printf("Original number: %08b\n", num)
	replaceNum := uint8(5) // Binary: 00000101
	fmt.Printf("Replace number: %08b\n", replaceNum)
	fmt.Printf("Replaced number: %08b\n", replaceBits(num, 3, 5, replaceNum))

}
