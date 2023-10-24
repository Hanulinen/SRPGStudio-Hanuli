//Skilltrees need to have unique names. Change the Skilltree.character to suit your needs
SkillTree.Character1 = defineObject(BaseSkillTree,
{
	unitId: 0, //Character id in the database
	
	getText: function() {
		return root.getBaseData().getPlayerList().getDataFromId(this.unitId).getName();
	},

	drawSkillTree: function(x, y) {	

		var skillOrbImage = "orbbernie"; 		//Skillorb file name with no index or filetype (assumed .png)
		var skillTreeImage = "skilltree1.png";	//Image of the skilltree
		var skillTreeX = skillTreeCenterX;					//Skill tree graphic coordinates
		var skillTreeY = skillTreeCenterY;

		///ORB OBJECTS//
		///EACH ORB MUST HAVE:
		///skillId = id of the skill that orb represents
		///skillX and skillY hold the coordinates on screen
		///neededSkills = skills that are needed before you can open this skill. Leave empty if none.
		///cost = how much currency is needed to open this skill
		///If you add more skills, don't forget the colon after the braces (only the last object doesn't need a colon)
	
		var characterOrbs = [

		{ 
			skillId: 4,
			skillX: 390+skillTreeCenterX,
			skillY: 246+skillTreeCenterY,
			neededSkills: [],
			cost: 1
		},
		{
			skillId: 1,
			skillX: 485+skillTreeCenterX,
			skillY: 246+skillTreeCenterY,
			neededSkills: [],
			cost: 1
		},
		{
			skillId: 2,
			skillX: 294+skillTreeCenterX,
			skillY: 246+skillTreeCenterY,
			neededSkills: [],
			cost: 1
		},
		{
			skillId: 3,
			skillX: 581+skillTreeCenterX,
			skillY: 246+skillTreeCenterY,
			neededSkills: [],
			cost: 1
		},
		{
			skillId: 5,
			skillX: 342+skillTreeCenterX,
			skillY: 198+skillTreeCenterY,
			neededSkills: [],
			cost: 1
		},
		{
			skillId: 6,
			skillX: 342+skillTreeCenterX,
			skillY: 294+skillTreeCenterY,
			neededSkills: [],
			cost: 1
		},
		{
			skillId: 7,
			skillX: 533+skillTreeCenterX,
			skillY: 198+skillTreeCenterY,
			neededSkills: [1,2,3],
			cost: 1
		},
		{
			skillId: 8,
			skillX: 533+skillTreeCenterX,
			skillY: 294+skillTreeCenterY,
			neededSkills: [1],
			cost: 1
		}

	];
	
	DrawSkillTree(skillTreeImage, skillOrbImage, this.unitId, characterOrbs, skillTreeX, skillTreeY);
	
	}
});
