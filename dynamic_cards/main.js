const dataList = [
    {
        title:"Title One",
        description:"Description One",
    },
    {
        title:"Title Two",
        description:"Description Two",
    },
    {
        title:"Title Three",
        description:"Description Three",
    },
    {
        title:"Title Four",
        description:"Description Four",
    },
    {
        title:"Title Five",
        description:"Description Five",
    },
    {
        title:"Title Six",
        description:"Description Six",
    },
    {
        title:"Title Seven",
        description:"Description Seven",
    },
    {
        title:"Title Eight",
        description:"Description Eight",
    },
    {
        title:"Title Nine",
        description:"Description Nine",
    },
    {
        title:"Title Ten",
        description:"Description Ten",
    }
]



const posts=document.querySelector(".posts");

dataList.map((postData)=>{

const post=document.createElement("div");
post.classList.add("post");
post.innerHTML=`<h1>${postData.title}</h1>
<p>${postData.description}</p>`
posts.appendChild(post);
})