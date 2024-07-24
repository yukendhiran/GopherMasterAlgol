package main

import "fmt"

func binaryExponentiation(a int, b int) int {
	result := 1
	for b > 0 {
		if b & 1 == 1 {
			result = result * a
		}
		a = a * a
		b = b >> 1
		fmt.Printf("a = %d, b = %d, result = %d\n", a, b, result)
	}
	return result
}

func main (){
	 aPowerB := binaryExponentiation(2, 5)
	 fmt.Println(aPowerB)
}