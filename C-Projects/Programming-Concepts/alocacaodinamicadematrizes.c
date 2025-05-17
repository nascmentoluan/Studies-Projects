#include <stdio.h>
#include <stdlib.h>

//Ponteiros para/de ponteiros
// dois astericos + nome do ponteiro para declarar:
// 1º asterisco indica que espaço na memória é um ponteiro
// 2º asterisco indica que o end. de memória apontado pelo ponteiro também é
// um ponteiro:
int main(void){


    int **p; //ponteiro para ponteiro de inteiro
    char **ptr; // ponteiro para ponteiro de caractere
    int N, M, qtdDeVetores;
    // Alocar Matriz Dinâmica
    
    //1º - alocar um vetor de N vetores(ponteiros)
    //p = (int**)malloc(N * sizeof(int*));
    scanf("%d", &N);
    p = (int**)calloc(N, sizeof(int*));
    
    qtdDeVetores = N;
    // 2º - criar matriz, alocando um vetor de inteiros para cada
    // ponteiro
    scanf("%d", &M);
    for(int i = 0; i < N; i++){
        //p[i] = (int*)malloc(M * sizeof(int));
        p[i] = (int*)calloc(M, sizeof(int));
    }
    
    //Alterar dimensão da matriz/ capacidade de vetor da matriz
    //p[1] = (int*)realloc(m[1], 5*sizeof(int));

    // p = (int**)realloc(m, 6*sizeof(int*));

    //Checar se realocação foi possível:
    //int **aux = (int**)realloc(p, 7*sizeof(int*));
    // if (p != NULL){
    //  p = aux;
    //}

    //diminuir tamanho da matriz:
    //free(p[últimos vetores]); 
    //free(p[últimos vetores]);
    //(varia de acordo a qtd que se deseja mudar a matriz;)
    // p = (int**)realloc(p, qtd a mudar * sizeof(int*)); 

    int k = 1;
    for(int i = 0; i < N; i++){
        for (int j = 0; j < M; j++){
            p[i][j] = k;
            k++;
            printf("%d ", p[i][j]);
        }
        printf("\n");
    }
    // 4º desalocar os vetores armazenados e o vetor de vetores
    for (int i = 0; i < qtdDeVetores; i++){
        free(p[i]);
    }
    
    free(p);    
    
    
    return 0;
}
