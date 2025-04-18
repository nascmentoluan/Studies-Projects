#include <stdio.h>

int calculaFibonacci(int valor){
    if (valor == 0 || valor == 1){
        return 1;
    } else {
        return calculaFibonacci (valor - 1) + calculaFibonacci(valor - 2);
    }
}

int main(void){
    int valorDigitado;
    scanf("%d", &valorDigitado);

    if ( valorDigitado >= 0 && valorDigitado <= 30){
        printf("%d\n", calculaFibonacci(valorDigitado));
    }

    return 0;
}