ServerEvents.recipes(
    event => {
        event.remove({output: 'farmersdelight:cooking_pot'});

        event.shaped(
            'farmersdelight:cooking_pot',
            [
                'ABA',
                'CDC',
                'CCC'
            ],
            {
                A: 'minecraft:brick',
                B: 'minecraft:stick',
                C: 'minecraft:iron_ingot',
                D: '#forge:buckets/water'
            }
        );
    }
)
