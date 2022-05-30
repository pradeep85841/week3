function createIncrement(){
    let count = 0;
    function increment(){
        count++;
    }
    let message = 'count is ${count}';
    function log(){
        console.log(message);
    }
    return[increment, log];
}
const[increment, log]= createIncrement();
increment();
increment();
increment();
log();

//output is count is ${count}