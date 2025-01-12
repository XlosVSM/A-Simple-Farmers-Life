ServerEvents.recipes(
    event => {
        // Merging wool recipes
        const vanillaColours = [
            "black",
            "blue",
            "brown",
            "cyan",
            "gray",
            "green",
            "light_blue",
            "light_gray",
            "lime",
            "magenta",
            "orange",
            "pink",
            "purple",
            "red",
            "white",
            "yellow"
        ];

        vanillaColours.forEach(
            woolColour => {
                event.remove({output: `minecraft:${woolColour}_wool`});
                
                event.shapeless(`minecraft:${woolColour}_wool`, [`minecraft:${woolColour}_dye`, '#minecraft:wool']);
            }
        )

        event.shaped(
            'minecraft:black_wool',
            [
                'AA ',
                'AA ',
                '   '
            ],
            {
                A: 'alexscaves:dark_tatters'
            }
        );
        event.shaped(
            'minecraft:brown_wool',
            [
                'AA ',
                'AA ',
                '   '
            ],
            {
                A: 'alexscaves:bison_fur'
            }
        );
        event.shaped(
            'minecraft:red_wool',
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'biomeswevegone:rose_petal_block'
            }
        );
        event.shaped(
            'minecraft:pink_wool',
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'biomeswevegone:pink_allium_petal_block'
            }
        );
        event.shaped(
            'minecraft:purple_wool',
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'biomeswevegone:allium_petal_block'
            }
        );
        event.shaped(
            'minecraft:white_wool',
            [
                'AA ',
                'AA ',
                '   '
            ],
            {
                A: 'minecraft:string'
            }
        );

        // Merging food blocks
        event.remove({input: 'farm_and_charm:carrot_bag'});
        event.remove({input: 'farmersdelight:beetroot_crate'});
        event.remove({input: 'farmersdelight:potato_crate'});
        event.remove({input: 'quark:apple_crate'});
        event.remove({input: 'quark:beetroot_crate'});
        event.remove({input: 'quark:carrot_crate'});
        event.remove({input: 'quark:potato_crate'});

        event.remove({output: 'farm_and_charm:carrot_bag'});
        event.remove({output: 'farmersdelight:beetroot_crate'});
        event.remove({output: 'farmersdelight:potato_crate'});
        event.remove({output: 'quark:apple_crate'});
        event.remove({output: 'quark:beetroot_crate'});
        event.remove({output: 'quark:carrot_crate'});
        event.remove({output: 'quark:potato_crate'});

        // Glass shard merging
    }
);
