///// Josh's D&D Calculator /////

//Character Objects 
const pyran = {
    name: "Pyran Smith",
    level: 4,
    race: "Fire Genasi",
    class: "Artificer",
    subclass: "Artillerist",
    proficiencies: ["con", "int", "insight", "investigation", "persuasion", "sleightofhand"],
    description: "A fantasy character with goggles holding a hammer and wrench",
    image: "Pyran.png",
    strScore: 13,  //Strength Score
    dexScore: 16,  //Dexterity Score
    conScore: 19,  //Constitution Score
    intScore: 20,  //Intelligence Score
    wisScore: 7,   //Wisdom Score
    chaScore: 13   //Charisma Score
}

const alton = {
    name: "Alton Emberhearth",
    level: 7,
    race: "Halfling",
    class: "Rogue",
    subclass: "Inquisitive",
    proficiencies: ["dex", "int", "acrobatics", "insight", "investigation","perception", "sleightofhand","stealth"],
    expertise:["investigation","sleightofhand","stealth"],
    description: "A short fantasy character with red hair and full sideburns who is smiling and holding a dagger. He has a crossbow on his back.",
    image: "Alton.png",
    strScore: 13,  //Strength Score
    dexScore: 20,  //Dexterity Score
    conScore: 14,  //Constitution Score
    intScore: 16,  //Intelligence Score
    wisScore: 16,  //Wisdom Score
    chaScore: 16   //Charisma Score
}

const bouncer = {
    name: "Bouncer",
    level: 3,
    race: "Unknown",
    class: "Paladin",
    subclass: "Oath of Glory",
    proficiencies: ["wis", "cha", "athletics", "insight", "intimidation","investigation","persuasion"],
    description: "A mysterious imposing fantasy character in armour with a sword and shield on their back. Thier face is not visible hidden behind a helmet.",
    image: "Bouncer.png",
    strScore: 16,  //Strength Score
    dexScore: 13,  //Dexterity Score
    conScore: 18,  //Constitution Score
    intScore: 15,  //Intelligence Score
    wisScore: 12,  //Wisdom Score
    chaScore: 14   //Charisma Score
}


//Selecting Character
var character = alton;

//Variables
var charLvl = character.level; //Character Level
var charProfs = character.proficiencies;
var profBonus = Math.ceil (1 + (charLvl/4)) ; //Calculates a character's proficiency bonus based on their level
var dTwenty; //Will hold the value of the die


//Ability Scores
var strScore = character.strScore;  //Strength Score
var dexScore = character.dexScore;  //Dexterity Score
var conScore = character.conScore;  //Constitution Score
var intScore = character.intScore;  //Intelligence Score
var wisScore = character.wisScore;   //Wisdom Score
var chaScore = character.chaScore;  //Charisma Score


///////////Main Functions//////////

function isModProf(inputStat) {
    //Reset Prof Bonus
    var profPlus = profBonus;

    //Adding Expertise bonus if applicable
    if(character.class === "Rogue" || character.class === "Bard") {
        charExpertise = character.expertise;
        for(let i = 0; i < charExpertise.length; i++) {
            if(inputStat === charExpertise[i]){
                profPlus = profPlus*2;
            } 
        }
    }

     //Checks Proficency with Strength-based Skills
     if (inputStat === "str" || inputStat === "athletics"){
        var mod = strMod;
        
        for(let i = 0; i < charProfs.length; i++) {
            if(inputStat === charProfs[i]){
                mod = mod + profPlus;
            } 
        }

        return mod;
    }
    //Checks Proficency with Dexterity-based Skills
    else if (inputStat === "dex" || inputStat === "acrobatics" || inputStat === "sleightofhand" || inputStat === "stealth" || inputStat === "initiative"){
        var mod = dexMod;

        for(let i = 0; i < charProfs.length; i++) {
            if(inputStat === charProfs[i]){
                mod = mod + profPlus;
            } 
        }

        //Return Result
        return mod;
    }

    //Checks Proficency with Constitution-based Skills
    else if (inputStat === "con") {
        var mod = conMod;
        for(let i = 0; i < charProfs.length; i++) {
            if(inputStat === charProfs[i]){
                mod = mod + profPlus;
            } 
        }
        return mod;
    }

    //Checks Proficency with Intelligence-based Skills
    else if (inputStat === "int" || inputStat === "arcana" || inputStat === "history" || inputStat === "investigation" || inputStat === "nature"  || inputStat === "religion"){
        var mod = intMod;
        for(let i = 0; i < charProfs.length; i++) {
            if(inputStat === charProfs[i]){
                mod = mod + profPlus;
            } 
        }
        return mod;
    }

    //Checks Proficency with Wisdom-based Skills
    else if (inputStat === "wis" || inputStat === "animalhandling" || inputStat === "insight" || inputStat === "medicine" || inputStat === "perception"  || inputStat === "survival"){

        var mod = wisMod;
        for(let i = 0; i < charProfs.length; i++) {
            if(inputStat === charProfs[i]){
                mod = mod + profPlus;
            } 
        }
        return mod;

    }

    //Add Charisma Modifier
    else if (inputStat === "cha" || inputStat === "deception" || inputStat === "intimidation" || inputStat === "performance" || inputStat === "persuasion"){

        var mod = chaMod;
        for(let i = 0; i < charProfs.length; i++) {
            if(inputStat === charProfs[i]){
                mod = mod + profPlus;
            } 
        }
        return mod;

    }
}


