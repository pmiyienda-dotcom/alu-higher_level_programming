#!/usr/bin/python3
import hidden_4
if _name_ == "_main_":
    names = dir(hidden_4)
    names.sort()
    for attr in names:
        if attr[:2] != "_":
            print(attr)
