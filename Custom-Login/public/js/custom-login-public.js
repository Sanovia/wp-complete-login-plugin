(function ($) {
    'use strict';

    /**
     * All of the code for your public-facing JavaScript source
     * should reside in this file.
     *
     * Note: It has been assumed you will write jQuery code here, so the
     * $ function reference has been prepared for usage within the scope
     * of this function.
     *
     * This enables you to define handlers, for when the DOM is ready:
     *
     * $(function() {
     *
     * });
     *
     * When the window is loaded:
     *
     * $( window ).load(function() {
     *
     * });
     *
     * ...and/or other possibilities.
     *
     * Ideally, it is not considered best practise to attach more than a
     * single DOM-ready or window-load handler for a particular page.
     * Although scripts in the WordPress core, Plugins and Themes may be
     * practising this, we should strive to set a better example in our own work.
     */
    $(function () {

        var loginData = $("#loginForm").serialize();
        var signupData = $("#signupForm").serialize();
        var forgotpwdData = $("#forgotpwdForm").serialize();

        $('.tab-custom a').on('click', function (e) {

            e.preventDefault();
            $('#forgotpwd').hide();
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');

            var target = $(this).attr('href');

            $('.tab-content > div').not(target).hide();

            $(target).fadeIn(600);

        });
        $('.forgot-pwd').on('click', function (e) {
            e.preventDefault();
            $('.tab-group').hide();
            $('.tab-content').hide();
            $('#forgotpwd').show();

        });
        $('.back-to-login').on('click', function (e) {
            e.preventDefault();
            $('#forgotpwd').hide();
            $('.tab-group').show();
            $('.tab-content').show();


        });
        $('.form .login-btn').on('click', function (e) {
            e.preventDefault();
             $("#loginForm").validate({
                rules: {
                    emaillogin: {
                        required: true,
                        email: true,
                        maxlength:254
                    },
                    pwdlogin: {
                        required: true,
                        minlength: 4,
                        maxlength: 16
                    }
                },
                messages: {
                     pwd:{
                       required:"Password is required" 
                    },
                    email: {
                        required: "Enter your email address to login",
                        email: "Your email address must be in the format of name@domain.com"
                    }
                }
            });
            if($('#loginForm').valid()){
                   $.ajax({
                    type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
                    url: 'http://vendor.easydelivery.pk/api/v1/consumer/orders', // the url where we want to POST
                    data: loginData, // our data object
                    dataType: 'json' // what type of data do we expect back from the server
                })
                // using the done promise callback
                .done(function (data) {
                    console.log("success");
                        $('.tab-group').hide();
            $('.tab-content').hide();
            $('#forgotpwd').hide();
                    $('.response').text('You are Logged In!');
                        
                })

            // using the fail promise callback
            .fail(function (data) {

                // show any errors
                // best to remove for production
                console.log("failed");
                $('.response').text('Failed to Login!');
            });

            }
         
        });
        $('.form .signup-btn').on('click', function (e) {
            e.preventDefault();
            // process the form
            $("#signupForm").validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 3,
                        maxlength: 35
                    },
                    lastname: {
                        required: true,
                        minlength: 3,
                        maxlength: 35
                    },
                    email: {
                        required: true,
                        email: true,
                        maxlength:254
                    },
                    pwd: {
                        required: true,
                        minlength: 4,
                        maxlength: 16
                    }
                },
                messages: {
                    name:{
                        required:"Please specify your first-name"
                    },
                    lastname:{
                       required:"Please specify your last-name" 
                    },
                     pwd:{
                       required:"Password is required" 
                    },
                    email: {
                        required: "We need your email address to contact you",
                        email: "Your email address must be in the format of name@domain.com"
                    }
                }
            });
            if ($('#signupForm').valid()) {
                $.ajax({
                        type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
                        url: 'http://vendor.easydelivery.pk/api/v1/consumer/orders', // the url where we want to POST
                        data: signupData, // our data object
                        dataType: 'json' // what type of data do we expect back from the server
                    })
                    // using the done promise callback
                    .done(function (data) {
                        console.log(data.message);
                     $('.tab-group').hide();
            $('.tab-content').hide();
            $('#forgotpwd').hide();
                        $('.response').text('Successfully Registered!');
                    
                    })

                // using the fail promise callback
                .fail(function (data) {

                    // show any errors
                    // best to remove for production
                    console.log("failed");
                    $('.response').text('Registration Failed!');
                });
            }
        });
              $('.forgotpwd-btn').on('click', function (e) {
            e.preventDefault();
             $("#forgotpwdForm").validate({
                rules: {
                    emailforgotpwd: {
                        required: true,
                        email: true,
                        maxlength:254
                    }
                },
                messages: {
                    emailforgotpwd: {
                        required: "Enter your email address to reset password",
                        email: "Your email address must be in the format of name@domain.com"
                    }
                }
            });
            if($('#forgotpwdForm').valid()){
                   $.ajax({
                    type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
                    url: 'http://vendor.easydelivery.pk/api/v1/consumer/orders', // the url where we want to POST
                    data: forgotpwdData, // our data object
                    dataType: 'json' // what type of data do we expect back from the server
                })
                // using the done promise callback
                .done(function (data) {
                    console.log("success");
                        $('.tab-group').hide();
            $('.tab-content').hide();
            $('#forgotpwd').hide();
                    $('.response').text('Check your mail!');
                })

            // using the fail promise callback
            .fail(function (data) {

                // show any errors
                // best to remove for production
                console.log("failed");
                $('.response').text('Try Again!');
            });

            }
         
        });
    });


})(jQuery);