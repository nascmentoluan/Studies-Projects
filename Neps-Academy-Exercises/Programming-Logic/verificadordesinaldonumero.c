#include <stdio.h>

int main(){
    int valorx;

    scanf("%d", &valorx);

    if ( valorx < 1000){
        if (valorx > 0){
            printf("positivo");
        } else if (valorx < 0){
            printf("negativo");
        } else {
            printf("nulo");
        }

    }

return 0;
}