enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Princess = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 f f f f f f f f f f f f f f 2 
2 f f f f f f f f f f f f f f 2 
2 2 f f f f f f f f f f f f 2 2 
f 2 f f f f f f f f f f f f 2 f 
f f 2 f f f f f f f f f f 2 f f 
f f 2 2 f f f f f f f f 2 2 f f 
f f f 2 f f f f f f f f 2 f f f 
f f f 2 2 f f f f f f 2 2 f f f 
f f f f 2 f f f f f f 2 f f f f 
f f f f f 2 f f f f 2 f f f f f 
f f f f f f 2 f f 2 f f f f f f 
f f f f f f 2 f f 2 f f f f f f 
f f f f f f f 2 2 f f f f f f f 
f f f f f f f 2 2 f f f f f f f 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
. . . . . . . . . . . . . . . . 
. . . . e e e e e e e . . . . . 
. . . e e d f d f d e e . . . . 
. . . e d d d d d d e e . . . d 
d . . e e d d d d d e e . . e d 
d e . . e d f f f d e e . . e . 
. e e . e e d d d d e . . e . . 
. . e e e e e e e e . . e e . . 
. . . . e e e e e e e e e . . . 
. . . . . e e e e . . . . . . . 
. . . . . e d d e . . . . . . . 
. . . . . e d d e . . . . . . . 
. . . . . e d d e . . . . . . . 
. . . . . e d d e . . . . . . . 
. . . . e e e e e e . . . . . . 
. . . e . . . . . . e . . . . . 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 . . . . . . . . . . . . 9 9 
9 9 . . . . . . . . . . . . 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 . . . . . . . . . . . . 9 9 
9 9 . . . . . . . . . . . . 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 . . . . . . . . . . . . 9 9 
9 9 . . . . . . . . . . . . 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 . . . . . . . . . . . . 9 9 
9 9 . . . . . . . . . . . . 9 9 
`
    //% blockIdentity=images._tile
    export const tile6 = img`
. . . . . . . . . . . . . . . . 
. . . . 2 2 . . . . 2 2 . . . . 
. . . 2 . . . . . . . . 2 . . . 
. . . . . . . . . . . . . . . . 
. . . 4 4 4 . . . . 4 4 4 . . . 
. . . 4 4 4 . . . . 4 4 4 . . . 
. . . 4 4 4 4 . . 4 4 4 4 . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . 2 2 2 2 . . . . . . 
. . . . . 2 2 2 2 . . . . 2 . . 
. . 2 . . . 2 2 2 . . . . 2 . . 
. . 2 . . 2 2 2 . . . . 2 2 . . 
. . . 2 2 . . . 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Projectile, myTiles.tile5, function (sprite, location) {
    if (barrel_detection_thing == 2) {
        if (projectile4.vx == 150) {
            projectile4.vx = -150
        } else {
            projectile4.vx = 150
        }
    }
})
info.onCountdownEnd(function () {
    barrel_detection_thing = Math.randomRange(1, 2)
    if (barrel_detection_thing == 1) {
        projectile4 = sprites.createProjectileFromSide(img`
. . e f e e e e e e e e f e . . 
. e e f e e e e e e e e f e e . 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
. e e f e e e e e e e e f e e . 
. . e f e e e e e e e e f e . . 
`, 0, 150)
        tiles.placeOnTile(projectile4, tiles.getTileLocation(Math.randomRange(0, 29), 4))
    } else {
        tiles.placeOnTile(projectile4, tiles.getTileLocation(11, 4))
        projectile4 = sprites.createProjectileFromSide(img`
. . e f e e e e e e e e f e . . 
. e e f e e e e e e e e f e e . 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
. e e f e e e e e e e e f e e . 
. . e f e e e e e e e e f e . . 
`, 150, 0)
        projectile4.ay = 350
        animation.attachAnimation(projectile4, animation2)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mario.vy == 0) {
        mario.vy = -100
    }
})
let projectile4: Sprite = null
let barrel_detection_thing = 0
let animation2: animation.Animation = null
let mario: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`1e001e00000000000000030000000000000000000000000000000000000000000000000000000000010105050000000000000000000000000000000000000000000000000000000005050000000000000000000000000000000000000000020000000000000005050000000000000000000000000000000000000000000000000000000005050000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010505010101000000000000000000000000000000000000000000000000000505000000000000000000000000000000000000000000000000000000000505000000000000000000000000000000000000000000000000000000000505000000000000000000000000000000000000000101010101010101010101010101010101050501010101010101010101010000000000000000000000000000000000050500000000000000000000000000000000000000000000000000000000050500000000000000000000000000000000000000000000000000000000050500000000000000000000000000000000000000000000000000010101010101010101010100000000000000000000000000000000000000000000000000000000000001010101010101010101010101010505010101000000000000000000000000000000000000000000000000000505000000000000000000000000000000000000000000000000000000000505000000000000000000000000000000000000000000000000000000000505000000000000000000000000000000000000000000000001010101010101010101010101050501010101010101010101010101010100000000000000000000000000050500000000000000000000000000000000000000000000000000000000050500000000000000000000000000000000000000000000000000000000050500000000000000000000000000000000000000000000000000010101010101010101010100000000000000000000000000000000000000000000000000000000000001010101010101010101010101010505010101000000000000000000000000000000000000000000000000000505000000040000000000000000000000000000000000000000000000000505000000000000000000000000000001010101010101010101010101010101010101010101010101010101010100000000000000000000000000000000000000`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6],
            TileScale.Sixteen
        ))
