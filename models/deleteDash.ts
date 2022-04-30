function DeleteDash(text:string):string{
    let result:string='';
    result=text.replaceAll('-', " ");
    return result;
}
export default DeleteDash