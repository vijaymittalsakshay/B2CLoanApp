(function (global,$) {
    var SignUpViewModel,
        app = global.app = global.app || {};

    SignUpViewModel = kendo.data.ObservableObject.extend({
    loanAmount:'',
    yearInBussiness:'',
    yourAnnualRevenue:'',
    yourCreditScore:'',
    yourName:'',
    yourEmail:'',
    yourPhone:'',
    signUpFormShow:function()
    {
        $("select option[value='0']").attr("selected","selected");
    },
    newUserForb2c:function(e)
    {
        var that = this;
		loanAmount = that.get("loanAmount").trim();
        yearInBussiness = that.get("yearInBussiness").trim();
        yourAnnualRevenue = that.get("yourAnnualRevenue").trim();
        yourCreditScore = that.get("yourCreditScore").trim();
        yourName = that.get("yourName").trim();
        yourEmail = that.get("yourEmail").trim();
        yourPhone = that.get("yourPhone").trim();
        
        if (loanAmount === "0" || loanAmount === "") {
                navigator.notification.alert("Please select loan amount you need.",
                    function () { }, "Notification", 'OK');

                return;
        }
        if (yearInBussiness === "0" || yearInBussiness === "") {
                navigator.notification.alert("Please select years in bussiness.",
                    function () { }, "Notification", 'OK');

                return;
        }
        if (yourAnnualRevenue === "0" || yourAnnualRevenue === "") {
                navigator.notification.alert("Please select your annual revenue.",
                    function () { }, "Notification", 'OK');

                return;
        }
        if (yourCreditScore === "0" || yourCreditScore === "") {
                navigator.notification.alert("Please select your credit score.",
                    function () { }, "Notification", 'OK');

                return;
        }
        if (yourName === "") {
                navigator.notification.alert("Please enter your name.",
                    function () { }, "Notification", 'OK');

                return;
        }
        if (yourEmail === "") {
                navigator.notification.alert("Please enter your email address!.",
                    function () { }, "Notification", 'OK');

                return;
        }
        if (!app.loginService.viewModel.validateEmailId(yourEmail)) {
                navigator.notification.alert("Please enter a valid email address.",
                    function () { }, "Notification", 'OK');

                return;
        }
        if (yourPhone === "") {
                navigator.notification.alert("Please enter phone Number.",
                    function () { }, "Notification", 'OK');

                return;
        }
        if (!$.isNumeric(yourPhone)) {
        	navigator.notification.alert("Phone Number should be numeric.");

        	return;
        }
        if (yourPhone.length !== 10) {
        	navigator.notification.alert("Phone Number should be 10 digits.");

        	return;
        }

        var ret = yourName.split(" ");
        var FirstName = ret[0];
        if(typeof ret[1] !=='undefined')
        {
        	LastName = ret[1]; 
        }
        else
        {
        	LastName = ' '; 
        }
		app.loginService.viewModel.showloder();
        var dataSource = new kendo.data.DataSource({
        transport: {
        read: {
                url: "https://www.biz2services.com/mobapp/api/user",
                type:"POST",
                dataType: "json", // "jsonp" is required for cross-domain requests; use "json" for same-domain requests
                data: { apiaction:"usersignup",FirstName:FirstName,LastName:LastName,Phone:yourPhone,Email:yourEmail,Track:'mobile',Source:'mobile',Revenue:yourAnnualRevenue,LoanAmount:loanAmount,AgeOfBusiness:yearInBussiness,CreditScore:yourCreditScore,partner:'mobile'}
        }
        },
        schema: {
            data: function(data)
        	{
            	return [data];
        	}
        },
        error: function (e) {
        	 apps.hideLoading();
             navigator.notification.alert("Server not responding properly.Please check your internet connection.",
                function () { }, "Notification", 'OK');
        },

        });
        dataSource.fetch(function(){
            
        	var data = this.data();
            app.loginService.viewModel.hideloder();
        	if(data[0]['results']['faultcode'] === 1)
            {
                
                $msg= "Your account has been created successfully";
                app.loginService.viewModel.mobileNotification($msg,'info');
                app.loginService.viewModel.setUserLogin(data[0]['results']['UserData']);
            }
            else if(data[0]['results']['faultcode'] === 0)
            {
               $msg= "Registration not successfull. Please try again.";
               app.loginService.viewModel.mobileNotification($msg,'info'); 
               return;
            }
            else if(data[0]['results']['faultcode'] === 3)
            {
               $msg= "Please enter all fields.";
               app.loginService.viewModel.mobileNotification($msg,'info');
               return;
            }
            else if(data[0]['results']['faultcode'] === 4)
            {
               $msg= "Please enter a valid email address.";
               app.loginService.viewModel.mobileNotification($msg,'info');
               return;
            }
            else if(data[0]['results']['faultcode'] === 5)
            {
               $msg= "This email address already exists.";
               app.loginService.viewModel.mobileNotification($msg,'info');
               return;
            }
            else{
                $msg= "Server not responding properly,Please try again";
                app.loginService.viewModel.mobileNotification($msg,'info');
                return;
            }            

        });
        
    },
    checkEnterSignUp: function (e) {

            if (e.keyCode === 13) {
                $(e.target).blur();
                app.signupService.viewModel.newUserForb2c();
            }
        },    
        
    });
    
    app.signupService = {
        viewModel: new SignUpViewModel()	
    };
})(window,jQuery);