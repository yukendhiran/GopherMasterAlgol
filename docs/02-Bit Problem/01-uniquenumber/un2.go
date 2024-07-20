package main

import "fmt"

func unique(num []int)  {
	xor := 0
	for i := 0; i < len(num); i++ {
		xor ^= num[i]
	}
	
	pos := 0
	temp := xor
	
	for temp&1 == 0 {
		pos++
		temp = temp >> 1
	}

	mask := 1 << pos

	num1, num2 := 0, 0

	for i := 0; i < len(num); i++ {
		if num[i]&mask > 0 {
			num1 ^= num[i]
		} else {
			num2 ^= num[i]
		}
	}

	fmt.Println("The Unique Numbers are:" ,num1, num2)
}

func main() {
	num := []int{1, 2, 3, 4, 5, 3, 2, 1}
	fmt.Println("Original Array:", num)
	
	unique(num)	
}