$(document).ready(function(){
    console.log("People page!");

    $('.peopleBio').hide();
    $('.peopleList').show();
    $('#backToPeopleList').on("click", backToPeopleList);
   
    let faculty = [
        {id: 101, firstName: 'Nike',  lastName: 'Dattani',   imgName: 'NikeDattani.png',     title: 'PhD Oxford'},
        {id: 102, firstName: 'Erin',  lastName: 'Zuo',       imgName: 'ErinZuo.jpg',         title: 'PhD WIT'},
        {id: 103, firstName: 'Deyan', lastName: 'Mihaylov',  imgName: 'DeyanMihaylov.png',   title: 'PhD Cambridge'}
    ];

    let ids = [101, 102, 103];

    ids.forEach(id => {
        $(`#${id}`).on("click", showBio);
    });

    function showBio(){
        console.log("You clicked on id: ", this.id);
        $('.peopleList').hide();
        $('.peopleBio').show();
    };

    function backToPeopleList(){
        $('.peopleList').show();
        $('.peopleBio').hide();
    }
})

/*********************************************************************************/
/* Responsive NavBar                                                             */
/*********************************************************************************/

let mainNav = document.getElementById('main-nav');
let navBarToggle = document.getElementById('navbar-toggle');

$(navBarToggle).click(function(){
    if($(mainNav).height() != 0){
        $(mainNav).animate({height: 0}, 1000);
        $(this).toggleClass('openAfter');
        sleep(100).then(() => {
            $(this).toggleClass('openDuring');
        });
        sleep(100).then(() => {
            $(this).toggleClass('open');
        });
    }
        
    else {
        $(mainNav).animate({height: 250}, 1000);
        $(mainNav).css("display", "block");
        $(this).toggleClass('open');
        sleep(100).then(() => {
            $(this).toggleClass('openDuring');
        });
        sleep(150).then(() => {
            $(this).toggleClass('openAfter');
        });
    }   

});

function sleep (time){
    return new Promise((resolve) => setTimeout(resolve,time));
}

/*Checking window size so that nav bar doesn't mess up*/
var size = window.matchMedia("(min-width: 890px)")

function sizeToggle(x){
    if (size.matches) {
        $(mainNav).css("display", "flex");
    }
    else 
        $(mainNav).css("display", "block");

}

sizeToggle(size)
size.addListener(sizeToggle)


let test = document.getElementById('Faculty');

$(test).click(function(){
    alert(window.innerWidth);

});