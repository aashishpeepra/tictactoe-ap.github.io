function trial(elem){
    document.getElementById(elem).innerHTML="X";
}
function anim(elem){
    new Effect.Pulsate(elem,{duration:5});
}
var turns=['1','2','3','4','5','6','7','8','9'];        //stores turns moved by both users
var done=0;                                             //Total number of turns done
var res=0;
var player='X';
function checker(){
    if(turns[0]==turns[1] && turns[1]==turns[2]){
        return turns[0];
        res=1;
    }
    if(turns[3]==turns[4] && turns[4]==turns[5]){
        return turns[3];
        res=1;
    }
    if(turns[6]==turns[7] && turns[7]==turns[8]){
        return turns[6];
        res=1;
    }
    if(turns[0]==turns[3] && turns[3]==turns[6]){
        return turns[0];
        res=1;
    }
    if(turns[1]==turns[4] && turns[4]==turns[7]){
        return turns[1];
        res=1;
    }
    if(turns[2]==turns[5] && turns[5]==turns[8]){
        return turns[2];
        res=1;
    }
    if(turns[0]==turns[4] && turns[4]==turns[8]){
        return turns[0];
        res=1;
    }
    if(turns[2]==turns[4] && turns[4]==turns[6]){
        return turns[2];
        res=1;
    }
    return 'z';
}
function move(iden) {
    if (done <= 9 && res != 1) {
        var ext = Number(iden);
        if (turns[ext - 1] != 'X' && turns[ext - 1] != 'O') {
            if (done % 2 == 0) {
                player = 'X';
                document.getElementById('playershow').innerHTML = "PLAYER- " + 'O';

            }
            else {
                player = 'O';
                document.getElementById('playershow').innerHTML = "PLAYER- " + 'X';
            }
            document.getElementById(iden).innerHTML = player;
            turns[ext - 1] = player;
            var result = checker();
            if (result == 'X' || result == 'O') {
                anim('displayer');
                document.getElementById("playershow").innerHTML = result + " WINS";
                res = 1;
            }
            done++;
        }
        if (done >= 9 && res == 0) {
            document.getElementById("playershow").innerHTML = "NO ONE WINS";
            res = 1;
        }
    }
}