(function (global) {
    var loanPIViewModal,
        app = global.app = global.app || {};

    loanPIViewModal = kendo.data.ObservableObject.extend({
		currentfid:(localStorage.getItem("fid") !== '') ?  localStorage.getItem("fid") : '',
        
        
        show:function() {
            
            totaldivs = app.loanAppCI.viewModel.get("totownerDiv");
            d_divids = app.loanAppCI.viewModel.get("ownerdeleteIds");

            for(var c=0;c<=totaldivs;c++) {
                $("#ownercscore"+c).remove();
            }

            for(c=0;c<=totaldivs;c++){
                
                if(d_divids.indexOf(c.toString()) === -1)
                {
                    html ='';
                
    				dstyle = ' style="display:block;" ';
                    html += '<div id="ownercscore'+c+'" "'+dstyle+'" >';
                    html +='<div class="rwfil">';
                    html +='<div class="rw_lin clearfix">';
                    html +='<div  id="creditScoreTextOwn'+c+'" class="labl_tx2">Would you like us to check your credit score for free?*</div></div><div class="rw_lin clearfix opt lblBtM"> <span>';


                    html +=   '<input name="check_credit_score'+c+'" onclick="getCheckcscore('+c+',this.value);"  id="check_credit_score'+c+'1" type="radio" value="Y" class="crYes'+c+'" >';
                    html +=   '<label for="crdye">Yes</label></span> <span>';

                    html += '<input name="check_credit_score'+c+'" onclick="getCheckcscore('+c+',this.value);"  id="check_credit_score'+c+'2" type="radio" value="N" class="crYes'+c+'">';
                    html +='<label for="crdno">No</label></span>';

                    html +='<input type="hidden" name="hownid'+c+'" id="hownid'+c+'" value=""></div><div class="rwfil"><div id="crdscorerYes'+c+'" class="showfilds_bx" style="display:none"><div class="rw_lin clearfix">';




                    html +='<select name="credittype'+c+'" onchange="getCscore('+c+',this.value);"  id="credittype'+c+'" class="IN3"  title="Select Personal Credit Score"  >';
                    html +='<option value="">Select Personal Credit Score</option>';

                    for(var i=500;i<=850;i++) {
                    	html +='<option value="'+i+'">'+i+'</option>';
                    }
                    html +='</select></div><div id="ifless'+c+'" class="rw_lin  clearfix"><h4>Reason for your low credit score:<span>*</span><em>(Check all that apply)</em></h4>';



                    html +='<ul class="low_creditop">';


                    html +='<li class="opt2"><input type="checkbox" name="chk_reason0[]" id="chk_reason0_14" value="14" class="reset chkreason0"><label for="chk_reason0">A lot of inquiries</label></li>';


                    html +='<li class="opt2"><input type="checkbox" name="chk_reason0[]" id="chk_reason0_4" value="4" class="reset chkreason0"><label for="chk_reason0">High credit card balances due to business expenses</label></li>';
                    html +='<li class="opt2"><input type="checkbox" name="chk_reason0[]" id="chk_reason0_3" value="3" class="reset chkreason0"><label for="chk_reason0">High credit card balances due to personal expenses</label></li>';
                    html +='<li class="opt2"><input type="checkbox" name="chk_reason0[]" id="chk_reason0_15" value="15" class="reset chkreason0"><label for="chk_reason0">I dont know</label></li>';
                    html +='<li class="opt2"><input type="checkbox" name="chk_reason0[]" id="chk_reason0_7" value="7" class="reset chkreason0"><label for="chk_reason0">Incorrect items on credit report</label></li>';
                    html +='<li class="opt2"><input type="checkbox" name="chk_reason0[]" id="chk_reason0_8" value="8" class="reset chkreason0"><label for="chk_reason0">Judgments</label></li>';
                    html +='<li class="opt2"><input type="checkbox" name="chk_reason0[]" id="chk_reason0_2" value="2" class="reset chkreason0"><label for="chk_reason0">Late on credit cards</label></li>';
                    html +='<li class="opt2"><input type="checkbox" name="chk_reason0[]" id="chk_reason0_1" value="1" class="reset chkreason0"><label for="chk_reason0">Late on mortgage</label></li>';
                    html +='<li class="opt2"><input type="checkbox" name="chk_reason0[]" id="chk_reason0_10" value="10" class="reset chkreason0"><label for="chk_reason0">Late on personal loans</label></li>';
                    html +='<li class="opt2"><input type="checkbox" name="chk_reason0[]" id="chk_reason0_11" value="11" class="reset chkreason0"><label for="chk_reason0">No credit history</label></li>';
                    html +='<li class="opt2"><input type="checkbox" name="chk_reason0[]" id="chk_reason0_5" value="5" class="reset chkreason0"><label for="chk_reason0">Personal bankruptcy more than 7 years ago</label></li>';
                    html +='<li class="opt2"><input type="checkbox" name="chk_reason0[]" id="chk_reason0_9" value="9" class="reset chkreason0"><label for="chk_reason0">Personally guaranteed a loan that defaulted</label></li>';
                    html +='<li class="opt2"><input type="checkbox" name="chk_reason0[]" id="chk_reason0_13" value="13" class="reset chkreason0"><label for="chk_reason0">Recent foreclosure</label></li>';
                    html +='<li class="opt2"><input type="checkbox" name="chk_reason0[]" id="chk_reason0_6" value="6" class="reset chkreason0"><label for="chk_reason0">Recent Personal Bankruptcy</label></li>';
                    html +='<li class="opt2"><input type="checkbox" name="chk_reason0[]" id="chk_reason0_12" value="12" class="reset chkreason0"><label for="chk_reason0">Tax liens</label></li>';

                    html +='</ul></div></div></div><div class="rwfil"><div id="crdscorerNo'+c+'" class="showfilds_bx" style="display:none">';





                    html +='<div class="rw_lin clearfix"> <span class="prg">Check your credit score for free from Transunion. An accurate credit score increases loan approval by 70%, gets lower interest rate and results in faster funding. The soft pull will not impact your credit score.';
                    html +='<a  href="<?php echo $mosConfig_live_site;?>/components/com_financialnew/transunion.php?userid=<?php echo $userid;?>&fid=<?php echo $row->fid;?>&cno='+c+'" class="ifr cboxElement">Click here to authorize and pull the credit score</a>.</span> </div>';
                    html +='</div></div></div></div>'; 
                    
                    $('#dynamicDiv').append(html);
           	 } 
            }
			app.loanAppPI.viewModel.getCheckCreditScoreText();  
        },
        getCheckCreditScoreText:function()
        { 

            strdeldivids = "";
            totaldivs = app.loanAppCI.viewModel.get("totownerDiv");
            deldivids = app.loanAppCI.viewModel.get("ownerdeleteIds");
            
            adelids = $("#aredyownerdeleteIds").val();
            

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
                if(c === 0 ) {
                    creditScorenodel ="Would you like us to check "+ app.loanAppCI.viewModel.Owner_FirstName +"'s credit score for free?*";
                    $("#creditScoreTextOwn"+c).html(creditScorenodel);
                    $('#ownercscore'+c+'').show();
                } else {
                    creditScorenodel ="Would you like us to check "+ viewCModel.get('OwnerFirstName'+c) +"'s credit score for free?*";
                    $("#creditScoreTextOwn"+c).html(creditScorenodel);
                    $('#ownercscore'+c+'').show();
                }
                if(strdeldivids !=='') {


                }

                else { 



                    // End Validation


                    /*var iscschk = $("#isCheckScore"+c).val();
                    if(iscschk === ''){
                    iscschk = $("input[name='check_credit_score"+c+"']:checked").val();                           
                    }
                    var dbcscore = $("#creditScore"+c).val();
                    var cmbcscore = $("#credittype"+c).val();
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

                    } else {
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
                    else {                            
                    $("#check_credit_score"+c+"1").prop("checked", false);
                    $("#check_credit_score"+c+"2").prop("checked", false);
                    $('#crdscorerYes'+c).hide();
                    $('#crdscorerNo'+c).hide();
                    $('#ifless'+c).hide();                         
                    }   */


                }

            }
        },
        loanAppFPpage:function()
        {
            apps.navigate('views/loanAppFP.html');

        }
        

            
            
        
    });
   
    app.loanAppPI = {
        viewModel: new loanPIViewModal()	
    };
})(window);
