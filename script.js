document.getElementById('btn').addEventListener('click', function(){
    let input = document.getElementById('lucky').value;
    let number = Number(input);
    if (document.getElementById('lucky').value.trim()===""){
        document.getElementById('null').style.display = 'block';
    }else if (isNaN(number) ){
        document.getElementById('nan').style.display = 'block';
    } else if (number == 7){
        document.getElementById('success').style.display = 'block';
    }else{
        document.getElementById('fail').style.display = 'block';
    }
}); 
