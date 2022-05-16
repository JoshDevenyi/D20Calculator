///// Josh's D&D Calculator /////


//Variables
var charLvl = 3; //Character Level
var profBonus = Math.ceil (1 + (charLvl/4)) ; //Calculates a character's proficiency bonus based on their level

var dTwenty; //Will hold the value of the die


//Ability Scores
var strScore = 13;  //Strength Score
var dexScore = 16;  //Dexterity Score
var conScore = 19;  //Constitution Score
var intScore = 18;  //Intelligence Score
var wisScore = 7;   //Wisdom Score
var chaScore = 13;  //Charisma Score


//Function that calculates the modifier base on ability score value
function getModifier(aScore) {

    return Math.floor((aScore - 10)/2);
        
}


//Save each ability score's modifier in a variable
var strMod = getModifier (strScore);
var dexMod = getModifier (dexScore);
var conMod = getModifier (intScore);
var intMod = getModifier (intScore);
var wisMod = getModifier (wisScore);
var chaMod = getModifier (chaScore);


window.onload = function () {

    //Establishing access to HTML elements
    var lvlDisplay = document.getElementById("levelNumber");

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

    var pbDisplay = document.getElementById("profBonus");
    var ibDisplay = document.getElementById("initBonus");

    var MainBtn = document.getElementById("MainBtn");
    var SwapBtn = document.getElementById("SwapBtn");

    var diePic = document.getElementById("dicePicture");
    var outcomeHeading = document.getElementById("outcomeHeading");
    var finalResult = document.getElementById("finalResult");

    var output = document.getElementById("resultMessage");

    var rollForm = document.forms.rollForm;

    var realDice = false; //This variable keeps track of whether the user is rolling a real or digital die

    //Displaying variables in HTML
    lvlDisplay.innerHTML = charLvl;

    strDisplay.innerHTML = strScore;
    dexDisplay.innerHTML = dexScore;
    conDisplay.innerHTML = conScore;
    intDisplay.innerHTML = intScore;
    wisDisplay.innerHTML = wisScore;
    chaDisplay.innerHTML = chaScore;

    strModDisplay.innerHTML = plusCheck(strMod);
    dexModDisplay.innerHTML = plusCheck(dexMod);
    conModDisplay.innerHTML = plusCheck(conMod);
    intModDisplay.innerHTML = plusCheck(intMod);
    wisModDisplay.innerHTML = plusCheck(wisMod);
    chaModDisplay.innerHTML = plusCheck(chaMod);
    
    pbDisplay.innerHTML = plusCheck(profBonus);
    ibDisplay.innerHTML = plusCheck(dexMod);

    
    //Main Functions

    //Simple function that concatenates a "+" sign beside a positive number
    function plusCheck(stat) {

        if (stat > 0) {
            return "+" + stat;
        }
        else {
            return stat;
        }

    }


    //Function that adds the appropriate modifier to the die roll  
    function addModifier(dieResult, modChoice) {
        
        //Before addressing modifier, the function first checks to see if the user selected a skill the character is proficent with
        var pBonus = 0;

        //Adds the character's proficency modifier if a proficency was chosen by the user
        if (modChoice === "con" || modChoice === "int" || modChoice === "insight" || modChoice === "investigation" || modChoice === "persuasion" || modChoice === "sleightofhand") {
            pBonus = profBonus;
        }
        
        //Add Strength Modifier
        if (modChoice === "str" || modChoice === "athletics"){

            return dieResult + strMod + pBonus; 

        }

        //Add Dexterity Modifier
        else if (modChoice === "dex" || modChoice === "acrobatics" || modChoice === "sleightofhand" || modChoice === "stealth" || modChoice === "initiative"){

            return dieResult + dexMod  + pBonus; 

        }

        //Add Constitution Modifier
        else if (modChoice === "con") {

            return dieResult + conMod  + pBonus; 

        }

        //Add Intelligence Modifier
        else if (modChoice === "int" || modChoice === "arcana" || modChoice === "history" || modChoice === "investigation" || modChoice === "nature"  || modChoice === "religion"){

            return dieResult + intMod  + pBonus; 

        }

        //Add Wisdom Modifier
        else if (modChoice === "wis" || modChoice === "animalhandling" || modChoice === "insight" || modChoice === "medicine" || modChoice === "perception"  || modChoice === "survival"){

            return dieResult + wisMod  + pBonus; 

        }

        //Add Charisma Modifier
        else if (modChoice === "cha" || modChoice === "deception" || modChoice === "intimidation" || modChoice === "performance" || modChoice === "persuasion"){

            return dieResult + chaMod  + pBonus; 

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


    //Function that swaps between rolling a digital D20 or allowing the user to input a value after rolling a physical D20 themselves  
    function rollSwap() {

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

        return false;

    }

    //Function that outputs the final result and messages based on the user's form selection(s)
    function rollD20(rollSelection) {

        //Sets die result to inputed number if the user is choosing to roll a physical dice
        if (realDice === true) {

            dTwenty = parseInt(numSelect.value);

        }

        else {

            //Calculates digital roll
            dTwenty = Math.floor(Math.random()* 20 + 1);

        }

        //Swaps the D20 Image to the appropiate number        
        diePic.src = "./images/" + dTwenty.toString() + ".png";

        //Reveals outcome heading
        outcomeHeading.style.display = "block";                        

        //Outputs appropriate final result, accounting for the special cases of a natural 1 or 20. 
        if (dTwenty === 1){

           finalResult.innerHTML = "CRITICAL FAILURE";

        }

        else if (dTwenty === 20) {

            finalResult.innerHTML = "CRITICAL SUCCESS";

        }

        else {

            finalResult.innerHTML = addModifier(dTwenty, rollSelection);

        } 
        
        //Outputs commentary
        output.innerHTML = resultMessage(dTwenty);

    }


    //Button Swap Listener
    SwapBtn.onclick = rollSwap;


    //Form to get users selection from the dropdown menu
    rollForm.onsubmit = function () {

        var rollSelect = rollForm.rollSelect;

        //Button Press Listener
        MainBtn.onclick = rollD20(rollSelect.value);        

        //Return false to keep the user on the same page. 
        return false;

    }

}



