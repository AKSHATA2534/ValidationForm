fetch("https://jsonplaceholder.typicode.com/photos/1").then((data)=>{
//console.log(data); json formated
return data.json();   //converted to objects
}).then((objectData)=>{
//console.log(objectData[0].title);
let tableData="";
objectData.map(values) => {
    tableData+= `<tr>
    <td>${values.albumId}</td>
    <td><a href="userdetails.html">${values.id}</a></td>
      <td>${values.title}</td>
      <td>${values.url}</td>
      <td>${values.thumbnailUrl}</td>
    </tr>
    <tr>`;
});
document.getElementById("table_body").innerHTML=tableData;
});