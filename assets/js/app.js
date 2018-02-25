//   $(document).ready(function () {
//         $('#questionDisplay').hide();
//         $('#answerDisplay').hide();
//         $('#resultBox').hide();

//         $('#start').on('click', function () {
//         $('#box').hide();
//         $('body').css('background-image', 'url("assets/images/answerBg.jpg")');
//         $("body").css({"background-position":"center center"})
//         $('#questionDisplay').delay(1200).animate({height: 'toggle', opacity: '1'}, 1000);

//         $('.multiChoice').on('click', function () {
//             $('#questionDisplay').hide();
//             $('#answerDisplay').animate({height: 'toggle', opacity: '1'}, 1000);
//         });

//         $('#image-holder').on('click', function () {
//             $('#questionDisplay').hide();
//             $('#answerDisplay').hide();
//             $('body').css('background-image', 'url("assets/images/halong1.jpg")');
//             // $("body").css({"background-position":"right center"});
//             $('#resultBox').animate({width: 'toggle'}, 1000);

//         });

//     });

// });

$(document).ready(function () {
    // ==============================
    // THE QUESTIONS-ANSWERS OBJECTS
    // ==============================

    //put all the questions in an array
    var allQuestions = [
        // question 1
        {
            question: "How to say 'Hello' in Vietnamese?",
            alphabet: ['A', 'B', 'C', 'D'],
            answers: ['tam biet', 'khoe khong', 'cam on', 'xin chao'],
            correctAnswer: 3,
            pic: 'assets/images/xinchao.gif',
        },

        //question 2
        {
            question: "What is Vietnam's capital?",
            answers: ['Hannoi', 'Saigon', 'Nha Trang', 'Da Nang'],
            correctAnswer: 0,
            pic: 'assets/images/hannoi.jpg',
        },

        //question 3
        {
            question: "Which city is considered as Hawaii in Vietnam?",
            answers: ['Saigon', 'Long An', 'Can Tho', 'Nha Trang'],
            correctAnswer: 3,
            pic: 'assets/images/nhaTrang.jpg',
        },

        //question 4
        {
            question: "Which one below is NOT breakfast in Vietnam?",
            answers: ['Catfish Stew', 'Pho', 'Beef Stew', 'Broken Rice'],
            correctAnswer: 0,
            pic: 'assets/images/cakho.gif',
        },

        //question 5
        {
            question: "Which is the most popular transporation method in Vietnam?",
            answers: ['Public Bus', 'Train', 'Motopets', 'Cars'],
            correctAnswer: 2,
            pic: 'assets/images/ketxe.jpg',
        },

        //question 6
        {
            question: "What is Vietnam's traditional garment?",
            answers: ['Cheongsam', 'Kimono', 'Salong', 'AoDai'],
            correctAnswer: 3,
            pic: 'assets/images/aoDai1.jpg',
        },

        //question 7
        {
            question: "Which beverage is most popular in Vietnam?",
            answers: ['Cononut', 'Green Tea', 'Coffee', 'Sugarcane'],
            correctAnswer: 2,
            pic: 'assets/images/caphe.gif',
        },

        //question 8
        {
            question: "What is Lunar New Year called in Vietnamese?",
            answers: ['Mua Xuan', 'Nam Moi', 'Vu Lang', 'Tet'],
            correctAnswer: 3,
            pic: 'assets/images/tet.jpg',
        },

        //question 9
        {
            question: "Which Viet dish is considered as salad burrito?",
            answers: ['Eggroll', 'Spring Roll', 'Banh Mi', 'Goi'],
            correctAnswer: 1,
            pic: 'assets/images/goiCuon.jpg',
        },

        //question 10
        {
            question: "What is Vietnam Calligraphy Called?",
            answers: ['Thu Phap', 'Viet Chu', 'Danh Van', 'Hoi Hoa'],
            correctAnswer: 0,
            pic: 'assets/images/thuphap.jpg',
        },

    ];

    //variable to keep track of the answers
    var unanswered = 0;
    var correct = 0;
    var wrong = 0;
    var currentQuestion = 0;
    var intervalId;
    var userPick;


    $('#questionDisplay').hide();
    $('#answerDisplay').hide();
    $('#resultBox').hide();

    // ==============
    // ONCLICK ACTION
    // ==============

    //start the games

    $('#start').on('click', function () {
        start();
        displayQuestion();
    });

    $('.multiChoice').on('click', function () {
        userPick = parseInt($(this).attr('value'));
        displayAnswer();

    });

    // =================
    // ALL THE FUNCTIONS
    // =================

    //function to start the game
    function start() {
        console.log('start the game');
        unanswered = 0;
        correct = 0;
        wrong = 0;
        currentQuestion = 0;

    }

    //function to start the countdown timer
	function startTimer(){
		$('.countDown').show();

		var timeRemain = 5;

		function run(){
			intervalId = setInterval(decrement, 1000);
		}
		
    	function decrement() {
			timeRemain--;
			$(".countDown").html(timeRemain);
			if (timeRemain === 0) {
				$('.countDown').html('0');
				stop();
				timeUp();
			}
			
    	}
    	function stop() {
			clearInterval(intervalId);
    	}
    run();
    }

    //function to display the questions
	function displayQuestion() {
        console.log('display the 4 questions');

        $('#box').hide();
        $('#answerDisplay').hide();
        $('body').css('background-image', 'url("assets/images/answerBg.jpg")');
        $("body").css({"background-position":"center center"})
        $('#questionDisplay').animate({height: 'toggle', opacity: '1'}, 1000);
		

		//if there is no question left then show the result
		if (currentQuestion === allQuestions.length){
			result();
		}
		//if there are questions havent been asked then do the following...
		else if(currentQuestion < allQuestions.length){

			//display the time and start the 'startTimer' function with 15 seconds count down
			startTimer();

			//show the question being asked and the multipleChoice
			$('.questionAsk').show();
            $('.multipleChoice').show();
            
            //generate question number
            $("#currentQuestion").html(currentQuestion + 1);
			//generate the question
			$('#questionAsk').html(allQuestions[currentQuestion].question);

			//generate the 4 multiple choices
			$('#one').html(allQuestions[currentQuestion].answers[0]);
			$('#two').html(allQuestions[currentQuestion].answers[1]);
			$('#three').html(allQuestions[currentQuestion].answers[2]);
			$('#four').html(allQuestions[currentQuestion].answers[3]);
		}
		
    }
  
    
    //function to display the answer after user pick an option in the multiple choices
	function displayAnswer() {
		console.log('displayAnswer function start')
		
		$('#questionDisplay').hide();
        $('#answerDisplay').animate({height: 'toggle', opacity: '1'}, 1000);
        $("#currentQuestion").html(currentQuestion + 1);
    
		//stop the timer
        clearInterval(intervalId);
        stop();
		

		//then check the answer user picked
		//if the answer is right
		if (userPick === allQuestions[currentQuestion].correctAnswer){
			console.log('you are right');
			//run the right answer function
			rightChoice();
        }
        
		//if the answer is wrong
		else {
			console.log(userPick);
			console.log(allQuestions[currentQuestion].correctAnswer);
			console.log('you are wrong');
			//run the wrong answer function
			incorrect();
		}

    }
    
    //function run when user pick the correct answer
	function rightChoice() {
        console.log('rightChoice functions start')
        $(".questionNum h4#currentQuestion").html(currentQuestion+1);
		

		//increase the correctAnswer
        correct++;
        

		//show the correct answer in the displayAnswer div
		$('#image-holder').html('<img class="img-responsive" src =' + allQuestions[currentQuestion].pic + '>');
        $('span.boldTxt').html("RIGHT").css("letter-spacing", "10px");
        $("#correctAns").html('<p>The correct <br class = "visible-md hidden-xs">answer is <br class="hidden-xs">'
                             + '<span style="text-transform: uppercase; color: #FE7900"; font-weight:600>' 
                             + allQuestions[currentQuestion].answers[allQuestions[currentQuestion].correctAnswer] 
                             + '</span></p>');
        
		//show the result for 3 second then move on to the next question
		currentQuestion++;
		setTimeout (function(){
			displayQuestion()
		}, 3000);
		
    }
    
    function incorrect() {
        console.log('wrongAnswer function start')
        $(".questionNum h4#currentQuestion").html(currentQuestion+1);
       
		//increase the correctAnswer
        wrong++;
        

		//show the correct answer in the displayAnswer div
		$('#image-holder').html('<img class="img-responsive" src =' + allQuestions[currentQuestion].pic + '>');
        $('span.boldTxt').html("WRONG");        
        $("#correctAns").html('<p>The correct <br class = "visible-md hidden-xs">answer is <br class="hidden-xs">'
                            + '<span style="text-transform: uppercase; color: #FE7900"; font-weight:600>' 
                            + allQuestions[currentQuestion].answers[allQuestions[currentQuestion].correctAnswer] 
                            + '</span></p>');
        
		//show the result for 3 second then move on to the next question
		currentQuestion++;
		setTimeout (function(){
			displayQuestion();
		}, 3000);
		
    }


    //function run when user dont pick an answer within 20 seconds
	function timeUp(){
        
        console.log('timeUp function start');
        $('#questionDisplay').hide();
        $('#answerDisplay').animate({height: 'toggle', opacity: '1'}, 1000);
        $(".questionNum h4#currentQuestion").html(currentQuestion + 1);
		
		//increase the correctAnswer
		unanswered++;
        //show the correct answer in the displayAnswer div
        $('.checkAns').html("<span class='boldTxt'>TIME'S UP</span>")
		$('#image-holder').html('<img class="img-responsive" src =' + allQuestions[currentQuestion].pic + '>');        
        $("#correctAns").html('<p>The correct <br class = "visible-md hidden-xs">answer is <br class="hidden-xs">'
                            + '<span style="text-transform: uppercase; color: #FE7900"; font-weight:600>' 
                            + allQuestions[currentQuestion].answers[allQuestions[currentQuestion].correctAnswer] 
                            + '</span></p>');

        //show the result for 3 second then move on to the next question
        currentQuestion++;
		setTimeout (function(){
			displayQuestion()
		}, 3000);
		

    }
    
    //function to display the result
	function result(){
		console.log('result function start')
		//hide the multiple choice pannel
		
        $('#questionDisplay').hide();
        $('#answerDisplay').hide();

        $('body').css('background-image', 'url("assets/images/halong1.jpg")');
        $('#resultBox').animate({width: 'toggle'}, 1000);

        //generate the result pannel
        $('#resultBox').html("<h4 class='result'>Correct Answer:" + correct +"</h4>"
                           + "<h4 class='result'>Wrong Answer:&nbsp;&nbsp;" + wrong +"</h4>"
                           + "<h4 class='result'>No Answer:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + unanswered +"</h4>"
                           + "<h1 id='resultTxt'>Re<br class='visible-xs visible-sm hidden-md'>sults</h1>"
                           + "<h4 id='again'>A<br>G<br>A<br>I<br>N<br><i class='fas fa-play fa-rotate-90 fa-sm'></i></h4>")
         
        $('#resultBox h4#again').on('click', function () {
        console.log('play again');
        reset();
        });
    }
    
    //function to reset the game
    function reset() {
        $('body').css('background-image', 'url("assets/images/startBg.jpg")');
        $('#box').animate({width: 'toggle'}, 1000);
        $('#questionDisplay').hide();
        $('#answerDisplay').hide();
        $('#resultBox').hide();


    }

});