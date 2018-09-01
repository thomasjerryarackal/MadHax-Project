function shuffleA(array)//Fisher Yates to shuffle this array//
      {
         
          var m = array.length, t, i;
      
          while (m)   {
      
                           i = Math.floor(Math.random() * m--);
                           t = array[m];
                           array[m] = array[i];
                           array[i] = t;
                       }
      }

function cleartable()//To clear Table//
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

function project()///To project the shuffled Table//
{
 shuffleA(TABLE_DATA); 
 display();
     
}
function post(a,b)// function to compare//
{
    return parseFloat(b.price)-parseFloat(a.price)
}

function compID(a,b)//function to compare price with id//
{
    return parseFloat(b.id)-parseFloat(a.id)
}

function gathering(array,comp)//this is function for sorting (price,id)//
{
    array.sort(comp);
    var top,bot;// top to bottom in same price//
    for(var i=0;i<10;i++)
    {
        var a=array[i].price;
        var b=array[i+1].price;
        if(b==a)
        {
            top=i;
            for(var j=i;j<10;j++)
            {
                var m=a;
                var n=array[j+1].price;
                if(m!=n)
                {
                    bot=j+1;
                    break;

                }
            }
            break;
        }
    }
    array=partialSort(array,top,bot);
    display();
}

function partialSort(array,start,end)//to sort table row//
{
    var presorted=array.slice(0,start);
    var postsorted=array.slice(end);
    var sorted=array.slice(start,end).sort(compID);
    array.length=0;
    array.push.apply(array,presorted.concat(sorted).concat(postsorted));
    return array
}
