Hanuli Skill Tree - How to use it

Features:
-Working skill tree that grants the player skills through a base menu.
-Uses the skills in the database and calls them by id
-Skills cost a certain amount of currency (The amount can be set separately to each skill)
-The currency that is used is a variable in the database (by deafault the first variable in the first tab)
-You can set skills to be unavailable until certain other skill(s) is aquired

Prerequisites: 
-Drop the Hanuli-Skill-Tree folder to your plugin folder (make one if you don't have one)
-Drop the skill-tree-material folder to your material folder (make one if you don't have one)

By default this plugin:
-Creates a skill tree menu in your base
-The skill tree has 8 skills which all cost 1 currency each
-The first three characters in your database will have skill trees (provided they have joined the party)
-The plugin considers the first variable in the first variable tab as it's base for the currency the skills are bought with
-Note that the plugin does not add the skill, if the player's maximum skill count would bgo over the skill limit set in database config. If you want more skills than the default 6, you need to increase the database limit

What to do to customize the plugin:
-Check out the config file for editable properties. You need to fudge some coordinates to make the skill tree center correctly on different resolutions. (The default is made for 640x480)
-Each character you want to have a skill tree for, needs a character file in the plugin folder. Copy any of the character files and use it as a blueprint. Inside are instructions on what is needed.
-Inside the character files are also the skill orbs themselves. Modify/Add them to create more skill orbs or modify existing ones.
-Once you have your character files, you need to add the skill tree object in the array within the array-file.

I don't understand! I need help!:
Contact me on discord @ hanuli. I will help you as much as I'm able :)

Licence: 
Everything I have done is public domain, Use my code and art assest as you wish or modify them.
I built this plugin on top of "Help Screen" plugin by iroha_srpg in srpg world.
No need to credit me, though I will always be happy to hear if you used my work :) 
