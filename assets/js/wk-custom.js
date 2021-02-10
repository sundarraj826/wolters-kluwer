//HamburgerMenu script
function Hamburgermenu(){
    document.querySelector('.main-wrap').classList.toggle('small-menu');
}

//slimscroll left nav menu
$('.full-height-scroll').slimScroll({
    height: '100%'
});



//Nav left menu dropdown script
    $('.wk-nav-sub-menu a.nav-link').on('click', function(){
        var reportDropdown = $(this).closest('li');       
        if(reportDropdown.is('.active')){ 
            reportDropdown.removeClass('active'); 
        }else{
            $('.wk-nav-sub-menu a.nav-link').closest('li').removeClass('active');
            reportDropdown.addClass('active'); 
        }
     
    });

//Menu Highlight after page load
    $(function () {
    var url = window.location.href;

$('.menu-highlight').each(function(){
    if(url === (this.href)){
        $('.nav li.nav-item').removeClass('active');
        $(this).addClass('active');
        $(this).closest('.nav-item').addClass('active');
       
    }
   
     });
});

//form validation script

function btnsubmit(){
    let emailInput = document.getElementById('loginemail').value;
    let pwInput = document.getElementById('loginpw').value;

    if(emailInput == ''){
       document.getElementById('emailInputError').innerHTML = 'Please Fill the Email';
       return false;
    }
    if(emailInput.indexOf('@') <= 0){
        document.getElementById('emailInputError').innerHTML = 'invalid email address';
        return false;
    }
    if(pwInput == ''){
        document.getElementById('pwInputError').innerHTML = 'Please Fill the Password';
        return false;
    }
}