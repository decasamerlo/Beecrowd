# -*- coding: utf-8 -*-

'''
Escreva a sua solução aqui
Code your solution here
Escriba su solución aquí
'''

n, s = [int(x) for x in input().split()]
min = s

for i in range(n):
    s = s + int(input())
    if min > s:
        min = s

print(min)
