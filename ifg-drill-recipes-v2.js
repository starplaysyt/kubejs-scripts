// kubejs/server_scripts/ifg-drill-recipes-v2.js

function addLaserDrillOreRecipe(event, catalystName, outputName, outputCount, weightValue, depthMin, depthMax) {
    event.custom({
        type: 'industrialforegoing:laser_drill_ore',

        catalyst: {
            item: catalystName
        },

        output: {
            count: outputCount, item: outputName
        },

        rarity: [{
            biome_filter: {
                blacklist: [], whitelist: []
            },

            depth_max: depthMax, depth_min: depthMin,

            dimension_filter: {
                blacklist: [], whitelist: []
            }, weight: weightValue
        }]
    }).id('kjsifg:laser_drill_ore/' + catalystName.split(':')[1] + '/' + outputName.split(':')[1] + '/' + depthMin + depthMax)
}

function addLaserDrillFluidRecipe(event, catalystName, outputName, outputAmount, weightValue, depthMin, depthMax) {
    event.custom({
        type: 'industrialforegoing:laser_drill_fluid', catalyst: {
            item: catalystName
        }, output: {
            amount: outputAmount, fluid: outputName
        }, rarity: [{
            biome_filter: {
                blacklist: [], whitelist: []
            },

            depth_max: depthMax, depth_min: depthMin,

            dimension_filter: {
                blacklist: [], whitelist: []
            }, weight: weightValue
        }]
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

ServerEvents.recipes(event => {
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

    // --- Orange Lens (Iron, Copper) ---
    addLaserDrillOreRecipe(event, 'industrialforegoing:orange_laser_lens', 'minecraft:iron_ore', 2, 3, -200, -198);
    addLaserDrillOreRecipe(event, 'industrialforegoing:orange_laser_lens', 'minecraft:deepslate_iron_ore', 2, 3, -195, -193);
    addLaserDrillOreRecipe(event, 'industrialforegoing:orange_laser_lens', 'minecraft:copper_ore', 2, 3, -190, -188);
    addLaserDrillOreRecipe(event, 'industrialforegoing:orange_laser_lens', 'minecraft:deepslate_copper_ore', 2, 3, -185, -183);

    // --- White Lens (Fluorite, Quartz, Diorite, Calcite) ---
    addLaserDrillOreRecipe(event, 'industrialforegoing:white_laser_lens', 'mekanism:fluorite_ore', 2, 3, -180, -178);
    addLaserDrillOreRecipe(event, 'industrialforegoing:white_laser_lens', 'mekanism:deepslate_fluorite_ore', 2, 3, -175, -173);
    addLaserDrillOreRecipe(event, 'industrialforegoing:white_laser_lens', 'minecraft:nether_quartz_ore', 2, 3, -170, -168);
    addLaserDrillOreRecipe(event, 'industrialforegoing:white_laser_lens', 'minecraft:diorite', 2, 3, -165, -163);
    addLaserDrillOreRecipe(event, 'industrialforegoing:white_laser_lens', 'minecraft:calcite', 2, 3, -160, -158);

    // --- Light Blue Lens (Osmium) ---
    addLaserDrillOreRecipe(event, 'industrialforegoing:light_blue_laser_lens', 'mekanism:osmium_ore', 2, 3, -155, -153);
    addLaserDrillOreRecipe(event, 'industrialforegoing:light_blue_laser_lens', 'mekanism:deepslate_osmium_ore', 2, 3, -150, -148);

    // --- Yellow Lens (Gold, Ochrum, Sulfur) ---
    addLaserDrillOreRecipe(event, 'industrialforegoing:yellow_laser_lens', 'minecraft:gold_ore', 2, 3, -145, -143);
    addLaserDrillOreRecipe(event, 'industrialforegoing:yellow_laser_lens', 'minecraft:deepslate_gold_ore', 2, 3, -140, -138);
    addLaserDrillOreRecipe(event, 'industrialforegoing:yellow_laser_lens', 'create:ochrum', 2, 3, -135, -133);
    addLaserDrillOreRecipe(event, 'industrialforegoing:yellow_laser_lens', 'tfmg:sulfur', 2, 3, -130, -128);

    // --- Light Gray Lens (Lithium, Nickel, Limestone) ---
    addLaserDrillOreRecipe(event, 'industrialforegoing:light_gray_laser_lens', 'tfmg:lithium_ore', 2, 3, -125, -123);
    addLaserDrillOreRecipe(event, 'industrialforegoing:light_gray_laser_lens', 'tfmg:deepslate_lithium_ore', 2, 3, -120, -118);
    addLaserDrillOreRecipe(event, 'industrialforegoing:light_gray_laser_lens', 'tfmg:nickel_ore', 2, 3, -115, -113);
    addLaserDrillOreRecipe(event, 'industrialforegoing:light_gray_laser_lens', 'tfmg:deepslate_nickel_ore', 2, 3, -110, -108);
    addLaserDrillOreRecipe(event, 'industrialforegoing:light_gray_laser_lens', 'create:limestone', 2, 3, -105, -103);

    // --- Green Lens (Emerald, Veridium) ---
    addLaserDrillOreRecipe(event, 'industrialforegoing:green_laser_lens', 'minecraft:emerald_ore', 2, 3, -100, -98);
    addLaserDrillOreRecipe(event, 'industrialforegoing:green_laser_lens', 'minecraft:deepslate_emerald_ore', 2, 3, -95, -93);
    addLaserDrillOreRecipe(event, 'industrialforegoing:green_laser_lens', 'create:veridium', 2, 3, -90, -88);

    // --- Lime Lens (Uranium, Zinc) ---
    addLaserDrillOreRecipe(event, 'industrialforegoing:lime_laser_lens', 'mekanism:uranium_ore', 2, 3, -85, -83);
    addLaserDrillOreRecipe(event, 'industrialforegoing:lime_laser_lens', 'mekanism:deepslate_uranium_ore', 2, 3, -80, -78);
    addLaserDrillOreRecipe(event, 'industrialforegoing:lime_laser_lens', 'create:zinc_ore', 2, 3, -75, -73);
    addLaserDrillOreRecipe(event, 'industrialforegoing:lime_laser_lens', 'create:deepslate_zinc_ore', 2, 3, -70, -68);

    // --- Cyan Lens (Diamond) ---
    addLaserDrillOreRecipe(event, 'industrialforegoing:cyan_laser_lens', 'minecraft:diamond_ore', 2, 3, -65, -63);
    addLaserDrillOreRecipe(event, 'industrialforegoing:cyan_laser_lens', 'minecraft:deepslate_diamond_ore', 2, 3, -60, -58);

    // --- Blue Lens (Lapis, Asurine) ---
    addLaserDrillOreRecipe(event, 'industrialforegoing:blue_laser_lens', 'minecraft:lapis_ore', 2, 3, -55, -53);
    addLaserDrillOreRecipe(event, 'industrialforegoing:blue_laser_lens', 'minecraft:deepslate_lapis_ore', 2, 3, -50, -48);
    addLaserDrillOreRecipe(event, 'industrialforegoing:blue_laser_lens', 'create:asurine', 2, 3, -45, -43);

    // --- Brown Lens (Ancient Debris, Bauxite, Dripstone, Scoria, Lignite, Fireclay) ---
    addLaserDrillOreRecipe(event, 'industrialforegoing:brown_laser_lens', 'minecraft:ancient_debris', 2, 3, -40, -38);
    addLaserDrillOreRecipe(event, 'industrialforegoing:brown_laser_lens', 'tfmg:bauxite', 2, 3, -35, -33);
    addLaserDrillOreRecipe(event, 'industrialforegoing:brown_laser_lens', 'minecraft:dripstone_block', 2, 3, -30, -28);
    addLaserDrillOreRecipe(event, 'industrialforegoing:brown_laser_lens', 'create:scoria', 2, 3, -25, -23);
    addLaserDrillOreRecipe(event, 'industrialforegoing:brown_laser_lens', 'tfmg:lignite', 2, 3, -20, -18);
    addLaserDrillOreRecipe(event, 'industrialforegoing:brown_laser_lens', 'tfmg:fireclay', 2, 3, 50, 52);

    // --- Red Lens (Redstone, Granite, Crimsite) ---
    addLaserDrillOreRecipe(event, 'industrialforegoing:red_laser_lens', 'minecraft:redstone_ore', 2, 3, -15, -13);
    addLaserDrillOreRecipe(event, 'industrialforegoing:red_laser_lens', 'minecraft:deepslate_redstone_ore', 2, 3, -10, -8);
    addLaserDrillOreRecipe(event, 'industrialforegoing:red_laser_lens', 'minecraft:granite', 2, 3, -5, -3);
    addLaserDrillOreRecipe(event, 'industrialforegoing:red_laser_lens', 'create:crimsite', 2, 3, 0, 2);

    // --- Black Lens (Coal, Deepslate, Scorchia) ---
    addLaserDrillOreRecipe(event, 'industrialforegoing:black_laser_lens', 'minecraft:coal_ore', 2, 3, 5, 7);
    addLaserDrillOreRecipe(event, 'industrialforegoing:black_laser_lens', 'minecraft:deepslate_coal_ore', 2, 3, 10, 12);
    addLaserDrillOreRecipe(event, 'industrialforegoing:black_laser_lens', 'minecraft:deepslate', 2, 3, 15, 17);
    addLaserDrillOreRecipe(event, 'industrialforegoing:black_laser_lens', 'create:scorchia', 2, 3, 20, 22);

    // --- Purple Lens (Lead) ---
    addLaserDrillOreRecipe(event, 'industrialforegoing:purple_laser_lens', 'mekanism:lead_ore', 2, 3, 25, 27);
    addLaserDrillOreRecipe(event, 'industrialforegoing:purple_laser_lens', 'mekanism:deepslate_lead_ore', 2, 3, 30, 32);

    // --- Gray Lens (Galena, Andesite, Tuff, Slag) ---
    addLaserDrillOreRecipe(event, 'industrialforegoing:gray_laser_lens', 'tfgm:galena', 2, 3, 35, 37); // Left 'tfgm' as in the original list, might need to be 'tfmg'
    addLaserDrillOreRecipe(event, 'industrialforegoing:gray_laser_lens', 'minecraft:andesite', 2, 3, 40, 42);
    addLaserDrillOreRecipe(event, 'industrialforegoing:gray_laser_lens', 'minecraft:tuff', 2, 3, 45, 47);
    addLaserDrillOreRecipe(event, 'industrialforegoing:gray_laser_lens', 'tfmg:slag_block', 2, 3, 55, 57);


    addLaserDrillFluidRecipe(event, 'industrialforegoing:orange_laser_lens', 'minecraft:lava', 500, 3, 20, 60)

    logLaserDrillOreRecipes(event);
    logLaserDrillFluidRecipes(event);
})