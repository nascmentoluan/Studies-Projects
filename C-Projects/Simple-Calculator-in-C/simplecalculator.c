#include <stdio.h>
int number1, number2, typeOfOperation;
char checkAnswer;


void exibirMenu(){
    printf("===============================\n"
           "Calculadora Simples\n"
           "===============================\n"
           "Selecione uma operação:\n"
           "1. Adição\n"
           "2. Subtração\n"
           "3. Multiplicação\n"
           "4. Divisão\n"
           "5. Sair\n"
           "Opção: ");
        }
        
void verificarValidadeResposta(char checkAnswer){
                if ((checkAnswer != 'n' || checkAnswer != 'N') && (checkAnswer != 's' || checkAnswer != 'S')){
                    printf("Resposta inválida. Por favor, digite 's' para sim ou 'n' para não.\n");
                    verificarValidadeResposta(checkAnswer);
                } 
        }
void calculadora(int number1, int number2, int typeOfOperation, char checkAnswer){
    
    switch (typeOfOperation){
        case 1:
        printf("Digite o primeiro número: \n");
        scanf("%d", &number1);
        printf("Digite o segundo número: \n");
        scanf("%d", &number2);
        printf("Resultado: %d + %d = %d\n", number1, number2, (number1 + number2));            
        break;
        
        case 2:
        printf("Digite o primeiro número: \n");
        scanf("%d", &number1);
        printf("Digite o segundo número: \n");
        scanf("%d", &number2);
        printf("Resultado: %d - %d = %d\n", number1, number2, (number1 - number2));            
        break;

        case 3:
            printf("Digite o primeiro número: \n");
            scanf("%d", &number1);
            printf("Digite o segundo número: \n");
            scanf("%d", &number2);
            printf("Resultado: %d * %d = %d\n", number1, number2, (number1 * number2));            
            break;
            
            case 4:
            printf("Digite o primeiro número: \n");
            scanf("%d", &number1);
            printf("Digite o segundo número: \n");
            scanf("%d", &number2);
            if (number2 == 0){
                printf("Erro: Divisão por zero não é permitida.\n");
                
            } else{
                printf("Resultado: %d / %d = %d\n", number1, number2, (number1/number2));            
            }
            break;

            case 5:
                printf("Obrigado por usar a calculadora! Até a próxima.\n");
            break;
            }

                
}

    

int main(void){
    int valor1, valor2, typeOfOperation;
    char checkAnswer;

    do{
        exibirMenu();
        scanf("%d", &typeOfOperation);
        calculadora(valor1, valor2, typeOfOperation, checkAnswer);
        if (typeOfOperation != 5){
            printf("Deseja realizar outra operação? (s/n):\n");
            scanf(" %c", &checkAnswer);
            if ( (checkAnswer == 's' || checkAnswer == 'S')){
                continue;
            } else if ( (checkAnswer == 'n' || checkAnswer == 'N')) {
                break;
            } else {
                verificarValidadeResposta(checkAnswer);

            }
        }

    } while (checkAnswer =='s');
}

