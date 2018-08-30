function shuffleA(array)
      {
         
          var m = array.length, t, i;
      
          while (m)   {
      
                           i = Math.floor(Math.random() * m--);
                           t = array[m];
                           array[m] = array[i];
                           array[i] = t;
                       }
      }

function cleartable()
{
    var tbody=document.getElementById("Bbody");
    var row=tbody.getElementsByTagName('tr');
    var rownum=row.length;
    for(var x=rownum-1;x>-1;x--)
    {
        tbody.removeChild(row[x]);
    }
}

window.onload=function(){ // this to diplay the table//
    display();

};

function display()
{
    cleartable();
    var tab1=document.getElementById("Box1");
    var tbody=document.getElementById("Bbody");
    for(var i=0;i<10;i++)
    {
        var y=TABLE_DATA[i];
        var row=document.createElement("tr");
        for(var j=0;j<4;j++)
        {
            var content=["id","name","thumbnailUrl","price"];
            var cell=document.createElement("td");
            cell.innerHTML=y[content[j]];
            row.appendChild(cell);

        }
        tbody.appendChild(row);
        tab1.appendChild(tbody);
    }
}

function project()
{
 shuffleA(TABLE_DATA); 
 display();
     
}
function gathering(array,comp)
{
    

    array.sort(comp);
    display();
}

function post(a,b)
{
 return parseFloat(b.price) - parseFloat(a.price)
}