//Function that calculates the modifier base on ability score value
function getModifier(aScore) {
    
    if(aScore <= 30 && aScore >=1){

        return Math.floor((aScore - 10)/2);

    }

    else{

        return null;

    }
        
}

//Simple function that concatenates a "+" sign beside a positive number
function plusCheck(stat) {

    if (stat > 0) {
        return "+" + stat;
    }
    else {
        return stat;
    }

}


//Function that rolls a virtual twenty sided die
function rollD20(){

    return Math.floor(Math.random()* 20 + 1);

}


//Function outputs the name of a proficency
function proficencyOutput(prof){
    //Saving Throws
    if (prof === "str"){
        return "Strength";
    }
    else if (prof === "dex"){
        return "Dexterity";
    }
    else if (prof === "con"){
        return "Constitution";
    }
    else if (prof === "int"){
        return "Intelligence";
    }
    else if (prof === "wis"){
        return "Wisdom";
    }
    else if (prof === "cha"){
        return "Charisma";
    }
    //Skills
    else if (prof === "acrobatics"){
        return "Acrobatics";
    }
    else if (prof === "animalhandling"){
        return "Animal Handling";
    }
    else if (prof === "arcana"){
        return "Arcana";
    }
    else if (prof === "athletics"){
        return "Athletics";
    }
    else if (prof === "deception"){
        return "Deception";
    }
    else if (prof === "history"){
        return "History";
    }
    else if (prof === "insight"){
        return "Insight";
    }
    else if (prof === "intimidation"){
        return "Intimidation";
    }
    else if (prof === "investigation"){
        return "Investigation";
    }
    else if (prof === "medicine"){
        return "Medicine";
    }
    else if (prof === "nature"){
        return "Nature";
    }
    else if (prof === "perception"){
        return "Perception";
    }
    else if (prof === "performance"){
        return "Performance";
    }
    else if (prof === "persuasion"){
        return "Persuasion";
    }
    else if (prof === "religion"){
        return "Religion";
    }
    else if (prof === "sleightofhand"){
        return "Sleight of Hand";
    }
    else if (prof === "stealth"){
        return "Stealth";
    }
    else if (prof === "survival"){
        return "Survival";
    }
} 


//Function that adds the appropriate modifier to the die roll  
function addModifier(dieResult, modChoice) {
    
    //Add Strength Modifier
    if (modChoice === "str" || modChoice === "athletics"){
        console.log(dieResult);
        console.log(isModProf("str"));
        return dieResult + isModProf(modChoice); 
    }

    //Add Dexterity Modifier
    else if (modChoice === "dex" || modChoice === "acrobatics" || modChoice === "sleightofhand" || modChoice === "stealth" || modChoice === "initiative"){
        console.log(dieResult);
        console.log(isModProf("dex"));
        return dieResult + isModProf(modChoice); 

    }

    //Add Constitution Modifier
    else if (modChoice === "con") {
        console.log(dieResult);
        console.log(isModProf("con"));
        return dieResult + isModProf(modChoice); 

    }

    //Add Intelligence Modifier
    else if (modChoice === "int" || modChoice === "arcana" || modChoice === "history" || modChoice === "investigation" || modChoice === "nature"  || modChoice === "religion"){
        console.log(dieResult);
        console.log(isModProf("int"));
        return dieResult + isModProf(modChoice); 
    }

    //Add Wisdom Modifier
    else if (modChoice === "wis" || modChoice === "animalhandling" || modChoice === "insight" || modChoice === "medicine" || modChoice === "perception"  || modChoice === "survival"){
        return dieResult + isModProf(modChoice); 
    }

    //Add Charisma Modifier
    else if (modChoice === "cha" || modChoice === "deception" || modChoice === "intimidation" || modChoice === "performance" || modChoice === "persuasion"){
        return dieResult + isModProf(modChoice); 
    }

}


