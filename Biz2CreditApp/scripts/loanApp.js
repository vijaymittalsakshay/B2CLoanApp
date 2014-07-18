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
            var sel_value = $(this).val();
            if (sel_value==='1') {
            $('#outsta_debt').show();
            } else {
            $('#outsta_debt').hide();
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

            var addForm = $("#add-form");
            var index = 0;
            addForm.on("click", function() {
            alert('debug');
            var form = app.loansetting.viewModel.getForm(++index);
            $('#totbusinessDebtYesDiv').val(index);
            var tot = parseInt($('#currntControl').val()) + 1;
            $('#currntControl').val(tot);
            $("#debtwrapper").append(form);

            $("#debttype" + index).rules("add", {
            required: true,
            messages: {
            required: "This value is required"
            }
            });
            $("#yeardisbursed" + index).rules("add", {
            required: true,
            messages: {
            required: "This value is required"
            }
            });
            totalOutstanding = 0;

            $("#remove-form" + index).on("click", function() {
                var currentIndex = $(this).data("index");
                $("#debt" + currentIndex).remove();
                $("#loan_" + currentIndex).remove();
                $('#currntControl').val($('#currntControl').val() - 1);
                divId.push(currentIndex);
                $('#deleteIds').val(divId);

                if (parseInt($('#currntControl').val()) == 0) {
                    $("#debttype").prop("checked", false); 
                    $('#outsta_debt').hide();
                }
                });
            });

            if ($("#orgname").length > 0) {
                $("#orgname").autocomplete("./dnb-serverexe.php?task=dnbbankrecord");
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
            return $('\
            <div class="rw_lin addons clearfix" id="debt' + index + '">\
            <p class="imp40">\
            ' + app.loansetting.viewModel.createDebtType(index) + '\
            </p>\
            <p class="imp40">\
            ' + app.loansetting.viewModel.createYear(index) + '\
            </p>\
            <p><a class="rem_col" href="javascript:void(0);" id="remove-form' + index + '" data-index="' + index + '">Remove</a></p>\
            </div>\
            <div id="loan_' + index + '"></div>\
            ');
        },
        createDebtType:function(NumOfDiv) {
            var str = '';
            str = "<select name='debttype" + NumOfDiv + "' class='IN5 debtclass' title='Select Debt Type' id='debttype" + NumOfDiv + "' onChange='javascript:createInput(this.value, " + NumOfDiv + ")' title='Select Debt Type'><option value=''>Select Debt Type</option><option value='Business Credit Card'>Business Credit Card</option><option value='Cash Advance'>Cash Advance</option><option value='Line of credit'>Line of credit</option><option value='Term loan'>Term loan</option></select>";
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
        }
    });
   
    app.loansetting = {
        viewModel: new loanViewModal()	
    };
})(window);
