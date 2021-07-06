#!/bin/bash

rm -f test/keys/id_*

ssh-keygen -t rsa -b 1024 -f test/keys/id_rsa-1024.pem -N '' -m pem
openssl pkey -in test/keys/id_rsa-1024.pem -pubout -out test/keys/id_rsa-1024.pub.pem -outform PEM

ssh-keygen -t rsa -b 2048 -f test/keys/id_rsa-2048.pem -N '' -m pem
openssl pkey -in test/keys/id_rsa-2048.pem -pubout -out test/keys/id_rsa-2048.pub.pem -outform PEM

ssh-keygen -t rsa -b 4096 -f test/keys/id_rsa-4096.pem -N '' -m pem
openssl pkey -in test/keys/id_rsa-4096.pem -pubout -out test/keys/id_rsa-4096.pub.pem -outform PEM
