/*
  Blink

  Turns an LED on for one second, then off for one second, repeatedly.

  Most Arduinos have an on-board LED you can control. On the UNO, MEGA and ZERO
  it is attached to digital pin 13, on MKR1000 on pin 6. LED_BUILTIN is set to
  the correct LED pin independent of which board is used.
  If you want to know what pin the on-board LED is connected to on your Arduino
  model, check the Technical Specs of your board at:
  https://www.arduino.cc/en/Main/Products

  modified 8 May 2014
  by Scott Fitzgerald
  modified 2 Sep 2016
  by Arturo Guadalupi
  modified 8 Sep 2016
  by Colby Newman

  This example code is in the public domain.

  http://www.arduino.cc/en/Tutorial/Blink
*/

#include <Servo.h>

String a;
    

Servo myservo;  // create servo object to control a servo
Servo leftServo;
Servo rightServo;
Servo bottomServo;

int pos = 0;    // variable to store the servo position
// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LOW);
  Serial.begin(115200);
  myservo.attach(10);  
  leftServo.attach(9);  
  rightServo.attach(6);  
  bottomServo.attach(11) ; 

}
// the loop function runs over and over again forever
void loop() {


  if (Serial.available() >0) {

    a = Serial.readStringUntil('\n');
    Serial.print(a);
/*
  if (a == "open"){
   myservo.write(100);
  }

  if (a == "close"){
   myservo.write(10);
  }
*/
   if (a == "up"){
   leftServo.write(120); 
   }
  
    if (a == "down"){
      leftServo.write(40);
    }

 /*   
       if (a == "down"){
   rightServo.write(120); 
   }

    if (a == "up"){
 rightServo.write(40);
 
    }
    */
     if (a == "right"){
   bottomServo.write(-120); 
   }

    if (a == "left"){
      bottomServo.write(120);
    }
  }
  
}
