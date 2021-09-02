//DOM Inspection

node1 = document.getElementById("first")
node2 = document.querySelector(".second")
nodes = document.querySelectorAll("div")

//DOM Insertion

node1 = document.getElementById("first")
newnode1 = document.createElement("div")
newnode2 = document.createElement("div")
text = document.createTextNode("hello, world!")
newnode1.appendChild(text) 

node1.appendChild(newnode1)
node1.appendChild(newnode2)

newnode2.innerHTML = "hello, world!"
newnode2.innerHTML = "<strong>hello, world!</strong>"
text2 = document.createTextNode("<strong>hello, world!</strong>")
newnode1.appendChild(text2)

//DOM Attribute Manipulation

node1.setAttribute("style", "background-color: black;")
node1.setAttribute("specialkey", "12356")  //storing non-HTML attributes

nodes = document.querySelectorAll("div")
nodes.forEach(x => x.style.backgroundColor = "blue")
