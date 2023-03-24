package main

import (
    "crypto/ecdsa"
    "crypto/elliptic"
    "crypto/rand"
   // "encoding/hex"
    "fmt"
)

func main() {
    curve := elliptic.P256() // select the elliptic curve
    privateKey, err := ecdsa.GenerateKey(curve, rand.Reader) // generate a private key
    if err != nil {
        panic(err)
    }
    publicKey := privateKey.PublicKey // extract the public key from the private key
    fmt.Printf("Private Key: %x\n", privateKey.D)
    fmt.Printf("Public Key: %x\n", elliptic.Marshal(curve, publicKey.X, publicKey.Y))
}