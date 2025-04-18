/*Operador lógico de negação (!//NOT)
Utilizado para inverter o valor lógico de uma expressão*/

//programa-teste: calculador de média de aluno
#include <stdio.h>
int main(){
int x;

printf("Digite o valor da sua nota: ");
scanf("%d", &x);

if ( x >= 7 ){
    printf("Aprovado\n");
}

if ( !(x >= 7)){
    printf("Reprovado\n");
}
 

/*Estrutura condicional composta if-else:*/
if (x >=9 || x == 10){
    printf("Parabéns! Você foi aprovado com ótima média!\n");
} else {
    printf("Você teve nota abaixo de 9 ou foi reprovado.\n");
}








return 0;

}
