//Tic Tac Toe

/*
make a list of each position on the board
make a function that updates the value of a position based on input

Board is:
1 2 3
4 5 6
7 8 9

*/

let tictactoe = {
    '1':'',
    '2':'',
    '3':'',
    '4':'',
    '5':'',
    '6':'',
    '7':'',
    '8':'',
    '9':'',
    play: function (player,position) {
        if (player==='x'){
            if (position==='1'){
                this['1']='x'
            }else if (position==='2'){
                this['2']='x'
            }else if (position==='3'){
                this['3']='x'
            }else if (position==='4'){
                this['4']='x'
            }else if (position==='5'){
                this['5']='x'
            }else if (position==='6'){
                this['6']='x'
            }else if (position==='7'){
                this['7']='x'
            }else if (position==='8'){
                this['8']='x'
            }else if (position==='9'){
                this['9']='x'
            }
        }
        if (player==='o'){
            if (position==='1'){
                this['1']='o'
            }else if (position==='2'){
                this['2']='o'
            }else if (position==='3'){
                this['3']='o'
            }else if (position==='4'){
                this['4']='o'
            }else if (position==='5'){
                this['5']='o'
            }else if (position==='6'){
                this['6']='o'
            }else if (position==='7'){
                this['7']='o'
            }else if (position==='8'){
                this['8']='o'
            }else if (position==='9'){
                this['9']='o'
            }
        }
        if (this['1']==='x'&&this['2']==='x'&&this['3']==='x' || this['1']==='x'&&this['5']==='x'&&this['9']==='x' || this['1']==='x'&&this['4']==='x'&&this['7']==='x' || this['4']==='x'&&this['5']==='x'&&this['6']==='x' || this['7']==='x'&&this['8']==='x'&&this['9']==='x' || this['2']==='x'&&this['5']==='x'&&this['8']==='x' || this['3']==='x'&&this['6']==='x'&&this['9']==='x') {
            alert(`Player X Won`)
        }
        if (this['1']==='o'&&this['2']==='o'&&this['3']==='o' || this['1']==='o'&&this['5']==='o'&&this['9']==='o' || this['1']==='o'&&this['4']==='o'&&this['7']==='o' || this['4']==='o'&&this['5']==='o'&&this['6']==='o' || this['7']==='o'&&this['8']==='o'&&this['9']==='o' || this['2']==='o'&&this['5']==='o'&&this['8']==='o' || this['3']==='o'&&this['6']==='o'&&this['9']==='o') {
            alert(`Player O Won`)
        }
    }
}

// tictactoe.play('x','1') tictactoe.play('x','2') tictactoe.play('x','3') alerts that Player X Won





