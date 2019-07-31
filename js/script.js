$(document).ready(function(){
    generateBingoCard();
});

function generateBingoCard() {
    var positions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14,15,16,17,18,19,20,21,22,23,24];

    var goals1 = ["Leave a Pokemon at Daycare", "Play the Slots", "Talk to a Machop", "Town Map"];
    var goals2 = ["View the Space Shuttle Columbia", "Old Amber", "5 HMs", "Get Pokéballs From Oak"];
    var goals3 = ["2 Fishing Rods", "TM42 (Dream Eater)", "TM41 (Softboiled)", "Defeat all 3 trainers in Viridan Forest", "Surf a statue"];
    var goals4 = ["Do not use any TMs", "Pokemon with 3 STAB Moves", "HM05 (Flash)", "Teach TM 49", "Teach a Pokemon 3 TMs"];
    var goals5 = ["Clefable or Wigglytuff", "Victreebel or Vileplume", "Starmie or Cloyster", "Arcanine or Ninetales", "Raichu or Exeggutor"];
    var goals6 = ["Beedrill or Butterfree", "Nidoking or Nidoqueen", "Faint all 3 starters evolutionary line", "Conduct an in-game trade", "Burn, Paralyze, Freeze or Poison Snorlax"];
    var goals7 = ["3 Pokemon with different status ailments", "$0 on hand", "Defeat a Swimmer on land", "Party Pokemon Names spell out \"BINGO!\"", "Finish inside cut bush"];
    var goals8 = ["Ivysaur, Charmeleon, or Wartortle", "Persian or Primeape", "Kingler or Hypno", "Magneton or Electrode"];
    var goals9 = ["Release starter before level 11", "Defeat the only trainer on Route 4", "Defeat 5 trainers in Route 10", "Defeat all 8 trainers on Route 3"];
    var goals10 = ["Pidgeotto or Kadabra", "Arbok or Sandslash", "Fearow or Gyarados", "Raticate or Golbat"];
    var goals11 = ["Ghost-type Pokemon", "Dragon-type Pokemon", "Omanyte, Kabuto or Aerodactyl", "Haunter, Machoke, or Graveler", "Jynx, Electabuzz or Magmar"];
    var goals12 = ["Evolve 4 different Pokémon", "Any Pokemon with 4 non-TM status moves", "Evolve Eevee", "Any Pokemon with a recoil move", "Any Pokemon with a multi-hit move"];
    var goals13 = ["Use the name rater to change a Pokemon's nickname", "Catch a Pokemon in the Seafoam Islands", "Nugget", "Revive a fossil", "Secret Key"];
    var goals14 = ["Tauros or Chansey", "Tangela or Lickitung", "Scyther or Pinsir", "TM20 or TM40", "A Pokemon with a Bug type move"];
    var goals15 = ["Use no repels", "Sell no items", "$50,000", "Use an HP UP, Protein, Iron, Carbos and Calcium", "TM13 (Dragon Rage)"];
    var goals16 = ["Psyduck or Seel", "Venonat or Paras", "Koffing or Grimer", "Cubone or Diglett", "Tentacool or Goldeen"];
    var goals17 = ["Defeat Zapdos", "Collect 4 Gift Pokemon", "20+ Pokemon owned", "Catch at least one Pokemon with every rod", "HM02 (Fly)"];
    var goals18 = ["Articuno, Zapdos or Moltres", "Mew or Mewtwo", "6 Different Poison type Pokemon", "6 Different Water-type Pokemon", "6 Different Normal-type Pokemon"];
    var goals19 = ["Faint Chansey", "Faint Snorlax", "A Pokemon with Quick Attack  ", "TM10 or TM30"];
    var goals20 = ["Defeat 2 Engineers", "Defeat 4 Beauties", "Defeat 2 Rockers", "Pickup and keep an item that contains the word Max", "PP Healing Item"];
    var goals21 = ["90 Pokemon seen", "Catch 5 Different Pokemon in the Safari Zone", "Push a Boulder", "6 Different Pokemon not sharing any types", "Catch a Pokemon in Route 23."];
    var goals22 = ["Evolve a Pokemon at level 30 or higher", "Stop the same Pokémon evolving 4 times", "Defeat Rival in the S.S.Anne", "Faint Lapras"];
    var goals23 = ["Pokemon with 4 No-PP-left moves", "Fill a PC Box", "4 different level 30 Pokemon", "Master Ball"];
    var goals24 = ["Defeat all trainers in each Gym you enter", "Defeat 3 Burglars", "Defeat 3 Scientists", "TM31 (Mimic)"];
    var goals25 = ["Marsh Badge", "Volcano Badge", "Silph Scope", "Use Pokeflute to wake up in battle"];

    var goals = [goals1, goals2, goals3, goals4, goals5, goals6, goals7, goals8, goals9, goals10, goals11, goals12, goals13, goals14, goals15, goals16, goals17, goals18, goals19, goals20, goals21, goals22, goals23, goals24, goals25];

    var attempts = 0;
    do {
        shuffleArray(positions);
        ++attempts;
    } while (!isGoodCard(positions));
    
    console.log("Number of attempts: " + attempts);

    var bingoCard = generateGoals(positions, goals);
    changeGoals(bingoCard);
    setJSON(bingoCard);
}

