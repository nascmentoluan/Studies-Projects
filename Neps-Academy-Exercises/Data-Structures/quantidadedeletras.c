#include <stdio.h>
#include <string.h>

int main(void){
    char s[50], c;
    int countSameLetters = 0;
    scanf("%s", s);
    scanf(" %c", &c);

    for (int i = 0; i < strlen(s); i++){
        if (s[i] == c ){
            countSameLetters++;
        }
    }

    printf("%d", countSameLetters);

    return 0;
}