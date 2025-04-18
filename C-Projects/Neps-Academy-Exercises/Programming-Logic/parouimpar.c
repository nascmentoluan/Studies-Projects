#include <stdio.h>

int verificaParidade(int qtd1, int qtd2){
    if ( (qtd1 + qtd2) % 2 == 0){
        printf("Bino");
    } else {
        printf("Cino");
    }
}

int main(void){
    int numDeDedosBino, numDeDedosCino;

    scanf("%d %d", &numDeDedosBino, &numDeDedosCino);

    if ((numDeDedosBino >= 0 && numDeDedosBino <=10) && (numDeDedosCino >= 0 && numDeDedosCino <=10)){
        verificaParidade(numDeDedosBino, numDeDedosCino);
        
    }
    return 0;
}