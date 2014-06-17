(function (global,$) {
    var HomepageViewModel,
        app = global.app = global.app || {};

    HomepageViewModel = kendo.data.ObservableObject.extend({
		Matches:[],
        LoanAmt:"",
        YearsBus:"",
        AnnnualRevenue:"",
        CreditScore:"",
        State:"",
        toolStatus:false,
        name:localStorage.getItem("userFName"),
        email:localStorage.getItem("userEmail"),
        phone:"+"+localStorage.getItem("userMobile"),
        dHeader:(window.localStorage.getItem("dHeader") !== null) ?  localStorage.getItem("dHeader") : '',
        dDescription:(window.localStorage.getItem("dDescription") !== null) ?  localStorage.getItem("dDescription") : '',
        dButtonText :(window.localStorage.getItem("dButtonText") !== null) ?  localStorage.getItem("dButtonText") : '',
        dButtonLink:(window.localStorage.getItem("dButtonLink") !== null) ?  localStorage.getItem("dButtonLink") : '',
        repaymentStatus:false,
        homeShow: function (e) { 
            
            app.loginService.viewModel.showloder();  
            var dataSource = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: "https://www.biz2services.com/mobapp/api/user/",
                        type:"POST",
                        dataType: "json", // "jsonp" is required for cross-domain requests; use "json" for same-domain requests
                        data: { apiaction:"userdashboard",userid:78372} // search for tweets that contain "html5"
                    }
                    
                },//localStorage.getItem("userID")
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
                var that = this;
                app.loginService.viewModel.setSettingsPage();
                var data = that.data();
                app.homesetting.viewModel.setMatches(data['0']['results']['data']['loan']['matchrows']);
                pos = 1;
                var cntGetStarted = data[0]['results']['data']['cntGetStarted'];
                var matchstatus = data[0]['results']['data']['matchstatus'];
                var totmatch = data[0]['results']['data']['totmatch'];
                var creditscore = data[0]['results']['data']['creditscore'];
                var loan_total = data[0]['results']['data']['loan']['total'];
                var loan_posted = data[0]['results']['data']['loan']['posted'];
                var loan_ended = data[0]['results']['data']['loan']['ended'];
                var loan_saved = data[0]['results']['data']['loan']['saved'];
                var matches = data[0]['results']['data']['loan']['matches'];
                var matchrows =data[0]['results']['data']['loan']['matchrows'];
                var funded =data[0]['results']['data']['funded'];
                var repaymentdata =data[0]['results']['data']['repaymentdata'];
                outFullHtml= '';
                for(i in repaymentdata){
                    
                   if($.isNumeric(i))
                    {
                        app.homesetting.viewModel.setRepaymentStatus();
                        repaymentHtml ='';
                        repaymentHtml += '<ul id="repypmContent"><li>Bank Name<br><span class="tx">'+repaymentdata[i][0]['lender_name']+'</span></li>';
                        repaymentHtml += '<li>Application #<br><a href="javascript:void(0);" class="reld_info1" style="display: block;><span class="tx">'+repaymentdata[i][0]['appid']+'</span></a>';
                        repaymentHtml += '<div class="tooltip" style="position: absolute; data-click="viewtoolTip" opacity: 0; display: none;">';
                        repaymentHtml += '<span>Lender<span>'+repaymentdata[i][0]['lender_name']+'</span></span>';
                        repaymentHtml += '<span>Funded Amount<span> USD '+kendo.toString(repaymentdata[i][0]['advance_amount'], "n")+'</span></span> ';
                        repaymentHtml += '<span>Funded Date<span>'+kendo.toString(new Date(repaymentdata[i][0]['initial_funding_date']), "MM-dd-yyyy")+'</span></span>';
                        repaymentHtml += '<span>Payback Amount<span> USD '+kendo.toString(repaymentdata[i][0]['purchase_amount'], "n")+'</span></span>';
                        repaymentHtml += '<span style="width: 49%;">Oustanding Balance<span> USD '+kendo.toString(repaymentdata[i][0]['EndingBalance'], "n")+'</span></span>';
                        repaymentHtml += '</div></li>';
                        repaymentHtml += '<li>Outstanding Balance<br> USD <span class="tx">'+repaymentdata[i][0]['EndingBalance']+'</span></li>';
                        repaymentHtml += '<li>Last Transaction<br>USD <span class="tx">'+kendo.toString(repaymentdata[i][0]['repay_amount'], "n")+'</span></li>';
                        repaymentHtml += '<li>Last Updated Date<br><span class="tx">'+kendo.toString(new Date(repaymentdata[i][0]['transaction_date']), "MM-dd-yyyy")+'</span></li></ul>';
                        outFullHtml +=repaymentHtml;
                    }
                    
                }
                $("#repypmContent").remove();
                $("#repypm").append(outFullHtml);
                $(".reld_info1").on("click", function(e){                  
                    if($(".tooltip").css('display') === 'none'){ 
                    	$(".tooltip").show(); 
                    } else { 
                    	$(".tooltip").hide(); 
                    }

                });
                
                var userName= localStorage.getItem("userFName");
            	if(cntGetStarted === 0 && loan_total === 0){
                	pos = 1;
                   
                }
                if(matchstatus === 2 && loan_total > 0){
                	pos = 2;
                   
                }
                if(matchstatus === 0){
                	pos = 3;
                    
                }
                if(matchstatus === 1 &&  app.homesetting.checkMatchesStatus(data[0]['results']['data']['loan']['matchrows'])){
                	pos = 3;
                    
                }else if(matchstatus === 1 && funded === 0){
                	pos = 4;
                  
                }
                if(matchstatus === 1 && funded === 1){
                	pos = 5;
                   
                }  

                if((cntGetStarted >= 1 && loan_posted === 0)){
                   
                        if(totmatch === "0")
                        { 
                            
                            if(creditscore.search("-")){
                                var tempvar = creditscore.lastIndexOf("-");
            		        	var substr = creditscore.substring(0,tempvar);
                                totmatch = app.homesetting.viewModel.getTotalMatches(substr);
                                
                            }
                            else{
                                totmatch = app.homesetting.viewModel.getTotalMatches(creditscore);
                            }
                            dHeader ='Hi '+userName+', we have '+totmatch+' potential options for you!';
                        }
                    	else
                    	{
                        	dHeader ='Hi '+userName+', we have '+totmatch+' potential options for you!';
                    	}
                    	
                        dDescription='Please start your application in order to get matched to pre-qualified funding opportunities';
                        dButtonText = "Start an Application";
                        dButtonLink ="#tabstrip-mess-one";
                    }
               if((cntGetStarted>=1 && loan_total===0) || (loan_total===loan_ended)) {
                   
                        if(totmatch === 0 || totmatch === '')
                        {
                            dHeader='Hi '+userName+', We have 1200+ lenders to finance your needs';
                        }
                        else
                        {
                            dHeader ='Hi '+userName+', we have '+totmatch+' potential options for you!'; 
                        }
                		
                		dDescription='Please start your application in order to get matched to pre-qualified funding opportunities';
                		dButtonText = "Start an Application";
                		dButtonLink ="#tabstrip-mess-one";
                    }
                if(cntGetStarted===0 && loan_total===0) {
                        dHeader='Hi '+userName+', We have 1200+ lenders to finance your needs';
                        dDescription='Please start your application in order to get matched to pre-qualified funding opportunities';
                        dButtonText = "Start an Application";
                        dButtonLink ="#tabstrip-mess-one";
    				}
               /* if(loan_total === loan_saved && loan_total>0) {
    					dHeader= userName+', your loan application is incomplete.';
                        dDescription='In order to see what loan offers you qualify for, you must finish the application. Please click to resume or schedule a call to receive help from a loan expert.';
                        dButtonText = "Complete Application";
                        dButtonLink ="#";
                    }*/
                if(loan_posted === 0 && loan_saved >= 1){
                    	dHeader= userName+', your loan application is incomplete.';
                        dDescription='In order to see what loan offers you qualify for, you must finish the application. Please click to resume or schedule a call to receive help from a loan expert.';
                        dButtonText = "Complete Application";
                        dButtonLink ="#tabstrip-mess-two";
                    }
                if(matchstatus===0 && matches>=1) {
                     dHeader= userName+', you have '+matches+' pre-qualified loan matches.';
                     dDescription='Please review your matches and select your preferred financing option(s)';
                     dButtonText = "Select a Loan Product";
                     dButtonLink ="views/matches.html";
                    }
                if(matchstatus===0 && matches===0) { 
                     dHeader= 'You have '+matches+' loan matches';
                     dDescription='No worries! We are here to help you.Use BizAnalyzer to find ways to improve your business\'s finances and funding opportunities.';
                     dButtonText = "Check your BizAnalyzer Score";
                     dButtonLink ="#tabstrip-mess-third";
                    }
                if(matchstatus === 1 && app.homesetting.checkMatchesStatus(matchrows)){
                     dHeader= userName+', you have '+matches+' pre-qualified loan matches.';
                     dDescription='Please review your matches and select your preferred financing option(s)';
                     dButtonText = "Select a Loan Product";
                     dButtonLink ="views/matches.html";
                    }
                else if(matchstatus === 1 && funded === 0)
                {
                     dHeader= userName+', Your submissions are still pending.';
                     dDescription= 'Please review these items and complete any remaining actions if necessary';
                     dButtonText = app.homesetting.viewModel.getLatestMatchStatus(matchrows);
                     dButtonLink ="views/matches.html";
                }
                if(matchstatus === 1 && funded === 1){
    			
    				dHeader= userName+', Your submissions are still pending.';
    				dDescription= 'Please review these items and complete any remaining actions if necessary';
                	dButtonText = app.homesetting.viewModel.getLatestMatchStatus(matchrows);
                	dButtonLink ="views/matches.html";
                    
    		    }
                
                $('#stps ul li').removeClass();
                if(pos===1)
                {
                     $('#stps ul li:eq('+(pos-1)+')').addClass('activ');
                     $('#stps ul li:lt('+(pos)+')').addClass('dn');
                }
                else
                {
           		 $('#stps ul li:eq('+(pos-1)+')').addClass('activ');
                	$('#stps ul li:lt('+(pos-1)+')').addClass('dn'); 
                }
               
                
                $("#home-call-btn").html("");
                if(dButtonLink === "views/matches.html")
                {
                    var html = '<a class="btngr" href="'+dButtonLink+'" data-role="button">'+dButtonText+'</a>';
                }
                else{
                    var html = '<a class="btngr" href="'+dButtonLink+'" data-rel="modalview" data-role="button">'+dButtonText+'</a>';
                }
                 
                 $("#home-call-btn").append(html);
                 app.homesetting.viewModel.setHomeToolTips(data[0]['results']['data']);
                 app.homesetting.viewModel.setcache(dHeader,dDescription,dButtonText,dButtonLink);
               
            });
        },       
		setcache:function(dHeader,dDescription,dButtonText,dButtonLink)
        {
            var that = this; 
            that.set("dHeader",dHeader);
            that.set("dDescription",dDescription);
            that.set("dButtonText",dButtonText);
            that.set("dButtonLink",dButtonLink);
            app.loginService.viewModel.hideloder();
        },
        getLatestMatchStatus:function(matchrows){
            var status;
            dateArray1 =[];
            dateArray2 =[];
            $.each(matchrows , function(index, val) {
                
                if(val['statusid']>1)
                {
                    dateArray1.push(app.homesetting.viewModel.toTimestamp(val['status_date'])); 
                    dateArray2.push(val['status_name']);
                }
				             
            });
            
           status =  dateArray2[$.inArray(Math.max.apply( Math, dateArray1), dateArray1)];
           if(status === '' || typeof status === "undefined"){
               
			status = "View Matches";
               
			}
            return status;
        },
        toTimestamp:function(strDate){
       	 var datum = Date.parse(strDate);
       	 return datum/1000;
        },
        getTotalMatches: function(creditscore)
        {
            var strfoption = "";
            if(creditscore < 600) {        
            	strfoption = app.homesetting.viewModel.randumNumber(50, 55);
            } else if(creditscore >=600 && creditscore <=659){         
            	strfoption = app.homesetting.viewModel.randumNumber(56, 65);
            } else if(creditscore >=660 && creditscore <=720){        
            	strfoption = app.homesetting.viewModel.randumNumber(66, 80);
            } else if(creditscore >=721 && creditscore <=850){         
            	strfoption = app.homesetting.viewModel.randumNumber(81, 100);
            } else{
            	strfoption = "49";
            }

            return strfoption;  
        },
        randumNumber:function(m,n)
        {
            var m = parseInt(m);
            var n = parseInt(n);
            return Math.floor( Math.random() * (n - m + 1) ) + m;  
        },
        setMatches: function(data)
        { 
               var that = this;
               that.set("Matches", data);
        },
        reqDocuments: function(e)
        {
            if(!window.connectionInfo.checkConnection()){
                navigator.notification.confirm('No Active Connection Found.', function (confirmed) {
            	if (confirmed === true || confirmed === 1) {
            		app.homesetting.viewModel.reqDocuments();
            	}

            }, 'Connection Error?', 'Retry,Cancel');
            }
            var pdata = e.button.data();
        	app.loginService.viewModel.showloder();

            var dataSource = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: "https://www.biz2services.com/mobapp/api/user/",
                        type:"POST",
                        dataType: "json", // "jsonp" is required for cross-domain requests; use "json" for same-domain requests
                        data: { apiaction:"reqdoclist",prid:pdata.prodid,prodtype:pdata.prodtype} // search for tweets that contain "html5"
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
                var that = this;
                var data = that.data();
                $("#tabstrip-mess-fourth p").html("");
                if(typeof data[0]['results']['docLists'] !== "undefined")
                {
                    html ="<ol class='rdocs'>";
                    for(i =0; i < data[0]['results']['docLists'].length; i ++)
                    {
                    	html += "<li>"+data[0]['results']['docLists'][i]+"</li>"; 
                    }
                    html +="</ol>";
                    $(".doc-content").append(html);
                    $("#tabstrip-mess-fourth").data("kendoMobileModalView").open();  
                }
                
                $("#tabstrip-mess-fourth").find(".km-scroll-container").css("-webkit-transform", "");
                app.loginService.viewModel.hideloder();
            });    
        },
        matchAppy:function()
        {
            app.loginService.viewModel.showloder();
            // this space for send mail
            $("#tabstrip-mess-dynamic p").html("");
            html ="To apply for this product, Please log on to the web version of Biz2Credit.com";
            $("#tabstrip-mess-dynamic p").append(html);
            $("#tabstrip-mess-dynamic").data("kendoMobileModalView").open();
            
            app.loginService.viewModel.hideloder();
        },
        setHomeToolTips:function(data)
        {
            var that = this;
            that.set("toolStatus",false);
            that.set("LoanAmt", "$"+data['loanamt']);
            that.set("YearsBus", data['ageofbuss']+" yrs.");
            that.set("AnnnualRevenue", "$"+data['annrevenue']);
            that.set("CreditScore", data['creditscore']);
           // that.set("State",data['state']);
            that.set("name",localStorage.getItem("userFName"));
            that.set("email",localStorage.getItem("userEmail"));
            that.set("phone","+"+localStorage.getItem("userMobile"));
         
        },
        setToolTips:function()
        {
          
            var that = this;
            if(app.homesetting.viewModel.toolStatus === true)
            {
                that.set("toolStatus", false); 
            }
            else
            { 
                that.set("toolStatus", true);
            }
        },
        closeParentPopover:function()
        {
             $("#popover-people").data("kendoMobilePopOver").close();
             $("#popover-docs").data("kendoMobilePopOver").close();
            
        },
        setRepaymentStatus:function()
        {
             var that = this;
             that.set("repaymentStatus", true);
        },

  
    });
    app.homesetting = {
        checkMatchesStatus: function(msdata)
        {
            var ms = true;
            $.each(msdata, function( index, value ) {
                if(value.statusid > 1){
                	ms = false;
                } 
            });
            return ms;
        },
        
		viewModel: new HomepageViewModel(),     	
    };
 
})(window,jQuery);