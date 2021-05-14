let i=0;
while (i<=20){
    let fila=`<tr>
    <th scope="row">${i}</th>
    <td>Mark${i}</td>
    <td>Otto${i}</td>
    <td>@mdo${i}</td>
  </tr>`;
  document.getElementById("filas-tabla").innerHTML +=fila
  i++;
  i++;
}