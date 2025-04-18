#include <stdio.h>

int fatorial (int valor){
    if (valor == 0 || valor == 1){
        return 1;
    } else {
        return valor * fatorial(valor - 1);
    }
}

int main(void){
    int valorDigitado;

    scanf("%d", &valorDigitado);

    if ( valorDigitado >= 0 && valorDigitado <= 12){
        
        int fatorialDoValor = fatorial(valorDigitado);
        printf("%d\n", fatorialDoValor);
    }
}