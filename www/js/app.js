/* 
 * Code by Bahram Hasanov.
 * http://bahramhasanov.com
 * 2016
 */

function calculate() {

    var task = $('.screen .task').text();

    if (['+', '-', '*', '/', '^'].indexOf(task.slice(-1)) < 0) {
        $('.screen .result').text(math.eval(task));
    }


}

$(document).ready(function () {
    
    
    $('.task').text(localStorage.getItem('task'));
    
    calculate();

    $('.key').on('click', function () {

        var pressed = $(this).attr('data-id');
        var task = $('.task').text() + "";
        var result = $('.result').text() + "";
        var lastdigit = task.slice(-1);
        var newtask = task;
        switch (pressed) {
            case 'c':
                newtask = '';
                break;

            case 'd':
                newtask = task.slice(0, -1);
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if (task == '0') {
                    newtask = pressed;
                } else if(lastdigit==')'){
                    
                } else {
                    newtask = task + pressed;
                }
                break;



            case '+':
            case '-':
            case '*':
            case '/':
            case '^':

                if (lastdigit == '.') {
                    newtask = task.slice(0, -1) + pressed;
                } else if (['+', '-', '*', '/'].indexOf(lastdigit) > -1) {
                    newtask = task.slice(0, -1) + pressed;
                } else {
                    newtask = task + pressed;
                }
                break;
                
            case '(':

                if (['+', '-', '*', '/', '^','('].indexOf(lastdigit) > -1) {
                    newtask = task + pressed;
                } else if(task=='0'){
                    newtask = pressed;
                }
                break;
                
            case ')':

                if (['+', '-', '*', '/', '^','('].indexOf(lastdigit) < 0 && newtask.indexOf('(')>-1) {
                    newtask = task + pressed;
                }
                break;


            case '.':
                if (lastdigit == '.') {
                    newtask = task;
                } else if (['+', '-', '*', '/'].indexOf(lastdigit) > -1) {
                    newtask = task + '0' + pressed;
                } else {
                    newtask = task + pressed;
                }
                break;
                
            case 'u':
                newtask = result;
                break;
        }

        if (newtask == '') {
            newtask = '0';
        }
        $('.task').text(newtask);

        localStorage.setItem('task', newtask);

        calculate();

    })

})
