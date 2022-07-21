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
        '0' : {
            "alias" : "H",
            "name" : "Hydrogen",
            "weight" : "1.0079",
        },
        '1' : {
            "alias" : "He",
            "name" : "Helium",
            "weight" : "4.0026",
        },
        '2' : {
            "alias" : "Li",
            "name" : "Lithium",
            "weight" : "6.9410",
        },
        // '<n>' : etc...
        '100' : { /* a draft as a last item in the main table */
            "alias" : "X",
            "name" : "Y",
            "weight" : "123",
        },
    },
    skipRanges: { /* NOTE : herein each key of the object will be targeting to zero-based array index */
        "0" : {
            "from": 2,
            "to" : 17 /* [inclusively] */
        },
        "1" : {
            "from": 21,
            "to" : 30 /* [inclusively] */
        },
        "2" : {
            "from": 39,
            "to" : 48 /* [inclusively] */
        },
    }
}

export default /* let res  = */ Array(7).fill({}).map((rows)=>{
    return rows = ptable.template;
})

// console.log(res)