//Function that adds a line of commentary based on the final result
function resultMessage (result) {

    //1 and 20 are special cases that trump any modifiers and are checked first
    if (result === 1) {

        return "Disaster awaits!!!"; 

    }

    else if (result === 20) {

        return "We have just witnessed a miracle!!!"

    }

    //If an invalid input, expresses disappointment
    else if(Number.isNaN(result) || result < 1 || result > 20){

        return "The gods are disappointed in you.";
        
    }

    //Uses ranges to check the other possible results
    else {

        if (result <= 9) {

            return "Well this will be hard to watch.";

        }
    

        else if (result >= 10 && result <= 14) {

            return "You might pull this off...but probably not.";

        }

        
        else if (result >= 15) {

            return "The odds seem to favour you.";

        }

    }

}


//Function that outputs the final result and messages based on the user's form selection(s)
function finalOutput(rollResult, rollSelection) {

    //Outputs appropriate final result, accounting for the special cases of a natural 1 or 20. 
    if (rollResult === 1) {

       return "CRITICAL FAILURE";

    }

    else if (rollResult === 20) {

        return "CRITICAL SUCCESS";

    }

    else if(Number.isNaN(rollResult) || rollResult < 1 || rollResult > 20){

        return "INVALID ROLL";
        
    }
    
    else {

        return addModifier(rollResult, rollSelection);

    } 

}


//Save each ability score's modifier in a variable
var strMod = getModifier (strScore);
var dexMod = getModifier (dexScore);
var conMod = getModifier (conScore);
var intMod = getModifier (intScore);
var wisMod = getModifier (wisScore);
var chaMod = getModifier (chaScore);


