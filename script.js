var inst = [];
$.get("data.json",
    function (data) {
        console.log(data.length);
        for(var i = 0; i < data.length; i++){
            inst.push(data[i]);
            console.log(data[i].nome);
            console.log(data[i].numero);
            console.log(data[i].bairro);
        }
        console.log(inst);;
    }
);