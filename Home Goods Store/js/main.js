$(document).ready(function(){   // When the document is ready, we are going to call the function 
    $nav = $('.nav');  //Creating a variable of jquery Taking the nacv element and specifying it to the variable 
    $toggleCollapse = $('.toggle-collapse');

    // We then add an onclick method to the toggle collapse so that when we click on the toggle menu, we increase the height of the navigation menu
    $toggleCollapse.click(function(){
    $nav.toggleClass('collapse'); // We use a pre-defined method called toggleclass. With this method, you can add and remove multiple css classes at the same time 
})

});

