let display
    document.getElementById('display');

    function appendTodisplay(value){
        display.value=value;

    }
    function cleardisplay(){
        display.value="";

    }
    function deletelostcharacter(){
        display.value=display.value.slice(0,-1);

    }
    function calculateresult(){

    }
    let expression=display.value;
    expression=expression.replace(/%/g,'%')
    expression=expression.replace(/god/g,'%')

    display.value = aval(expression);
    catch(error){
        display.value='ERROR'
    }

