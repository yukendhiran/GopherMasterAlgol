package main

import "fmt"


func getBitWithLeftShift(num uint8, pos uint8) uint8 {
	return (num >> pos) & 1
}

func getBitWithRightShift(num uint8, pos uint8) uint8 {
	var mask uint8 = 1 << pos

	if num & mask > 0 {
		return 1
	} else {
		return 0
	}

}
func main(){

	if getBitWithLeftShift(10,3) == 1 {
		fmt.Println(1)
	} else{
		fmt.Println(0)
	}

	fmt.Println(getBitWithRightShift(10,3))
}