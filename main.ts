let playin = false
let time = 0
let timeMax = randint(2000, 6000)



const rightDP: DigitalPin = DigitalPin.P14;
let rightD: boolean = false;
pins.setPull(rightDP, PinPullMode.PullNone)


const leftDP: DigitalPin = DigitalPin.P8;
let leftD: boolean = false;
pins.setPull(leftDP, PinPullMode.PullNone)



pins.setPull(DigitalPin.P8, PinPullMode.PullNone)
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
const hrac1: DigitalPin = DigitalPin.P8
const hrac2: DigitalPin = DigitalPin.P14


control.inBackground(() => {
    //code running in the background

    basic.forever(function () {
        leftD = pins.digitalReadPin(leftDP) === 0; //leftD je true, pokud detekuje překážku
        rightD = pins.digitalReadPin(leftDP) === 0; //rightD je true, pokud detekuje překážku
        basic.pause(20);
    })
})


basic.pause(timeMax)
basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
music.ringTone(Note.G)
basic.pause(1500)
music.stopAllSounds()
playin = true
while (playin == true){ 
    control.millis()
    if (leftD = true) {
        basic.showString("1")
        basic.pause(1000)
        control.reset()
    } if (rightD = true) {
        basic.showString("2")
        basic.pause(1000)
        control.reset()
    }
    if(control.millis() > 2000) {
control.reset()
    }
            

}





















//let delta = 0
// while (true) {
//     let a = control.millis()
//     if (playin) {
       

// music.playTone(Note.G, music.beat(BeatFraction.Whole))


//         if (pins.digitalReadPin(hrac1)) {
//             basic.showString("A")
//         scr1 + 1
//         }
//         if (pins.digitalReadPin(hrac2)) {
//             basic.showString("B")
//         scr2 + 1
//         }
//     } else {
//         basic.showLeds(`
//             . . # . .
//             . . # . .
//             # # # # #
//             . . # . .
//             . . # . .`)
//     //    if (pins.digitalReadPin(hrac1) || pins.digitalReadPin(hrac2)) {
//       //      control.reset()
//        // }
//         if (time >= timeMax) {
//             playin = true
//         } else {
//             time += delta
//         }
//     }
//     basic.pause(50)
//     delta = control.millis() - a
// }
