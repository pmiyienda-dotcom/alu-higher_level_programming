#!/usr/bin/python3
from sys import argv

if _name_ == "_main_":
    args = argv[1:]
    result = sum(int(arg) for arg in args)
    print(result)

