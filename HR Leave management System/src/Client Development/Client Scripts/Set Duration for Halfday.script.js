function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
      return;
   }

   //Type appropriate comment here, and begin script below
   var halfD = g_form.getValue('half_day');
	if (halfD == 'true')
		{
			g_form.setValue('duration','.5');
		}
}