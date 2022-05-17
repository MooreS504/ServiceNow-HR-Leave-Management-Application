(function executeRule(current, previous /*null when async*/) {

	// Add your code here
	var gr = new GlideRecord ('x_796449_hr_leave_leave_calculator');
	gr.addQuery('country.name',current.location.country);
	gr.query();
	while(gr.next())
		{
			if (gr.leave_assignment == 'y')
			{
				var gdt = GlideDateTime();
				var currentMonth = gdt.getMonthLocalTime();
				var monthsLeft = 12 - currentMonth;
				var perMonth = gr.days_of_leave / 12;
				var totalDaysOfLeave = perMonth * monthsLeft;
				
				var leaveBucket = new GlideRecord('x_796449_hr_leave_leave_bucket');
				leaveBucket.leave_type = gr.leave_type;
				leaveBucket.accrued = totalDaysOfLeave;
				leaveBucket.balance = totalDaysOfLeave;
				leaveBucket.taken = 0;
				leaveBucket.employee = current.sys_id;
				leaveBucket.insert();
			}
			else if (gr.leave_assignment == 'm')
				{
				var perMonthM = gr.days_of_leave / 12;
				var leaveBucketM = new GlideRecord('x_796449_hr_leave_leave_bucket');
				leaveBucketM.leave_type = gr.leave_type;
				leaveBucketM.accrued = perMonthM;
				leaveBucketM.balance = perMonthM;
				leaveBucketM.taken = 0;
				leaveBucketM.employee = current.sys_id;
				leaveBucketM.insert();
				}
		}

})(current, previous);