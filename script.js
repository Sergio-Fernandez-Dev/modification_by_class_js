const colorButton = document.getElementById('change_color_button');

colorButton.onclick = () => {
    const listElements = document.getElementsByClassName('list_element');
    console.log(listElements);
    for(element in listElements){
        listElements[element].classList.add('red');
    }
}
