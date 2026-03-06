function checkSID() {
  let sid = (document.getElementById("sid").value).trim();

  // ตรวจสอบความยาว 10 ตัว และต้องเป็นตัวเลข 0-9 เท่านั้น
  if (sid.length == 10 && /^[0-9]+$/.test(sid)) {
    return true;
  } else {
    return false;
  }
}

function checkCandiNo() {
  let candi = (document.getElementById("candi").value).trim();

  // ต้องเป็นตัวเลขเท่านั้น
  if (isNaN(candi)) {
    return false;
  }

  candi = Number(candi);

  // ต้องอยู่ระหว่าง 1 ถึง 10
  if (candi >= 1 && candi <= 10) {
    return true;
  } else {
    return false;
  }
}

function validateForm(){
	if(!checkSID()){
	  alert("Invalid value for Student ID!");
	  document.getElementById("sid").focus();
	  return false;
	}else{
		if(!checkCandiNo()){
		  alert("Invalid value for Candidate No!!");
		  document.getElementById("candi").focus();
		  return false;
		}else{
			alert("Your input data passes validation!!");
			return true;
		}
	}
}