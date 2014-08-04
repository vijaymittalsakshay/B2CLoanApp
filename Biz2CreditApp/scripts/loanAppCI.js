(function (global) {
    var loanCIViewModal,
        app = global.app = global.app || {};

    loanCIViewModal = kendo.data.ObservableObject.extend({
        Owner_FirstName:'',
        Owner_LastName:'',
        Owner_email:'',
        Owner_JobTitle:'',
        Owner_Civic:'',
        Owner_StreetAddress:'',
        state_user:'',
        cmbCity:'',
        OwnZipCode:'',
        owner_month:'',
        owner_day:'',
        owner_year:'',
        own_percent:'',
        OwnerFirstName2:'',
        OwnerLastName2:'',
        OwnerEmail2:'',
        OwnJobTitle2:'',
        OwnerCivic2:'',
        OwnerStreetAddress2:'',
        state_user2:'',
        cmbCity_user2:'',
        OwnZipCode2:'',
        owner_month2:'',
        owner_day2:'',
        owner_year2:'',
        own_percent2:'',
        
        show:function() {
            
            $("#own_percent").change(function() {
                if($(this).val()>=1 && $(this).val()<100) {
                	$('#add-ownerForm').show();
                } else {
                	$('#add-ownerForm').hide();
                }			

            });
            $("#b2cApp1").validate({
                rules: {
                    OwnerFirstName: {
                    	loginRegex: true, 
                    	required: true
                    },
                    OwnerLastName: { 
                    	loginRegex: true, 
                    	required: true 
                    },
                    email: { 
                    	email: true, 
                    	required: true 
                    },
                    OwnJobTitle: { 
                    	loginRegex: true, 
                    	required: true 
                    },
                    OwnerCivic: { 
                    	required: true,
                    	number : true
                    },
                    OwnerStreetAddress: {
                    	required: true
                    },
                    state_user: {
                    	required: true
                    },
                    cmbCity_user: {
                    	required: true
                    },
                    OwnZipCode: {
                    	required: true,
                    	zipcodeUS: true
                    },
                    owner_year: {
                    	required: true,
                    	dobminor: true
                    },
                    owner_month: {
                    	required: true
                    },
                    owner_day: {
                    	required: true
                    },                        
                    own_percent: {
                    	required: true
                    }

                },
                messages: {
                    OwnerFirstName: {
                    	loginRegex: "Letters, numbers,space or underscores only please",
                    	required: "This value is required"

                    },
                    OwnerLastName: {
                    	loginRegex: "Letters, numbers,space or underscores only please",
                    	required: "This value is required"

                    },
                    OwnerCivic: {
                    	required: "This value is required",
                    	number: "Please enter digits only"
                    },
                    OwnerStreetAddress: {
                    	required: "This value is required"
                    },
                    cmbCity_user: {
                    	required: "This value is required"
                    },
                    state_user: {
                    	required: "This value is required"
                    },
                    OwnZipCode: {
                    	required: "This value is required",
                    	zipcodeUS: "Please enter valid zipcode"

                    },
                    owner_year: {
                    	required:  "This value is required",
                   	 dobminor: "Owner age should be greater than 18 years"
                    },
                    owner_month: {
                    	required: "This value is required"                                        
                    },
                    owner_day: {
                    	required: "This value is required"                                        
                    },
                    own_percent: {
                    	required: "This value is required"
                    }
                },
                submitHandler: function(form) {
                	// $("#b2cApp1 #next").prop("disabled", true);
                	return false;
                }
            });
            
            var addownerForm = $("#add-ownerForm");
            var index = $('#totownerDiv').val();                  
            addownerForm.on("click", function() {
                
                var form = app.loanAppCI.viewModel.getownerForm(++index)
                $('#totownerDiv').val(index);
                var tot= parseInt($('#ownercurrntControl').val())+1;
                $('#ownercurrntControl').val(tot);
                $("#row_owners").append(form); 
                var ownerFlag = app.loanAppCI.viewModel.checkownerFlag();
                

                $("#OwnerFirstName"+index).rules("add", {
                loginRegex: true,
                messages: {
                required: "Letters, numbers,space or underscores only please",
                }
                });

                $("#OwnerFirstName"+index).rules("add", {
                required: true,
                messages: {
                required: "This value is required"
                }
                });

                $("#OwnerLastName"+index).rules("add", {
                loginRegex: true,
                messages: {
                required: "Letters, numbers,space or underscores only please",
                }
                });



                $("#OwnerLastName"+index).rules("add", {
                required: true,
                messages: {
                required: "This value is required"
                }
                });               

                $("#email"+index).rules("add", {
                email: true,
                messages: {
                email: "Please enter valid email"
                }
                });

                $("#email"+index).rules("add", {
                required: true,
                messages: {
                required: "This value is required"
                }
                });

                $("#OwnJobTitle"+index).rules("add", {
                required: true,
                messages: {
                required: "This value is required"
                }
                }); 

                $("#OwnerCivic"+index).rules("add", {
                number : true,
                messages: {
                required: "Please enter digits only"
                }
                });

                $("#OwnerCivic"+index).rules("add", {
                required: true,
                messages: {
                required: "This value is required"
                }
                });

                $("#OwnerStreetAddress"+index).rules("add", {
                required: true,
                messages: {
                required: "This value is required"
                }
                });

                $("#own_state"+index).rules("add", {
                required: true,
                messages: {
                required: "This value is required"
                }
                });                

                $("#own_city"+index).rules("add", {
                required: true,
                messages: {
                required: "This value is required"
                }
                });

                $("#OwnZipCode"+index).rules("add", {
                required: true,
                messages: {
                required: "This value is required"
                }
                });

                $("#OwnZipCode"+index).rules("add", {
                number : true,
                messages: {
                required: "Please enter digits only"
                }
                });

                $("#owner_month"+index).rules("add", {
                required: true,
                messages: {
                required: "This value is required"
                }
                });

                $("#owner_day"+index).rules("add", {
                required: true,
                messages: {
                required: "This value is required"
                }
                });

                $("#owner_year"+index).rules("add", {
                required: true,
                messages: {
                required: "This value is required"
                }
                });

                $("#own_percent"+index).rules("add", {
                required: true,
                messages: {
                required: "This value is required"
                }
                });

                $("#own_percent"+index).rules("add", {
                ownerPercent: true,
                messages: {
                ownerPercent: "Ownership % should be less than or equal to 100"
                }
                });
               

            //var totalOutstanding=0;               
            $("#remove-ownerform"+index).on("click", function() { 

                var strdelownids = $("#deldbownerids").val(); 
                var downid = parseInt($("#own_id"+index).val());
                if(downid>0){
                	strdelownids = strdelownids+downid+",";                                            
                	$("#deldbownerids").val(strdelownids);
                }
                var currentIndex = $(this).data( "index" );                    
                $("#adddowner" + currentIndex).remove();			
                $('#ownercurrntControl').val($('#ownercurrntControl').val()-1);
                //divId.push(currentIndex);
                var newstrdeldivs = $("#ownerdeleteIds").val(); 
                newstrdeldivs = newstrdeldivs+currentIndex+',';                                            
                $("#ownerdeleteIds").val(newstrdeldivs); 
                var ownerFlag = app.loanAppCI.viewModel.checkownerFlag();
                
            });

            });

        },
        getownerForm:function(index) {
            return $('\
            <div class="rw_lin addons  clearfix" id="adddowner'+ index+'"><p class="imp40">'+app.loanAppCI.viewModel.createFormfields(index)+'</p><p><a class="rem_col" href="javascript:void(0);" id="remove-ownerform' + index + '" data-index="' + index + '">Remove</a></p></div>');
		},
        createFormfields:function (NumOfDiv) {
            
            var blegal = $('#blegal_struct').val();
            var str='<div class="rws rw1 clearfix"><div class="lftit">Applicant/Owner</div>';
            str += "<p><input type='text' class='IN1' name='OwnerFirstName"+NumOfDiv+"' id='OwnerFirstName"+NumOfDiv+"' title='First Name' placeholder='First Name' value='' /></p>";
            str += "<p><input type='text' class='IN1' style='width: 312px;' name='OwnerLastName"+NumOfDiv+"' id='OwnerLastName"+NumOfDiv+"' title='Last Name' placeholder='Last Name' value='' />";
            str += "<input type='hidden'  name='own_id"+NumOfDiv+"' id='own_id"+NumOfDiv+"'  value='' />";
            str += "<input type='hidden'  name='isCheckScore"+NumOfDiv+"' id='isCheckScore"+NumOfDiv+"'  value='' />";
            str += "<input type='hidden'  name='creditScore"+NumOfDiv+"' id='creditScore"+NumOfDiv+"'  value='' />";
            str += "<input type='hidden'  name='reasonlscore"+NumOfDiv+"' id='reasonlscore"+NumOfDiv+"'  value='' />";
            str += '</p></div>';
            str += '<div class="rws rw1 clearfix"><div class="lftit">Email</div>';
            str += "<p><input type='text' class='IN1' name='email"+NumOfDiv+"' id='email"+NumOfDiv+"' original-title='Email Address' placeholder='Email Address' value='' /></p>";
            str += "<p><select class='IN1' name='OwnJobTitle"+NumOfDiv+"' id='OwnJobTitle"+NumOfDiv+"' original-title='Job Title'>";
            str += '<option value="">Select Job Title</option>';

            if(blegal === 'Sole Proprietorship'){
            	str += '<option value="Sole Proprietor">Sole Proprietor</option>';
            }
            else if(blegal === 'Corporation' || blegal === 'Non Profit Corp'){
                str += '<option value="Assistant Treasurer">Assistant Treasurer</option>';
                str += '<option value="Chief Accounting Officer">Chief Accounting Officer</option>';
                str += '<option value="Chief Executive Officer">Chief Executive Officer</option>';
                str += '<option value="Chief Financial Officer">Chief Financial Officer</option>';            
                str += '<option value="Chief Operating Officer">Chief Operating Officer</option>';
                str += '<option value="Director">Director</option>';
                str += '<option value="General Manager">General Manager</option>';
                str += '<option value="Owner">Owner</option>';            
                str += '<option value="President">President</option>';
                str += '<option value="Treasurer">Treasurer</option>';
                str += '<option value="Vice President">Vice President</option>';

            }
            else if(blegal === 'Partnership'){
            	str += '<option value="Partner">Partner</option>';
            }
            else if(blegal === 'Limited Partnership'){
            	str += '<option value="General Partner">General Partner</option>';
            	str += '<option value="Limited Partner">Limited Partner</option>';
            }
            else if(blegal === 'Limited Liability Company'){
            	str += '<option value="Managing Member">Managing Member</option>';
            	str += '<option value="Member">Member</option>';
            }        
            str += '</select></p></div>';

            str += '<div class="rws rw2 clearfix"><div class="lftit">Home Address</div><div class="rwfil aut clearfix"><div class="rw_lin clearfix">'; 
            str += "<p><input maxlength='15' type='text' class='IN1 ipsm1' name='OwnerCivic"+NumOfDiv+"' id='OwnerCivic"+NumOfDiv+"' title='Street No.' placeholder='Street No.' value='' /></p>";
            str += "<p><input type='text' class='IN1 ipsm4' name='OwnerStreetAddress"+NumOfDiv+"' id='OwnerStreetAddress"+NumOfDiv+"' title='Street Name/Apt/Suite/Unit' placeholder='Street Name/Apt/Suite/Unit' value='' /></p>";
            str += '<div class="clear"></div></div>';

            str += "<div class='rw_lin clearfix'><p id='ownerState"+NumOfDiv+"'>\
            "+app.loanAppCI.viewModel.createStateCmb(NumOfDiv)+"\
            <select name='own_state"+NumOfDiv+"' id='own_state"+NumOfDiv+"'><option value=''>Select State</option></select></p>";
            str += "<p id='ownerCity"+NumOfDiv+"'>\
            <select class='IN1b ipsm3' name='own_city"+NumOfDiv+"' id='own_city"+NumOfDiv+"' original-title='Select City'><option value=''>Select City</option></select></p>";

            str += "<p><input maxlength='5' type='text' class='IN1 ipsm1' name='OwnZipCode"+NumOfDiv+"' id='OwnZipCode"+NumOfDiv+"' title='Zip Code' placeholder='Zip Code' value='' /></p>";
            str += '</div></div></div>';

            str += '<div class="clear"></div>';

            str += '<div class="rws rw2 clearfix"><div class="lftit">Date of Birth</div><div class="rwfil aut clearfix">';
            str += "<p>\
            "+app.loanAppCI.viewModel.createDobMonth(NumOfDiv)+"\
            </p>";
            str += "<p>\
            "+app.loanAppCI.viewModel.createDobDay(NumOfDiv)+"\
            </p>";
            str += "<p>\
            "+app.loanAppCI.viewModel.createDobYear(NumOfDiv)+"\
            </p>";
            str += '</div></div>';
            str += '<div class="rws rw4 clearfix"><div class="lftit">Ownership Percentage</div><div class="rwfil aut clearfix">';
            str += "<p>\
            "+app.loanAppCI.viewModel.createOwnership(NumOfDiv)+"\
            </p>";
            str += '</div></div>';
            return str;
		},
        createStateCmb:function (NumOfDiv) {
            var str='';        
            var val= 253;
            $.ajax({
            	url: "https://www.biz2beta.com/serverexe.php",
            	type: "GET",
            	data: { "cmb_ownstate": val },
            	beforeSend: function(){
            		$('#ownerState'+NumOfDiv+'').after('<div id="loader"></div>');
            		$('#own_city'+NumOfDiv+'').attr("disabled","disabled");                    
            	},
            	success: function(data) {                     				
            		str = "<select name='own_state"+NumOfDiv+"' id='own_state"+NumOfDiv+"' class='IN1b ipsm1' original-title='Select State' onChange='javascript:createCityCmb(this.value, "+NumOfDiv +")'>"+data+"</select>";                    
            		$('#ownerState'+NumOfDiv+'').html(str); 
            		$('#own_city'+NumOfDiv+'').removeAttr("disabled","disabled");
            		return str;                
            	}          
            });	
		},
        createDobMonth:function(NumOfDiv) {
            var str='';
            str ="<select name='owner_month"+NumOfDiv+"' id='owner_month"+NumOfDiv+"'original-title='Month' class='IN1b ipsm1'>";
            str +='<option value="">Month</option>';
            var months = new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");        
            var mlength = months.length;
            for(var i=1; i<=12;i++){
                if(i<10){
                	mval = '0'+i;
                } else {
                	mval = i; 
                } 
                var index = i-1;
                str +='<option value="'+mval+'">'+months[index]+'</option>';
            }
            str +='</select>';
            return str;
		},
        createDobDay:function(NumOfDiv) {
            var str='';
            str ="<select name='owner_day"+NumOfDiv+"' id='owner_day"+NumOfDiv+"'original-title='Day' class='IN1b ipsm1'>";
            str +='<option value="">Day</option>';        
            for(var i=1; i<=31;i++){
            if(i<10){
            	dval = '0'+i;
            } else {
            	dval = i; 
            } 
            str +='<option value="'+dval+'">'+dval+'</option>';
            }
            str +='</select>';
            return str;
		},
        createDobYear:function (NumOfDiv) {
        var str='';
        str ="<select name='owner_year"+NumOfDiv+"' id='owner_year"+NumOfDiv+"'original-title='Year' class='IN1b ipsm1'>";
        str +='<option value="">Year</option>';        
        for(i=1914; i<=2014;i++){          
        	str +='<option value="'+i+'">'+i+'</option>';
        }
        str +='</select>';
        return str;
        },
        createOwnership:function (NumOfDiv){
            var str='';
            str ="<select name='own_percent"+NumOfDiv+"' id='own_percent"+NumOfDiv+"' original-title='Ownership Percentage' class='IN1b ipsm3'>";
            str +='<option value="">Ownership Percentage</option>';        
            for(i=100; i>=1;i--){          
            str +='<option value="'+i+'">'+i+'</option>';
            }
            str +='</select>';
            return str; 
        },
        checkownerFlag:function (){
            var totdivs = $('#totownerDiv').val();
            var adivs = $('#aredyownerdeleteIds').val();
            var newdivs = $('#ownerdeleteIds').val();

            if(adivs !=='' || newdivs !=='') {
            	var strdivs   = '';   

                if(totdivs >0 && adivs!=='' && adivs!==',' && newdivs!=='' && newdivs!==',' ){
                	strdivs = adivs+newdivs;
                }
                if(totdivs >0 && adivs!=='' && adivs!==',' && newdivs===''){
                	strdivs = adivs;
                }
                if(totdivs >0 && newdivs!=='' && newdivs!==',' && adivs===''){
                	strdivs = newdivs;
                }
                var strlength = parseInt(strdivs.length)-1;
                strdivs = strdivs.substring(0,strlength);
                var strdivarr = strdivs.split(",");
                var totdeldivs = strdivarr.length;    
                actualown = parseInt(totdivs - totdeldivs)+1;
            } 
            else 
            {
                actualown = parseInt(totdivs)+1;
            }      
            //alert(totdivs+" : "+adivs+" : "+newdivs+"   ="+actualown);
            if(actualown >= 6){
            	$('#add-ownerForm').hide();
            }else {
            	$('#add-ownerForm').show();
            }
		}

            
            
        
    });
   
    app.loanAppCI = {
        viewModel: new loanCIViewModal()	
    };
})(window);
