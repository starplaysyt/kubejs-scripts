// kubejs/server_scripts/ifg-drill-recipes.js

function addLaserDrillOreRecipe(event, catalystName, outputName, outputCount, weightValue, depthMin, depthMax) {
    event.custom({
        type: 'industrialforegoing:laser_drill_ore',

        catalyst: {
            item: catalystName
        },

        output: {
            count: outputCount,
            item: outputName
        },

        rarity: [
            {
                biome_filter: {
                    blacklist: [],
                    whitelist: []
                },

                depth_max: depthMax,
                depth_min: depthMin,

                dimension_filter: {
                    blacklist: [],
                    whitelist: []
                },
                weight: weightValue
            }
        ]
    }).id('kjsifg:laser_drill_ore/' + catalystName.split(':')[1] + '/' + outputName.split(':')[1] + '/' + depthMin + depthMax)
}

function addLaserDrillFluidRecipe(event, catalystName, outputName, outputAmount, weightValue, depthMin, depthMax) {
    event.custom({
        type: 'industrialforegoing:laser_drill_fluid',
        catalyst: {
            item: catalystName
        },
        output: {
            amount: outputAmount,
            fluid: outputName
        },
        rarity: [
            {
                biome_filter: {
                    blacklist: [],
                    whitelist: []
                },

                depth_max: depthMax,
                depth_min: depthMin,

                dimension_filter: {
                    blacklist: [],
                    whitelist: []
                },
                weight: weightValue
            }
        ]
    }).id('kjsifg:laser_drill_fluid/' + catalystName.split(':')[1] + '/' + outputName.split(':')[1] + '/' + depthMin + depthMax)
}

function logLaserDrillOreRecipes(event) {
    event.forEachRecipe({type: 'industrialforegoing:laser_drill_ore'}, recipe => {
        console.log(recipe.getId())
    })
}

function logLaserDrillFluidRecipes(event) {
    event.forEachRecipe({type: 'industrialforegoing:laser_drill_fluid'}, recipe => {
        console.log(recipe.getId())
    })
}

