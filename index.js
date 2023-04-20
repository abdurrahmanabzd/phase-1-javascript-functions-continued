function saturdayFun(act='roller-skate'){
    return `This Saturday, I want to ${act}!`
}

function mondayWork(work='go to the office'){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(par="*"){
    return function inner(parm="special"){
        return `You are ${par}${parm}${par}!`
    }
}