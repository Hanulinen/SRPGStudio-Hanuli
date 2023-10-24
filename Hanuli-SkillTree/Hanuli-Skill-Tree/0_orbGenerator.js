//The function that creates the button that governs the orb and the skill it represents
function MakeOrbButton(pic, picEmpty, unitId, obj){
	
	//Check if the unit already has the skill, if yes the orb must be in slot
	var unit = root.getMetaSession().getTotalPlayerList().getDataFromId(unitId);
	var skill = root.getBaseData().getSkillList().getDataFromId(obj.skillId);
	var inSlot=  SkillChecker._isSkillLearned(unit, skill);
	var posX = obj.skillX;
	var posY = obj.skillY;
	
	//get text properties
	var textui = root.queryTextUI('default_window');
	var font = textui.getFont();
	var titleColor = skillTitleColor;
	var color = textui.getColor();
	
	//get mouse position
	var mouseX = root.getMouseX();
	var mouseY = root.getMouseY();
	
	//Get sound effect
	var sound = root.createResourceHandle(useOriginalValidSound,validSoundIndex,0,0,0);
	var soundCancel = root.createResourceHandle(useOriginalInvalidSound,invalidSoundIndex,0,0,0);
	var stateChanged = false;
	
	//Get skill currency count
	var variableTable = root.getMetaSession().getVariableTable(variableTableIndex);
	var currency = variableTable.getVariable(variableIndex);
	
	var skillAvailable = true;
	//Check if the skill is available to buy (player has the prerequisite skills)
	for(var i =0; i < obj.neededSkills.length; i++){
		var neededSkill = root.getBaseData().getSkillList().getDataFromId(obj.neededSkills[i]);
		var isLearned = SkillChecker._isSkillLearned(unit, neededSkill);
		if(!isLearned) {
			skillAvailable = false;
		}
	}
	
	//If mouse is clicked at the button coodrinates, change the state
	if(mouseX>posX && mouseX<posX+36 && mouseY>posY && mouseY<posY+36){
		if(root.isMouseAction(1)){
			//Only switch skill on if there is enough currency or if we want to take the orb off
			if((currency >= obj.cost && skillAvailable)|| inSlot === true){
				MediaControl.soundPlay(sound);
				inSlot = !inSlot;
				stateChanged = true;
			}
			//If not play the cancel sound
			else{
				MediaControl.soundPlay(soundCancel);
			}
			
		}
		
		//Write the skill description
		var title = skill.getName();
		var desc = skill.getDescription();
		TextRenderer.drawKeywordText(textOriginX, textOriginY, title, -1, titleColor, font);
		TextRenderer.drawKeywordText(textOriginX, textOriginY+20, desc, -1, skillDescTextColor, font);
	}
	
	//Draw the orb or empty slot depending on conditions
	if(inSlot)pic.draw(posX, posY);
	else picEmpty.draw(posX, posY);
	
	//If there is no skill in slot draw the cost
	var xOffset = 14;
	if(obj.cost > 9) xOffset = 11;
	if(!inSlot && skillAvailable) TextRenderer.drawKeywordText(posX+xOffset, posY+5, obj.cost, -1, skillCostTextColor, font);
	else if(!inSlot && !skillAvailable) TextRenderer.drawKeywordText(posX+xOffset, posY+5, obj.cost, -1, skillUnavailableTextColor, font);
	
	//Only do this on the frame the state changes and not all the time
	if(stateChanged){	
		//0 = increase, 1 = decrease
		var incType = inSlot ? 0 : 1;
		SkillChecker.arrangeSkill(unit, skill, incType)
		if(incType === 1){
			variableTable.setVariable(variableIndex, currency+obj.cost);
		}
		else{
			variableTable.setVariable(variableIndex, currency-obj.cost);
		}

		stateChanged=false;
	}
	
	//Draw currency count
	GraphicsRenderer.drawImage(currencyOriginX, currencyOriginY, variableTable.getVariableResourceHandle(variableIndex), GraphicsType.ICON);
	TextRenderer.drawKeywordText(currencyOriginX+25, currencyOriginY, "x" + currency, -1, color, font);
	
} 