ServerEvents.recipes(
    event => {
        event.remove('industrialforegoing:laser_drill_ore/ores/fluorite')
        event.remove('industrialforegoing:laser_drill_ore/raw_materials/copper')
        event.remove('industrialforegoing:laser_drill_ore/diamond_ore')
        event.remove('industrialforegoing:laser_drill_ore/raw_materials/gold')
        event.remove('industrialforegoing:laser_drill_ore/glowstone')
        event.remove('industrialforegoing:laser_drill_ore/redstone_ore')
        event.remove('industrialforegoing:laser_drill_ore/emerald_ore')
        event.remove('industrialforegoing:laser_drill_ore/raw_materials/uranium')
        event.remove('industrialforegoing:laser_drill_ore/raw_materials/iron')
        event.remove('industrialforegoing:laser_drill_ore/raw_materials/tin')
        event.remove('industrialforegoing:laser_drill_ore/raw_materials/nickel')
        event.remove('industrialforegoing:laser_drill_ore/coal_ore')
        event.remove('industrialforegoing:laser_drill_ore/ancient_debris')
        event.remove('industrialforegoing:laser_drill_ore/raw_materials/tungsten')
        event.remove('industrialforegoing:laser_drill_ore/nether_quartz_ore')
        event.remove('industrialforegoing:laser_drill_ore/lapis_ore')
        event.remove('industrialforegoing:laser_drill_ore/raw_materials/osmium')
        event.remove('industrialforegoing:laser_drill_ore/raw_materials/lead')

        event.remove('industrialforegoing:laser_drill_fluid/lava')

        // ----- WHITE LASER LENS (minecraft:iron_ore, mekanism:fluorite_ore)
        addLaserDrillOreRecipe(event, 'industrialforegoing:white_laser_lens',
            'minecraft:iron_ore', 2, 3, 0, 30);
        addLaserDrillOreRecipe(event, 'industrialforegoing:white_laser_lens',
            'minecraft:deepslate_iron_ore', 1, 3, -30, 0);

        addLaserDrillOreRecipe(event, 'industrialforegoing:white_laser_lens',
            'mekanism:fluorite_ore', 1, 3, 30, 60);
        addLaserDrillOreRecipe(event, 'industrialforegoing:white_laser_lens',
            'mekanism:deepslate_fluorite_ore', 2, 3, -60, -30);

        // ----- ORANGE LASER LENS (minecraft:copper_ore)
        addLaserDrillOreRecipe(event, 'industrialforegoing:orange_laser_lens',
            'minecraft:copper_ore', 2, 3, 0, 30);
        addLaserDrillOreRecipe(event, 'industrialforegoing:orange_laser_lens',
            'minecraft:deepslate_copper_ore', 1, 3, -30, 0);

        // ----- MAGENTA LASER LENS ()

        // ----- LIGHT BLUE LASER LENS (minecraft:osmium_ore)
        addLaserDrillOreRecipe(event, 'industrialforegoing:light_blue_laser_lens',
            'mekanism:osmium_ore', 2, 3, 0, 30);
        addLaserDrillOreRecipe(event, 'industrialforegoing:light_blue_laser_lens',
            'mekanism:deepslate_osmium_ore', 1, 3, -30, 0);

        // ----- YELLOW LASER LENS (minecraft:gold_ore, tfmg:lithium_ore)
        addLaserDrillOreRecipe(event, 'industrialforegoing:yellow_laser_lens',
            'minecraft:gold_ore', 2, 3, 0, 30);
        addLaserDrillOreRecipe(event, 'industrialforegoing:yellow_laser_lens',
            'minecraft:deepslate_gold_ore', 2, 3, -30, 0);

        addLaserDrillOreRecipe(event, 'industrialforegoing:yellow_laser_lens',
            'tfmg:lithium_ore', 2, 3, 30, 60);
        addLaserDrillOreRecipe(event, 'industrialforegoing:yellow_laser_lens',
            'tfmg:deepslate_lithium_ore', 2, 3, -60, -30);

        // ----- LIME LASER LENS (minecraft:emerald_ore, mekanism:uranium_ore)
        addLaserDrillOreRecipe(event, 'industrialforegoing:lime_laser_lens',
            'minecraft:emerald_ore', 1, 3, 0, 30);
        addLaserDrillOreRecipe(event, 'industrialforegoing:lime_laser_lens',
            'minecraft:deepslate_emerald_ore', 2, 3, -30, 0);

        addLaserDrillOreRecipe(event, 'industrialforegoing:lime_laser_lens',
            'mekanism:uranium_ore', 1, 3, 30, 60);
        addLaserDrillOreRecipe(event, 'industrialforegoing:lime_laser_lens',
            'mekanism:deepslate_uranium_ore', 2, 3, -60, -30);

        // ----- PINK LASER LENS ()

        // ----- LIGHT GRAY LASER LENS ()

        // ----- CYAN LASER LENS (minecraft:diamond_ore, create:zinc_ore)
        addLaserDrillOreRecipe(event, 'industrialforegoing:cyan_laser_lens',
            'minecraft:diamond_ore', 1, 3, 0, 30);
        addLaserDrillOreRecipe(event, 'industrialforegoing:cyan_laser_lens',
            'minecraft:deepslate_diamond_ore', 2, 3, -30, 0);

        addLaserDrillOreRecipe(event, 'industrialforegoing:cyan_laser_lens',
            'create:zinc_ore', 1, 3, 30, 60);
        addLaserDrillOreRecipe(event, 'industrialforegoing:cyan_laser_lens',
            'create:deepslate_zinc_ore', 2, 3, -60, -30);

        // ----- PURPLE LASER LENS ()

        // ----- BLUE LASER LENS (minecraft:lapis_ore)
        addLaserDrillOreRecipe(event, 'industrialforegoing:blue_laser_lens',
            'minecraft:lapis_ore', 1, 3, 0, 30);
        addLaserDrillOreRecipe(event, 'industrialforegoing:blue_laser_lens',
            'minecraft:deepslate_lapis_ore', 2, 3, -30, 0);

        // ----- BROWN LASER LENS (minecraft:ancient_debris, tfmg:nickel_ore)
        addLaserDrillOreRecipe(event, 'industrialforegoing:brown_laser_lens',
            'minecraft:ancient_debris', 1, 3, -30, 0);

        addLaserDrillOreRecipe(event, 'industrialforegoing:brown_laser_lens',
            'tfmg:nickel_ore', 1, 3, 30, 60);
        addLaserDrillOreRecipe(event, 'industrialforegoing:brown_laser_lens',
            'tfmg:deepslate_nickel_ore', 2, 10000, -60, -30);

        // ----- GREEN LASER LENS ()

        // ----- RED LASER LENS (minecraft:ancient_debris, tfmg:nickel_ore)
        addLaserDrillOreRecipe(event, 'industrialforegoing:red_laser_lens',
            'minecraft:nether_quartz_ore', 2, 3, -30, 0);

        addLaserDrillOreRecipe(event, 'industrialforegoing:red_laser_lens',
            'minecraft:redstone_ore', 1, 3, 30, 60);
        addLaserDrillOreRecipe(event, 'industrialforegoing:red_laser_lens',
            'minecraft:deepslate_redstone_ore', 2, 3, -60, -30);

        // ----- BLACK LASER LENS (minecraft:coal_ore, mekanism:lead_ore)
        addLaserDrillOreRecipe(event, 'industrialforegoing:black_laser_lens',
            'minecraft:coal_ore', 1, 3, 0, 30);
        addLaserDrillOreRecipe(event, 'industrialforegoing:black_laser_lens',
            'minecraft:deepslate_coal_ore', 2, 3, -30, 0);

        addLaserDrillOreRecipe(event, 'industrialforegoing:black_laser_lens',
            'mekanism:lead_ore', 1, 3, 30, 60);
        addLaserDrillOreRecipe(event, 'industrialforegoing:black_laser_lens',
            'mekanism:deepslate_lead_ore', 2, 3, -60, -30);


        addLaserDrillFluidRecipe(event, 'industrialforegoing:orange_laser_lens', 'minecraft:lava', 500, 3, 20, 60)

        logLaserDrillOreRecipes(event);
        logLaserDrillFluidRecipes(event);
    }
)