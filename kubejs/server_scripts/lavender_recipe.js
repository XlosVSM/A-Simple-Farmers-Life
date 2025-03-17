ServerEvents.recipes(
    event => {
        event.remove({output: 'dyenamics:lavender_dye'});

        event.shapeless('dyenamics:lavender_dye', 'biomesoplenty:lavender');
        event.shapeless(Item.of('dyenamics:lavender_dye', 2), 'biomesoplenty:tall_lavender');
    }
)
