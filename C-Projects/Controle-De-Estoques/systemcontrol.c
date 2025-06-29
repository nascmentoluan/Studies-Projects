#include <stdio.h>
#include <string.h>

void menu(){
    
    printf("\n==================================\n");
    printf("   Controle de Estoque\n");
    printf("==================================\n");
    printf("1. Adicionar Item\n");
    printf("2. Remover Item\n");
    printf("3. Listar Estoque\n");
    printf("4. Sair\n");

}


void adicionarItem(){
    FILE *file, *rascunho;
    char nome[50], novoNome[50];
    int qtd, novaQtd, igual = 0;

    file = fopen("estoque.txt", "r");
    rascunho = fopen("novoestoque.txt", "w");
    
    if(file == NULL){
    } else {

        printf("Digite o nome do item:");
        scanf("%s", &nome);
        printf("Digite a quantidade:");
        scanf("%d", &qtd);

        if (file){
            while (fscanf(file, "%s %d", &novoNome, &novaQtd) != -1){
                if(strcmp(nome, novoNome) == 0){
                    igual = 1;
                    novaQtd += qtd;
                    fprintf(rascunho, "%s\n%d\n", nome, novaQtd);
                } else {
                    fprintf(rascunho, "%s\n%d\n", novoNome, novaQtd);
                }
            }
            fclose(file);
            printf("Item adicionado com sucesso!\n");
            }
            if (igual == 0 ){
                fprintf(rascunho, "%s\n%d\n", nome, qtd);
            }
        }

    
        
    fclose(rascunho);
    remove("estoque.txt");
    rename("novoestoque.txt", "estoque.txt");
}

void exibirEstoque(){
    char nome[50]; 
    int qtd, itens = 0;

    FILE * file = fopen("estoque.txt", "r");

    if (file == NULL){
    } else{
            
        while (fscanf(file, "%s %d", &nome, &qtd) != -1 ){ 
            if (qtd > 0){
                if (itens == 0) {
                    printf("\n\n=============================\n");
                    printf("        Estoque Atual\n");
                    printf("=============================\n");
                    itens = 1;
                }
                printf("Nome: %s\nQuantidade: %d\n\n", nome, qtd);
            }
        }
    }
    if ( itens == 0 && qtd == 0){
        printf("O estoque está vazio.\n");
    }
    
    fclose(file);
}

void eliminarItem(){
    FILE *file, *rascunho;
    char nome[50], novoNome[50];
    int qtd, novaQtd, igual = 0;

    file = fopen("estoque.txt", "r");
    rascunho = fopen("novoestoque.txt", "w");
    
    if(file == NULL){
    } else {

        printf("Digite o nome do item:");
        scanf("%s", &nome);
        printf("Digite a quantidade a ser removida:");
        scanf("%d", &qtd);

        if (file){
            while (fscanf(file, "%s %d", &novoNome, &novaQtd) != -1){
                if(strcmp(nome, novoNome) == 0){
                    igual = 1;
                    if(novaQtd < qtd){
                        printf("Estoque insuficiente. Quantidade disponível: %d\n", novaQtd);
                        fprintf(rascunho, "%s\n%d\n", nome, novaQtd);
                    } else if (novaQtd > qtd){
                        novaQtd -= qtd; 
                        fprintf(rascunho, "%s\n%d\n", nome, novaQtd);
                        printf("Quantidade atualizada com sucesso!\n");
                    } else {
                        printf("Item removido do estoque!\n");
                    }
                } else {
                    fprintf(rascunho, "%s\n%d\n", novoNome, novaQtd);
                }
            }
            fclose(file);
        }
        if (igual == 0 ){
            printf("Item não encontrado.\n");
        }    
    }
    fclose(rascunho);
    remove("estoque.txt");
    rename("novoestoque.txt", "estoque.txt");
}
int continuarFluxo(){
    printf("Deseja realizar outra operação? (s/n):");
    char resposta[2];
    scanf(" %s", &resposta);
    if(strcmp(resposta,"s") == 0){
        return 1;
    } else{
        printf("Obrigado por usar o Controle de Estoques! Até a próxima.");
        return 0;
    }
}
int main(void){
    
    while (1){

        menu();
        
        int answer;
        scanf("%d", &answer);

        switch(answer){
            case 1:
                adicionarItem();                  
                break;
            case 2:
                eliminarItem();
                break;
            case 3:
                exibirEstoque();
                break;
            case 4:
                printf("Obrigado por usar o Controle de Estoques! Até a próxima.\n");
                return 0;
            default:
                printf("Opção inválida! Tente novamente.\n");
                break;
        }
        int resp = continuarFluxo();
        if (resp == 1){
            continue;
        } else {
            break;
        }
    }
}