const rádio = {
    marca: 'philco',
    cor: 'cinza',
    tamanho: '35cm'

}
const array1 = [10,20,30]

for(const e in rádio){
    console.log(e+' = '+rádio[e]);
}
for(const a of array1){
    console.log(a);
}