let level = 1
mario = sprites.create(img`
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . 2 2 2 2 2 2 2 2 2 2 . . 
. . . . e e e 5 5 f 5 . . . . . 
. . . e 5 e 5 5 5 f 5 5 5 . . . 
. . . e 5 e e 5 5 5 f 5 5 5 . . 
. . . . e 5 5 5 5 f f f f . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . 2 2 8 2 2 8 2 2 . . . . 
. . . 2 2 2 8 2 2 8 2 2 2 . . . 
. . 2 2 2 2 8 8 8 8 2 2 2 2 . . 
. . 5 5 2 8 5 8 8 5 8 2 5 5 . . 
. . 5 5 5 8 8 8 8 8 8 5 5 5 . . 
. . 5 5 8 8 8 8 8 8 8 8 5 5 . . 
. . . . 8 8 8 . . 8 8 8 . . . . 
. . . e e e . . . . e e e . . . 
. . e e e e . . . . e e e e . . 
`, SpriteKind.Player)
controller.moveSprite(mario, 100, 0)
mario.ay = 300
scene.cameraFollowSprite(mario)
tiles.placeOnRandomTile(mario, myTiles.tile4)
while (level == 1) {
    info.startCountdown(5)
    pause(5000)
    animation2 = animation.createAnimation(ActionKind.Walking, 100)
    animation2.addAnimationFrame(img`
. . e f e e e e e e e e f e . . 
. e e f e e e e e e e e f e e . 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
e e e f e e e e e e e e f e e e 
. e e f e e e e e e e e f e e . 
. . e f e e e e e e e e f e . . 
`)
    animation2.addAnimationFrame(img`
. . e e e e e e e e e e e e . . 
. e e e e e e e e e e e e e e . 
e e e e e e e e e e e e e e e e 
f f f f f f f f f f f f f f f f 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
f f f f f f f f f f f f f f f f 
e e e e e e e e e e e e e e e e 
. e e e e e e e e e e e e e e . 
. . e e e e e e e e e e e e . . 
`)
}
forever(function () {
    if (barrel_detection_thing == 1) {
        if (projectile4.tileKindAt(TileDirection.Bottom, myTiles.tile1)) {
            projectile4.setFlag(SpriteFlag.Ghost, true)
            pause(500)
            projectile4.setFlag(SpriteFlag.Ghost, false)
        }
    }
})
