radio.onReceivedString(function on_received_string(receivedString: string) {
    
    if (receivedString == convertToText(n)) {
        pins.digitalWritePin(DigitalPin.P11, 1)
        radio.setTransmitPower(7)
        radio.sendString("o")
        while (v < 0) {
            v += 1
            basic.pause(10)
        }
        if (v == 0) {
            for (let index = 0; index < 5; index++) {
                music.playTone(523, music.beat(BeatFraction.Quarter))
                basic.pause(100)
            }
            music.playTone(523, music.beat(BeatFraction.Breve))
            music.playTone(523, music.beat(BeatFraction.Breve))
            music.playTone(523, music.beat(BeatFraction.Breve))
        }
        
    }
    
})
let v = 0
let n = 0
n = 147
v = -50
pins.digitalWritePin(DigitalPin.P11, 0)
radio.setGroup(21)
radio.on()
basic.forever(function on_forever() {
    motorbit.freestyle(v, v)
})
