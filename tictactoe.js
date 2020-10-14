
board = new Array(9);
        for(var i = 0; i<board.length; i++)
            board[i] = i;

        var X = true;

        function draw(){
            alert('Draw!') ? "" : location.reload();
        }

        function winner(win){
            alert(win + ' Wins!') ? "" : location.reload();
        }
        
        function check(board){

            if((board[0] == board[1]) && (board[1] == board[2])){
                winner(option);
            }
                
            else if(board[3] == board[4] && board[4] == board[5]){
                winner(option);
            }
            
            else if(board[6] == board[7] && board[7] == board[8]){
                winner(option);
            }

            else if(board[0] == board[4] && board[4] == board[8]){
                winner(option);
            }
            
            else if(board[0] == board[3] && board[3] == board[6]){
                winner(option);
            }

            else if(board[1] == board[4] && board[4] == board[7]){
                winner(option);
            }
            
            else if(board[2] == board[5] && board[5] == board[8]){
                winner(option);
            }

            else if(board[0] == board[4] && board[4] == board[8]){
                winner(option);
            }
            check_draw();
        }

        function tic(button){
            var txt = button.innerText;
            option = toggle()
            if(option == 'X') document.getElementById('turn').innerText = 'TURN :  0';
            else document.getElementById('turn').innerText = 'TURN :  X';
            button.innerText = option; 
            disable(button)
            selected_button = button.id;
            board[parseInt(selected_button)-1] = option;
            check(board);
        }

        function disable(button){
            button.disabled = true;
        }

        function toggle(){    
            if (X != true) {
                X = true;
                return 'X';
            }
            else {
                X = false;
                return 'O';
            }
        }
        
        function restart(){
            location.reload()
        }
        
        function check_draw(){
            filled = new Array(9);
            full = true;
            for(i = 1;i<=9;i++){
                if(document.getElementById(i.toString()).innerText == 'X' || document.getElementById(i.toString()).innerText == 'O'){
                    filled.push(i);
                }
                else filled.push('None');
            }
            while(!full, i = 0){
                if(filled[i] != i+1){
                    full = false;
                } 
                i++;
            }
        }