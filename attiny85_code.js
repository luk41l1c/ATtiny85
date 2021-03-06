/*
 * Author: Luka Ilic
 * E-mail: Luka_Bn@hotmail.com
 * youtube.com/Luka9840
 * ATtiny85 
 *
 */

const int ds = 4;
const int stcp = 0;
const int shcp = 1;

void setup() {
  pinMode(ds, OUTPUT);
  pinMode(stcp, OUTPUT);
  pinMode(shcp, OUTPUT);
  ukljucenje();
}

boolean digitalniPin[8];

void ukljucenje() {
  digitalWrite(stcp, LOW);
  for(int i = 7; i>=0; i--){ 
    digitalWrite(shcp, LOW);
    digitalWrite(ds, digitalniPin[i]);
    digitalWrite(shcp, HIGH);
  }
  digitalWrite(stcp, HIGH);
}

void animacija1() {
  for(int j = 0; j<8; j++){
    digitalniPin[j] = HIGH;
    delay(150);
    ukljucenje();
    digitalniPin[j] = LOW;
    delay(150);
    ukljucenje();
  }
  for(int k = 7; k>=0; k--){
    digitalniPin[k] = HIGH;
    delay(180);
    ukljucenje();
    digitalniPin[k] = LOW;
    delay(180);
    ukljucenje();
  }
}

void loop() {
  animacija1();
}
