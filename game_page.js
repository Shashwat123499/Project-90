player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

player1_score = 0;
player2_score = 0;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;

n1 = 0;
n2 = 0;

question_turn = "player1";
answer_turn = "player2";

function send() {
    num1 = document.getElementById("number1").value;
    num2 = document.getElementById("number2").value;
    n1 = Number(num1);
    n2 = Number(num2);
    question_row = "<h4> Question : " + n1 + " X " + n2 + "</h4> <br>";
    input_row = "<label>Answer: </label><input type='number' id='input_box' placeholder='enter the product here'> <br><br>";
    check_btn = "<button class='btn btn-info' onclick= 'check()'> CHECK </button> <br> ";
    out_row = question_row + input_row + check_btn;
    document.getElementById("output").innerHTML=out_row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

function check() {
    product = n1*n2;
    answer = document.getElementById("input_box").value;
    if (product == answer) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }

    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player2_name;
    }
    else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;

    }
    else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}