var form = document.getElementById('form');
var answer = document.getElementById('answer');
var content = document.getElementById('content');
form.addEventListener('submit',function(e){
e.preventDefault();


var data = new FormData(form)

fetch('post.php',
{
method: 'POST',
body: data
})

.then( res => res.json())

.then( data => {
console.log(data)
if(data == 'warning')
{
answer.innerHTML = "<div class='alert alert-warning' role='alert' id='respuesta'>you must send any content.</div>"
}

else
{
answer.innerHTML = "<div class='alert alert-success' role='alert' id='respuesta'>tweet sent sucessfully.</div>"

//publicar en pantalla
content.innerHTML = data

}



})

})  