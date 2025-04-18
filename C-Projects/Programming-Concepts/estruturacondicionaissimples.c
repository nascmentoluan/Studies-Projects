#include <stdio.h>

int main(){
    
printf("%d\n", 1 < 2);

printf("%d\n", 3 > 4);
/* Saída:
1
0
*/

//Estrutura de decisão simples (if/se):
if ( 3 < 4){
    printf("3 é menor que 4\n");
}
/*Saída:
3 é menor que 4 
*/

if ( 3) {
    printf("Qualquer valor diferente de 0 é considerado verdadeiro em C\n");

}
/*Saída:
Qualquer valor diferente de 0 é considerado verdadeiro em C
*/




int x;

printf("Digite um valor para verificar sua paridade: ");
scanf("%d", &x);

if (x % 2 == 0){
    printf("O Valor %d é par\n", x);
} 
if (x % 2 != 0) {
    printf("O Valor %d é ímpar\n", x);
}

//Operador lógico E (And/ &&)
if (x % 2 == 0 && x > 0){
    printf("O valor %d é par e positivo\n", x);
}

//Operador lógico OU (Or/ ||)
if (x % 2 == 0 || x > 0){
    printf("O valor %d é par ou positivo ou negativo\n", x);
}

/* Operador E (&&) tem precedência sobre o Operador OU (||)*/
if ( x % 2 == 0 && x > 0 || x % 2 != 0){
    printf("O valor %d é par e positivo ou o valor %d é ímpar maior ou menor que 0\n", x, x);
}

/*Assim como nas operações aritméticas, os operadores lógicos podem ter sua precedência alterada
se usados dentro de parênteses*/
if (x % 2 == 0 && (x > 0 || x % 2 != 0)){
    printf("O valor %d é par e o valor %d é positivo ou ímpar menor ou maior que 0\n", x, x);
}
return 0;

}