window.onload = function () {

    //Establishing access to HTML elements

    //Character Details
    var nameDisplay = document.getElementById("charName");
    var raceDisplay = document.getElementById("charRace");
    var classDisplay = document.getElementById("charClass");
    var subclassDisplay = document.getElementById("charSubclass");
    var lvlDisplay = document.getElementById("levelNumber");

    //Character Image
    var charPortrait = document.getElementById("portrait");

    //Character Proficiencies
    var profList = document.getElementById("proficiencyList");

    //Character Stats
    var strDisplay = document.getElementById("strScore");
    var dexDisplay = document.getElementById("dexScore");
    var conDisplay = document.getElementById("conScore");
    var intDisplay = document.getElementById("intScore");
    var wisDisplay = document.getElementById("wisScore");
    var chaDisplay = document.getElementById("chaScore");

    var strModDisplay = document.getElementById("strMod");
    var dexModDisplay = document.getElementById("dexMod");
    var conModDisplay = document.getElementById("conMod");
    var intModDisplay = document.getElementById("intMod");
    var wisModDisplay = document.getElementById("wisMod");
    var chaModDisplay = document.getElementById("chaMod");

    //Character Bonus
    var pbDisplay = document.getElementById("profBonus");
    var ibDisplay = document.getElementById("initBonus");

    //App Buttons
    var MainBtn = document.getElementById("MainBtn");
    var SwapBtn = document.getElementById("SwapBtn");
    var CharBtn = document.getElementById("CharBtn");

    //Final Output
    var diePic = document.getElementById("dicePicture");
    var outcomeHeading = document.getElementById("outcomeHeading");
    var finalResult = document.getElementById("finalResult");

    var output = document.getElementById("resultMessage");

    var characterForm = document.forms.characterForm;
    var rollForm = document.forms.rollForm;


    var realDice = false; //This variable keeps track of whether the user is rolling a real or digital die

    //Displaying variables in HTML
    //Character Details
    nameDisplay.innerHTML = character.name;
    raceDisplay.innerHTML = character.race;
    classDisplay.innerHTML = character.class;
    subclassDisplay.innerHTML = character.subclass;
    lvlDisplay.innerHTML = charLvl;

    //Character Image
    charPortrait.src = "./images/" + character.image;
    charPortrait.alt = character.description;

    //Character Proficiencies
    var profs = "";
    for(let i = 0; i < charProfs.length; i++) {
        profs = profs + '<li class = "proficiency">'+ proficencyOutput(charProfs[i]) +'</li>';      
    }
    profList.innerHTML = profs;
    
    //Character Stats and Mods 
    strDisplay.innerHTML = strScore;
    dexDisplay.innerHTML = dexScore;
    conDisplay.innerHTML = conScore;
    intDisplay.innerHTML = intScore;
    wisDisplay.innerHTML = wisScore;
    chaDisplay.innerHTML = chaScore;

    strModDisplay.innerHTML = plusCheck(isModProf("str"));
    dexModDisplay.innerHTML = plusCheck(isModProf("dex"));
    conModDisplay.innerHTML = plusCheck(isModProf("con"));
    intModDisplay.innerHTML = plusCheck(isModProf("int"));
    wisModDisplay.innerHTML = plusCheck(isModProf("wis"));
    chaModDisplay.innerHTML = plusCheck(isModProf("cha"));
    
    //Character Bonuses
    pbDisplay.innerHTML = plusCheck(profBonus);
    ibDisplay.innerHTML = plusCheck(dexMod);


    //Button Swap Listener
    //Anonymous function swaps between rolling a digital D20 or allowing the user to input a value after rolling a physical D20 themselves  

    SwapBtn.onclick = function(){

        var numSelect = document.getElementById("numSelect");
        var numLabel = document.getElementById("numLabel");
        var rollDeclaration = document.getElementById("rollDeclaration");

        if (realDice === false) {

            realDice = true;
            numSelect.style.display = "block";
            numLabel.style.display = "block";
            SwapBtn.value = "Roll Digitally";
            rollDeclaration.innerHTML = "Rolling Physically";

        }

        else if (realDice === true) {

            realDice = false;
            numSelect.style.display = "none";
            numLabel.style.display = "none";
            SwapBtn.value = "Roll Physically";
            rollDeclaration.innerHTML = "Rolling Digitally";

        }

    };

    CharBtn.onclick = function(){
        var charSelection = document.getElementById("characterSelect");
    
        if(charSelection.value === "pyran"){
            character = pyran;
        }
        else if(charSelection.value === "alton"){
            character = alton;
        }
        else if(charSelection.value === "bouncer"){
            character = bouncer;
        }

        console.log(character);
    };


    //Outputs final results
    function outputClick() {

        var rollSelect = rollForm.rollSelect;

        //Reveals outcome heading
        outcomeHeading.style.display = "block";

        //Sets die result to inputed number if the user is choosing to roll a physical dice
        if (realDice === true) {

            dTwenty = parseInt(numSelect.value)

        }

        else {

            //Calculates digital roll
            dTwenty = rollD20();

        }

        //Swaps the D20 Image to the appropiate number and a question mark if no value is inputed
        if(Number.isNaN(dTwenty) || dTwenty < 1 || dTwenty > 20){

            diePic.src = "./images/Question.png";
            
        }

        else {

            diePic.src = "./images/" + dTwenty.toString() + ".png";

        }

        //Output final result and commentary
        finalResult.innerHTML = finalOutput(dTwenty, rollSelect.value);    
        output.innerHTML = resultMessage(dTwenty);

    }

    // characterForm.onsubmit = function () {

    //     var charSelection = document.getElementById("characterSelect");


    //     if(charSelection.value === "pyran"){
    //         character = pyran;
    //     }
    //     else if(charSelection.value === "alton"){
    //         character = alton;
    //     }
        
    //     return false;

    // }
    
    //Collects user for data and returns false to ensure it stays on the same page
    rollForm.onsubmit = function () {

        window.scrollTo(0, document.body.scrollHeight);

        //Return false to keep the user on the same page. 
        return false;

    }

    //Button Press Listener
    MainBtn.onclick = outputClick;

}