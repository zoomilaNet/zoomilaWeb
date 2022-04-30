function AddDash(text:string):string{
    let result:string='';
    result=text.replace(/\s/g, '-');
    return result;
}
export default AddDash