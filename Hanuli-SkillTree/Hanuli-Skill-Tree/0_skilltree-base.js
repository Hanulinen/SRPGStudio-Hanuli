(function() {

var alias03 = RestCommand.configureCommands;
RestCommand.configureCommands = function(groupArray) {
	alias03.call(this, groupArray);

	var commandIndex = baseCommandIndex
	groupArray.insertObject(SetupCommand.SkillTreeList, commandIndex);
}

})();

SetupCommand.SkillTreeList = defineObject(BaseListCommand, 
{
	_SkillTreeListScreen: null,

	openCommand: function() {
		var screenParam = this._createScreenParam();
		this._SkillTreeListScreen = createObject(SkillTreeListScreen);
		SceneManager.addScreen(this._SkillTreeListScreen, screenParam);
	},
	
	moveCommand: function() {
		if (SceneManager.isScreenClosed(this._SkillTreeListScreen)) {
			return MoveResult.END;
		}
		
		return MoveResult.CONTINUE;
	},

	_createScreenParam: function() {
		return null;
	},

	getCommandName: function() {
		return skillTreeName; 
	}
});

var SkillTreeListScreen = defineObject(BaseScreen,
{
	_CharacterSelectWindow: null,
	_SkillTreeWindow: null,

	setScreenData: function(screenParam) {
		this._prepareScreenMemberData(screenParam);
		this._completeScreenMemberData(screenParam);
	},

	_prepareScreenMemberData: function(screenParam) {
		this._CharacterSelectWindow = createWindowObject(CharacterSelectWindow, this);
		this._SkillTreeWindow = createWindowObject(SkillTreeWindow, this);
	},
	
	_completeScreenMemberData: function(screenParam) {
		this._CharacterSelectWindow.setselectWindowData();
		
		var groupArray = MakeSkillTreeArray();

		var commandList = StructureBuilder.buildDataList();
		commandList.setDataArray(groupArray);
		this._CharacterSelectWindow.setselectPage(commandList);

		var skillTree = this._CharacterSelectWindow.getCurrentSkillTree();
		this._SkillTreeWindow.setSkillTree(skillTree);
	},

	moveScreenCycle: function() {
		var result = this._CharacterSelectWindow.moveWindow();

		if (this._CharacterSelectWindow.isIndexChanged()) {
			var skillTree = this._CharacterSelectWindow.getCurrentSkillTree();
			this._SkillTreeWindow.setSkillTree(skillTree);
		}

		this._SkillTreeWindow.moveWindow();

		return result;
	},

	drawScreenCycle: function() {
		var selectX = 40;
		var selectY = 80;
		this._CharacterSelectWindow.drawWindow(selectX, selectY);

		var infoX = selectX + this._CharacterSelectWindow.getWindowWidth();
		var infoY = selectY;
		this._SkillTreeWindow.drawWindow(infoX, infoY);
	},

	getScreenInteropData: function() {
		return root.queryScreen('UnitMenu');
	},

	drawScreenBottomText: function(textui) {
	},

	getScreenTitleName: function() {
		return skillTreeName;
	}
});

var CharacterSelectWindow = defineObject(BaseWindow,
{
	_scrollbar: null,

	setselectWindowData: function () {
		var count = skillTreeCount;

		this._scrollbar = createScrollbarObject(SkillTreeScrollbar, this);
		this._scrollbar.setScrollFormation(1, count);
		this._scrollbar.setActive(true);
	},

	setselectPage: function (commandList) {
		this._scrollbar.setDataList(commandList);
	},

	moveWindowContent: function() {
		this._scrollbar.enableSelectCursor(true);
		var input = this._scrollbar.moveInput();

		if (input === ScrollbarInput.CANCEL) {
			return MoveResult.END;
		}

		return MoveResult.CONTINUE;
	},

	drawWindowContent: function (x, y) {
		this._scrollbar.drawScrollbar(x, y);
	},

	isIndexChanged: function() {
		return this._scrollbar.checkAndUpdateIndex();
	},

	getCurrentSkillTree: function() {
		return this._scrollbar.getObject();
	},

	getWindowWidth: function () {
		return this._scrollbar.getScrollbarWidth() + (this.getWindowXPadding() * 2);
	},

	getWindowHeight: function () {
		return this._scrollbar.getScrollbarHeight() + (this.getWindowYPadding() * 2);
	}
});

var SkillTreeScrollbar = defineObject(BaseScrollbar,
{
	drawScrollContent: function (x, y, object, isSelect, index) {
		var textui = this.getParentTextUI();
		var font = textui.getFont();
		TextRenderer.drawKeywordText(x, y, object.getText(), -1, ColorValue.DEFAULT, font);
	},

	getObjectWidth: function () {
		return 150;
	},

	getObjectHeight: function () {
		return 30;
	}
});


var SkillTreeWindow = defineObject(BaseWindow,
{
	_skillTree: null,

	setSkillTree: function (skillTree) {
		this._skillTree = skillTree;
	},

	drawWindowContent: function (x, y) {
		this._skillTree.drawSkillTree(x, y);
	},

	getWindowWidth: function () {
		return root.getGameAreaWidth() - 260;
	},

	getWindowHeight: function () {
		return root.getGameAreaHeight() - 120;
	}
});


var BaseSkillTree = defineObject(BaseObject,
{
	getText: function() {
		return '';
	},

	drawSkillTree: function(x, y) {
	},

	getSkillTreeTextUI: function() {
		return root.queryTextUI('default_window');
	}
});

var SkillTree = {};