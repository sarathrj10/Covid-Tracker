const indiaCase=document.getElementById('india-case');
const globalCase=document.getElementById('global-case'); 
document.addEventListener('DOMContentLoaded',loadData);
function loadData()
{
    const xhr=new XMLHttpRequest();
    xhr.open('GET','https://api.covid19api.com/summary',true);
    xhr.onload = function(){
        if(xhr.status == 200){
            const datas=JSON.parse(xhr.responseText);
            console.log(datas);
            displayDate(datas.Date)
            displayIndia(datas.Countries[76]);
            displayGlobal(datas.Global);
            displayOthers(datas.Countries);
        }
    }
    xhr.send();
}
function displayDate(date){
    const d1=new Date(date);
    console.log(d1)
    document.getElementById('date').innerText=`*as on ${d1}`;
}
function displayIndia(data){
    const tbody=document.getElementById('india-body');
    const tr=document.createElement('tr');
    tr.innerHTML=`
                   <td>${data.NewConfirmed}</td>
                   <td>${data.TotalConfirmed}</td>
                   <td>${data.NewDeaths}</td>
                   <td>${data.TotalDeaths}</td>
                   <td>${data.TotalRecovered}</td>`
    tbody.appendChild(tr);               
}
function displayGlobal(data){
    const tbody=document.getElementById('global-body');
    const tr=document.createElement('tr');
    tr.innerHTML=`
                   <td>${data.NewConfirmed}</td>
                   <td>${data.TotalConfirmed}</td>
                   <td>${data.NewDeaths}</td>
                   <td>${data.TotalDeaths}</td>
                   <td>${data.TotalRecovered}</td>`
    tbody.appendChild(tr);               
}
function displayOthers(datas){
    const tbody=document.getElementById('other-body');
    datas.forEach(function(data){
        const tr=document.createElement('tr');
        tr.innerHTML=` <td>${data.Country}</td>
                       <td>${data.NewConfirmed}</td>
                       <td>${data.TotalConfirmed}</td>
                       <td>${data.NewDeaths}</td>
                       <td>${data.TotalDeaths}</td>
                       <td>${data.TotalRecovered}</td>`
        tbody.appendChild(tr);
    })
                  
}
document.getElementById('search-box').addEventListener('keyup',searchCountry);
function searchCountry(e){
    const searchtable=document.getElementById('search-table');
    const input=e.target.value.toLowerCase();
    if(input == ''){
        indiaCase.style.display='block';
        globalCase.style.display='block';
    }else{
        indiaCase.style.display='none';
        globalCase.style.display='none';
        const table=document.getElementById('others');
        const row=table.getElementsByTagName('tr');
        for(var i=0;i < row.length ; i++){
            const td=row[i].getElementsByTagName('td')[0];
            if(td){
                const txtvalue=td.textContent;
                if(txtvalue.toLowerCase().indexOf(input) > -1){
                    row[i].style.display ='';
                }else{
                    row[i].style.display ='none';
                }
            }
        }
    }

}
