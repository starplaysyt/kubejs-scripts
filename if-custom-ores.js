ServerEvents.recipes(event => {
	event.remove({id: 'industrialforegoing:laser_drill_ore/emerald'})
	event.remove({id: 'industrialforegoing:laser_drill_ore/raw_materials/nickel'})
	event.remove({id: 'industrialforegoing:laser_drill_ore/quartz'})
	event.remove({id: 'industrialforegoing:laser_drill_ore/raw_materials/iron'})
	event.remove({id: 'industrialforegoing:laser_drill_ore/raw_materials/copper'})
	event.remove({id: 'industrialforegoing:laser_drill_ore/raw_materials/gold'})
	event.remove({id: 'industrialforegoing:laser_drill_ore/raw_materials/tin'})
	event.remove({id: 'industrialforegoing:laser_drill_ore/raw_materials/lead'})
	event.remove({id: 'industrialforegoing:laser_drill_ore/raw_materials/osmium'})
	event.remove({id: 'industrialforegoing:laser_drill_ore/raw_materials/diamond'})
	event.remove({id: 'industrialforegoing:laser_drill_ore/raw_materials/uranium'})
	event.remove({id: 'industrialforegoing:laser_drill_ore/glowstone'})
	event.remove({id: 'industrialforegoing:laser_drill_ore/ancient_debris'})
	event.remove({id: 'industrialforegoing:laser_drill_ore/coal'})
	event.remove({id: 'industrialforegoing:laser_drill_ore/ores/fluorite'})
	event.remove({id: 'industrialforegoing:laser_drill_ore/redstone'})
	event.remove({id: 'industrialforegoing:laser_drill_ore/lapis'})
	event.remove({id: 'industrialforegoing:laser_drill_ore/diamond'})

	event.recipes.industrialforegoing.laser_drill_ore(
		"minecraft:coal_ore",
		"industrialforegoing:laser_lens15",
		[{
			"blacklist" : {},
			"depth_max": 120,
			"depth_min": 0,
			"weight" : 4,
			"whitelist": {}
		}]
		)
	event.recipes.industrialforegoing.laser_drill_ore(
		"minecraft:iron_ore",
		"industrialforegoing:laser_lens8",
		[{
			"blacklist" : {},
			"depth_max": 120,
			"depth_min": 0,
			"weight" : 4,
			"whitelist": {}
		}]
		)
	event.recipes.industrialforegoing.laser_drill_ore(
		"minecraft:copper_ore",
		"industrialforegoing:laser_lens1",
		[{
			"blacklist" : {},
			"depth_max": 120,
			"depth_min": 0,
			"weight" : 4,
			"whitelist": {}
		}]
		)
	event.recipes.industrialforegoing.laser_drill_ore(
		"minecraft:gold_ore",
		"industrialforegoing:laser_lens4",
		[{
			"blacklist" : {},
			"depth_max": 60,
			"depth_min": 30,
			"weight" : 4,
			"whitelist": {}
		}]
		)
	event.recipes.industrialforegoing.laser_drill_ore(
		"minecraft:redstone_ore",
		"industrialforegoing:laser_lens14",
		[{
			"blacklist" : {},
			"depth_max": 120,
			"depth_min": 0,
			"weight" : 4,
			"whitelist": {}
		}]
		)
	event.recipes.industrialforegoing.laser_drill_ore(
		"minecraft:emerald_ore",
		"industrialforegoing:laser_lens5",
		[{
			"blacklist" : {},
			"depth_max": 120,
			"depth_min": 0,
			"weight" : 4,
			"whitelist": {}
		}]
		)
	event.recipes.industrialforegoing.laser_drill_ore(
		"minecraft:lapis_ore",
		"industrialforegoing:laser_lens11",
		[{
			"blacklist" : {},
			"depth_max": 120,
			"depth_min": 0,
			"weight" : 4,
			"whitelist": {}
		}]
		)
	event.recipes.industrialforegoing.laser_drill_ore(
		"minecraft:diamond_ore",
		"industrialforegoing:laser_lens3",
		[{
			"blacklist" : {},
			"depth_max": 60,
			"depth_min": 30,
			"weight" : 4,
			"whitelist": {}
		}]
		)
	event.recipes.industrialforegoing.laser_drill_ore(
		"create:zinc_ore",
		"industrialforegoing:laser_lens0",
		[{
			"blacklist" : {},
			"depth_max": 60,
			"depth_min": 30,
			"weight" : 4,
			"whitelist": {}
		}]
		)
	event.recipes.industrialforegoing.laser_drill_ore(
		"mekanism:tin_ore",
		"industrialforegoing:laser_lens0",
		[{
			"blacklist" : {},
			"depth_max": 90,
			"depth_min": 65,
			"weight" : 4,
			"whitelist": {}
		}]
		)
	event.recipes.industrialforegoing.laser_drill_ore(
		"#forge:ores/osmium",
		"industrialforegoing:laser_lens3",
		[{
			"blacklist" : {},
			"depth_max": 90,
			"depth_min": 65,
			"weight" : 4,
			"whitelist": {}
		}]
		)
	event.recipes.industrialforegoing.laser_drill_ore(
		"mekanism:uranium_ore",
		"industrialforegoing:laser_lens13",
		[{
			"blacklist" : {},
			"depth_max": 120,
			"depth_min": 0,
			"weight" : 4,
			"whitelist": {}
		}]
		)
	event.recipes.industrialforegoing.laser_drill_ore(
		"mekanism:fluorite_ore",
		"industrialforegoing:laser_lens10",
		[{
			"blacklist" : {},
			"depth_max": 120,
			"depth_min": 0,
			"weight" : 4,
			"whitelist": {}
		}]
		)
	event.recipes.industrialforegoing.laser_drill_ore(
		"mekanism:lead_ore",
		"industrialforegoing:laser_lens7",
		[{
			"blacklist" : {},
			"depth_max": 120,
			"depth_min": 0,
			"weight" : 4,
			"whitelist": {}
		}]
		)
	event.recipes.industrialforegoing.laser_drill_ore(
		"minecraft:glowstone",
		"industrialforegoing:laser_lens4",
		[{
			"blacklist" : {},
			"depth_max": 90,
			"depth_min": 65,
			"weight" : 4,
			"whitelist": {}
		}]
		)
	event.recipes.industrialforegoing.laser_drill_ore(
		"minecraft:glowstone",
		"industrialforegoing:laser_lens0",
		[{
			"blacklist" : {},
			"depth_max": 10,
			"depth_min": 0,
			"weight" : 4,
			"whitelist": {}
		}]
	)
	event.recipes.industrialforegoing.laser_drill_ore(
		"minecraft:ancient_debris",
		"industrialforegoing:laser_lens12",
		[{
			"blacklist" : {},
			"depth_max": 10,
			"depth_min": 0,
			"weight" : 4,
			"whitelist": {}
		}]
	)
})

/*event.recipes.industrialforegoing.laser_drill_ore(
        "minecraft:tnt", // output
        "minecraft:sand",  // catalyst
        [ //rarity, see below for more details
            {
                "blacklist": {
                    "type": "minecraft:worldgen/biome",
                    "values": [
                        "minecraft:the_end",
                        "minecraft:the_void",
                        "minecraft:small_end_islands",
                        "minecraft:end_barrens",
                        "minecraft:end_highlands",
                        "minecraft:end_midlands"
                    ]
                },
                "depth_max": 16,
                "depth_min": 5,
                "weight": 4,
                "whitelist": {}
            },
            {
                "blacklist": {
                    "type": "minecraft:worldgen/biome",
                    "values": [
                        "minecraft:the_end",
                        "minecraft:the_void",
                        "minecraft:small_end_islands",
                        "minecraft:end_barrens",
                        "minecraft:end_highlands",
                        "minecraft:end_midlands"
                    ]
                },
                "depth_max": 255,
                "depth_min": 0,
                "weight": 1,
                "whitelist": {}
            }
        ]
    )*/