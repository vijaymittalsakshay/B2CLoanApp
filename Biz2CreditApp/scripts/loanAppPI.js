(function (global) {
    var loanPIViewModal,
        app = global.app = global.app || {};

    loanPIViewModal = kendo.data.ObservableObject.extend({
		currentfid:(localStorage.getItem("fid") !== '') ?  localStorage.getItem("fid") : '',
        
        
        show:function() {
            
			app.loanAppPI.viewModel.getCheckCreditScoreText();
        

            
        },
        getCheckCreditScoreText:function()
        {   
            strdeldivids = "";
            totaldivs = app.loanAppCI.viewModel.get("totownerDiv");
            newdeldivids = app.loanAppCI.viewModel.get("ownerdeleteIds");
            deldivids = '';
            adelids = $("#aredyownerdeleteIds").val();
            $.each( newdeldivids, function( key, value ) {
                if($.isNumeric(key))
                {
                	deldivids += value+',';
                }
            });
            if(deldivids !=='' && adelids !==''){
            	strdeldivids = deldivids+","+adelids;
            }
            else if(deldivids !=='' && adelids === ''){
            	strdeldivids = deldivids;
            }
            else if(deldivids ==='' && adelids !== ''){
            	strdeldivids = adelids;
            } 
            else {
    			strdeldivids = "";
            }
            
    		strdivids = '';         

            for( var c=0; c<=totaldivs; c++){
            	if(strdeldivids !=='') {
                	if(!strdeldivids.match(c)) {

                        // Add validation Start
console.log('c'+c);
                        $(".crYes"+c).rules("add", {
                            required: true,
                            messages: {
                            	required: "This value is required",
                            }
                        });

                        $("#credittype"+c).rules("add", {
                            required: true,
                            messages: {
                            	required: "This value is required",
                            }
                        });

                        $(".chkreason"+c).rules("add", {
                            required: true,                            
                            messages: {
                            	required: "This value is required",
                            }
                        });
                        $(".chkreason"+c).rules("add", {
                            minlength: 1,                            
                            messages: {
                            	minlength: "This value is required",
                            }
                        });

                        // End Validation

                        if(c === 0 ) {
                        	var creditScorenodel ="Would you like us to check "+ $('#OwnerFirstName').val() +"'s credit score for free?*";
                        	$("#creditScoreTextOwn"+c).html(creditScorenodel);
                        	$('#ownercscore'+c+'').show();
                        }else
                        {
    						creditScorenodel ="Would you like us to check "+ $('#OwnerFirstName'+c).val() +"'s credit score for free?*";
                        	$("#creditScoreTextOwn"+c).html(creditScorenodel);
                        	$('#ownercscore'+c+'').show();
                        }

    					iscschk = $("#isCheckScore"+c).val();
                        if(iscschk === ''){
        					iscschk = $("input[name='check_credit_score"+c+"']:checked").val();                           
                        }
    					dbcscore = $("#creditScore"+c).val();
    					cmbcscore = $("#credittype"+c).val();
                        if(cmbcscore !==''){
    						cscore = cmbcscore;
                        } else {
    						cscore = dbcscore;
                        }
                        var rlscore = $("#reasonlscore"+c).val();                        

                        if(rlscore !==''){
                            $('#ifless'+c).show();
                            var reasonarr = rlscore.split(",");
                            var maxt = reasonarr.length;                            
                            for(var r=0; r<maxt; r++){
                                
                            	var rid = reasonarr[r];
                            	$("#chk_reason"+c+"_"+rid).prop("checked", true);
                            }

                        } 
                        else 
                        {
                        	$('#ifless'+c).hide();
                        }

                        if(iscschk ==='N'){
                            $("#check_credit_score"+c+"2").prop("checked", true);
                            $("#credittype"+c+" option[value='"+cscore+"']").prop('selected',true);
                            $('#crdscorerYes'+c).show();
                            $('#crdscorerNo'+c).hide();                             
                            if(cscore < 659){
                            	$('#ifless'+c).show();
                        	} 
                            else 
                            {
                        		$('#ifless'+c).hide();
                        	}
                        } 
                        else if(iscschk ==='Y'){
                            $("#check_credit_score"+c+"1").prop("checked", true);
                            $(".crYes"+c).prop('disabled', 'disabled');
                            $('#crdscorerYes'+c).hide();
                            $('#crdscorerNo'+c).hide();
                            $('#ifless'+c).hide();
                        }
                        else {                            
                            $("#check_credit_score"+c+"1").prop("checked", false);
                            $("#check_credit_score"+c+"2").prop("checked", false);
                            $('#crdscorerYes'+c).hide();
                            $('#crdscorerNo'+c).hide();
                            $('#ifless'+c).hide();                         
                        }

                        } else {
                        	$('#ownercscore'+c+'').hide();    
                        }
                        } else { 

                        // Add validation Start

                        $(".crYes"+c).rules("add", {
                            required: true,
                            messages: {
                            	required: "This value is required",
                            }
                        });

                        $("#credittype"+c).rules("add", {
                            required: true,
                            messages: {
                            	required: "This value is required",
                            }
                        });

                        $(".chkreason"+c).rules("add", {
                            required: true,                            
                            messages: {
                            	required: "This value is required",
                            }
                        });
                        $(".chkreason"+c).rules("add", {
                            minlength: 1,                            
                            messages: {
                            	minlength: "This value is required",
                            }
                        });

                        // End Validation

                        if(c ===0 ) {
                        
                            creditScorenodel ="Would you like us to check "+ $('#OwnerFirstName').val() +"'s credit score for free?*";
                        	$("#creditScoreTextOwn"+c).html(creditScorenodel);
                        	$('#ownercscore'+c+'').show();
                        } 
                        else
                        {
                            creditScorenodel ="Would you like us to check "+ $('#OwnerFirstName'+c).val() +"'s credit score for free?*";
                            $("#creditScoreTextOwn"+c).html(creditScorenodel);
                            $('#ownercscore'+c+'').show();
                        }

                		iscschk = $("#isCheckScore"+c).val();
                            
                        if(iscschk === ''){
                			iscschk = $("input[name='check_credit_score"+c+"']:checked").val();                           
                        }
                            
                		dbcscore = $("#creditScore"+c).val();
                		cmbcscore = $("#credittype"+c).val();
                            
                        if(cmbcscore !==''){
                			cscore = cmbcscore;
                        } else {
                			cscore = dbcscore;
                        }
                            
                		rlscore = $("#reasonlscore"+c).val();                        

                        if(rlscore !==''){
                        	$('#ifless'+c).show();
                			reasonarr = rlscore.split(",");
                			maxt = reasonarr.length;                            
                        	for(var r=0; r<maxt; r++){
                				rid = reasonarr[r];
                        		$("#chk_reason"+c+"_"+rid).prop("checked", true);
                        	}

                        }
                        else
                        {
                        	$('#ifless'+c).hide();
                        }

                        if(iscschk ==='N'){
                        	$("#check_credit_score"+c+"2").prop("checked", true);
                        	$("#credittype"+c+" option[value='"+cscore+"']").prop('selected',true);
                        	$('#crdscorerYes'+c).show();
                        	$('#crdscorerNo'+c).hide();                             
                            if(cscore < 659){
                            	$('#ifless'+c).show();
                            } else {
                            	$('#ifless'+c).hide();
                            }
                        } 
                        else if(iscschk ==='Y'){
                            
                            $("#check_credit_score"+c+"1").prop("checked", true);
                            $(".crYes"+c).prop('disabled', 'disabled');
                            $('#crdscorerYes'+c).hide();
                            $('#crdscorerNo'+c).hide();
                            $('#ifless'+c).hide();
                        }
                        else
                        {                            
                            $("#check_credit_score"+c+"1").prop("checked", false);
                            $("#check_credit_score"+c+"2").prop("checked", false);
                            $('#crdscorerYes'+c).hide();
                            $('#crdscorerNo'+c).hide();
                            $('#ifless'+c).hide();                         
                        }                    
                	}
            	}
        },
        

            
            
        
    });
   
    app.loanAppPI = {
        viewModel: new loanPIViewModal()	
    };
})(window);
