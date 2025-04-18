#include <stdio.h>

int main(){
    float N1, N2, media;
    
    scanf("%f %f", &N1, &N2);

    media = (N1 * 2 + N2 * 3) / 5;
    if ((N1 >= 0 && N1 <= 10) && (N2 >= 0 && N2 <= 10)){
        if (media >= 7){
            printf("Aprovado\n");
        } else if (media > 3 && media < 7){
            printf("Final");
        } else {
            printf("Reprovado\n");
        }
    }
return 0;    
}