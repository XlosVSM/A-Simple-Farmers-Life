ServerEvents.recipes(
    event => {
        event.remove({output: 'vinery:grapevine_stem'});

        event.shaped(
            'vinery:grapevine_stem',
            [
                ' A ',
                ' A ',
                ' B '
            ],
            {
                A: '#minecraft:logs',
                B: '#notreepunching:saws'
            }
        )
    }
)
