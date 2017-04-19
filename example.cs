public byte[] GenerateLouisianaStateTaxForm(LouisianaStateTaxForm form, string nameAndAddress = null, string employerNumber = null)
{
	var file = GetPdfDocument<ILouisianaStateTaxFormDocument>();
	byte[] output;
	using (var memoryStream = new MemoryStream())
	{
		using (var reader = new PdfReader(file))
		{
			PdfReader.unethicalreading = false;
			using (var stamper = new PdfStamper(reader, memoryStream))
			{
				const string a = "A";
				const string b = "B";
				const string firstNameMiddleInitial = "1 Type or print first name and middle initial";
				const string lastName = "Last name";
				const string ssn = "2 Social Security Number";
				const string cb2 = "Check Box2";
				const string status = "Status";
				const string homeAddress = "4. HomeAddress";
				const string city = "5 City";
				const string state = "State";
				const string zip = "ZIP";
				const string f6 = "6";
				const string f7 = "7";
				const string f8 = "8";
				const string signature = "EmployeeSignature";
				const string date = "Date";
				const string employersNameAndAddress = "10 Employer’s name and address";
				const string employersStateWItholdingAccountNumber = "11 Employer’s state withholding account number";
				var acroFields = stamper.AcroFields;
				SetFieldIfNotNull(acroFields,a,form.BlockA);
				SetFieldIfNotNull(acroFields,b,form.BlockB);
				SetFieldIfNotNull(acroFields,firstNameMiddleInitial,form.FirstNameMiddleInitial);
				SetFieldIfNotNull(acroFields,lastName,form.LastName);
				SetFieldIfNotNull(acroFields, ssn, form.SocialSecurityNumber);
				if (form.NoExemptionsOrDependentsClaimed.HasValue && form.NoExemptionsOrDependentsClaimed.Value)
				{
					SetFieldIfNotNull(acroFields, cb2, "Yes");
				}
				switch (form.FilingStatus)
				{
					case LouisianaStateTaxFormFilingStatus.Single:
						SetFieldIfNotNull(acroFields,status,acroFields.GetAppearanceStates(status)[0]);
						break;
					case LouisianaStateTaxFormFilingStatus.Married:
						SetFieldIfNotNull(acroFields,status, acroFields.GetAppearanceStates(status)[1]);
						break;
				}
				SetFieldIfNotNull(acroFields, status, form.FilingStatus);
				SetFieldIfNotNull(acroFields, homeAddress, form.HomeAddress);
				SetFieldIfNotNull(acroFields, city, form.City);
				SetFieldIfNotNull(acroFields, state, form.State);
				SetFieldIfNotNull(acroFields, zip, form.Zip);
				SetFieldIfNotNull(acroFields,f6,form.TotalBlockA);
				SetFieldIfNotNull(acroFields, f7, form.TotalBlockB);
				SetFieldIfNotNull(acroFields,f8,form.AmountWitheldDelta);
				if (form.Signature.IsSigned())
				{
					SetFieldIfNotNull(acroFields,signature,OnBoardResources.ElectronicallySigned);
					if (form.Signature.SignatureTime.HasValue)
						SetFieldIfNotNull(acroFields,date,form.Signature.SignatureTime.Value.ToString(DateFormat));
				}
				
				SetFieldIfNotNull(acroFields,employersStateWItholdingAccountNumber,employerNumber);
				SetFieldIfNotNull(acroFields,employersNameAndAddress,nameAndAddress);
				
				stamper.FormFlattening = true;

			}
		}
		output = memoryStream.ToArray();
	}
	
	return output;
}