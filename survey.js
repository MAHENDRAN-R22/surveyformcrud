"use strict";
var getRow = null;

function onFormSubmit() {
    //get called on submitting the form
    if (formCondition()) {
        var formData = readFormData();
        getRow == null ? addNewValue(formData) : (updateForm(formData), resetForm());
    }

}

function readFormData() {
    //this function is used to read table data values
    var formData = {};
    formData.name = document.getElementById("name").value;
    formData.mail = document.getElementById("mail").value;
    formData.num = document.getElementById("num").value;
    formData.dob = document.getElementById("dob").value;
    formData.nation = document.getElementById("nation").value;
    formData.gender = displayRadioValue();

    function displayRadioValue() {
        var genderLen = document.querySelectorAll(".radio");
        for (var i = 0; i < genderLen.length; i++) {
            if (genderLen[i].checked) {

                return genderLen[i].value;
            }
        }
    }
    formData.languagesKnown = displayLanguages();

    function displayLanguages() {
        var langKnown = document.querySelectorAll(".check");
        var aCheckBox = [];
        for (var i = 0; i < langKnown.length; i++) {
            if (langKnown[i].checked) {

                aCheckBox.push(langKnown[i].value);
            }

        }
        return aCheckBox;

    }
    formData.feed = document.getElementById("feed").value;

    return formData;
}

function addNewValue(data) {
    // this function is used to insert the values to table
    var table = document.getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.mail;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.num;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.dob;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.nation;
    var cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.gender;
    var cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.languagesKnown;
    var cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.feed;
    var cell9 = newRow.insertCell(8);
    cell9.innerHTML = '<i class="fa fa-edit"></i><a onClick="editForm(this)">Edit</a><br><i class="fa fa-trash"></i><a onClick="deleteForm(this)">Delete</a>';
    alert("DATA WAS SUCESSFULLY SUBMITTED");
    resetForm();


}

function deleteForm(td) {
    //this fun is used to delete the row
    if (confirm("are you sure to delete the row")) {
        var row = td.parentElement.parentElement;
        document.getElementById("Survey").deleteRow(row.rowIndex);
        alert("DATA WAS DELETED");
    }

}

function editForm(td) {
    //this fun is used to edit the table row
    getRow = td.parentElement.parentElement;
    console.log(td.parentElement)
    document.getElementById("name").value = getRow.cells[0].innerHTML;
    document.getElementById("mail").value = getRow.cells[1].innerHTML;
    document.getElementById("num").value = getRow.cells[2].innerHTML;
    document.getElementById("dob").value = getRow.cells[3].innerHTML;
    document.getElementById("nation").value = getRow.cells[4].innerHTML;
    var genderVal = getRow.cells[5].innerHTML;
    var gender = document.querySelectorAll(".radio");
    for (var i = 0; i < gender.length; i++) {
        if (genderVal == gender[i].value) {
            gender[i].checked = true;
        }
    }
    var checkboxVal = getRow.cells[6].innerHTML;
    var valArray = checkboxVal.split(",");
    var langKnown = document.querySelectorAll(".check");
    for (var i = 0; i < langKnown.length; i++) {
        for (var j = 0; j < valArray.length; j++) {

            if (valArray[j] == langKnown[i].value) {
                langKnown[i].checked = true;
            }
        }
    }

    document.getElementById("feed").value = getRow.cells[7].innerHTML;
}

function updateForm(data) {
    //this fun is used to after the edit process update te current val
    console.log("updateform");
    getRow.cells[0].innerHTML = data.name;
    getRow.cells[1].innerHTML = data.mail;
    getRow.cells[2].innerHTML = data.num;
    getRow.cells[3].innerHTML = data.dob;
    getRow.cells[4].innerHTML = data.nation;
    getRow.cells[5].innerHTML = data.gender;
    getRow.cells[6].innerHTML = data.languagesKnown;
    console.log(getRow.cells[6].innerHTML);
    getRow.cells[7].innerHTML = data.feed;
    alert("DATA WAS SUCESSFULLY EDITED");
}

function resetForm() {
    //this fun is used to reset the form after submitting the form
    document.getElementById("name").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("num").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("nation").value = "";
    var genderVal = document.querySelectorAll(".radio");
    for (var i = 0; i < genderVal.length; i++) {
        genderVal[i].checked = false;
    }
    var langKnown = document.querySelectorAll(".check");
    for (var i = 0; i < langKnown.length; i++) {
        langKnown[i].checked = false;
    }
    document.getElementById("feed").value = "";

    getRow = null;
}

function formCondition() {
    //this fun is used for validation
    var fName = document.getElementById("name").value;
    var mailVal = document.getElementById("mail").value;
    var atPosition = mailVal.indexOf("@"); //check the at pos not placed in starting index 
    var dotPosition = mailVal.indexOf("."); //check the dot pos placed after the at pos and after placed 2char //check the dot is not end
    var numVal = document.getElementById("num").value; //for number validation
    var nation = document.getElementById("nation").value;
    if (fName.length < 3) {
        alert("Please write your fullname");
        return false;
    } else if (atPosition < 1 || dotPosition <= atPosition + 2 || dotPosition === mailVal.length - 1) {
        alert("Please enter valid email address");
        return false;
    } else if (numVal.length < 10 || numVal.length >= 11) {
        alert("Provide Num was wrong please provide valid number");
        return false;
    }else if (nation===""){
        alert("select your nation");
        return false;
    } else {
        return true;
    }

}
function mahi(name){
   var caps=name.charAt(0).toUpperCase()+name.slice(1);
   console.log(caps);
}

mahi("mahendran");