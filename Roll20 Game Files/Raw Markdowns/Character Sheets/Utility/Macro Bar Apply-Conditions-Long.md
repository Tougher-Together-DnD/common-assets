<!-- Macro Bar: Players -->

<!-- Reference URLS -->
[Character Sheet]: https://github.com/Tougher-Together-DnD/common-assets/blob/main/Roll20%20Game%20Files/JSON%20Files/Character%20Sheets/Utility/Macro%20Bar%20Apply-Conditions-Long.json

[CombatMaster-URL]: https://github.com/Roll20/roll20-api-scripts/tree/master/CombatMaster  
[TokenMod-URL]: https://github.com/Roll20/roll20-api-scripts/tree/master/TokenMod

<!-- External Tools -->
[Github-URL]: https://github.com/Tougher-Together-DnD/common-assets
[Firefox-URL]: https://www.mozilla.org
[VTT Enhancement Suite-URL]: https://addons.mozilla.org/en-US/firefox/addon/roll20-enhancement-suite/

<style>
/* CSS style for NaturalCrit Homebrew render. */
.phb#p1{ text-align:left; }
.phb#p1:after{ display:none; }
.phb p+p { margin-top:.2em; }
.phb blockquote { margin-top:1em; margin-bottom:2em; }
.phb h1, .phb h2, .phb h3, .phb h4, sup, span { color:#006699; }
span { font-weight:bold; }
ul li { line-height:2; }
.phb table tbody tr td { border:1px solid #1C6EA4; }
th:empty { display:none; }
</style>

<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" alt="" height="1">

### Macros*
*Note: Macros to be shared between Players and Dungeon Masters, or are intended as universal token actions, should be loaded into game under "Collections" tab.*

* Apply-Conditions-Long
* Condition-Remove-All
* Condition-Blinded
* Condition-Charmed
* Status-Concentration
* Condition-Deafened
* Condition-Exhaustion
* Condition-Frightened
* Condition-Grappled
* Condition-Incapacitated
* Spell-Inspiration
* Condition-Invisible
* Condition-Paralyzed
* Condition-Petrified
* Condition-Poisoned
* Condition-Prone
* Condition-Restrained
* Condition-Stunned
* Condition-Unconscious

#### Required API Scripts: 
<span>*</span> All Macros require [TokenMod][TokenMod-URL] 

### Side Note
Using TokenMod these macros apply a status marker and display a description in chat that summarizes the mechanics of each condition.

I have since started to use [CombatMaster][CombatMaster-URL] for applying and reporting conditions. It is helpful because I can put count downs on the status markers and have them removed automatically by the API.

However, CombatMaster can be unruly to work with, sometimes stopping the APis due to an error. It may even be bothersome to some players.

Currently these macros apply token markers that mirror the default icons of CombatMaster. These macros and that API can be ran in parallel. Two descriptions will appear in chat though (one from CombatMaster and one from macro text).

I suggest changing the code to apply EasySee icons instead of the default markers. And add more conditions and statuses to reflect the scenarios in your game.

<!-- *********************************************************************** -->
<!-- GM Notes -->
Character sheet JSON hard copy: [Macro Bar: Dungeon-Master][Character Sheet]  

### About
Using a character sheet to manage macros is a [Stupid Roll20 Trick](https://app.roll20.net/forum/post/5899495/stupid-roll20-tricks-and-some-clever-ones/?pageforid=7605679#post-7605679). Tools such as the transmogrifier only allow moving pages, characters, decks, handouts , roll tables, and jukebox playlists. However, macros can not be moved.

It is a tedious error prone process to copy and paste macro code between games. Unless you use some ingenuity or tools like the [Firefox][Firefox-URL] addon, [VTT Enhancement Suite][VTT Enhancment Suite-URL].  

#### Pros:
* Manage catagories of macros separated into different character sheets.
* Easily move macros between games.

#### Cons:
* Character sheets are resource intensive. They have many fields that will go unused with this technique. A lot of characters may negatively impact Roll20 performance.
* Selecting ??? *Show as Token Action* will only show a macro button for a token representing this character sheet. Not for all tokens like macros in the game-wide *Collection* tab. 
* If you want Players to use these macros, they need to be added to "Can Be Edited and Controlled By" permission list. They can inadvertently or purposefully alter the macros.

### Setup
Create a character sheet. Under its *Attributes and Abilities*  tab add macros.

When doing nested macros, be sure to reference other macros in the same character sheet as ~Macro-Name. As opposed to #Macro-Name for game-wide accessible macros stored under the *Collection* tab.

Edit the character sheet by adding the appropriate users in the "In Player's Journal" and "Can Be Edited and Controlled By" fields. This does not have to be done for the GM, as they have permissions to all assets.

### Usage
When you want to copy all your macros to a new game, move or import this character sheet.

#### Free VTT Move
This technique can be used for free, even with games that have different owners, just swap the JSON file.

1. Using [VTT Enhancement Suite][VTT Enhancment Suite-URL] export the character sheet as JSON to your local hard drive.

1. In the new game create a character to hold your macros. Using VTT go to the "Export & Overwrite" tab, there Overwrite the new character with your JSON file. 

#### Character Vault Move
If the owner of the game does not have a Roll20 subscription, their game will have limited vault access.

1. From the Campaign Page, under "Game Settings" they can set *Allow players to import their own Characters?* to "Yes".
   
1. Then a subscribed player can import the Macro Character as they do for any characters.

#### Transmogrifier Move
And finally, the easiest most intuitive move is with the transmogrifier. This only works if you own both games.
