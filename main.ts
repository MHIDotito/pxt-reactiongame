let playin = false
let time = 0
let timeMax = randint(2000, 6000)

pins.setPull(DigitalPin.P8, PinPullMode.PullNone)
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
const hrac1: DigitalPin = DigitalPin.P8
const hrac2: DigitalPin = DigitalPin.P14

let delta = 0

basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)

while (true) {
    let a = control.millis()
    if (playin) {
       

music.playTone(Note.G, music.beat(BeatFraction.Whole))


        if (pins.digitalReadPin(hrac1)) {
            basic.showString("A")
        scr1 + 1
        }
        if (pins.digitalReadPin(hrac2)) {
            basic.showString("B")
        scr2 + 1
        }
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .`)
    //    if (pins.digitalReadPin(hrac1) || pins.digitalReadPin(hrac2)) {
      //      control.reset()
       // }
        if (time >= timeMax) {
            playin = true
        } else {
            time += delta
        }
    }
    basic.pause(50)
    delta = control.millis() - a
}
