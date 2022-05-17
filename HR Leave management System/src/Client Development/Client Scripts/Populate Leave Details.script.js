function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }

   //This calls the scipt include, functions and parameters.
	var ga = new GlideAjax('HRlmsAjax');
	ga.addParam('sysparm_name','getLeaveRecords');
	ga.addParam('sysparm_user',g_user.userID);
	ga.addParam('sysparm_leavetype',newValue);
	ga.getXML(getBucket);
	
	function getBucket(response)
	{
		var answer = response.responseXML.documentElement.getAttribute("answer");
		//This will store the data from the script include
		var result = JSON.parse(answer);
		g_form.setValue('accrued',result.accrued);
		g_form.setValue('balance',result.balance);
		g_form.setValue('taken',result.taken);
		
	}
   
}