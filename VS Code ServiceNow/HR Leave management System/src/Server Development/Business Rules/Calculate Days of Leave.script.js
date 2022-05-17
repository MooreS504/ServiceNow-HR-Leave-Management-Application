(function executeRule(current, previous /*null when async*/) {

	// Add your code here
	var gr = new GlideRecord('x_796449_hr_leave_leave_bucket');
	gr.addQuery('employee',current.requested_by);
	gr.addQuery('leave_type',current.leave_type);
	gr.query();
	if (gr.next())
		{
			gr.balance = gr.balance - current.duration;
			gr.taken = gr.taken + current.duration;
			gr.update();
		}

})(current, previous);