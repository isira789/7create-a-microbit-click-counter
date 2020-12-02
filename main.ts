let _1 = 0
let _12 = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    _1 = -1 + _1
    basic.showNumber(_1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    _1 = 0
    _12 = 0
    basic.showNumber(0)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    _12 = 1 + _12
    basic.showNumber(_12)
})
