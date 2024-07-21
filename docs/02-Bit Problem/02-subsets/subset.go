package main

import "fmt"

func subset(size int, chars []rune){

	for i:=0;i<(1<<size);i++{
		for j:=0;j<size;j++{
			if i & (1<<j) != 0{
				fmt.Printf("%c ",chars[j])
			}
		}
		fmt.Println()
	}

}

func main(){
	fmt.Printf("Enter the size of Characters: ")
	var size int
	fmt.Scanln(&size)
	fmt.Printf("Enter the Characters: ")
	var chars []rune

	for i:=0;i<size;i++{
		var ch rune
		fmt.Scanf("%c",&ch)
		chars = append(chars, ch)
	}
	
	fmt.Printf("The Original Characters are: %c", chars)

	subset(size, chars)
}