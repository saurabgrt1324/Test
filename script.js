// var scoreOfJohn=80;
// var scoreOfNick=44;
// var pass=51;
// if(scoreOfJohn>=pass && scoreOfNick>=pass){
//     console.log("Both students are passed");
// }
// else if(scoreOfJohn>=pass || scoreOfNick>=pass){
//     console.log("One of the students are passed");
//     if(scoreOfJohn>scoreOfNick){
//         console.log("and it is John with "+scoreOfJohn+" points");
//     }
//     else{
//         console.log("and it is John with "+scoreOfNick+" points");
//     }
// }
// else{
//     console.log("Both of the student are failed");
// }
function passExam(name,score){
    var passUni=71;
    var passColl=51;
    if(score>=passUni){
        console.log(name+' has enrolled in College with '+score+" points");
    }
    else if(score>=passColl){
        console.log(name+' has enrolled in College with '+score+" points");
    }
    else{
        console.log(name+" has failed");
    }
}
function calcSquare(quizScore,assayScore){
    var score=quizScore+assayScore;
    return score;
}
passExam("John",calcSquare(40,30));