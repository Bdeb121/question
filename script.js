            // css part
            let menu = document.querySelector('.quiz-menu');
            let shut = document.querySelector('.answer-close');
            let side = document.querySelector('.answer-box');
            let over = document.querySelector('.overlay');

            menu.addEventListener('click', function () {
                side.classList.add('active');
                over.classList.add('active');
            });

            shut.addEventListener('click', function () {
                side.classList.remove('active');
                over.classList.remove('active');
            });

            // javascript part

            // html part select 
            let numb = document.querySelector('.question-number');
            let time = document.querySelector('.quiz-timer');

            let text = document.querySelector('.question-text');
            let state = document.querySelector('.question-statement');
            let image = document.querySelector('.question-img');
            let table = document.querySelector('.question-table');
            let tbody = document.querySelector('.tbody');

            let pieCrt = document.querySelector('.pie-chart');
            let pieTxt = document.querySelector('.pie-text');

            let pieR = document.querySelector('.pie-right');
            let pieW = document.querySelector('.pie-wrong');
            let pieU = document.querySelector('.pie-unmarked');

            let opts = document.querySelector('.question-option');
            let list = document.querySelector('.answer-indicator');

            let S_Box = document.querySelector('.start-box');
            let Q_Box = document.querySelector('.quiz-box');
            let R_Box = document.querySelector('.result-box');
            let C_Box = document.querySelector('.review-box');

            // quiz question select

            // let quiz = [];

            let currentQues;
            let currentState;
            let currentPics;
            let currentTabs;
            let currentOpts;

            let picture;
            let left;
            let right;

            let currentAns;
            let actualAns;
            let usersAns;

            let counter = 0;
            let rightAns = 0;
            let wrongAns = 0;

            // alphabet list array
            let numL = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
            let numR = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii'];
            let alpha = ['A', 'B', 'C', 'D'];

            let R;
            let W;
            let M;
            let U; 

            // timer variable
            let st = new Date(new Date().setTime(0));
            let nt = st.getTime();
            let seconds = Math.floor((nt % (100 * 60)) / 1000);
            let minutes = Math.floor((nt % (1000 * 60 * 60)) / 1000);
            let timer; 


            function setQuestion() {
                // set question number
                numb.innerHTML = `Q. ${counter + 1}`;
                if (counter < 9) {
                    numb.innerHTML = `Q. 0${counter + 1}`;
                }

                // set question body

                // set question text
                currentQues = quiz[counter];
                text.innerHTML = currentQues.question;

                // set question img
                currentPics = currentQues.picture;

                // set question table
                currentTabs = currentQues.table;

                // set question statement
                currentState = currentQues.statement;
                
                
                if(currentPics == undefined && currentTabs == undefined && currentState == undefined){
                    image.style.display = 'none';
                    table.style.display = 'none';
                    state.style.display = 'none';
                    
                } else if(currentTabs == undefined && currentState == undefined){
                    image.style.display = 'block';
                    table.style.display = 'none';
                    state.style.display = 'none';

                    image.innerHTML = '';
                    picture = new Image();
                    picture.setAttribute("src", currentPics);
                    image.appendChild(picture);

                } else if(currentTabs == undefined && currentPics == undefined){
                    state.style.display = 'block';
                    image.style.display = 'none';
                    table.style.display = 'none';

                    state.innerHTML = '';
                    for (let i = 0; i < currentState.length; i++) {
                        let srt = document.createElement('p');
                        srt.innerHTML = `${numL[i]}. ${currentState[i]}`;
                        state.appendChild(srt); 
                    }  

                } else{
                    table.style.display = 'block';
                    image.style.display = 'none';
                    state.style.display = 'none';

                    tabL = currentTabs.left;
                    tabR = currentTabs.right;    

                    tbody.innerHTML = '';
                    for (let i = 0; i < tabR.length; i++) {
                        let tr = document.createElement('tr');
                        tr.innerHTML = `
                                <td> ${numL[i]} </td>
                                <td> ${tabL[i]} </td>
                                <td> ${numR[i]} </td>
                                <td> ${tabR[i]} </td>
                        `;
                        tbody.appendChild(tr);
                        
                    }
                
                    let A = tbody.lastChild.children[0].innerText;

                    if(tabL[4] == undefined && A == 'e') {
                        tbody.lastChild.children[0].innerHTML = '';
                        tbody.lastChild.children[1].innerHTML = '';
                    }
                }


                // set question option
                currentOpts = currentQues.options;
                opts.innerHTML = '';
                let animationDelay = 0.2;
                for (let i = 0; i < currentOpts.length; i++) {
                    let option = document.createElement('div');
                    option.innerHTML = `
                        <div class="option-alpha"> ${alpha[i]} </div> 
                        <div class="option-text"> ${currentOpts[i]} <div> 
                    `;
                    option.id = i + 1;
                    option.style.animationDelay = animationDelay + 's';
                    animationDelay += 0.2;
                    option.className = 'option';
                    option.setAttribute('onclick', 'getOption(this)');
                    opts.appendChild(option);
                }
            }


            function getOption(num) {
                currentAns = parseInt(num.id);
                actualAns = quiz[counter].answer;

                optsLength = opts.children.length;

                if (currentAns == actualAns) {
                    // right option
                    num.classList.add('right');
                    num.firstElementChild.classList.add('right');
                    list.children[counter].classList.add('right');

                    rightAns++;
                } else {
                    // wrong option
                    num.classList.add('wrong');
                    num.firstElementChild.classList.add('wrong');
                    list.children[counter].classList.add('wrong');

                    opts.children[
                        actualAns - 1
                    ].firstElementChild.classList.add('right');
                    opts.children[actualAns - 1].classList.add('right');

                    wrongAns++;
                }

                // set others option unClickable
                for (let i = 0; i < optsLength; i++) {
                    opts.children[i].classList.add('answered');
                }

                // store current ans in quiz array
                quiz[counter].userAns = '';
                for (let i = 0; i < quiz.length; i++) {
                    quiz[counter].userAns = currentAns;
                }
            }


            function setQuesList() {
                // set question list
                list.innerHTML = '';
                for (let i = 0; i < quiz.length; i++) {
                    let qNum = document.createElement('div');
                    qNum.innerText = i + 1;
                    qNum.setAttribute('onclick', 'getQuesNum(this)');
                    list.appendChild(qNum);
                }
            }


            function getQuesNum(e) {
                // css part
                side.classList.remove('active');
                over.classList.remove('active');

                setTimeout(function () {
                    // get question number from question list
                    let queNum = parseInt(e.innerText);
                    counter = queNum - 1;

                    setQuestion();

                    preview();
                }, 400);
            }


            function preview() {
                userAns = quiz[counter].userAns;
                actualAns = quiz[counter].answer;

                optsLength = opts.children.length;

                if (userAns == undefined) {
                    setQuestion();
                } else {
                    if (userAns === actualAns) {
                        opts.children[
                            actualAns - 1
                        ].firstElementChild.classList.add('right');
                        opts.children[actualAns - 1].classList.add('right');
                    } else {
                        opts.children[
                            actualAns - 1
                        ].firstElementChild.classList.add('right');
                        opts.children[actualAns - 1].classList.add('right');

                        opts.children[
                            userAns - 1
                        ].firstElementChild.classList.add('wrong');
                        opts.children[userAns - 1].classList.add('wrong');
                    }

                    // set others option unClickable
                    for (let i = 0; i < optsLength; i++) {
                        opts.children[i].classList.add('answered');
                    }
                }
            }


            function setTimer() {
                if (seconds < 59) {
                    seconds++;
                } else {
                    minutes++;
                    seconds = 0;
                }

                let sec = seconds < 10 ? `0${seconds}` : `${seconds}`;
                let min = minutes < 10 ? `0${minutes}` : `${minutes}`;

                time.innerHTML = `${min} : ${sec}`;
            }

            
            // prev question
            let prev = document.querySelector('.prev');
            prev.addEventListener('click', function () {
                if (counter === 0) {
                    prev.disable = 'true';
                } else {
                    counter--;
                    setQuestion();
                }
                preview();
            });


            // next question
            let next = document.querySelector('.next');
            next.addEventListener('click', function () {
                if (counter === quiz.length - 1) {
                    prev.disable = 'true';
                } else {
                    counter++;
                    setQuestion();
                }
                preview();
            });


            // submit quiz
            let submit = document.querySelector('.submit');
            submit.addEventListener('click', function () {
                quizResult();

                clearInterval(timer);

                side.classList.remove('active');
                over.classList.remove('active');

                Q_Box.classList.remove('active');
                R_Box.classList.add('active');

            });


            // quiz result
            function quizResult() {
                R_Box.querySelector('.total-question').innerHTML = quiz.length;
                R_Box.querySelector('.total-attempt').innerHTML =
                    rightAns + wrongAns;
                R_Box.querySelector('.total-right').innerHTML = rightAns;
                R_Box.querySelector('.total-wrong').innerHTML = wrongAns;

                let score = rightAns * 4 - wrongAns + ' / ' + quiz.length * 4;

                R_Box.querySelector('.total-percentage').innerHTML =
                    ((rightAns / quiz.length) * 100).toFixed(2) + '%';
                R_Box.querySelector('.total-score').innerHTML = score;

                let timeTaken = `${minutes} min & ${seconds} sec`;
                if (minutes < 1) {
                    timeTaken = `${seconds} sec`;
                }
                R_Box.querySelector('.total-time').innerHTML = timeTaken;

                // pie chart
                R = Math.round((rightAns / quiz.length) * 100);
                W = Math.round((wrongAns / quiz.length) * 100);
                M = R + W;
                U = 100 - M;

                // pies.style.background = 'conic-gradient(#00b894 0 '+ R +'% , #e74c3c 0 '+ W +'% , #e74 0 '+ M +'% , #0984e3 0 '+ UM +'% )';

                pieCrt.style.background = 'conic-gradient(#b5f7e9 0 '+ R +'% ,#fccac5 0 '+ M +'% , #afd8ff 0 100% )';

                pieR.innerHTML = `<span></span> Right - ${R}%`;
                pieW.innerHTML = `<span></span> Wrong - ${W}%`;
                pieU.innerHTML = `<span></span> Unmarked - ${U}%`;
            }


            // start quiz
            let start = document.querySelector('.start');
            start.addEventListener('click', function () {

                setQuestion();
                setQuesList();
                setTimer();

                timer = setInterval(setTimer, 1000);

                S_Box.classList.add('inactive');
                Q_Box.classList.add('active');

            });

            let review = document.querySelector('.review');
            review.addEventListener('click', function () {
                getReview();

                R_Box.classList.remove('active');
                C_Box.classList.add('active');
            });

            function getReview() {
                let cards = document.querySelector('.review-body');
                cards.innerHTML = '';
                for (let i = 0; i < quiz.length; i++) {
                    let Qus = quiz[i].question;
                    let Opt = quiz[i].options;

                    let rAns = quiz[i].answer;
                    let uAns = quiz[i].userAns;

                    let card = document.createElement('div');

                    if (uAns === rAns) {
                        card.innerHTML = `
                        <div class="review-ques">
                            <b>Q${i + 1}.</b> &nbsp; ${Qus}
                        </div>

                        <div class="review-ans">
                            <div class="right-ans">
                                <b>Right Ans:</b> &nbsp; ${Opt[rAns - 1]}
                            </div>
                        </div>
                    `;
                    } else if (uAns == undefined) {
                        card.innerHTML = `
                        <div class="review-ques">
                            <b>Q${
                                i + 1
                            }.</b> &nbsp; ${Qus} <span>Unmarked</span>
                        </div>

                        <div class="review-ans">
                            <div class="right-ans">
                                <b>Right Ans:</b> &nbsp; ${Opt[rAns - 1]}
                            </div>
                        </div>
                    `;
                    } else {
                        card.innerHTML = `
                        <div class="review-ques">
                            <b>Q${i + 1}.</b> &nbsp; ${Qus}
                        </div>

                        <div class="review-ans">
                            <div class="user-ans">
                                <b>Your Ans:</b> &nbsp; ${Opt[uAns - 1]}
                            </div>

                            <div class="right-ans">
                                <b>Right Ans:</b> &nbsp; ${Opt[rAns - 1]}
                            </div>
                        </div>
                    `;
                    }

                    card.className = 'question-card';
                    cards.appendChild(card);
                }
            }

            let again1 = document.querySelector('.again1');
            again1.addEventListener('click', setAgain);

            let again2 = document.querySelector('.again2');
            again2.addEventListener('click', setAgain);

            function setAgain() {
                C_Box.classList.remove('active');
                R_Box.classList.remove('active');
                Q_Box.classList.add('active');

                counter = 0;
                rightAns = 0;
                wrongAns = 0;

                for (let i = 0; i < quiz.length; i++) {
                    delete quiz[i].userAns;
                }

                st = new Date(new Date().setTime(0));
                nt = st.getTime();
                seconds = Math.floor((nt % (100 * 60)) / 1000);
                minutes = Math.floor((nt % (1000 * 60 * 60)) / 1000);

                timer = setInterval(setTimer, 1000);

                setQuestion();
                setQuesList();
                setTimer();
            }

            let home = document.querySelector('.home');
            home.addEventListener('click', function() {
                
            });
