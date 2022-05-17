var HRlmsAjax = Class.create();
HRlmsAjax.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {

	getDateDiff : function()
	{
		var d1 = new GlideDate();
		d1.setDisplayValue(this.getParameter('sysparm_start'));
		var d2 = new GlideDate();
		d2.setDisplayValue(this.getParameter('sysparm_end'));
		
		var duration = GlideDate.subtract(d1, d2);
		return duration.getNumericValue();
		
	},
	
	getLeaveRecords : function()
	{
		var gr = new GlideRecord('x_796449_hr_leave_leave_bucket');
		gr.addQuery('employee',this.getParameter('sysparm_user'));
		gr.addQuery('leave_type',this.getParameter('sysparm_leavetype'));
		gr.query();
		if(gr.next())
			{
				//This creates an empty object
				var leaveDetails = {};
				// 
				leaveDetails.accrued = '' + gr.accrued;
				//
				leaveDetails.balance = '' + gr.balance;
				//
				leaveDetails.taken = '' + gr.taken;
				return JSON.stringify(leaveDetails);
				
			}
	},
	
    type: 'HRlmsAjax'
});