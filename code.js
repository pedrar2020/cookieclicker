//Ban
var Bannedslider = getNumber("Satislider");
//Cookieclicker
setScreen("terms");
playSound("assets/category_app/app_interface_button_2.mp3", false);
setText("Useridterms", getUserId());
//Variables
//Codes
var Cookieclickercode = 0;
//Music
var Music = 0;
//Penguinos colours
var R = 255;
var G = 190;
var B = 123;
//Score shortener
var ScoreK;
var ScoreM;
//leaderboard
var Leaderboardtype;
var time = getTime();
var timedifferance;
//score
var score = 100;
var Clickamount = 1;
//Shop
var numgrandma = 0;
var numbakery = 0;
var pricegrandma = 100;
var grandmaspent = 0;
var pricebakery = 200;
var bakeryspent = 0;
var totalspent = 0;
var leaderboardtime;
//Random
var SaveCode2;
var SAVECODE;
var x;
//-------------------------------------------------------------------------------------------------------------------------------
//Data
setText("userid", getUserId());
//leaderboard
onEvent("login", "click", function( ) {
  if (getChecked("Agreetoterms") == false) {
    playSpeech("To login you have to allow us to store your information, But you can click skip if you just want to see the leaderboard, go to settings to turn it on.", "female", "English");
  } else {
    var Leaderboard = {};
    timedifferance = getTime();
    leaderboardtime = timedifferance - time;
    leaderboardtime = leaderboardtime / 1000;
    leaderboardtime = Math.round(leaderboardtime);
    Leaderboard.Name = getText("Userinput");
    Leaderboard.score = score;
    Leaderboard.userid = getUserId();
    Leaderboard.time = leaderboardtime;
    Leaderboard.Clickamount = Clickamount;
    createRecord("Leaderboard", Leaderboard, function(record) {
      x = record.id;
    });
    drawChartFromRecords("cookie+time", "pie", "Leaderboard", ["Name", "score"]);
    setScreen("Leaderboard");
  }
});
// 
setText("Leadertext", "text");
// 
onEvent("Applyleaderboard", "click", function( ) {
  setScreen("Loading");
  Leaderboardtype = getProperty("Chartdropdown", "text");
  setTimeout(function() {
    setScreen("Leaderboard");
  }, randomNumber(1000, 5000));
  drawChartFromRecords("cookie+time", Leaderboardtype, "Leaderboard", ["Name", "score"]);
});
//Score
onEvent("cookiebutton", "mouseover", function( ) {
  setPosition("cookie", 28, 118, 270, 270);
});
onEvent("cookiebutton", "mouseout", function( ) {
  setPosition("cookie", 35, 125, 256, 256);
});
onEvent("cookiebutton", "click", function( ) {
  //penguinos
  if (randomNumber(1, 1000000) == 1) {
  playSound("assets/kawasaki.mp3", false);
  setImageURL("image6", "assets/ssstik.io_1711978579709-ezgif.com-optimize.gif");
  setScreen("Pengwinos");
  timedLoop(1, function() {
        R = R - 2;
        G = G - 2;
        B = B - 2;
        setProperty("Pengwinos", "background-color", rgb(R, G, B, 1));
        console.log(R,G,B);
        setTimeout(function() {
          stopTimedLoop();
        }, 5000);
      });
  }
  //cookie
  score = score + Clickamount;
  console.log(score);
  setPosition("cookie", 35, 125, 256, 256);
  if (score < 999) {
    setText("score", score);
    setText("Scoreshop", score);
    playSound("assets/pop.mp3", false);
    setTimeout(function() {
      setPosition("cookie", 28, 118, 270, 270);
    }, 20);
  } else if ((score >= 1000 && score <= 999999)) {
    ScoreK = Math.round(score / 100) / 10 + "K";
    playSound("assets/pop.mp3", false);
    setText("Scoreshop", ScoreK);
    setText("score", ScoreK);
    setTimeout(function() {
      setPosition("cookie", 28, 118, 270, 270);
    }, 20);
  } else if ((score >= 1000000 && score <= 999999999)) {
    ScoreM = Math.round(score / 100000) / 10 + "M";
    playSound("assets/pop.mp3", false);
    setText("score", ScoreM);
    setText("Scoreshop", ScoreM);
    setTimeout(function() {
      setPosition("cookie", 28, 118, 270, 270);
    }, 20);
  } else {
    
  }
});
//Buttons
onEvent("button2", "click", function( ) {
  open("https://studio.code.org/projects/applab/uyQqX1-0H5WpHWJxL7Y1qZMAtmiYC484D5o4IvjeQUk/embed?nosource");
});
onEvent("Backchangelogkey", "click", function( ) {
  setScreen("Main");
});
onEvent("BackCode", "click", function( ) {
  setScreen("Main");
});
onEvent("Feedback", "click", function( ) {
  playSound("assets/category_digital/win.mp3", false);
  open("https://forms.office.com/e/3K9LiGYMSf");
});
onEvent("Backchangelog", "click", function( ) {
  setScreen("Main");
});
onEvent("Updatelogs", "click", function( ) {
  setScreen("Changelogs");
  playSound("assets/paper-collect-1-186598.mp3", false);
});
onEvent("Statsbutton", "click", function( ) {
  setScreen("Stats");
  playSound("assets/category_app/app_interface_button_2.mp3", false);
});
onEvent("Secret", "click", function( ) {
  setScreen("CodePage");
  playSound("assets/category_app/app_interface_button_2.mp3", false);
});
onEvent("BackPengwinos", "click", function( ) {
  setScreen("Main");
  playSound("assets/category_app/app_interface_button_2.mp3", false);
});
onEvent("backlogin", "click", function( ) {
  setScreen("Main");
  playSound("assets/category_app/app_interface_button_2.mp3", false);
});
onEvent("apply", "click", function( ) {
  setScreen("Main");
  playSound("assets/category_app/app_interface_button_2.mp3", false);
});
onEvent("Agreetoterms", "click", function( ) {
  playSound("assets/category_app/app_interface_click.mp3", false);
  setTimeout(function() {
    setScreen("Main");
  }, 1000);
});
onEvent("Termsbutton", "click", function( ) {
  setScreen("terms");
  playSound("assets/category_app/app_interface_button_2.mp3", false);
});
onEvent("apply", "click", function( ) {
  setScreen("Main");
  playSound("assets/category_app/app_interface_button_2.mp3", false);
});
onEvent("skiptoleaderboard", "click", function( ) {
  drawChartFromRecords("cookie+time", "pie", "Leaderboard", ["Name", "score"]);
  setScreen("Leaderboard");
  playSound("assets/category_bell/vibrant_game_correct_answer_1.mp3", false);
});
onEvent("backleaderboard", "click", function( ) {
  setScreen("Main");
  playSound("assets/category_app/app_interface_button_2.mp3", false);
});
onEvent("Shopbutton", "click", function( ) {
  setScreen("Shop");
  playSound("assets/category_app/app_ice_button_click_3.mp3", false);
});
onEvent("Returnbutton", "click", function( ) {
  setScreen("Main");
  playSound("assets/category_app/app_interface_button_2.mp3", false);
});
onEvent("returncredit", "click", function( ) {
  setScreen("Main");
  playSound("assets/category_app/app_interface_button_2.mp3", false);
});
onEvent("Leaderboardbutton", "click", function( ) {
  setScreen("Login");
  playSound("assets/category_app/app_interface_button_2.mp3", false);
});
onEvent("Agreebutton", "click", function( ) {
  playSpeech("THIS IS NOUT A BUTUNN! DUMMY!!! I WILL CHEF YOU UP!!!", "male", "Deutsch");
});
onEvent("Backstats", "click", function( ) {
  setScreen("Main");
  playSound("assets/category_app/app_interface_button_2.mp3", false);
});
onEvent("Otherto", "click", function( ) {
  setScreen("Main2");
  playSound("assets/Swoosh-sound-effect.mp3", false);
});
onEvent("Otherback", "click", function( ) {
  setScreen("Main");
  playSound("assets/Swoosh-sound-effect.mp3", false);
});
onEvent("Changecookiepicture", "click", function( ) {
  setScreen("Customcookiepage");
});
onEvent("Backcustomcookie", "click", function( ) {
  setScreen("Main");
});
onEvent("Changelogkeybutton", "click", function( ) {
  setScreen("Changelogskey");
  playSound("assets/POLU.mp3", false);
});
onEvent("hover", "mouseover", function( ) {
  setScreen("Main");
});
onEvent("Backsave/backup", "click", function( ) {
  setScreen("Main");
});
onEvent("ToSave", "click", function( ) {
  setScreen("Save/backupWARN");
});
//Accessability
onEvent("button13", "click", function( ) {
  playSound("assets/ElevenLabs_2024-06-11T17_16_26_Alice_pre_s30_sb19_t2.mp3", false);
});
onEvent("readout", "click", function( ) {
  playSpeech("What do we use this for? We use the time taken to catch people who are cheating we use your user ID so we can make sure its you deleting your own data.We record the amout of cookies you have made so you can show of how much effort you put into this awesome game. We record the click amount to make sure you are not cheating.  IF YOU ARE CAUGHT CHEATING YOU WILL BE BANNED FROM PLAYING! If, you want your' data deleted, then please email 15149@bitterneparkschool.org.uk. We also require that you insert your userid it is shown at the bottom. cheers.", "male", "english");
});
onEvent("button14", "click", function( ) {
  setScreen("save/backup");
});
onEvent("checkbox2", "click", function( ) {
  if (getChecked("checkbox2") == true) {
    showElement("button14");
  } else {
    hideElement("button14");
  }
});
onEvent("Newsback", "click", function( ) {
  setScreen("Main");
});
onEvent("Newsbutton", "click", function( ) {
  setScreen("News");
});
//shop
//Grandma
onEvent("Buygrannybutton", "click", function( ) {
  if (score >= pricegrandma) {
    numgrandma = numgrandma + 1;
    score = score - pricegrandma;
    pricegrandma = pricegrandma + 10;
    setText("score", score);
    setText("Scoreshop", score);
    playSound("assets/good-6081.mp3", false);
    setText("Grannyprice", pricegrandma);
    setText("grandmanumber", numgrandma);
    grandmaspent = 0;
    Clickamount = Clickamount + 1;
  } else {
    playSound("assets/wrong-buzzer_dudoo.mp3", false);
  }
});
//Bakery
onEvent("Buybakery", "click", function( ) {
  if (score >= pricebakery) {
    numbakery = numbakery + 1;
    score = score - pricebakery;
    pricebakery = pricebakery + 10;
    setText("score", score);
    setText("Scoreshop", score);
    playSound("assets/good-6081.mp3", false);
    setText("label7", pricebakery);
    setText("bakerynumber", numbakery);
    var bakeryspent = bakeryspent + pricebakery;
    Clickamount = Clickamount + 3;
  } else {
    playSound("assets/wrong-buzzer_dudoo.mp3", false);
  }
});
//Codes
onEvent("Submitcode", "click", function( ) {
  if (getProperty("Codeinput", "text") == "Penguinos") {
  playSound("assets/kawasaki.mp3", false);
  setImageURL("image6", "assets/ssstik.io_1711978579709-ezgif.com-optimize.gif");
  setScreen("Pengwinos");
  timedLoop(1, function() {
        R = R - 2;
        G = G - 2;
        B = B - 2;
        setProperty("Pengwinos", "background-color", rgb(R, G, B, 1));
        console.log(R,G,B);
        setTimeout(function() {
          stopTimedLoop();
        }, 5000);
      });
  } else if ((getText("Codeinput") == "NyanKat")) {
    stopSound("Nyan-kat(4)-(1).mp3");
    playSound("Nyan-kat(4)-(1).mp3", false);
    setProperty("NyanKat", "image", "ezgif.com-gif-maker-(1).gif");
    setProperty("MainNyan", "image", "ezgif.com-gif-maker-(1).gif");
    showElement("NyanKat");
  } else if ((getText("Codeinput") == "Music")) {
    if (Music == 0) {
      playSound("assets/category_background/synthesize.mp3", true);
      Music = 1;
    } else {
      stopSound("assets/category_background/synthesize.mp3");
      Music = 0;
    }
  } else if ((getText("Codeinput") == "TEST BAN")) {
    setScreen("Banned");
    timedLoop(1, function() {
       if (Bannedslider != getNumber("Satislider")) {
         setText("button7", Bannedslider);
         playSound("assets/category_app/app_interface_button_2.mp3", false);
         Bannedslider = getNumber("Satislider");
       }
     });
  } else if ((getText("Codeinput") == "COOKIE")) {
    playSound("assets/family-guy-diabeto.mp3", false);
  } else if ((getText("Codeinput") == "notalk")) {
    playSound("assets/ElevenLabs_2024-04-23T09_53_14_Adam_pre_s50_sb75_se0_b_m2.mp3", false);
  } else if ((getText("Codeinput") == "SoundCloud")) {
    playSound("assets/Pedro---s-banger.mp3", false);
  } else if ((getText("Codeinput") == "Cookieclicker")) {
    setScreen("Main");
    if (Cookieclickercode == 0) {
      playSound("assets/category_human/character_jimmy_i_like_cheese_2.mp3", false);
      Cookieclickercode = Cookieclickercode + 1;
      score = Cookieclickercode + 10000;
      setTimeout(function() {
        hideElement("Gained");
      }, 2000);
      setProperty("Gained", "text-color", "green");
      setProperty("Gained", "background-color", rgb(0,200,0));
      setText("Gained", "+10K");
      showElement("Gained");
    } else {
      playSound("assets/category_human/character_jimmy_no_2.mp3", false);
    }
  } else {
    playSound("assets/category_jump/arcade_game_jump_15.mp3", false);
  }
});
//Stats
onEvent("Statsbutton", "click", function( ) {
  setProperty("Stats", "background-color", rgb(255,190,123));
  setText("PPClabel", Clickamount);
});
//Custom cookie
onEvent("Applycustomcookie", "click", function( ) {
  if (getImageURL("/';[p]/';[p]/';[p]/';[p]/';[p]/';[p]") == undefined) {
    playSound("assets/Please-click-on-camera-button..mp3", false);
  } else if ((score <= 100000)) {
    playSound("assets/hah-you-brokie-join-hustlers-university-for-free-money.mp3", false);
    setProperty("Cookiepreview", "image", getImageURL("Customcookie"));
  } else {
    score = score - 100000;
    setProperty("cookie", "image", getImageURL("Customcookie"));
    setProperty("Cookiepreview", "image", getImageURL("Customcookie"));
  }
});
onEvent("Defaultcookie", "click", function( ) {
  setImageURL("Cookiepreview", "assets/kisspng-cookie-clicker-biscuits-chocolate-chip-cookie-vide-5c4c0e5eb4ba26.3079293315484882867403.png");
  setImageURL("cookie", "assets/kisspng-cookie-clicker-biscuits-chocolate-chip-cookie-vide-5c4c0e5eb4ba26.3079293315484882867403.png");
});
//SAVE
onEvent("SaveCode", "click", function( ) {
  playSound("elevator-music-meme-song-(TRAP)-(64).mp3", false);
  setScreen("Loading");
  totalspent = grandmaspent + bakeryspent;
  SaveCode2 = totalspent + score;
  SAVECODE = Math.sqrt(Math.sqrt(Math.sqrt(SaveCode2)));
  console.log(SAVECODE);
  SAVECODE = 1029384756.6574839201 + SAVECODE;
  console.log(SAVECODE);
  SAVECODE = SAVECODE * 123456789;
  console.log(SAVECODE);
  setText("text_area25", SAVECODE);
  setTimeout(function() {
    setScreen("save/backup");
  }, 60000);
});
onEvent("Loadcode", "click", function( ) {
  var loadsave = getNumber("Savein");
  loadsave = loadsave / 123456789;
  loadsave = loadsave - 1029384756.6574839201;
  loadsave = Math.pow(loadsave, 2);
  loadsave = Math.pow(loadsave, 2);
  loadsave = Math.pow(loadsave, 2);
  if (loadsave == "Infinity") {
    playSound("assets/default.mp3", false);
  }
  loadsave = Math.round(loadsave);
  console.log(loadsave);
  loadsave = score;
  setProperty("Savein", "hidden", true);
  playSound("assets/short-crowd-cheer-6713.mp3", false);
  hideElement("Loadcode");
  setScreen("Main");
});
