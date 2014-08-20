(function(global){
    var LoanAppFPModel,
    	app = global.app = global.app || {};
    
    LoanAppFPModel = kendo.data.ObservableObject.extend({
        
        currentfid:(localStorage.getItem("fid") !== '') ?  localStorage.getItem("fid") : '',
        funding_priority:'',
        min_loan_amount:'',
        max_loan_amount:'',
        colateral:[],
        
        show:function(){
            
            $.validator.addMethod("greaterThan",
                function (value, element, param) {
                    var $min = $(param);

                    var max1 = $min.val().replace(/,/g,"");
                    var min1 = value.replace(/,/g,"");

                    if (this.settings.onfocusout) 
                    {
                        $min.off(".validate-greaterThan").on("blur.validate-greaterThan", function () {
                       	 $(element).valid();
                   	 });
                	}
                return parseInt(min1) > parseInt(max1);
            });
            
            $.validator.addMethod("greaterThanzero",function (value, element) {
                var num = value.replace(/,/g,"");
                return num > 0;
            });
           
            $("#b2cApp4").validate({

                rules:{
                    priority1:{
                       required:true
                    },
                    ammount:{
                        required:true,
                        number: true,
                        greaterThanzero:true
                    },
                    txtmaxammount:{
                        required:true,
                        number: true,
                        greaterThanzero:true,
                        greaterThan:"#ammount"
                    },
                    'chkuseplan[]':{
                        required:true,
                        minlength:1
                    },
                    agreement: {
                  	  required:true
                    },
                    loanagreement: {
                   	 required:true
                    }

            },
            messages: {

                priority1:{
               	 required:"This value is required",
                },
                ammount:{
                    required:"This value is required",
                    number: "Please enter digits only",
                    greaterThanzero: "Value should be greater then zero"
                },
                txtmaxammount:{
                    required:"This value is required",
                    number: "Please enter digits only",
                    greaterThan:"Must be greater than to minimum amount",
                    greaterThanzero: "Value should be greater then zero"
                },
                'chkuseplan[]':{
                    required:"This value is required",
                    minlength:"Please select atleast one"
                },
                agreement: {
               	 required:"This value is required"
                },
                loanagreement: {
               	 required:"This value is required"
                }

            },
            submitHandler: function(form) {
               /* $("#hidorgtype").val($("#orgtype").val());
                form.submit();
                return false;*/
                }
            });
        },
        
       
        
        loanFPSubmit:function(){
            var status = $("#b2cApp4").valid();

            if(status === false)
            {
	            return false;
            }
          
            var chkuseplan = [];
            var that = this;
            var funProperty 		= that.get("funding_priority"),
            minimunLoanAmount   	= that.get("min_loan_amount").trim(),
            maxLoanAmount	   	= that.get("max_loan_amount").trim();

            var agreement 		  = $("#agreement").is(':checked') ? 1 : 0;
            var loanagreement 	  = $("#loanagreement").is(':checked') ? 1 : 0;
            
            $("#chkuseplan:checked").each(function() {
           	 chkuseplan.push($(this).val());
            });
            
           
            console.log("Funding property :"+funProperty);
            console.log("Minimunm loan amount :"+minimunLoanAmount);
            console.log("Maximum loan amount :"+maxLoanAmount);
            for(i=0;i<chkuseplan.length;i++)
            {
           	 console.log("chkuseplan[]:"+chkuseplan[i]);
            }
            console.log("agreement :"+agreement);
            console.log("loanagreement :"+loanagreement);
            // dataParam['cust_id'] = localStorage.getItem("userID");
            // dataParam['fid'] = localStorage.getItem("fid");
            // dataParam['type'] = '';
            //dataParam['frmname'] = 'b2cApp4';
        }
    });
    
    app.loanFP = {
      viewModel:new LoanAppFPModel()
    };
})(window);