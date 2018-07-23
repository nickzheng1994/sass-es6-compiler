const $ = (e) => document.querySelector(e);
const $$ = (e) => document.querySelectorAll(e);
const data = {
    menu: [{
        name: 'DASHBOARO'
    },{
        name: 'AGENT'
    },{
        name: 'MY CURISE'
    },{
        name: 'HELP'
    }],
    history:[{
        text:'bjstdmdfds01/Acceptance_text'
    },
    {
        text:'bjstdmdfds01/Acceptance_text'
    },
    {
        text:'bjstdmdfds01/Acceptance_text'
    },
    {
        text:'bjstdmdfds01/Acceptance_text'
    },
    {
        text:'bjstdmdfds01/Acceptance_text'
    },
    {
        text:'bjstdmdfds01/Acceptance_text'
    },{
        text:'bjstdmdfds01/Acceptance_text'
    },{
        text:'bjstdmdfds01/Acceptance_text'
    },{
        text:'bjstdmdfds01/Acceptance_text'
    }],
    cards:[{
        info:123
    },{
        info:45
    }]
}

window.onload = ()=>{
    findForElement()

}

function findForElement() {
    const elms = $$('[nick-for]');
    elms.forEach((el)=>{
        const parent = el.parentElement;
        const frame = document.createDocumentFragment();
        const key = el.getAttribute('nick-for');
        const arr =  data[key]
        if(Array.isArray(arr)){
            arr.forEach((elt,index)=>{
                let clone_el = el.cloneNode(true)
                clone_el.removeAttribute('nick-for');
                clone_el = hindleElement(clone_el,elt);
                frame.appendChild(clone_el);
            })
        }
        parent.innerHTML = '';
        parent.appendChild(frame)
    })
}

function hindleElement(el,elt) {
    let element = el.hasAttribute('nick-text') ? el : el.querySelectorAll('[nick-text]');
    if(element){
        if(element.length){
            element.forEach((e)=>{
                e.innerHTML = elt[e.getAttribute('nick-text')]; 
            })
        }else{
            element.innerHTML = elt[element.getAttribute('nick-text')]; 
        }
            
        
    }
    
    return el
   
}