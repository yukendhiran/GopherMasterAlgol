package main

import "fmt"

func poweroftwo(num uint8)  {
	if(num & (num-1) == 0) {
		fmt.Println("Power of 2")
	} else {
		fmt.Println("Not Power of 2")
	}
}

func main() {
	num1 := uint8(8)
	fmt.Printf("Number :%8b and Number -1: %8b\n", num1, num1-1)
	poweroftwo(num1)

	num2 := uint8(5)
	fmt.Printf("Number :%8b and Number -1: %8b\n", num2, num2-1)
	poweroftwo(num2)
}