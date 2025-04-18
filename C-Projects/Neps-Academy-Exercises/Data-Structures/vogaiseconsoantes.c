#include <stdio.h>
#include <string.h>

int main(void){
    char s[50], vogais[50], consoantes[50];
    int count1 = 0, count2 = 0;

    scanf("%s", s);

    for (int i = 0; i < strlen(s); i++){
        
        if ((s[i] == 'a') || (s[i] == 'e') || (s[i] == 'i') || (s[i] == 'o') || (s[i] == 'u')) {
            vogais[count1] = s[i];
            count1++;

        } else {
            consoantes[count2] = s[i];
            count2++;
        }
    }
    vogais[count1] = '\0';
    consoantes[count2] ='\0';
    printf("Vogais: %s\n", vogais);
    printf("Consoantes: %s\n", consoantes);

    return 0;
}