window.addEventListener('DOMContentLoaded',(event)=>
{
    const name=document.querySelector('#name');
    const textError=document.querySelector('.text-error');
    name.addEventListener('input', function()
    {
        if(name.ariaValueMax.length==0)
        {
            textError.textContent="";
            return;
        }
        try{
            (new EmployeePayRollData()).name=name.value;
            textError.textContent="";
        }
        catch(e)
        {
            textError.textContent=e;
        }
    });

    const salary=document.querySelector('#salary');
    const output=document.querySelector('.salary-output');
    output.textContent=salary.value;
    salary.addEventListener('input',function()
    {
        output.textContent=salary.value;
    });
});
const save=()=>{
    try{
        let employeePayRollData= createEmployeePayroll();
    }
    catch(e)
    {
        return;
    }
}
const createEmployeePayroll=()=>
{
    let employeePayRollData=new EmployeePayRollData();
    try{
        employeePayRollData.name=getInputValueById('#name');
    }
    catch(e)
    {
        setTextValue('.text-error',e);
        throw e;
    }
    employeePayRollData.profilePic=getSelectedValues('[name=profile]').pop();
    employeePayRollData.gender=getSelectedValues('[name=gender]').pop();
    employeePayRollData.department=getSelectedValues('[name=department]');
    employeePayRollData.salary=getSelectedValues('#salary');
    employeePayRollData.note=getSelectedValues('#notes');
    let date=getInputValueById('#day')+" "+getInputValueById('#month')+ " " +getInputValueById('#year');
    employeePayRollData.date=Date.parse(date);
    alert(employeePayRollData.toString());
    return employeePayRollData;
}
getSelectedValues=(propertyValue)=>
{
    let allItems=document.querySelectorAll(propertyValue);
    let selItems=[];
    allItems.forEach(item=>
        {
            if(item.checked) selItems.push(item.value);
        });
        return selItems;
}
const getInputValueById=(id)=>
{
    let value=document.querySelector(id).value;
    return value;
}
const getInputElementValue=(id)=>
{
    let value=document.getElementById(id).value;
    return value;
}