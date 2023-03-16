const list = ["pane","carote","carta","acqua","olio","inslata"]

/* let i = 0

while (i < list.length) {
    var item = list[i];
    var li = document.createElement('li');
    li.textContent = item;
    document.getElementById('ul').appendChild(li);
    i++;
  }            */

  for(let i = 0;i< list.length;i++){
    var item = list[i];
    var li = document.createElement('li');
    li.textContent = item;
    document.getElementById('ul').appendChild(li);
  }