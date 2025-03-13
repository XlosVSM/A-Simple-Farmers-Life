ServerEvents.recipes(
    event => {
        // Make it so you can't dye wool the same colour

        const woolColours = [
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

        woolColours.forEach(
            woolColour => {
                event.remove({output: `minecraft:${woolColour}_wool`});

                event.shapeless(
                    `minecraft:${woolColour}_wool`,
                    [
                        '#minecraft:wool',
                        `minecraft:${woolColour}_dye`
                    ]
                );
            }
        );

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
                A: 'alexsmobs:bison_fur'
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
                A: 'biomeswevegone:red_allium_petal_block'
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
                A: 'biomeswevegone:purple_allium_petal_block'
            }
        );

        event.shaped(
            'minecraft:white_wool',
            [
                'AAA',
                'AAA',
                'AAA'
            ],
            {
                A: 'biomeswevegone:white_allium_petal_block'
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
    }
)