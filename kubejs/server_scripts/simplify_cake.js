ServerEvents.recipes(
    event => {
        event.remove({output: 'minecraft:cake'});

        event.shaped(
            'minecraft:cake',
            [
                'AAA',
                'BCB',
                'DDD'
            ],
            {
                A: '#forge:milk',
                B: '#diet:sugars',
                C: '#forge:eggs',
                D: '#farm_and_charm:wheat'
            }
        );

        event.shaped(
            'minecraft:cake',
            [
                ' A ',
                'BBB',
                'CCC'

            ],
            {
                A: '#alexscaves:sweet_berries',
                B: '#alexscaves:frosting',
                C: 'alexscaves:cake_layer'
            }
        );

        event.shapeless(
            'minecraft:cake',
            [
                'farmersdelight:cake_slice',
                'farmersdelight:cake_slice',
                'farmersdelight:cake_slice',
                'farmersdelight:cake_slice',
                'farmersdelight:cake_slice',
                'farmersdelight:cake_slice',
                'farmersdelight:cake_slice'
            ]
        );
    }
)
