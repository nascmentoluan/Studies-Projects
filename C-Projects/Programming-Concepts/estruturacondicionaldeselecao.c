#include <stdio.h>

int main(){
int x;
printf("Digite o valor da sua nota:");
scanf("%d", &x);

/*Estrutura condicional composta if-else-if - tomada de decisão encadeada*/

if (x >= 7){
    printf("Parabéns! Você foi aprovado\n");
} else if (x < 7 && x >= 4){
    printf("Você está com dependência na matéria e precisa fazer uma recuperação.\n");
} else {
    printf("Você foi reprovado.\n");
}


/*Esturura condicional de seleção switch-case - tomada de decisão por selecao*/
int seletor;
printf("Digite que ação você deseja fazer: \n1 - visualizar nota\n2 - fazer recuperação\n3 - sair\n");
scanf("%d", &seletor);

switch(seletor){
    case 1:
        printf("A sua nota é: %d", x);
        break;
    case 2:
        printf("Não é possível fazer a recuperação no momento.");
        break;
    case 3:
        break;
    default:
        printf("Valor inválido.");
}


return 0;
}