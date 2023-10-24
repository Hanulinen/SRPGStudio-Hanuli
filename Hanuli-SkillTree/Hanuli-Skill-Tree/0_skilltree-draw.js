var animIndex =1;
var frameCount =0;
var add = true;

function DrawSkillTree(skillTreeImage, skillOrbImage, unitID, characterOrbs, skillTreeX, skillTreeY){

	//empty slot graphic
	var emptyslot = root.getMaterialManager().createImage("skill-tree-material", emptyorbImage);
	//Skill tree graphic
	var skilltree = root.getMaterialManager().createImage("skill-tree-material", skillTreeImage);
	var unit = root.getBaseData().getPlayerList().getDataFromId(unitID);
	
	frameCount++;
	//To animate the unit and the orbs, we switch graphic every 20 frames
	if (frameCount >20){
		if(add === true){			
			animIndex++;
			if(animIndex>3) {
				animIndex=2;
				add = false;
			}
		}
		else{
			animIndex--;
			if(animIndex<1) {
				animIndex=2;
				add = true;
			}
		}
		frameCount=0;
	}
	var unitRenderParam = StructureBuilder.buildUnitRenderParam();
	unitRenderParam.animationIndex = animIndex-1;
	//get the orb graphic
	orb = root.getMaterialManager().createImage("skill-tree-material", skillOrbImage+animIndex+".png");

	//draw the unit in the middle
	UnitRenderer.drawDefaultUnit(unit, charChipX, charChipY + 10, unitRenderParam);
	
	for(var i = 0; i < characterOrbs.length; i++){
		MakeOrbButton(orb, emptyslot, unitID, characterOrbs[i]);
	}
	
	//Draw the skill tree graphic
	skilltree.draw(skillTreeX, skillTreeY);
		
}