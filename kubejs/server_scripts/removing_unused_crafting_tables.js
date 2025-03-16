ServerEvents.recipes(
    event => {
        const woodTypes = [
            "aspen",
            "baobab",
            "blue_enchanted",
            "cika",
            "cypress",
            "ebony",
            "fir",
            "florus",
            "green_enchanted",
            "holly",
            "ironwood",
            "jacaranda",
            "mahogany",
            "maple",
            "palm",
            "pine",
            "rainbow_eucalyptus",
            "redwood",
            "sakura",
            "skyris",
            "white_mangrove",
            "willow",
            "witch_hazel",
            "zelkova"
        ];

        woodTypes.forEach(
            woodType => {
                event.remove({output: `biomeswevegone:${woodType}_crafting_table`});
            }
        );
    }
)
