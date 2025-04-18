#include <stdio.h>

int main(void){
    int x, vetorGenerico[10], contador = 0, vetorDosIndices[10];

    for (int i = 0; i < 10; i++){
        scanf("%d", &vetorGenerico[i]);

    }
    scanf("%d", &x);
    for (int j = 0; j < 10; j++){
        if (vetorGenerico[j] == x){
            vetorDosIndices[contador] = j;
            contador++;
        }
    }

    if (contador > 0){
        printf("%d\n", contador);

        for (int k = 0; k < contador; k++){
            printf("%d ", vetorDosIndices[k]);
        }
    } else {
        printf("Mia x", x);
    }

    return 0;
}