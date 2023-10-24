function MakeSkillTreeArray(){

	var skillTreeArray = [];

	//Add your skill tree here 
	
	skillTreeArray.appendObject(SkillTree.Character1);
	skillTreeArray.appendObject(SkillTree.Character2);
	skillTreeArray.appendObject(SkillTree.Character3);
	
	var finalSkillTreeArray = [];
	
	//Move skill tree objects to the final group array depending on if the character is alive and in the party or not
	for (var i = 0; i < skillTreeArray.length; i++){
		
		var playerList = root.getMetaSession().getTotalPlayerList();
		
		for(k = 0; k < playerList.getCount(); k++){
			
			if(playerList.getData(k).getId() === skillTreeArray[i].unitId
			&& playerList.getData(k).getAliveState() === 0){
				
				finalSkillTreeArray.appendObject(skillTreeArray[i]);
				root.log(playerList.getData(k).getName());
			}
		}
	}

	return finalSkillTreeArray;

}