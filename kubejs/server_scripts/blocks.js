ServerEvents.recipes(
    event => {
        // Merging wool recipes
        const woolColours = [
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

        woolColours.forEach(
            woolColour => {
                event.remove({output: `minecraft:${woolColour}_wool`});
                
                event.shapeless(`minecraft:${woolColour}_wool`, [`minecraft:${woolColour}_dye`, '#minecraft:wool']);
            }
        )

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
