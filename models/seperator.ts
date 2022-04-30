function Seperator(price:string):string{
    if (price.length < 4) {
        return price;
    }
    price=price.split('').reverse().join('');
    let result:string='';
    let counter:number=1;
    price.split('').forEach(element=>{
        if ((counter - 1) % 3 == 0 && counter > 1) {
            result += ',';
          }
          result += element;
          counter++;
    });
    result=result.split('').reverse().join('');
    return result;
}
export default Seperator