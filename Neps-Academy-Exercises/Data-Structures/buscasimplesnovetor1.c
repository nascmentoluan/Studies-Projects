#include <stdio.h>

int main(void){
    int x, vetor1[10] = {};

    for (int i = 0; i < 10; i++){

        scanf("%d", &vetor1[i]);
    }

    scanf("%d", &x);
    int haNumero = 0;
    if ( x >= 0 && x <= 100){
        for (int j = 0; j < 10; j++){
            if (x == vetor1[j]){
                haNumero += 1;
            } else {
                haNumero += 0;
                

            }
        }

        if (haNumero >= 1){
            printf("SIM\n");
            printf("O valor foi encontrado no total de %d posições do vetor.\n", haNumero);
        } else {
            printf("NAO\n");
        }
    }
    
}