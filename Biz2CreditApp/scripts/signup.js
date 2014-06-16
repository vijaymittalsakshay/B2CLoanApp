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
        alert(loanAmount);
        alert(yearInBussiness);
        alert(yourAnnualRevenue);
        alert(yourCreditScore);
        alert(yourName);
        alert(yourEmail);
        alert(yourPhone);
        
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
        
        
    },
        
    });
    
    app.signupService = {
        viewModel: new SignUpViewModel()	
    };
})(window,jQuery);