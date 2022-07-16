export let ptable = {
    template : {
        "I":"element",
        "II":"element",
        "III":"element",
        "IV":"element",
        "V":"element",
        "VI":"element",
        "VII":"element",
        "VIII":"element",
        "IX":"element",
        "X":"element",
        "XI":"element",
        "XII":"element",
        "XIII":"element",
        "XIV":"element",
        "XV":"element",
        "XVI":"element",
        "XVII":"element",
        "XVIII":"element",
        },
    elements: {
        '1' : {
            "alias" : "H",
            "name" : "Hydrogen",
            "weight" : "1.0079",
        },
        '2' : {
            "alias" : "He",
            "name" : "Helium",
            "weight" : "4.0026",
        },
        '3' : {
            "alias" : "Li",
            "name" : "Lithium",
            "weight" : "6.9410",
        },
        // etc.
    }
}

export default /* let res  = */ Array(7).fill({}).map((rows)=>{
return rows = ptable.template;
})

// console.log(res)