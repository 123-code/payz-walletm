package main

import (
    "crypto/rand"
    "fmt"
	"github.com/toxeus/go-secp256k1"
	"errors"
)


func NewPublicKey(privateKey []byte) ([]byte, error) {
	var privateKey32 [32]byte
	for i := 0; i < 32; i++ {
		privateKey32[i] = privateKey[i]
	}
	secp256k1.Start()
	publicKey, success := secp256k1.Pubkey_create(privateKey32, false)
	if !success {
		return nil, errors.New("Failed to create public key from provided private key.")
	}
	secp256k1.Stop()
	return publicKey, nil
}


func main() {
	var num [32]byte
	_, err := rand.Read(num[:])
	if err != nil {
		panic(err)
	}

	fmt.Printf("%x\n", num)

	pub, err := NewPublicKey(num[:])
	if err != nil {
		panic(err)
	}
	fmt.Printf("%x\n", pub)
}