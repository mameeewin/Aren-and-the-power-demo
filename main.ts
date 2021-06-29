namespace SpriteKind {
    export const People = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (haveSword == true) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . 2 2 1 1 1 1 2 . . 
            . . . . 2 2 3 3 1 1 1 1 1 1 3 . 
            . . 3 3 3 3 1 1 1 1 1 1 1 1 3 . 
            . 3 1 1 1 1 1 1 1 1 1 1 1 1 3 . 
            . . 3 3 2 2 3 1 1 1 1 1 1 1 3 . 
            . . . . . . 2 2 3 1 1 1 1 2 . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 100, 0)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 . . . . . . . . . 
            . . 2 1 1 1 1 2 2 . . . . . . . 
            . 3 1 1 1 1 1 1 3 3 2 2 . . . . 
            . 3 1 1 1 1 1 1 1 1 3 3 3 3 . . 
            . 3 1 1 1 1 1 1 1 1 1 1 1 1 3 . 
            . 3 1 1 1 1 1 1 1 3 2 2 3 3 . . 
            . . 2 1 1 1 1 3 2 2 . . . . . . 
            . . . 2 2 2 2 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -100, 0)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . 2 3 1 3 2 . . . . . 
            . . . . . . 3 1 1 1 3 . . . . . 
            . . . . . . 3 1 1 1 3 . . . . . 
            . . . . . . 3 1 1 1 3 . . . . . 
            . . . . . . 2 1 1 1 3 . . . . . 
            . . . . . . 2 1 1 1 2 . . . . . 
            . . . . . . 2 3 1 3 2 . . . . . 
            . . . . . . . 3 1 3 . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . . . . 3 . . . . . . . 
            `, mySprite, 0, 100)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 3 . . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . . . 3 1 3 . . . . . . 
            . . . . . . 2 3 1 3 2 . . . . . 
            . . . . . . 2 1 1 1 2 . . . . . 
            . . . . . . 2 1 1 1 3 . . . . . 
            . . . . . . 3 1 1 1 3 . . . . . 
            . . . . . . 3 1 1 1 3 . . . . . 
            . . . . . . 3 1 1 1 3 . . . . . 
            . . . . . . 2 3 1 3 2 . . . . . 
            . . . . . . . 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, -100)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    tiles.setTilemap(tilemap`level1`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.People, function (sprite, otherSprite) {
    if (TalkOrNot == 0) {
        story.spriteSayText(otherSprite, "How are ya doin?")
        story.spriteSayText(otherSprite, "I woke you up")
        story.spriteSayText(otherSprite, "to give you a suprise!")
        story.spriteSayText(otherSprite, "I hope you like your new clothes")
        sprite.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
        story.spriteSayText(otherSprite, "Wait get this too!")
        game.splash("YOU GOT THE PowerballSniper")
        haveSword = true
        story.spriteSayText(otherSprite, "You liked It right?")
        story.spriteSayText(otherSprite, "Wait a minute ")
        story.spriteSayText(otherSprite, "I'm gonna have to go")
        story.spriteSayText(otherSprite, "Stay at your home where it's save ok?")
        TalkOrNot = 1
        for (let index = 0; index < 20; index++) {
            otherSprite.vx = 20
        }
    } else if (TalkOrNot == 1) {
        story.spriteSayText(otherSprite, "You followed me")
        story.spriteSayText(otherSprite, "Hmph")
        story.spriteSayText(otherSprite, "you are just like the others")
        story.spriteSayText(otherSprite, "They come and they leave and they are captured from a predetor")
        story.spriteSayText(otherSprite, "I'm the only one protecting you from Evilled the King of evill")
        story.spriteSayText(otherSprite, "Cause any second now he will co ")
        scene.cameraShake(4, 500)
        scene.cameraShake(4, 500)
        story.spriteSayText(otherSprite, "Oh no I wasn't prepared for a battle now! ")
        story.spriteSayText(otherSprite, "AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
        color.startFade(color.originalPalette, color.White, 1000)
        pause(500)
        otherSprite.setImage(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbf6ffffffbfbfbf....
            ......66.ffffff.66......
            ......66...fff..66......
            ......66........66......
            ......66........66......
            ......66..ffff..66......
            ......66ff5555ff66......
            ......6655555555f6......
            ......65555555555f......
            ......f555dbbd555f......
            .....f555b4444b555f.....
            .....f55cf4444fc55f.....
            .....fbbc4f44f4cb77.....
            .....f777f4dd4f477f.....
            ......fb77dddddf7f.77...
            ......77777777777677....
            ......e4f699996f4e......
            ......777776777777......
            ......4fb3b3b3bbf4......
            .....7777677777777......
            ....77...ffbbff.........
            ........................
            ........................
            `)
        tiles.placeOnRandomTile(otherSprite, sprites.castle.tileDarkGrass2)
        color.startFade(color.White, color.originalPalette, 1000)
        TalkOrNot = 2
    } else if (TalkOrNot == 2) {
        story.spriteSayText(otherSprite, "Hehehehe you are just a boy you cannot defeat me as me evilled the king of evil you must D I E")
        story.spriteSayText(otherSprite, "hahaahhahahahahahhhah")
        Person.destroy(effects.disintegrate, 2000)
        game.splash("He Disappeared out of Nowhere")
        music.setVolume(0)
        tiles.setTilemap(tilemap`level1`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    tiles.setTilemap(tilemap`level1`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.splash("Thank you for playing the Demo")
    game.splash("The full Version might take very long to finish")
    game.over(true)
})
let projectile: Sprite = null
let Person: Sprite = null
let mySprite: Sprite = null
let TalkOrNot = 0
let haveSword = false
haveSword = false
TalkOrNot = 0
story.printText("...............", 76, 55)
story.printText("Are you Awake?", 76, 55)
music.playMelody("C E C F G F A C5 ", 120)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f f f f f f f . . 
    . f f f f f f c f f f . 
    f f f f f f c c f f f c 
    f f f c f f f f f f f c 
    c c c f f f e e f f c c 
    f f f f f e e f f c c f 
    f f f b f e e f b f f f 
    . f 4 1 f 4 4 f 1 4 f . 
    . f e 4 4 4 4 4 4 e f . 
    . f f f e e e e f f f . 
    f e f b 7 7 7 7 b f e f 
    e 4 f 7 7 7 7 7 7 f 4 e 
    e e f 6 6 6 6 6 6 f e e 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile9`)
Person = sprites.create(img`
    . . . . . f f f f . . . . . 
    . . . f f 5 5 5 5 f f . . . 
    . . f 5 5 5 5 5 5 5 5 f . . 
    . f 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 d b b d 5 5 5 f . 
    f 5 5 5 b 4 4 4 4 b 5 5 5 f 
    f 5 5 c c 4 4 4 4 c c 5 5 f 
    f b b f b f 4 4 f b f b b f 
    f b b 4 1 f d d f 1 4 b b f 
    . f b f d d d d d d f b f . 
    . f e f e 4 4 4 4 e f e f . 
    . e 4 f 6 9 9 9 9 6 f 4 e . 
    . 4 d c 9 9 9 9 9 9 c d 4 . 
    . 4 f b 3 b 3 b 3 b b f 4 . 
    . . f f 3 b 3 b 3 3 f f . . 
    . . . . f f b b f f . . . . 
    `, SpriteKind.People)
tiles.placeOnRandomTile(Person, sprites.castle.tileDarkGrass1)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
color.startFade(color.Black, color.originalPalette)
forever(function () {
    if (TalkOrNot == 2) {
        animation.runMovementAnimation(
        Person,
        animation.animationPresets(animation.bobbing),
        2000,
        false
        )
        music.playMelody("C D E C E G F E ", 1000)
    }
})
