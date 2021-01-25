var main = document.querySelector('.main');
var textarea= document.querySelector('.textarea');
const edit= document.querySelector('.fa-edit');

const addnote =document.querySelector('.heading');
const append= document.querySelector('.append');

addnote.addEventListener('click',()=>{
    appnednote();
});
var i=1;
function appnednote(text='')
{
    const html=`
    
    <div class="tools">
       <div class="count">${i++}</div>
        <button>
            <i class="fas fa-edit">
            </i></button>
        <button>
            <i class="fas fa-trash-alt">
            </i>
        </button>
    </div>
    <div class="main ${text ?'':"hidden"}"> ${text}</div>
    <textarea class="textarea" ${text ?'hidden':""} > </textarea>
`
const note= document.createElement('div');
 note.setAttribute('class','notes');
 note.innerHTML=html;
 append.insertAdjacentElement('beforeend',note);
 const edit1= note.querySelector('.fa-edit')
  const main1= note.querySelector('.main')
  const textarea1= note.querySelector('.textarea')
 edit1.addEventListener('click',()=>{
    main1.classList.toggle('hidden');
    textarea1.classList.toggle('hidden');
    // console.log('clicked');
    const alltext=document.querySelectorAll('.main');
// console.log(alltext);
 update();
})
const deletes = note.querySelector('.fa-trash-alt');
deletes.addEventListener('click',()=>{
    // append.removeChild('note');
    note.remove();
    update();
   
})

textarea1.addEventListener('input',(e)=>{
    main1.innerHTML=(e.target.value)
})
textarea1.value=text;

}

  function getitemLs()
  {
      const allitmes =localStorage.getItem('texts');
    //   console.log(allitmes);
    const all= JSON.parse(allitmes);
    // console.log(all);
    if(all)
    {
    all.forEach((element,index)=>{
        console.log(all[index]);
        appnednote(all[index]);
    })
}
  }
  getitemLs();

// localStorage.clear();
function update()
{
    const alltext= document.querySelectorAll('textarea');
    console.log(alltext);
    const arr=[];
  alltext.forEach((element,index)=>
  {
     const text=(element.value);
     arr.push(text);
    
  })
  console.log(arr);
  localStorage.setItem('texts',JSON.stringify(arr));
  console.log('clicked');
}





