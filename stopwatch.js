        var status_sw1 = 0;
        var status_sw2 = 0;
        var status_sw3 = 0;
  
        var time_sw1 = 0;
        var time_sw2 = 0;
        var time_sw3 = 0;
         
        var startBtn1 = document.getElementById("start1");
        var startBtn2 = document.getElementById("start2");
        var startBtn3 = document.getElementById("start3");
         
        var timerLabel1 = document.getElementById("timerLabel1");
        var timerLabel2 = document.getElementById("timerLabel2");
        var timerLabel3 = document.getElementById("timerLabel3");
         
        var moveAllBtn = document.getElementById("moveAllBtn");
         
        function moveAll(obj) {
             
            if (obj.value == 'START') {
                status_sw1 = 1;
                status_sw2 = 1;
                status_sw3 = 1;
                timer1();
                timer2();
                timer3();
                startBtn1.value = "STOP";
                startBtn2.value = "STOP";
                startBtn3.value = "STOP";
                obj.value = "STOP";
             
            } else {
                status_sw1 = 0;
                status_sw2 = 0;
                status_sw3 = 0;
                startBtn1.value = "START";
                startBtn2.value = "START";
                startBtn3.value = "START";
                obj.value = "START";
            }
             
        }
         
         
        function start_stop(obj) {
             
            var stopwatch = obj.id;
             
            if (stopwatch == 'start1') {
                if (status_sw1 == 0) {
                    status_sw1 = 1;
                    timer1();
                } else {
                    status_sw1 = 0;
                }               
            }
             
            if (stopwatch == 'start2') {
                if (status_sw2 == 0) {
                    status_sw2 = 1;
                    timer2();
                } else {
                    status_sw2 = 0;
                }               
            }
             
            if (stopwatch == 'start3') {
                if (status_sw3 == 0) {
                    status_sw3 = 1;
                    timer3();
                } else {
                    status_sw3 = 0;
                }               
            }
             
            if (obj.value == "START") {
                obj.value = "STOP";
             
            } else {
                obj.value = "START";
            }
        }
                  
        function reset(obj) {
            var stopwatch = obj.id;
             
            if (stopwatch == 'reset1') {
                status_sw1 = 0;
                time_sw1 = 0;
                timerLabel1.innerHTML = "00:00:00";
                startBtn1.value = "START";
            }
             
            if (stopwatch == 'reset2') {
                status_sw2 = 0;
                time_sw2 = 0;
                timerLabel2.innerHTML = "00:00:00";
                startBtn2.value = "START";
            }
             
            if (stopwatch == 'reset3') {
                status_sw3 = 0;
                time_sw3 = 0;
                timerLabel3.innerHTML = "00:00:00";
                startBtn3.value = "START";
            }
             
        }
                 
         
        function timer1() {
            if (status_sw1 == 1) {
                setTimeout(function(){
                    time_sw1++;
                    timerLabel1.innerHTML = getTime(time_sw1);
                    timer1();
                }, 10);
            }
            checkAllBtn();
        }
  
        function timer2() {
            if (status_sw2 == 1) {
                setTimeout(function(){
                    time_sw2++;
                    timerLabel2.innerHTML = getTime(time_sw2);
                    timer2();
                }, 10);
            }
            checkAllBtn();
        }
         
        function timer3() {
            if (status_sw3 == 1) {
                setTimeout(function(){
                    time_sw3++;
                    timerLabel3.innerHTML = getTime(time_sw3);
                    timer3();
                }, 10);
            }
            checkAllBtn();
        }
         
         
        function checkAllBtn() {
             
            if (status_sw1 == 1 || status_sw2 == 1 || status_sw3 == 1) {
                moveAllBtn.value = "STOP";
            }
             
            if (status_sw1 == 0 && status_sw2 == 0 && status_sw3 == 0) {
                moveAllBtn.value = "START";
            }
             
        }
         
         
        function getTime(time) {
             
            var min = Math.floor(time/100/60);
            var sec = Math.floor(time/100);
            var mSec = time%100;
             
            if (min < 10) {
                min = "0" + min;
            }
            if (sec >= 60) {
                sec = sec % 60;
            }
            if (sec < 10) {
                sec = "0" + sec;
            }
             
            return min + ":" + sec + ":" + mSec;
             
        }