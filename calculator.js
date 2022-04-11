let buttons = document.querySelector(".buttons");
        let console = document.getElementById('console');
        let screenValue = '';
        function func(clicked_id) {
            
           if(clicked_id == '='){
               console.innerText = eval(screenValue);
               screenValue = console.innerText;

           }
           else if(clicked_id == 'del'){
               screenValue = '';
               console.innerText = screenValue;
           }
           else{
                screenValue += clicked_id;
                console.innerText = screenValue;
                // console.innerText += clicked_id;
           }
        }