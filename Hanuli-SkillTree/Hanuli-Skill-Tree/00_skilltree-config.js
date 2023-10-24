//SOUNDS
var validSoundIndex = 1; 				//Sound that is used when an available orb is pressed
var useOriginalValidSound = true; 		//Set this to false if you want to use original sfx for the valid sound
var invalidSoundIndex = 4; 				//Sound that is used when an unavailable orb is pressed
var useOriginalInvalidSound = true; 	//Set this to false if you want to use original sfx for the invalid sound
//TEXT
var skillTitleColor = 0x82E0AA;			//Color to use for the skill title
var skillDescTextColor = 0xFFFFFF;		//Color used for the skill description text
var skillCostTextColor = 0xFFFFFF;		//Color used for writing the skill cost text
var skillUnavailableTextColor= 0x3E3E3E;//Color used to write the skill cost when the skill is unavailable
//MISC VARIABLES
var variableTableIndex = 0;				//Which variable table hosts the skill currency
var variableIndex = 0;					//Which variable hosts the skill currency
var emptyorbImage = "orbempty.png";		//Image of the empty orb
var skillTreeCount = 10; 				//Number of skill tree pages on the screen, change as appropriate
var baseCommandIndex = 0;				//Where in the list of base commands is the skill tree put
var skillTreeName = "Skill Tree";		//Change this if you want to call the menu something other than "skill tree"
//COORDINATES
var skillTreeCenterX = -45;				//Skilltree graphic coordinates
var skillTreeCenterY = -30;				
var textOriginX = 240;					//Text coordinates
var textOriginY = 360;
var charChipX = 395;					//Charchip coordinates
var charChipY = 210;
var currencyOriginX = 230;				//Currency coordinates
var currencyOriginY = 90;
