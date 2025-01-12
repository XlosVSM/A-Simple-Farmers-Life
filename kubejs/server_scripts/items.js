ServerEvents.recipes(
    event => {
        // Lavender dye correcting
        event.remove({output: 'dyenamics:lavender_dye'});
        event.remove({output: 'minecraft:purple_dye'});
                
        event.shapeless('dyenamics:lavender_dye', 'biomesoplenty:lavender');
        event.shapeless(Item.of('dyenamics:lavender_dye', 2), 'biomesoplenty:tall_lavender');

        event.shapeless('minecraft:purple_dye', '#biomeswevegone:dye/makes_purple_dye');
        event.shapeless('minecraft:purple_dye', 'biomesoplenty:violet');
        event.shapeless(Item.of('minecraft:purple_dye', 2), ['minecraft:blue_dye', 'minecraft:red_dye']);

        event.recipes.farmersdelight.cutting(
            "farmersdelight:wild_potatoes",
            "#forge:tools/knives",
            [
                'minecraft:potato',
                Item.of("minecraft:purple_dye", 2).withChance(0.5)
            ]
        );
    }
);

// ServerEvents.tags(
//     'item',
//     event => {
//         // Lavender dye correcting
//         event.remove('alexsmobs:animal_dictionary_ingredient', 'alexsmobs:cachalot_whale_tooth');
//     }
// )
