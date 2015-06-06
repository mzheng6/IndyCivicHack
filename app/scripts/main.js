console.log('\'Allo \'Allo!');

var live = false;

function formSubmission(merchantID_in)
{
	console.log("called formSubmission()");
	console.log("submitting form for merchant: " + merchantID_in);
	var id = generateUniqueID();
	console.log("submitting form for client: " + id);
	if(live)
	{
		postForm('/client_visited', id, merchantID_in);
	}

	var org_str = ((document.getElementById("org")).value).toString();
	var fullname_str = ((document.getElementById("fullname")).value).toString();
	var email_str = ((document.getElementById("email")).value).toString();
	var transaction_str = ((document.getElementById("trans")).value).toString();
	addUser(fullname_str, email_str, transaction_str);

}

function postForm(path, clientID_in, merchantID_in)
{
  requestNumber = JSONRequest.post(
    "/client_visited",
    {
        clientID: clientID_in,
        merchantID: merchantID_in
    },
    function (requestNumber, value, exception) {
        if (value) {
            processResponse(value);
        } else {
            processError(exception);
        }
    }
    )
   console.log(requestNumber);

}

String.prototype.hashCode = function()
{
	var hash = 0;
	if (this.length == 0) 
	{
		return hash;
	}

	for (i=0; i< this.length; i++)
	{
		my_char =  this.charCodeAt(i);
		hash = ((hash<<5)-hash)+my_char;	
        hash = hash & hash; // Convert to 32bit integer
	}
	//console.log("hash: " + this);
	return hash;
}

function generateUniqueID()
{
	var org_str = ((document.getElementById("org")).value).toString();
	var fullname_str = ((document.getElementById("fullname")).value).toString();
	var email_str = ((document.getElementById("email")).value).toString();
	var hash_str = org_str + fullname_str + email_str;
	return hash_str.hashCode();
}

function addUser(fullName, email, transaction_amt)
{
	var merch_tbl = document.getElementById("merchant_table");
	// var new_user = document.createElement("tr");
	// var name_field = document.createElement("td");
	// name_field.value = fullName;
	// var email_field = document.createElement("td");
	// email_field.value = email;
	// var transaction_field = document.createElement("td");
	// transaction_field.value = transaction_amt;
	// new_user.append(name_field);
	// new_user.append(email_field);
	// new_user.append(transaction_field);
	// merch_tbl.append(new_user);
	var row = merch_tbl.insertRow(1);
	// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);

	// Add some text to the new cells:
	cell1.innerHTML = fullName;
	cell2.innerHTML = email;
	cell3.innerHTML = transaction_amt;
}
