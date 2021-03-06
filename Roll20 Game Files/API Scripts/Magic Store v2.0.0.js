// Magic store generator for D&D 5e
// Created by Kirsty (https://app.roll20.net/users/1165285/kirsty)


// API Commands:
// !ms - Pulls up the menu and allows the GM to generate and modify the store
// !shop - Puts the virtual store in chat for the players to peruse


// Red Colour: #7E2D40


var MagicStore = MagicStore || (function() {
	'use strict';
	
	var version = '2.0.0',
	
	setDefaults = function() {
			state.store = {
					now: {
							version: '2.0.0',
			inventory: "Adamantine Armor,500,Amulet of Health,8000,Bag of Holding,4000"
					},
			};
	},
	
	checkDefaults = function() {
			if( state.store.now.version != version ){
					state.store.now.version = version;
			}
			if( ! state.store.now.inventory){state.store.now.inventory = "Adamantine Armor,500,Amulet of Health,8000,Bag of Holding,4000"};
	},
	
	handleInput = function(msg) {
			var args = msg.content.split(",");
			
			if (msg.type !== "api") {
		return;
	}
	
	if(playerIsGM(msg.playerid)){
			switch(args[0]) {
					case '!ms':
									storeMenu();
									break;
							case '!ms_inventory':
									getInventory(msg);
									storeMenu();
									break;
							case '!shop':
									shop();
									break;
			}
	}
	},
	
	storeMenu = function() {
			var colour = '#7E2D40';
			var divstyle = 'style="width: 189px; border: 1px solid black; background-color: #ffffff; padding: 5px;"'
			var astyle1 = 'style="text-align:center; border: 1px solid black; margin: 1px; padding: 2px; background-color: ' + colour + '; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 166px;';
			var astyle2 = 'style="text-align:center; border: 1px solid black; margin: 1px; padding: 2px; background-color: ' + colour + '; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 80px;';
			var tablestyle ='style="text-align:center; font-size: 12px; width: 100%;"';
			var arrowstyle = 'style="border: none; border-top: 3px solid transparent; border-bottom: 3px solid transparent; border-left: 195px solid ' + colour + '; margin-bottom: 2px; margin-top: 2px;"';
			var headstyle = 'style="color: ' + colour + '; font-size: 18px; text-align: left; font-variant: small-caps; font-family: Times, serif;"';
			var substyle = 'style="font-size: 11px; line-height: 13px; margin-top: -2px; font-style: italic;"';
			var trstyle = 'style="border-top: 1px solid #cccccc; text-align: left;"';
			var tdstyle = 'style="text-align: right;"';
			
			var inventory = state.store.now.inventory;
			var items = inventory.split(",");
			var invList = '';
			var i = 0;
			
			for (i = 0; i < items.length; i += 2) { 
					invList += '<tr ' + trstyle + '><td>' + items[i] + '</td><td ' + tdstyle + '>' + items[i+1] + '</td></tr>';
			}
			
			sendChat('Magic Store', '/w gm <div ' + divstyle + '>' + //--
					'<div ' + headstyle + '>Magic Store</div>' + //--
					'<div ' + substyle + '>Menu (v.' + state.store.now.version + ')</div>' + //--
					'<div ' + arrowstyle + '></div>' + //--
					'<table ' + tablestyle + '>' + //--
							'<tr><th>Item</th><th>Price (gp)</th></tr>' + //--
							invList + //--
					'</table>'+ //--
					'<div style="text-align:center;"><a ' + astyle2 + '" href="!ms_inventory,scroll,?{Number of scrolls|5},?{Maximum Rarity|Common,50|Uncommon,80|Rare,90|Very Rare,98|Legendary,100}">Scrolls</a>' + //--
					'<a ' + astyle2 + '" href="!ms_inventory,potion,?{Number of potions|5},?{Maximum Rarity|Common,50|Uncommon,80|Rare,90|Very Rare,98|Legendary,100}">Potions</a></div>' + //--
					'<div style="text-align:center;"><a ' + astyle2 + '" href="!ms_inventory,weapon,?{Number of weapons|5},?{Maximum Rarity|Common,50|Uncommon,80|Rare,90|Very Rare,98|Legendary,100}">Weapons</a>' + //--
					'<a ' + astyle2 + '" href="!ms_inventory,armour,?{Number of armour|5},?{Maximum Rarity|Common,50|Uncommon,80|Rare,90|Very Rare,98|Legendary,100}">Armour</a></div>' + //--
					'<div style="text-align:center;"><a ' + astyle2 + '" href="!ms_inventory,item,?{Number of items|5},?{Maximum Rarity|Common,50|Uncommon,80|Rare,90|Very Rare,98|Legendary,100}">Items</a>' + //--
					'<a ' + astyle2 + '" href="!ms_inventory,random,?{Number of random items|5},?{Maximum Rarity|Common,50|Uncommon,80|Rare,90|Very Rare,98|Legendary,100}">Random</a></div>' + //--
					'<div style="text-align:center;"><a ' + astyle1 + '" href="!shop">Show to Players</a></div>' + //--
					'</div>'
			);
	},
	
	shop = function() {
			var colour = '#7E2D40';
			var divstyle = 'style="width: 189px; border: 1px solid black; background-color: #ffffff; padding: 5px;"'
			var tablestyle ='style="text-align:center; font-size: 12px; width: 100%;"';
			var arrowstyle = 'style="border: none; border-top: 3px solid transparent; border-bottom: 3px solid transparent; border-left: 195px solid ' + colour + '; margin-bottom: 2px; margin-top: 2px;"';
			var headstyle = 'style="color: ' + colour + '; font-size: 18px; text-align: left; font-variant: small-caps; font-family: Times, serif;"';
			var substyle = 'style="font-size: 11px; line-height: 13px; margin-top: -2px; font-style: italic;"';
			var trstyle = 'style="border-top: 1px solid #cccccc; text-align: left;"';
			var tdstyle = 'style="text-align: right;"';
			
			var inventory = state.store.now.inventory;
			var items = inventory.split(",");
			var invList = '';
			var i = 0;
			
			for (i = 0; i < items.length; i += 2) { 
					invList += '<tr ' + trstyle + '><td>' + items[i] + '</td><td ' + tdstyle + '>' + items[i+1] + '</td></tr>';
			}
			
			sendChat('Magic Store', '/w gm <div ' + divstyle + '>' + //--
					'<div ' + headstyle + '>Magic Store</div>' + //--
					'<div ' + substyle + '>Menu (v.' + state.store.now.version + ')</div>' + //--
					'<div ' + arrowstyle + '></div>' + //--
					'<table ' + tablestyle + '>' + //--
							'<tr><th>Item</th><th>Price (gp)</th></tr>' + //--
							invList + //--
					'</table>'+ //--
					'</div>'
			);
	},
	
	
	
	getInventory = function(msg) {
			var args = msg.content.split(",");
			var type = args[1];
			var rarity;
			
			var i;
			var newInv = "";
			var randNo;
			
			for (i = 0; i < args[2]; i ++) { 
					
					if (i>0){newInv += ','}
					
					rarity = getRarity(args[3]);
					randNo = randomInteger(5);
					
					if (type == 'scroll'){newInv += getScroll(rarity)}
					if (type == 'potion'){newInv += getPotion(rarity)}
					if (type == 'weapon'){newInv += getWeapon(rarity)}
					if (type == 'armour'){newInv += getArmour(rarity)}
					if (type == 'item'){newInv += getItem(rarity)}
					if (type == 'random'){
							switch(randNo) {
									case 1:
											newInv += getScroll(rarity);
											break;
									case 2:
											newInv += getPotion(rarity);
											break;
									case 3:
											newInv += getWeapon(rarity);
											break;
									case 4:
											newInv += getArmour(rarity);
											break;
									case 5:
											newInv += getItem(rarity);
											break;
							}
					}
			}
			
			state.store.now.inventory = newInv;
	},
	
	getRarity = function(max) {
			var maxrare = max;
			var invNo = randomInteger(maxrare);
			var rarity;
			
			if (invNo < 51){
					rarity = "common";
			} else if (invNo < 81) {
					rarity = "uncommon";
			} else if (invNo < 91) {
					rarity = "rare";
			} else if (invNo < 100) {
					rarity = "very rare";
			} else {
					rarity = "legendary";
			}
			
			return rarity;
	},
	
	getScroll = function(rarity) {
			var item;
			var level;
			
			switch(rarity) {
					case 'common':
							level = randomInteger(2);
							if (level == 2){level = 0}
							item = rollSpell(level);
							break;
					case 'uncommon':
							level = randomInteger(2);
							if (level == 1){
									level = 2;
							}else{
									level = 3;
							}
							item = rollSpell(level);
							break;
					case 'rare':
							level = randomInteger(2);
							if (level == 1){
									level = 4;
							}else{
									level = 5;
							}
							item = rollSpell(level);
							break;
					case 'very rare':
							level = randomInteger(3);
							if (level == 1){
									level = 6;
							}else if(level == 2){
									level = 7;
							}else{
									level = 8;
							}
							item = rollSpell(level);
							break;
					case 'legendary':
							level = 9;
							item = rollSpell(level);
							break;
			}
			
			return item;
	},
	
	rollSpell = function(level) {
			var spellList;
			
			switch(level) {
					case 0:
							spellList = "Acid Splash,10;Blade Ward,10;Booming Blade,10;Chill Touch,10;Control Flames,10;Create Bonfire,10;Dancing Lights,10;Druidcraft,10;Eldritch Blast,10;Fire Bolt,10;Friends,10;Frostbite,10;Green-Flame Blade,10;Guidance,10;Gust,10;Infestation,10;Light,10;Lightning Lure,10;Mage Hand,10;Magic Stone,10;Mending,10;Message,10;Minor Illusion,10;Mold earth,10;Poison Spray,10;Prestidigitation,10;Primal Savagery,10;Produce Flame,10;Ray of Frost,10;Resistance,10;Sacred Flame,10;Shape Water,10;Shillelagh,10;Shocking Grasp,10;Spare the Dying,10;Sword Burst,10;Thaumaturgy,10;Thorn Whip,10;Thunderclap,10;Toll the Dead,10;True Strike,10;Vicious Mockery,10;Word of Radiance,10";
							break;
					case 1:
							spellList = "Absorb Elements,60;Alarm,60;Animal Friendship,60;Armor of Agathys,60;Arms of Hadar,60;Bane,60;Beast Bond,60;Bless,60;Burning Hands,60;Catapult,60;Cause Fear,60;Ceremony,60;Chaos Bolt,60;Charm Person,60;Chromatic Orb,60;Color Spray,60;Command,60;Compelled Duel,60;Comprehend Languages,60;Create or Destroy Water,60;Cure Wounds,60;Detect Evil and Good,60;Detect Magic,60;Detect Poison and Disease,60;Disguise Self,60;Dissonant Whispers,60;Divine Favor,60;Earth Tremor,60;Ensnaring Strike,60;Entangle,60;Expeditious Retreat,60;Faerie Fire,60;False Life,60;Feather Fall,60;Find Familiar,60;Fog Cloud,60;Goodberry,60;Grease,60;Guiding Bolt,60;Hail of Thorns,60;Healing Word,60;Hellish Rebuke,60;Heroism,60;Hex,60;Hunter???s Mark,60;Ice Knife,60;Identify,60;Illusory Script,60;Inflict Wounds,60;Jump,60;Longstrider,60;Mage Armor,60;Magic Missile,60;Protection from Evil and Good,60;Purify Food and Drink,60;Ray of Sickness,60;Sanctuary,60;Searing Smite,60;Shield,60;Shield of Faith,60;Silent Image,60;Sleep,60;Snare,60;Speak with Animals,60;Tasha???s Hideous Laughter,60;Tenser???s Floating Disk,60;Thunderous Smite,60;Thunderwave,60;Unseen Servant,60;Witch Bolt,60;Wrathful Smite,60;Zephyr Strike,60";
							break;
					case 2:
							spellList = "Aganazzar???s Scorcher,120;Aid,120;Alter Self,120;Animal Messenger,120;Arcane Lock,120;Augury,120;Barkskin,120;Beast Sense,120;Blindness/Deafness,120;Blur,120;Branding Smite,120;Calm Emotions,120;Cloud of Daggers,120;Continual Flame,120;Cordon of Arrows,120;Crown of Madness,120;Darkness,120;Darkvision,120;Detect Thoughts,120;Dragon's Breath,120;Dust Devil,120;Earthbind,120;Enhance Ability,120;Enlarge/Reduce,120;Enthrall,120;Find Steed,120;Find Traps,120;Flame Blade,120;Flaming Sphere,120;Gentle Repose,120;Gust of Wind,120;Healing Spirit,120;Heat Metal,120;Hold Person,120;Invisibility,120;Knock,120;Lesser Restoration,120;Levitate,120;Locate Animals or Plants,120;Locate Object,120;Magic Mouth,120;Magic Weapon,120;Maximilian???s Earthen Grasp,120;Melf???s Acid Arrow,120;Mind Spike,120;Mirror Image,120;Misty Step,120;Moonbeam,120;Nystul???s Magic Aura,120;Pass Without Trace,120;Phantasmal Force,120;Prayer of Healing,120;Protection from Poison,120;Pyrotechnics,120;Ray of Enfeeblement,120;Rope Trick,120;Scorching Ray,120;See invisibility,120;Shadow Blade,120;Shatter,120;Silence,120;Skywrite,120;Snilloc???s Snowball Swarm,120;Spider Climb,120;Spike Growth,120;Spiritual Weapon,120;Suggestion,120;Warding Bond,120;Warding Wind,120;Web,120;Zone of Truth,120";
							break;
					case 3:
							spellList = "Animate Dead,200;Aura of Vitality,200;Beacon of Hope,200;Bestow Curse,200;Blinding Smite,200;Blink,200;Call Lightning,200;Catnap,200;Clairvoyance,200;Conjure Animals,200;Conjure Barrage,200;Counterspell,200;Create Food and Water,200;Crusader???s Mantle,200;Daylight,200;Dispel Magic,200;Elemental Weapon,200;Erupting Earth,200;Fear,200;Feign Death,200;Fireball,200;Flame Arrows,200;Fly,200;Gaseous Form,200;Glyph of Warding,200;Haste,200;Hunger of Hadar,200;Hypnotic Pattern,200;Leomund???s Tiny Hut,200;Lightning Arrow,200;Lightning Bolt,200;Magic Circle,200;Major Image,200;Mass Healing Word,200;Meld into Stone,200;Melf???s Minute Meteors,200;Nondetection,200;Phantom Steed,200;Plant Growth,200;Protection from Energy,200;Remove Curse,200;Revivify,200;Sending,200;Sleet Storm,200;Slow,200;Speak with Dead,200;Speak with Plants,200;Spirit Guardians,200;Stinking Cloud,200;Tidal Wave,200;Tongues,200;Vampiric Touch,200;Wall of Sand,200;Wall of Water,200;Water Breathing,200;Water Walk,200;Wind Wall,200;Enemies abound,200;Life Transference,200;Summon Lesser Demons,200;Thunder Step,200;Tiny Servant,200";
							break;
					case 4:
							spellList = "Arcane Eye,320;Aura of Life,320;Aura of Purity,320;Banishment,320;Blight,320;Compulsion,320;Confusion,320;Conjure Minor Elementals,320;Conjure Woodland Beings,320;Control Water,320;Death Ward,320;Dimension Door,320;Divination,320;Dominate Beast,320;Elemental Bane,320;Evard???s Black Tentacles,320;Fabricate,320;Fire Shield,320;Freedom of Movement,320;Giant Insect,320;Grasping Vine,320;Greater Invisibility,320;Guardian of Faith,320;Hallucinatory Terrain,320;Ice Storm,320;Leomund???s Secret Chest,320;Locate Creature,320;Mordenkainen???s Faithful Hound,320;Mordenkainen???s Private Sanctum,320;Otiluke???s Resilient Sphere,320;Phantasmal Killer,320;Polymorph,320;Staggering Smite,320;Stone Shape,320;Stoneskin,320;Storm Sphere,320;Vitriolic Sphere,320;Wall of Fire,320;Watery Sphere,320;Charm Monster,320;Find Greater Steed,320;Guardian of Nature,320;Shadow of Moil,320;Sickening Radiance,320;Summon Greater Demon,320";
							break;
					case 5:
							spellList = "Animate Objects,640;Antilife Shell,640;Awaken,640;Banishing Smite,640;Bigby???s Hand,640;Circle of Power,640;Cloudkill,640;Commune,640;Commune with Nature,640;Cone of Cold,640;Conjure Elemental,640;Conjure Volley,640;Contact Other Plane,640;Contagion,640;Control Winds,640;Creation,640;Destructive Wave,640;Dispel Evil and Good,640;Dominate Person,640;Dream,640;Flame Strike,640;Geas,640;Greater Restoration,640;Hallow,640;Hold Monster,640;Immolation,640;Insect Plague,640;Legend Lore,640;Maelstrom,640;Mass Cure Wounds,640;Mislead,640;Modify Memory,640;Passwall,640;Planar Binding,640;Raise Dead,640;Rary???s Telepathic Bond,640;Reincarnate,640;Scrying,640;Seeming,640;Swift Quiver,640;Telekinesis,640;Teleportation Circle,640;Transmute Rock,640;Tree Stride,640;Wall of Force,640;Wall of Stone,640;Danse Macabre,640;Dawn,640;Druid Grove,640;Enervation,640;Far Step,640;Holy Weapon,640;Infernal Calling,640;Negative Energy Flood,640;Skill Empowerment,640;Steel Wind Strike,640;Synaptic Static,640;Wall of Light,640;Wrath of Nature,640";
							break;
					case 6:
							spellList = "Arcane Gate,1280;Blade Barrier,1280;Bones of the Earth,1280;Chain Lightning,1280;Circle of Death,1280;Conjure Fey,1280;Contingency,1280;Create Undead,1280;Disintegrate,1280;Drawmij???s Instant Summons,1280;Eyebite,1280;Find the Path,1280;Flesh to Stone,1280;Forbiddance,1280;Globe of Invulnerability,1280;Guards and Wards,1280;Harm,1280;Heal,1280;Heroes??? Feast,1280;Investiture of Flame,1280;Investiture of Ice,1280;Investiture of Stone,1280;Investiture of Wind,1280;Magic Jar,1280;Mass Suggestion,1280;Move Earth,1280;Otiluke???s Freezing Sphere,1280;Otto???s Irresistible Dance,1280;Planar Ally,1280;Primordial Ward,1280;Programmed Illusion,1280;Sunbeam,1280;Transport via Plants,1280;True Seeing,1280;Wall of Ice,1280;Wall of Thorns,1280;Wind Walk,1280;Word of Recall,1280;Create Homunculus,1280;Mental Prison,1280;Primordial Ward,1280;Scatter,1280;Soul Cage,1280;Tenser???s Transformation,1280";
							break;
					case 7:
							spellList = "Conjure Celestial,2560;Delayed Blast Fireball,2560;Divine Word,2560;Etherealness,2560;Finger of Death,2560;Fire Storm,2560;Forcecage,2560;Mirage Arcane,2560;Mordenkainen???s Magnificent Mansion,2560;Mordenkainen???s Sword,2560;Plane Shift,2560;Prismatic Spray,2560;Project Image,2560;Regenerate,2560;Resurrection,2560;Reverse Gravity,2560;Sequester,2560;Simulacrum,2560;Symbol,2560;Teleport,2560;Whirlwind,2560;Crown of Stars,2560;Power Word Pain,2560;Temple of the Gods,2560";
							break;
					case 8:
							spellList = "Abi-Dalzim???s Horrid Wilting,5120;Animal Shapes,5120;Antimagic Field,5120;Antipathy/Sympathy,5120;Clone,5120;Control Weather,5120;Demiplane,5120;Dominate Monster,5120;Earthquake,5120;Feeblemind,5120;Glibness,5120;Holy Aura,5120;Incendiary Cloud,5120;Maze,5120;Mind Blank,5120;Power Word Stun,5120;Sunburst,5120;Telepathy,5120;Trap the Soul,5120;Tsunami,5120;Illusory Dragon,5120;Maddening Darkness,5120;Mighty Fortress,5120";
							break;
					case 9:
							spellList = "Astral Projection,10240;Foresight,10240;Gate,10240;Imprisonment,10240;Mass Heal,10240;Meteor Swarm,10240;Power Word Heal,10240;Power Word Kill,10240;Prismatic Wall,10240;Shapechange,10240;Storm of Vengeance,10240;Time Stop,10240;True Polymorph,10240;True Resurrection,10240;Weird,10240;Wish,10240;Invulnerability,10240;Mass Polymorph,10240;Psychic Scream,10240";
							break;
			}
			
			
			var itemsList = spellList.split(";");
			var len = itemsList.length;
			
			var number = randomInteger(len) - 1;
			var item = 'Scroll: ' + itemsList[number];
			
			return item;
	},
	
	getPotion = function(rarity) {
			var potionList;
			
			switch(rarity) {
					case 'common':
							potionList = "Potion of Climbing,180;Potion of Healing,50";
							break;
					case 'uncommon':
							potionList = "Oil of Slipperiness,480;Philter of Love,90;Potion of Animal Friendship,200;Potion of Fire Breath,150;Potion of Greater Healing,150;Potion of Growth,270;Potion of Poison,100;Potion of Resistance,300;Potion of Water Breathing,180";
							break;
					case 'rare':
							potionList = "Elixir of Health,120;Oil of Etherealness,1920;Potion of Clairvoyance,960;Potion of Diminution,270;Potion of Gaseous Form,300;Potion of Heroism,180;Potion of Invulnerability,3840;Potion of Mind Reading,180";
							break;
					case 'very rare':
							potionList = "Oil of Sharpness,3200;Potion of Flying,500;Potion of Invisibility,180;Potion of Longevity,9000;Potion of Speed,400;Potion of Superior Healing,450;Potion of Supreme Healing,1350;Potion of Vitality,960";
							break;
					case 'legendary':
							potionList = "Oil of Sharpness,3200;Potion of Flying,500;Potion of Invisibility,180;Potion of Longevity,9000;Potion of Speed,400;Potion of Superior Healing,450;Potion of Supreme Healing,1350;Potion of Vitality,960";
							break;
			}
			
			var itemsList = potionList.split(";");
			var len = itemsList.length;
			
			var number = randomInteger(len) - 1;
			var item = itemsList[number];
			
			return item;
	},
	
	getWeapon = function(rarity) {
			var weaponList =  "Club,0.1;Dagger,2;Greatclub,0.2;Handaxe,5;Javelin,0.5;Light Hammer,2;Mace,5;Quarterstaff,0.2;Sickle,1;Spear,1;Crossbow (light),25;Dart,0.05;Shortbow,25;Sling,0.1;Battleaxe,10;Flail,10;Glaive,20;Greataxe,30;Greatsword,50;Halberd,20;Lance,10;Longsword,15;Maul,10;Morningstar,15;Pike,5;Rapier,25;Scimitar,25;Shortsword,10;Trident,5;War Pick,5;Warhammer,15;Whip,2;Blowgun,10;Crossbow (hand),75;Crossbow (heavy),50;Longbow,50;Net,1";
			var itemsList = weaponList.split(";");
			var len = itemsList.length;
			var number = randomInteger(len) - 1;
			var item = itemsList[number];
			
			var selected = item.split(',');
			var weapon;
			var price;
			
			switch(rarity) {
					case 'common':
							weapon = selected[0];
							price = selected[1];
							break;
					case 'uncommon':
							weapon = '+1 ' + selected[0];
							price = 1000 + Math.trunc(selected[1]);
							break;
					case 'rare':
							weapon = '+2 ' + selected[0];
							price = 4000 + Math.trunc(selected[1]);
							break;
					case 'very rare':
							weapon = '+3 ' + selected[0];
							price = 16000 + Math.trunc(selected[1]);
							break;
					case 'legendary':
							weapon = '+3 ' + selected[0];
							price = 16000 + Math.trunc(selected[1]);
							break;
			}
			
			item = weapon + ',' + price;
			return item;
	},
	
	getArmour = function(rarity) {
			var armourList =  "Padded Armour,5;Leather Armour,10;Studded leather Armour,45;Hide Armour,10;Chain shirt Armour,50;Scale mail Armour,50;Breastplate Armour,400;Half plate Armour,750;Ring mail Armour,30;Chain mail Armour,75;Splint Armour,200;Plate Armour,1500";
			var itemsList = armourList.split(";");
			var len = itemsList.length;
			var number = randomInteger(len) - 1;
			var item = itemsList[number];
			
			var selected = item.split(',');
			var armour;
			var price;
			
			switch(rarity) {
					case 'common':
							armour = selected[0];
							price = selected[1];
							break;
					case 'uncommon':
							armour = '+1 ' + selected[0];
							price = 1500 + Math.trunc(selected[1]);
							break;
					case 'rare':
							armour = '+2 ' + selected[0];
							price = 6000 + Math.trunc(selected[1]);
							break;
					case 'very rare':
							armour = '+3 ' + selected[0];
							price = 24000 + Math.trunc(selected[1]);
							break;
					case 'legendary':
							armour = '+3 ' + selected[0];
							price = 24000 + Math.trunc(selected[1]);
							break;
			}
			
			item = armour + ',' + price;
			return item;
	},
	
	getItem = function(rarity) {
			var list;
			
			switch(rarity) {
					case 'common':
							list = "Armor of Gleaming,50;Bead of Nourishment,50;Bead of Refreshment,50;Boots of False Tracks,50;Candle of the Deep,50;Cast-off Armour,50;Charlatan\'s Die,50;Cloak of Billowing,50;Cloak of Many Fashions,50;Clockwork Amulet,50;Clothes of Mending,50;Dark Shard Amulet,50;Dread Helm,50;Ear Horn of Hearing,50;Enduring Spellbook,50;Ersatz Eye,50;Hat of Vermin,50;Hat of Wizardry,50;Heward\'s Handy Spice,50;Horn of Silent Alarm,50;Instrument of Illusions,50;Instrument of Scribing,50;Lock of Trickery,50;Moon-touched Sword,50;Mystery Key,50;Orb of Direction,50;Orb of Time,50;Perfume of Bewiching,50;Pipe of Smoke Monsters,50;Pole of Angling,50;Pole of Collapsing,50;Pot of Awakening,50;Rope of Mending,50;Ruby of the Wary Mage,50;Staff of Adornment,50;Staff of Birdcalls,50;Staff of Flowers,50;Talking Doll,50;Tankard of Sobriety,50;Unbreakable Arrow,50;Veteran\'s Cane,50;Walloping Ammunition,50;Wand of Conduction,50;Wand of Pyrotechnics,50;Wand of Scowls,50;Wand of Smiles,50";
							break;
					case 'uncommon':
							list = "Alchemy Jug,6000;Amulet of Proof Against Detection and Location,20000;Bag of Holding,4000;Boots of Elvenkind,2500;Boots of Striding and Springing,5000;Boots of the Winterlands,10000;Bracers of Archery,1500;Brooch of Shielding,7500;Broom of Flying,8000;Cap of Water Breathing,1000;Circlet of Blasting,1500;Cloak of Elvenkind,5000;Cloak of Protection,3500;Cloak of the Manta Ray,6000;Decanter of Endless Water,135000;Deck of Illusions,6120;Driftglobe,750;Dust of Disappearance,300;Dust of Dryness (1 pellet),120;Dust of Sneezing and Choking,480;Elemental Gem,960;Eversmoking Bottle,1000;Eyes of Charming,3000;Eyes of Minute Seeing,2500;Eyes of the Eagle,2500;Gauntlets of Ogre Power,8000;Gem of Brightness,5000;Gloves of Missile Snaring,3000;Gloves of Swimming and Climbing,2000;Gloves of Thievery,5000;Goggles of Night,1500;Hat of Disguise,5000;Headband of Intellect,8000;Helm of Comprehend Languages,500;Helm of Telepathy,12000;Immovable Rod,5000;Instrument of the Bards - Doss Lute,28500;Instrument of the Bards - Fochulan Bandlore,26500;Instrument of the Bards - Mac-Fuirmidh Cittern,27000;Keoghtom\'s Ointment (Per dose),120;Lantern of Revealing,5000;Luckstone,4200;Medallion of Thoughts,3000;Necklace of Adaption,1500;Pearl of Power,6000;Periapt of Health,5000;Periapt of Wound Closure,5000;Pipes of Haunting,6000;Pipes of the Sewers,2000;Quiver of Ehlonna,1000;Ring of Jumping,2500;Ring of Mind Shielding,16000;Ring of Swimming,3000;Ring of Warmth,1000;Ring of Water Walking,1500;Robe of Useful Items,Items * 5;Rope of Climbing,2000;Saddle of the Cavalier,2000;Sending Stones,2000;Silver Raven,5000;Slippers of Spider Climbing,5000;Trident of Fish Command,800;Wind Fan,1500;Winged Boots,8000";
							break;
					case 'rare':
							list = "Amulet of Health,8000;Bead of Force,960;Belt of Dwarvenkind,6000;Boots of Levitation,4000;Boots of Speed,4000;Bowl of Commanding Water Elementals,8000;Bracers of Defense,6000;Brass Horn of Valhalla,8400;Brazier of Commanding Fire Elementals,8000;Bronze Griffon,8000;Cape of the Mountebank,8000;Censer of Controlling Air Elementals,8000;Chime of Opening,1500;Cloak of Displacement,60000;Cloak of the Bat,6000;Cube of Force,16000;Daern\'s Instant Fortress,75000;Dimensional Shackles,3000;Ebony Fly,6000;Folding Boat,10000;Gem of Seeing,32000;Goldean Lion (ea),600;Helm of Teleportation,64000;Heward\'s Handy Haversack,2000;Horn of Blasting,450;Horseshoes of Speed,5000;Instrument of the Bards - Canaith Mandolin,30000;Instrument of the Bards - Cli Lyre,35000;Ioun Stone Awareness,12000;Ioun Stone Protection,1200;Ioun Stone Reserve,6000;Ioun Stone Sustenance,1000;Iron Bands of Bilarro,4000;Ivory Goat (Terror),20000;Ivory Goat (Travail),400;Ivory Goat (Traveling),1000;Mantle of Spell Resistance,30000;Marble Elephant,6000;Necklace of Fireballs (Five beads),3840;Necklace of Fireballs (Four beads),1600;Necklace of Fireballs (One bead),300;Necklace of Fireballs (Six beads),7680;Necklace of Fireballs (Three beads),960;Necklace of Fireballs (Two beads),480;Onyx Dog,3000;Periapt of Proof Against Poison,5000;Portable Hole,8000;Prayer Bead - Bless,2000;Prayer Bead - Curing,4000;Prayer Bead - Favor,32000;Prayer Bead - Smiting,1500;Prayer Bead - Summons,128000;Prayer Bead - Wind Walking,96000;Quaal\'s Feather Token Anchor,50;Quaal\'s Feather Token Bird,3000;Quaal\'s Feather Token Fan,250;Quaal\'s Feather Token Swan Boat,3000;Quaal\'s Feather Token Whip,250;Ring of Animal Influence,4000;Ring of Evasion,5000;Ring of Feather Falling,2000;Ring of Free Action,20000;Ring of Protection,3500;Ring of Resistance,6000;Ring of Spell Storing,24000;Ring of the Ram,5000;Ring of X-Ray Vision,6000;Robe of Eyes,30000;Rope of Entanglement,4000;Serpentine Owl,8000;Silver Horn of Valhalla,5600;Stone of Controlling Earth Elementals,8000;Wings of Flying,5000";
							break;
					case 'very rare':
							list = "Amulet of the Planes,160000;Bronze Horn of Valhalla,11200;Carpet of Flying,12000;Cloak of Arachnida,5000;Crystal Ball,50000;Horseshoes of the Zephyr,1500;Instrument of the Bards - Anstruth Harp,109000;Ioun Stone Absorption,2400;Ioun Stone Agility,3000;Ioun Stone Fortitude,3000;Ioun Stone Insight,3000;Ioun Stone Intellect,3000;Ioun Stone Leadership,3000;Ioun Stone Strength,3000;Mirror of Life Trapping,18000;Nolzur\'s Marvelous Pigments,200;Obsidian Steed,128000;Ring of Regeneration,12000;Ring of Shooting Stars,14000;Ring of Telekinesis,80000;Robe of Scintillating Colors,6000;Robe of Stars,60000";
							break;
					case 'legendary':
							list = "Apparatus of Kwalish,10000;Cloak of Invisibility,80000;Cubic Gate,40000;Efreeti Chain,20000;Instrument of the Bards - Ollamh Harp,125000;Ioun Stone Greater Absorption,31000;Ioun Stone Mastery,15000;Ioun Stone Regeneration,4000;Iron Horn of Valhalla,14000;Ring of Air Elemental Command,35000;Ring of Earth Elemental Command,31000;Ring of Fire Elemental Command,17000;Ring of Invisibility,10000;Ring of Spell Turning,30000;Ring of Water Elemental Command,25000;Robe of the Archmagi,34000;Scarab of Protection,36000;Sovereign Glue,400;Sphere of Annihilation,15000;Talisman of Pure Good,71680;Talisman of the Sphere,20000;Talisman of Ultimate Evil,61440;Universal Solvent,300";
							break;
			}
			
			
			
			var itemsList = list.split(";");
			var len = itemsList.length;
			
			var number = randomInteger(len) - 1;
			var item = itemsList[number];
			
			sendChat("test","Item = " + item);
			
			return item;
	},
	
	checkInstall = function() {
			if(typeof state.store == "undefined"){
					setDefaults();
			}
			
			if ( state.store.now.version != version ){
					checkDefaults();
			}
	},
	
	registerEventHandlers = function() {
			on('chat:message', handleInput);
};


return {
		CheckInstall: checkInstall,
	RegisterEventHandlers: registerEventHandlers
};

}());


on("ready",function(){
'use strict';
MagicStore.CheckInstall();
MagicStore.RegisterEventHandlers();
});
