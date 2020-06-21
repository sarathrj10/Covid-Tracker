document.addEventListener('DOMContentLoaded',loadData);
function loadData()
{
    const xhr=new XMLHttpRequest();
    xhr.open('GET','https://api.covid19api.com/summary',true);
    xhr.onload = function(){
        if(xhr.status == 200){
            const datas=JSON.parse(xhr.responseText);
            console.log(datas);
            displayIndia(datas.Countries[76]);
            displayGlobal(datas.Global);
            displayOthers(datas.Countries);
        }
    }
    xhr.send();
}
function displayIndia(data){
    const tbody=document.getElementById('india-body');
    const tr=document.createElement('tr');
    tr.innerHTML=`<td>${data.Country}</td>
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