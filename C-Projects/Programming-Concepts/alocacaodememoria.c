#include <stdio.h>
#include <stdlib.h> //biblioteca para usar funções de alocação de memória

int main(void){
    int *p; //ponteiro que aponta para um end. de memória que tem tamanho de um int


    //(int*), casting para não gerar erro de compilação
    // retorna tipo de end. de memória de tamanho int
    p = (int*)malloc(sizeof(int) * 2);

    p[0] = 1;

    *(p+1) = 2;

    printf("%d, %d", p[0], p[1]);

    free(p);

}