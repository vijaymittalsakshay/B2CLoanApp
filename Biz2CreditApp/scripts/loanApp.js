(function (global) {
    var loanViewModal,
        app = global.app = global.app || {};

    loanViewModal = kendo.data.ObservableObject.extend({
        legal_business_name:'',
        dba_name:'',
        street_no:'',
        street_name:'',
        apt_suite_unit:'',
        select_state:'',
        select_city:'',
        zip_code:'',
        mobile_number:'',
        select_b_l_s:'',
        industry:'',
        sub_industry:'',
        select_buss_s_m:'',
        select_buss_s_y:'',
        yettostart:'',
        average_annual_revenue:'',
        buss_operating_expenses:'', 
        acceptcard_yes:1,
        acceptcard_no:0,
        datefirstProcessed_month:'',
        datefirstProcessed_day:'',
        datefirstProcessed_year:'',
        c_c_card_processor:'',
        merchant_id:'',
        MonthlyVolumeAmountsList1:'',
        MonthlyVolumeTicketsList1:'',
        MonthlyVolumeAmountsList2:'',
        MonthlyVolumeTicketsList2:'',
        MonthlyVolumeAmountsList3:'',
        MonthlyVolumeTicketsList3:'',
        MonthlyVolumeAmountsList4:'',
        MonthlyVolumeTicketsList4:'',
        debttype_yes:1,
        debttype_no:0,
        selectdebttype:'',
        selDisbursed:'',
        busproInfo_owned:1,
        busproInfo_leased:0,
        outstandingMort_yes:1,
        outstandingMort_no:0,
        mortgage_bank:'',
        outs_bal:'',
        month_mort_amount:'',
        monthly_rent:'',
        landlord_name:'',
        contact_number:'',
        real_state:'',
        inventory:'',
        equip_finance:'',
        account_rece:'',
        
        

        
        
        show:function() {
            $('.srh_men  .scmsk').mouseover(function() {
            $("#log_BX").hide();
            $("#socl_BX").hide();
            $("#srch_BX").slideToggle(300);
            $('.log_men').removeClass("act");
            $('.soc_men').removeClass("act");
            $('.srh_men').toggleClass("act");
            $('.soc_men .scmsk').show();
            $('.srh_men .scmsk').hide();
            $('.log_men .scmsk').show();
            });  
            $('#srch_BX .clsmnub').click(function() {
            $("#srch_BX").slideToggle(300);
            $('.log_men').removeClass("act");
            $('.srh_men').removeClass("act");
            $('.soc_men').removeClass("act");
            $('.soc_men .scmsk').show();
            $('.srh_men .scmsk').show();
            $('.log_men .scmsk').show();
            }); 

            //$(".reld_info").tooltip({ effect: 'slide', position: 'bottom center'});
            // $(".que_hint").tooltip({ effect: 'slide', position: 'bottom center'});
            $(".que_hint").kendoTooltip({
            autoHide: false,
            width: 240,
            showOn: "click",
            callout: false,
            content: function(e) {
            return e.target.context.nextElementSibling.innerHTML;
            },
            });
            // menu 
            $('.subms').hide();
            $('.subnv ').click(function() {
            $(".subms").slideToggle(300);
            $('.subnv').toggleClass("act");
            });

            // application
            $('.montrnt.yes').hide();
            $('.crYes ').click(function() {
            $('.montrnt').hide();
            $('.montrnt.yes').show();
            });
            $('.crNo ').click(function() {
            $('.montrnt').show();
            $('.montrnt.yes').hide();
            });

            // tipsy
            /* $(function() {
            $('.inpbf').tipsy({gravity: 'se'});
            $('.IN1b').tipsy({gravity: 'se'});
            $('.IN3').tipsy({gravity: 'se'});
            $('.IN3b').tipsy({gravity: 'se'});
            $('.inpbf_sl').tipsy({gravity: 'se'});
            $('.IN1').tipsy({gravity: 'se'});
            $('.IN5').tipsy({gravity: 'se'});
            $('.IN6').tipsy({gravity: 'se'});
            $('.IN4').tipsy({gravity: 'se'});

            });*/

            $('.own2').hide();
            $('.admr').click(function() {	
            $('.own2').show(); 
            $('.addbtns').hide();
            });

            /*--------------function for select--------------*/

            $('#count_number').change(function() {
            var sel_value = $(this).val();

            if (sel_value < '5') {
            $('#dis_count').show();
            } else {
            $('#dis_count').hide();
            }
            })

            /*--------------function for select end-------------*/
            /*--------------function for radio--------------*/
            $('.se_radio').click(function() {
            var sel_value = $(this).val();
            if (sel_value==='1') {
            $('#credit_show').show();
            } else {
            $('#credit_show').hide();
            }
            })

            // credit card accpted

            $('.crditaccep').click(function() {
            var sel_value = $(this).val();
            if (sel_value === '1') {
            $('#credit_show').show();
            } else {
            $('#credit_show').hide();
            }
            })

            // outtand dept

            $('.outDebt').click(function() {
            	var sel_value=$(this).val();
                if(sel_value==='1'){
                    if($('#currntControl').val()==='0' || $('#currntControl').val()==='') {
                    	$("#add-form").trigger('click');
                    }
                    $('#outsta_debt').show();
                }
                else{
                    if($('#currntControl').val()>0) {
                    	alert('Please delete all existing debts information');
                    	$('input:radio[name=debttype]:nth(0)').prop('checked',true);
                        $('#outsta_debt').show();
                    } else {
                    	$('#outsta_debt').hide();
                    }
                }    
          
            })

            // outtand dept

            $('.businf').click(function() {
            var sel_value = $(this).val();
            if (sel_value==='1') {
            $('#busInfobx').show();
            $('#busInfobx2').hide();
            } else {
            $('#busInfobx2').show();
            $('#busInfobx').hide();
            }
            })

            // credi card proc
            $('#creditcardproc').change(function() {
            var sel_value = $(this).val();
            if (sel_value==='') {
            $('.mercPr').hide();
            } else {
            $('.mercPr').show();
            }
            })

            // credit score yes/no

            $('.crYes').click(function() {
            var sel_value = $(this).val();
            if (sel_value==='1') {
            $('#crdscrYes').hide();
            $('#crdscrNo').show();
            } else {
            $('#crdscrYes').show();
            $('#crdscrNo').hide();
            }
            });
            $('.tpar').click(function() {
            alert('debug');
            });

            $("#yettostart").click(function() {
            if ($(this).is(':checked')) {
            alert('debug');
            $('#dbs_month').val("");
            $('#dbs_year').val("");
            $('#dbs_month').attr("disabled", "disabled");
            $('#dbs_year').attr("disabled", "disabled");
            } else {
            $('#dbs_month').removeAttr("disabled");
            $('#dbs_year').removeAttr("disabled");
            }
            });
			
            // outtand dept
            
            var addForm = $("#add-form");
            var index = 0;
            divId = [];
            addForm.on("click", function() {
                var form = app.loansetting.viewModel.getForm(++index);

                $('#totbusinessDebtYesDiv').val(index);
                var tot = parseInt($('#currntControl').val()) + 1;
                $('#currntControl').val(tot);
                $("#debtwrapper").append(form);

                totalOutstanding = 0;
                $("#remove-form" + index).on("click", function() {
                    var currentIndex = $(this).data("index");
                    $("#debt" + currentIndex).remove();
                    $("#loan_" + currentIndex).remove();
                    $('#currntControl').val($('#currntControl').val() - 1);
                    divId.push(currentIndex);
                    $('#deleteIds').val(divId);

                    if (parseInt($('#currntControl').val()) === 0) {
                        $("#debttype").prop("checked", false); 
                        $('#outsta_debt').hide();
                    }
                });
            });

            if ($("#orgname").length > 0) {
                //$("#orgname").autocomplete("./dnb-serverexe.php?task=dnbbankrecord");
                $("#orgname").result(function(event, data, formatted) {
                if (data) {
                	getCompInfoData(data[1]);
                }
                });
        	}
        },
        loanAppCIpage:function() {
        	apps.navigate("views/loanAppCI.html");
        },
        loanAppPIpage:function() {
        	apps.navigate("views/loanAppPI.html");
        },
        loanAppFPpage:function() {
        	apps.navigate("views/loanAppFP.html");
        },
        getForm:function(index, action) {


            return $('<div class="rw_lin addons clearfix" id="debt' + index + '"><p class="imp40">' + app.loansetting.viewModel.createDebtType(index) + '</p><p class="imp40">' + app.loansetting.viewModel.createYear(index) + '</p><p><a class="rem_col" href="javascript:void(0);" id="remove-form' + index + '" data-index="' + index + '">Remove</a></p></div><div id="loan_' + index + '"></div>');
        },
        createDebtType:function(NumOfDiv) {
            var str = '';
            str = "<select name='debttype" + NumOfDiv + "' class='IN5 debtclass' title='Select Debt Type' id='debttype" + NumOfDiv + "' onChange='javascript:app.loansetting.viewModel.createInput(" + this.value + ", " + NumOfDiv + ")' title='Select Debt Type'><option value=''>Select Debt Type</option><option value='Business Credit Card'>Business Credit Card</option><option value='Cash Advance'>Cash Advance</option><option value='Line of credit'>Line of credit</option><option value='Term loan'>Term loan</option></select>";
            return str;
        },
        createYear:function(yearid) {
            var str;
            str = "<select name='yeardisbursed" + yearid + "' id='yeardisbursed" + yearid + "' title='Select Disbursed Year' class='IN5'>";
            str +='<option value="">Select Disbursed Year</option>';
            for (i=1970; i <= 2020;i++) {
            str +='<option value=' + i + '>' + i + '</option>';
            }
            str +='</select>';
            return str;
        },
        createInput:function(value,NumOfDiv) {

   	var str='';
            if(value ==='Term loan'){
                 alert(value+'ddd');
            str +='<div class="rw_lin  addons_det clearfix lineofcred">\
                <p class="imp40 clearfix">'+createCollateral(NumOfDiv)+'</p>\
                <div class="clear"></div>\
            <p class="imp40">\
            <input type="text" class="IN5 mb15 number" placeholder="Original Loan Amount ($)" name="txtAmountTerm'+NumOfDiv+'" id="txtAmountTerm'+NumOfDiv+'" original-title="Original Loan Amount $">\
            </p>\
            <p class="imp40">\
            <input type="text" class="IN5 number" placeholder="Outstanding Loan Amount ($)" name="txtOutAmountTerm'+NumOfDiv+'" id="txtOutAmountTerm'+NumOfDiv+'" original-title="Outstanding Loan Amount $">\
            </p>\
            <div class="clear"></div>\
            <p class="imp40">\
            <input type="text" name="txtInterestTerm'+NumOfDiv+'" id="txtInterestTerm'+NumOfDiv+'" maxlength="5" placeholder="Interest Rate (%)" class="IN5 mb15" original-title="Interest Rate (%)">\
            </p>\
            <p class="imp40">\
            <select name="txtYearTerm'+NumOfDiv+'" id="txtYearTerm'+NumOfDiv+'" class="IN5B" title="Interest Rate Year(s)">\
            <option value="1" selected="">Year(s)</option>\
            <option value="2">Half-year</option>\
            <option value="4">Quarter</option>\
            <option value="12">Month</option>\
            <option value="52">Week</option>\
            <option value="365">Day</option>\
            </select>\
            </p>\
            <div class="clear"></div>\
            <p class="imp40">\
            <select class="IN4" name="txtPaymentModeTerm'+NumOfDiv+'" id="txtPaymentModeTerm'+NumOfDiv+'" original-title="Select Payment Schedule">\
            <option value="">Payment Schedule</option>\
            <option value="1">Annually</option>\
            <option value="2">semi-annually</option>\
            <option value="4">quarterly</option>\
            <option value="12">monthly</option>\
            <option value="52">weekly</option>\
            <option value="365">daily</option>\
            </select>\
            </p>\
            <p class="imp40">\
            <input type="text" class="IN4" name="txtTerm'+NumOfDiv+'" id="txtTerm'+NumOfDiv+'" placeholder="Term" original-title="Term">\
            </p>\
            <p class="imp40">\
            <select name="txtFrequncyTerm'+NumOfDiv+'" id="txtFrequncyTerm'+NumOfDiv+'" class="IN4" original-title="Term Year(s)">\
            <option value="1" selected="">Year(s)</option>\
            <option value="2">Half-year(s)</option>\
            <option value="4">Quarter(s)</option>\
            <option value="12">Month(s)</option>\
            <option value="52">Week(s)</option>\
            <option value="365">Day(s)</option>\
            </select>\
            </p>\
            </div>';
            } else if(value==='Cash Advance') {
            str +='<div class="rw_lin  addons_det clearfix cash_advns">\
            <p class="imp40">\
            <input type="text" class="IN5" placeholder="Funding Company" name="tpcompany'+NumOfDiv+'" id="tpcompany'+NumOfDiv+'" original-title="Funding Company">\
            </p>\
            <p class="imp40">\
            <input type="text" class="IN5 number" placeholder="Funded Amount ($)" name="ocadvance'+NumOfDiv+'" id="ocadvance'+NumOfDiv+'" original-title="Funded Amount ($)">\
            </p>\
            ';
            str +='<p class="imp40 select_caterm"><select class="IN5 debtclass valid" title="Select Term (Months)" name="funded_term'+NumOfDiv+'" id="funded_term'+NumOfDiv+'">';
            str +='<option value="">Select Term (Months)</option>';
            for(var term=1; term< 301; term++){
            var noyears = '';
            if(term%12 === 0 ) {
            if(term === 12){
            noyears = ': 1Year'; 
            } else {
            var cyears = term/12;
            noyears = ': '+cyears+'Years';                     
            }                  
            }
            if(noyears !==''){
            //noyears = noyears.bold();
            var bstyle = 'style="font-weight:bold;" ';
            str +='<option value="'+term+'" '+bstyle+'>'+term+' '+noyears+'</option>';
            } else {
            str +='<option value="'+term+'">'+term+'</option>';
            }
            }
            str +='</select></p>';
            str +='</div>';
            } else if(value=='Business Credit Card') {
            str +='<div class="rw_lin addons_det clearfix debt_crecrd">\
            <p class="imp40">\
            <input type="text" placeholder="Outstanding Loan Amount ($)" name="txtOutCredit'+NumOfDiv+'" id="txtOutCredit'+NumOfDiv+'" class="IN4 number" original-title="Outstanding Loan Amount ($)">\
            </p>\
            <p class="imp40">\
            <input type="text" placeholder="Interest Rate (%)" name="txtInterestCredit'+NumOfDiv+'" id="txtInterestCredit'+NumOfDiv+'" maxlength="5" class="IN4" original-title="Interest Rate (%)">\
            </p>\
            <p class="imp40">\
            <select name="txtPerYearCredit'+NumOfDiv+'" id="txtPerYearCredit'+NumOfDiv+'" class="IN4" original-title="Interest Rate Year(s)">\
            <option value="1" selected="">Year(s)</option>\
            <option value="2">Half-year</option>\
            <option value="4">Quarter</option>\
            <option value="12">Month</option>\
            <option value="52">Week</option>\
            <option value="365">Day</option>\
            </select>\
            </p>\
            </div>';
                
		
 		}
            alert('adadadad');
            },
        
    });
   
    app.loansetting = {
        viewModel: new loanViewModal()	
    };
})(window);