function setJSON(bingocard){
    array = [];
    for(var i = 0; i < bingocard.length; ++i){
        array.push({"name":bingocard[i]})
    }
    $("#bingosyncjson").html(JSON.stringify(array));
}

function copyJSON(bingocard){
    var copyText = $("#bingosyncjson");
    copyText.select();
    document.execCommand("copy");
    alert("JSON successfully copied to the clipboard.");
}

function changeGoals(bingoCard){
    for(var i = 0; i < bingoCard.length; ++i) {
        $("#slot"+(i+1)).html(bingoCard[i]);
    }
}

function isGoodCard(card) {
    var sums = [0,0,0,0,0,0,0,0,0,0];
    for(var i = 0; i < 5; ++i) sums[0] += card[i];
    for(var i = 5; i < 10; ++i) sums[1] += card[i];
    for(var i = 10; i < 15; ++i) sums[2] += card[i];
    for(var i = 15; i < 20; ++i) sums[3] += card[i];
    for(var i = 20; i < 25; ++i) sums[4] += card[i];
    for(var i = 0; i < 25; i+=5) sums[5] += card[i];
    for(var i = 1; i < 25; i+=5) sums[6] += card[i];
    for(var i = 2; i < 25; i+=5) sums[7] += card[i];
    for(var i = 3; i < 25; i+=5) sums[8] += card[i];
    for(var i = 4; i < 25; i+=5) sums[9] += card[i];

    sums.sort(function (a, b) {  return a - b;  });
    if(sums[0] + 7 >= sums[9]) {
        console.log("Quality: " + (sums[9]-sums[0]));
        return true;
    }
    return false;
}

function checkIncompatibleGoals(goals, goal){
        if((goals.indexOf("$50,000") > -1 && goal === "$0 on hand")
                ||
                (goal === "$50,000" && goals.indexOf("$0 on hand") > -1))
            return true;
        if((goals.indexOf("Burn, Paralyze, Freeze or Poison Snorlax") > -1 && goal === "Faint Snorlax")
                ||
                (goal === "Burn, Paralyze, Freeze or Poison Snorlax" && goals.indexOf("Faint Snorlax")> -1))
            return true;
        if((goals.indexOf("Use the name rater to change a Pokemon's nickname") > -1 && goal === "Party Pokemon Names spell out \"BINGO!\"")
            ||
                (goal === "Use the name rater to change a Pokemon's nickname" && goals.indexOf("Party Pokemon Names spell out \"BINGO!\"") > -1))
            return true;
        return false;
    }

function generateGoals(goalDifficulties, goalList) {
    var goals = [];
    for(var i = 0; i < goalDifficulties.length; ++i) {
        var goal;
        do {
            var poolSize = goalList[goalDifficulties[i]].length;
            goal = goalList[goalDifficulties[i]][Math.floor(Math.random()*poolSize)];
        } while(checkIncompatibleGoals(goals, goal));
        goals.push(goal);
    }

    return goals;
}

function shuffleArray(ar){
    for (var i = ar.length - 1; i > 0; i--){
        var index = Math.floor(Math.random() * (i + 1));
        // Simple swap
        var a = ar[index];
        ar[index] = ar[i];
        ar[i] = a;
    }
}