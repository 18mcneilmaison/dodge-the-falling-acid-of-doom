// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000010101010108080801010101010101010101010101080808080808080101010101010101050808080808080808080508010101010505060606060606060505010101010105050707070707070705010108080808080808080808080808010103080805050501080808080808080101010808050405010108080808080101010108080505050101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . 2 2 2 . . . . . . . . 
. . . . . 2 2 2 2 2 2 2 . . . . 
. . . . . 2 2 2 2 2 2 2 2 2 . 2 
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 2 2 2 2 . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
2 2 . . . . 2 2 2 2 2 2 2 . . . 
2 2 . . . . . 2 2 2 2 2 . . . . 
2 2 . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.doorClosedNorth,sprites.dungeon.doorLockedNorth,myTiles.tile1,sprites.dungeon.floorLight1,sprites.builtin.forestTiles2,sprites.builtin.forestTiles6,sprites.builtin.forestTiles10], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
