ServerEvents.recipes(
    event => {
        const glassColours = [
            'black',
            'blue',
            'brown',
            'cyan',
            'gray',
            'green',
            'light_blue',
            'light_gray',
            'lime',
            'magenta',
            'orange',
            'pink',
            'purple',
            'red',
            'white',
            'yellow'
        ];

        glassColours.forEach(
            glassColour => {
                event.remove({output: `minecraft:${glassColour}_stained_glass`});

                event.shaped(
                    `minecraft:${glassColour}_stained_glass`,
                    [
                        'AAA',
                        'ABA',
                        'AAA'
                    ],
                    {
                        A: [
                            'minecraft:glass',
                            'atmospheric:arid_glass'
                        ],
                        B: `minecraft:${glassColour}_dye`
                    }
                );

                event.shaped(
                    `minecraft:${glassColour}_stained_glass`,
                    [
                        'AA ',
                        'AA ',
                        '   '
                    ],
                    {
                        A: `quark:${glassColour}_shard`
                    }
                );
            }
        )

        event.smelting('minecraft:black_stained_glass', 'biomeswevegone:black_sand');
        event.smelting('minecraft:black_stained_glass', 'biomesoplenty:mossy_black_sand');
        event.smelting('minecraft:blue_stained_glass', 'biomeswevegone:blue_sand');
        event.smelting('minecraft:orange_stained_glass', 'biomesoplenty:orange_sand');
        event.smelting('minecraft:pink_stained_glass', 'biomeswevegone:pink_sand');
        event.smelting('minecraft:purple_stained_glass', 'biomeswevegone:purple_sand');
        event.smelting('minecraft:red_stained_glass', 'minecraft:red_sand');
        event.smelting('minecraft:white_stained_glass', 'biomeswevegone:white_sand');

        // Fixing regular glass recipe
        event.remove({output: 'minecraft:glass'});

        event.shapeless('minecraft:glass', ['quark:dirty_glass', 'supplementaries:soap']);
        event.shapeless('minecraft:glass', ['#forge:stained_glass', 'supplementaries:soap']);

        event.shaped(
            'minecraft:glass',
            [
                'AA ',
                'AA ',
                '   '
            ],
            {
                A: 'alexscaves:sea_glass_shards'
            }
        );
        event.shaped(
            'minecraft:glass',
            [
                'AA ',
                'AA ',
                '   '
            ],
            {
                A: 'quark:clear_shard'
            }
        );

        event.smelting('minecraft:glass', 'atmospheric:arid_glass');
        event.smelting('minecraft:glass', 'minecraft:sand');
        event.smelting('minecraft:glass', 'quark:dirty_glass');
        event.smelting('minecraft:glass', 'yungscavebiomes:ancient_sand');
    }
)
