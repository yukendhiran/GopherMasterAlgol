package main

import "fmt"

func unique(num []uint8)  {
	sum := make([]uint8, 8)
	for _, num := range num {
		updateSum(sum, num)
	}


	for i := 0; i < 8; i++ {
		sum[i] = sum[i] % 3
	}

	fmt.Println("Inside unique", sum)

	//Convert Array to number
	num1 := uint8(0)
	for i := 0; i < 8; i++ {
		num1 += sum[i] * (1 << i)
	}
	fmt.Println("The Unique Number is:", num1)
	
}

func updateSum(sum []uint8, num uint8)  {
	for i := 0; i < 8; i++ {
		if num & (1 << i) > 0 {
			sum[i]++
		}
	}
	fmt.Println("Inside updateSum", sum)
}


func main() {
	num := []uint8{1, 2, 3, 4, 3, 3, 2, 2, 1, 1}
	fmt.Println("Original Array:", num)
	
	unique(num)	
}