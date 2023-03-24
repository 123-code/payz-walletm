package main

import (
	"crypto/rand"
	"encoding/hex"
	"fmt"
)

func main() {
	// Generate a 256-bit random number
	key := make([]byte, 32)
	_, err := rand.Read(key)
	if err != nil {
		fmt.Println("Error generating random number:", err)
		return
	}

	// Convert the random number to a hexadecimal string
	privateKey := hex.EncodeToString(key)
	fmt.Println("Private key:", privateKey)
}
/*
ri64, err := securerandom.GenerateRandomInt64()

// secure-random data is unavailable
if err != nil {
	// handle err
}

rand.Seed(ri64)
*/